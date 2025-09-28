import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";

// Initial context shape
const UserContext = createContext({
    user: null,               // initially no user
    loading: true,            // initially loading is true
    login: (userData) => { },  // dummy function
    logout: async () => { }   // dummy async function
});

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Poll session every 5 mins
    useEffect(() => {
        const checkSession = async () => {
            try {
                const res = await fetch("http://localhost:9999/api/me", {
                    method: "GET",
                    credentials: "include",
                });

                if (!res.ok) {
                    if (res.status === 401) {
                        // session expired
                        setUser(null);
                        navigate("/");
                    }
                    throw new Error("Session check failed");
                }

                const { message, user: fetchedUser } = await res.json(); // Renamed to avoid shadowing
                console.log("session check:", message);
                setUser(fetchedUser || null);
            } catch (err) {
                console.error("Session check error:", err);
            } finally {
                setLoading(false);
            }
        };

        // initial check
        checkSession();

        // interval check
        const interval = setInterval(checkSession, 5 * 60 * 1000); // every 5 mins
        return () => clearInterval(interval);
    }, [navigate]);

    const login = useCallback((userData) => {
        setUser(userData);
    }, []);

    const logout = useCallback(async () => {
        try {
            const res = await fetch("http://localhost:9999/api/admin/admin_logout", {
                method: "POST",
                credentials: "include",
            });

            const data = await res.json();
            console.log("logout response:", data);
        } catch (err) {
            console.error("Logout error:", err);
        } finally {
            setUser(null);
            setLoading(false);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

/* eslint-disable-next-line react-refresh/only-export-components */
export const useUser = () => useContext(UserContext);

export default UserProvider;
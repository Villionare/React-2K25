import { useEffect, useState } from "react";
import SessionContext from "./createContext";

export const SessionProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check session on mount
    useEffect(() => {
        const checkSession = async () => {
            try {
                setLoading(true);
                const resp = await fetch('http://localhost:9999/api/me', {
                    method: 'GET',
                    credentials: 'include',
                });

                if (resp.ok) {
                    const json = await resp.json();
                    // backend may return the session under `session_data` or the whole object
                    const sessionObj = json.session_data || json;
                    setUser(sessionObj);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('failed to fetch session:', error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkSession();
    }, []);

    const login = (userReceived) => {
        setUser(userReceived);
    };

    // Accept a raw server response and store whatever payload it contains
    const setFromServer = (serverResp) => {
        if (!serverResp) return setUser(null);
        // If server wraps session under `session_data`, use that. Otherwise store the whole response.
        const payload = serverResp.session_data ?? serverResp;
        setUser(payload);
    };

    const logout = async () => {
        try {
            await fetch('http://localhost:9999/api/admin/admin_logout', {
                method: 'POST',
                credentials: 'include',
            });
        } catch (e) {
            console.error('logout failed', e);
        } finally {
            setUser(null);
        }
    };

    return (
        <SessionContext.Provider value={{ user, setUser, login, logout, loading, setFromServer }}>
            {children}
        </SessionContext.Provider>
    );
};

export default SessionProvider;


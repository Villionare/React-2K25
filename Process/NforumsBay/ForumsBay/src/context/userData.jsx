import createContext, { useContext, useEffect, useState } from "react";
import SessionContext from "./createContext";

export const SessionProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSession = setInterval(async () => {
            try {
                setLoading(true);
                const fetchSessionFromBackend = await fetch('http://localhost:9999/api/me', {
                    method: 'GET',
                    credentials: "include",
                });

                const res_obj = await fetchSessionFromBackend.json();

                // console.log('data recieved from server: ', res_obj)
                setUser(res_obj);

            } catch (error) {
                console.error(error);

            } finally {
                setLoading(false);
            }
        }, 60000)

        return () => clearInterval(fetchSession);
    }, []);

    useEffect(() => {
        console.log('now this is what stored on the user state: ', user);
    }, [user]);

    const login = (userRecieved) => {
        setUser(userRecieved);
    }

    const logout = () => {
        setUser(null);
    }

    return <SessionContext.Provider value={{ user, login, logout }}>
        {children}
    </SessionContext.Provider>
}

export default SessionProvider;


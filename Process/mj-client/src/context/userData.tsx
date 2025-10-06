import { useEffect, useState } from "react";
import SessionContext, { type UserContextProps, type UserData, type UserProviderProps } from "./createContext.js";

export const SessionProvider: React.FC<UserProviderProps> = ({ children }) => {

    const [user, setUser] = useState<UserData | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);

    const login = (userReceived: UserData) => {
        setUser(userReceived);

        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(userReceived));
    };

    useEffect(() => {
        const userString = localStorage.getItem("user");
        try {
            if (userString) {
                localStorage.setItem("user", JSON.stringify(user));
            } else {
                null;
            }
        } catch (w) {
            console.log(w);
        }
    }, [user]);

    useEffect(() => {
        fetchUser();
    }, [])

    //when ever we refresh user will be set from the localStorage.
    const fetchUser = () => {
        const userString = localStorage.getItem("user");
        console.log('retrived from the local storage: ', { userString });

        if (userString) {
            try {
                const user = JSON.parse(userString);
                setUser(user);
            } catch (error) {
                console.error(error);
            }
        }
        setLoading(false);
    }

    const logout = async () => {
        try {
            const logoutFetch = await fetch('http://localhost:9999/api/admin/admin_logout', {
                method: 'POST',
                credentials: 'include',
            });

            const resp = logoutFetch.json();
            console.log(resp);

            localStorage.removeItem("user");
            setUser(null);

        } catch (e) {
            console.error('logout failed', e);
        } finally {
            setUser(null);
        }
    };

    if (isLoading) {
        return null;
    }

    return (
        <SessionContext.Provider value={{ user, login, logout }}>
            {children}
        </SessionContext.Provider>
    );
};

export default SessionProvider;
import { useState } from "react";
import SessionContext from "./create";

export const SessionProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userReceived) => {
        setUser(userReceived);

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
        <SessionContext.Provider value={{ user, login, logout }}>
            {children}
        </SessionContext.Provider>
    );
};

export default SessionProvider;


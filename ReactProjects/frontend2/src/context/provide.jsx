import { useEffect, useState } from "react";
import SessionContext from "./create";

export const SessionProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userReceived) => {
        console.log('login saved to user');
        setUser(userReceived);
    };

    //store user in localStorage at every user change
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
        console.log('stored into lc from login');
    }, [user]);

    //restore user on relode
    useEffect(() => {
        const checkUser = localStorage.getItem("user");
        setUser(JSON.parse(checkUser));
        console.log('restored the userContext value from lc');
        console.log(user);
    }, []);

    //clear all the localStorage
    const logout = async () => {
        try {
            const res = await fetch('http://localhost:9999/api/admin/admin_logout', {
                method: 'POST',
                credentials: 'include',
            });

            if (!res.ok) {
                throw new Error('Error from server: ', res.statusText);
            }

            setUser(null);
            localStorage.clear();
            console.log('lc cleared');
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
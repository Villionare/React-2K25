import { useEffect, useState } from "react";
import SessionContext, { type UserData, type UserProviderProps } from "./createContext.js";
// import server from "../api/config.js";

export const SessionProvider: React.FC<UserProviderProps> = ({ children }) => {

    const [user, setUser] = useState<UserData | null>(null);

    //login funtion
    const login = (userReceived: UserData) => {

        setUser(userReceived);

        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(userReceived));

        //starting the auto calls.
        //for now leaving it, will do it at the time of setting up socket.io
    };

    //update local strorage when user is fetched;
    useEffect(() => {
        const userString = localStorage.getItem("user");
        try {
            if (userString) {
                localStorage.setItem("user", JSON.stringify(user));
            }
        } catch (w) {
            console.log(w);
        }
    }, [user]);

    //on realode
    useEffect(() => {
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
    }, [])

    //on logout
    const logout = async () => {
        try {
            const logoutFetch = await fetch('http://localhost:9999/api/admin/admin_logout', {
                method: 'POST',
                credentials: 'include',
            });

            const data1 = await logoutFetch.json();
            console.log(data1);

            //  return res.status(500).json({
            //     message: 'Logout failed',
            //     success: false
            // });

            if ((await data1).success) {
                localStorage.removeItem("user");
                setUser(null);
            } else {
                console.error('server failed to logout')
            }

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

//THIS METHOD IS EFFECTIVE OF SENDING THE COOKIES ON EVERY REQUEST AND MIDDLEWARES WILL VERIFY THAT REQUEST EVERYTIME THEN ONLY WILL
// SEND SOME RESPONCE AND IF THE SESSION IS DEAD IT WILL THROW AND ERROR, THIS WAY THERE IS NO NEED TO MAKE AUTO CALLS.

// app starts

//when the user signin or signup - save into context - set the local storage - start the auto calls

//when there is a reload - retrive from the local storage - set into context - start the auto calls

//a one type of logged in user tries to enter through different user type
// - clear local storage
// - clear old session on server
// - create the new user user and session
// - start the noraml user process again

// if the user have logged out - set context to null - clear the local storage - stop the auto calls
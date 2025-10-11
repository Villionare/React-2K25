import { useEffect, useState, useMemo } from "react";
import SessionContext, { type UserData, type UserProviderProps } from "./createContext.js";
import { useNavigate } from "react-router-dom";

export const SessionProvider: React.FC<UserProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserData | null>(null);

    const logoutUrl = useMemo(() => {
        if (user?.session_data?.type === "admin") {
            return 'http://localhost:9999/api/admin/admin_logout';
        }
        return 'http://localhost:9999/api/anonymous/anon_logout';
    }, [user]);

    const login = (userReceived: UserData) => {
        setUser(userReceived);
        localStorage.setItem("user", JSON.stringify(userReceived));
    };

    useEffect(() => {
        const userString = localStorage.getItem("user");
        // console.log('retrieved from the local storage: ' + JSON.parse(userString));

        if (userString) {
            try {
                const parsedUser = JSON.parse(userString);
                setUser(parsedUser);
            } catch (error) {
                console.error("Error parsing user data from localStorage:", error);
            }
        }
    }, [])

    const logout = async () => {
        // Use the memoized URL
        const currentUrl = logoutUrl;


        try {
            const response = await fetch(currentUrl, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // if (!response.ok) {
            //     throw new Error(`Logout request failed with status: ${response.status}`);
            // }


            const data = await response.json();
            console.log('server responce: ', data);

            if (data?.success) {
                setUser(null);
                localStorage.clear();
                navigate('/');
                console.log('logout process compleated');

            } else {
                console.error('Server failed to logout (success: false)', data);
            }
        } catch (e) {
            console.error('Logout failed:', e);
        }
    };

    return (
        <SessionContext.Provider value={{ user, login, logout }}>
            {children}
        </SessionContext.Provider>
    );
};

// //THIS METHOD IS EFFECTIVE OF SENDING THE COOKIES ON EVERY REQUEST AND MIDDLEWARES WILL VERIFY THAT REQUEST EVERYTIME THEN ONLY WILL
// // SEND SOME RESPONCE AND IF THE SESSION IS DEAD IT WILL THROW AND ERROR, THIS WAY THERE IS NO NEED TO MAKE AUTO CALLS.

// // app starts

// //when the user signin or signup - save into context - set the local storage - start the auto calls

// //when there is a reload - retrive from the local storage - set into context - start the auto calls

// //a one type of logged in user tries to enter through different user type
// // - clear local storage
// // - clear old session on server
// // - create the new user user and session
// // - start the noraml user process again

// // if the user have logged out - set context to null - clear the local storage - stop the auto calls
export default SessionProvider;
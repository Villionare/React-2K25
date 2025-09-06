import { createContext, useContext, useMemo, useState } from "react";

//steps in Context
//context decalration
//storage state declaration
//context usage
//value provinding
//Child components wrapping

//context Decalration:
export const UserAuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    //storage state declaration
    const [userData, setUserData] = useState(null);


    const login = (userData) => {
        setUserData(userData);
    }

    const logout = () => {
        setUserData(null);
    }

    // ✅ Memoize context value
    const value = useMemo(() => {
        return { userData, login, logout };
    }, [userData]);

    return <UserAuthContext value={value}>
        {children}
    </UserAuthContext>
}

// export const useAuth = (UserAuthContext) => {
//     return useContext(UserAuthContext);
// }

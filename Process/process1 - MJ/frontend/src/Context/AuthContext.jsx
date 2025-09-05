import { createContext, useContext, useState } from "react";

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

    return <UserAuthContext value={{ login, logout, userData }}>
        {children}
    </UserAuthContext>
}

// export const useAuth = (UserAuthContext) => {
//     return useContext(UserAuthContext);
// }

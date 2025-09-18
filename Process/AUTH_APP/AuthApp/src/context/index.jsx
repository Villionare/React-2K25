import { createContext, useState } from "react";

const authContext = createContext(null);

export const AuthContext = ({ children }) => {
    const [flag, setFlag] = useState(false);

    //functions to implement and get some value

    return <AuthContext >
        {children}
    </AuthContext>
}

export const usingContext = () => {
    return authContext;
}
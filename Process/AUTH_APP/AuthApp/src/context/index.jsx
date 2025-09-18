import { createContext, useState, useContext } from "react";

// create the context
const AuthContext = createContext(null);

// provider component
export const AuthProvider = ({ children }) => {
    const [flag, setFlag] = useState(false);

    const value = { flag, setFlag };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// hook to consume the context
export const useAuth = () => useContext(AuthContext);

// also export the context object if someone needs it
export default AuthContext;
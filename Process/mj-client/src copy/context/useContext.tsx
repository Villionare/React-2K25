import { useContext } from "react";
import SessionContext from "./createContext.js";

interface SessionData {
    message: string;
    session_data: {
        ip: string,
        username: string,
        role: string,
    }
}

const useSessionContext = () => {
    const ctx = useContext(SessionContext);
    if (!ctx) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return ctx;
}

export default useSessionContext;
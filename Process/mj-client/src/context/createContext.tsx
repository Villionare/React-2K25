import { createContext, type ReactNode } from "react";

export interface UserData {
    success: boolean,
    message: string;
    session_data: {
        ip: string,
        username: string,
        role: string,
    }
}

export interface UserContextProps {
    login: (user: UserData) => void;
    logout: () => void;
    user: UserData | null;
}

export type UserProviderProps = {
    children: ReactNode;
}

const SessionContext = createContext<UserContextProps | null>(null);

export default SessionContext;
import { createContext, type ReactNode } from "react";

export interface UserData {
    message: string;
    success?: boolean;
    logouted?: boolean;
    data?: {
        name: string,
        username: string,
        age: number,
        email: string,
    },
    session_data?: {
        ip: string,
        username: string,
        type: string,
    },
    expiresAt: number
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
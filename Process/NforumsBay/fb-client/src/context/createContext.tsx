import { createContext, type ReactNode } from "react";
import type { AuthResponse } from "../Types/authResponce";

export interface UserContextProps {
    login: (value: AuthResponse) => void;
    logout: () => void;
    user: AuthResponse | null;
    setUser: (value: AuthResponse | null) => void;
}

export type UserProviderProps = {
    children: ReactNode;
}

const SessionContext = createContext<UserContextProps | null>(null);

export default SessionContext;
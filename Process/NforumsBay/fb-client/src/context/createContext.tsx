import { createContext, type ReactNode } from "react";
import type { AuthResponse } from "../Types/authResponce";

export interface UserContextProps {
    login: (user: AuthResponse) => void;
    logout: () => void;
    user: AuthResponse | null;
}

export type UserProviderProps = {
    children: ReactNode;
}

const SessionContext = createContext<UserContextProps | null>(null);

export default SessionContext;
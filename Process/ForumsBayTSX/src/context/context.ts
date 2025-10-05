import { createContext } from "react";

export interface UserData {
  message: string;
  session_data: string;
}

export interface UserContextProps {
  login: (user: UserData) => void;
  logout: () => void;
  user: UserData | null;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

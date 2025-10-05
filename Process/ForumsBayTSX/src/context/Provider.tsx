import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { UserContext } from "./context";
import type { UserData } from "./context";

type UserProviderProps = {
    children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<UserData | null>(null);

    const login = (userData: UserData): void => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = async (): Promise<void> => {

        try {
            setUser(null);
            localStorage.clear();

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
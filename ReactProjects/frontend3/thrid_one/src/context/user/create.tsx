import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface User {
    id: number;
    name: string | null;
    age: number | null;
    isMarried: boolean | null
}

// int[] arr = new arr[343]; just like java.

//this is the return type of the user context.
interface UserContextData {
    users: User[] | null;
    addUrs: (user: User) => void,
    dltUsers: (id: number) => void,
    uptUsers: (id: number) => void,
    setUserList: (user: User[]) => void
}

interface CompProp {
    children: ReactNode
}

const contextInitialValues = {
    users: null, //this is the value of the useState()
    addUrs: () => null,
    dltUsers: () => null,
    uptUsers: () => null,
    setUserList: () => null
}

const UserContext = createContext<UserContextData>(contextInitialValues);

//now the provider.


export const UserProvider = ({ children }: CompProp) => {
    const [users, setUserList] = useState<User[] | null>(null);

    useEffect(() => {
        setUserList([{ name: "datte", age: 33, id: 2, isMarried: false }])
    }, []);


    const addUrs = (user: User) => {
        return true;
    }

    const dltUsers = (id: number) => {
        return null;
    }

    const uptUsers = (id: number) => {
        return null;
    }

    return <UserContext value={{ users, dltUsers, uptUsers, addUrs, setUserList }}>
        {children}
    </UserContext>
}

//use

export const useUserContext = () => {
    return useContext(UserContext);
}

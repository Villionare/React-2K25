import { createContext } from "react";

export const UserAuthContext = createContext(null);

const UserContext = ({ value, childern }) => {
    return <>
        {<UserAuthContext value={value}>
            {childern}
        </UserAuthContext>}
    </>
}

export default UserContext;

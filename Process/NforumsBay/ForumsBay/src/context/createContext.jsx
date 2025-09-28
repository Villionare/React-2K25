import { createContext } from "react";

// Initial context shape
const UserContext = createContext({
    user: null,               // initially no user
    loading: true,            // initially loading is true
    login: (userData) => { },  // dummy function
    logout: async () => { }    // dummy async function
});

export default UserContext;

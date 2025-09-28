// Re-export the provider's helper so consumers use the same context instance
import { useContext } from "react";
import UserContext from "./createContext.jsx";

const useUserContext = () => {
    return useContext(UserContext);
}
export default useUserContext;
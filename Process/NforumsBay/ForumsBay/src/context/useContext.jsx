import { useContext } from "react";
import sessionContext from "./createContext";

const useSessionContext = () => {
    return useContext(sessionContext)
}

export default useSessionContext;
import { useContext } from "react";
import SessionContext from "./create";

const useSessionContext = () => {
    return useContext(SessionContext)
}

export default useSessionContext;
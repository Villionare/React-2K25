import { useContext } from "react";
import UserContext from "./create";

const useUserContext = () => {
    return useContext(UserContext);
}

export default useUserContext;
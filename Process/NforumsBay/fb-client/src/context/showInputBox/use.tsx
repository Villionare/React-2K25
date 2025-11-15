import { useContext } from "react";
import ShowInputContext from "./create";

const useInputBoxContex = () => {
    const ctx = useContext(ShowInputContext);
    if (!ctx) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return ctx;
}

export default useInputBoxContex;
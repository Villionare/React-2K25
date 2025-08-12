import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Universal = () => {

    return <>
        <Header />
        <Outlet />
    </>
}

export default Universal;
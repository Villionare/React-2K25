import { Outlet } from "react-router-dom";
import Header from "../header/header";

const LayoutBay = () => {

    return <div className="min-h-screen">
        <Header />
        <Outlet />
    </div>
}

export default LayoutBay;
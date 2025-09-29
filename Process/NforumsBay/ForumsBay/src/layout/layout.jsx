import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const LayoutBay = () => {
    return <div className="min-h-screen">
        <Header />
        <Outlet />
        <Footer />
    </div>
}

export default LayoutBay;
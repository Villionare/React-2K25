import { Outlet } from "react-router-dom";
import Aside from "./ASide";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./NavBar";

const Fixed = () => {

    return <>
        <Header />
        <Navbar />
        <Aside />
        <Outlet />
        <Footer />
    </>
}

export default Fixed;
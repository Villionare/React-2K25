import { Outlet } from "react-router-dom";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import { useEffect, useState } from "react";
import server from "../api/config.js";
import type { Homedata } from "../Types/Homedata.js";

const LayoutBay: React.FC = () => {

    //FETCHING THE DATA FOR Header
    const [homeData, setHomeData] = useState<Homedata | null>(null);
    const fetchIP = async () => {
        const ip = await server.get('/home_data');
        setHomeData(ip.data);
        console.log("welcome to ForumsBay.");
    }

    useEffect(() => {
        fetchIP();
    }, [])

    return <div className="font-terminal min-h-screen">
        <Header homeData={homeData} />
        <Outlet context={homeData} />
        <Footer />
    </div>
}

export default LayoutBay;
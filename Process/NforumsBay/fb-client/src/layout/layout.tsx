import { Outlet } from "react-router-dom";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import { useEffect, useState } from "react";
import server from "../api/config.js";

interface homedata {
    ip: string,
    total_admin: number,
    total_anonymous: number,
    total_users: number,
    active_users: number,
    total_categories: number,
    total_boards: number,
    total_threads: number
}

const LayoutBay: React.FC = () => {

    const [homeData, setHomeData] = useState<homedata>();
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
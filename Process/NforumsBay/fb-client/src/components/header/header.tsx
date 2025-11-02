import useSessionContext from "../../context/useContext";
import type { Homedata } from "../../Types/Homedata";
import LogoutBtns from "./logoutBtn";

interface props {
    homeData: Homedata | null
}

const Header: React.FC<props> = ({ homeData }) => {
    const { user } = useSessionContext();
    return (
        <header className="bg-black flex flex-wrap justify-between text-gray-300 px-4 py-2">
            <div>
                <p>Total Users: {homeData ? homeData.total_users : "XXX"}</p>
            </div>
            <div>
                <p>Active Users: {homeData ? homeData.active_users : "XXX"}</p>
            </div>
            <div>
                <p>Total categories: {homeData ? homeData.total_categories : "XXX"}</p>
            </div>
            <div>
                <p>Total Boards: {homeData ? homeData.total_boards : "XXX"}</p>
            </div>
            <div>
                <p>Total Threads: {homeData ? homeData.total_threads : "XXX"}</p>
            </div>
            <div>
                <p>About</p>
            </div>
            <div>
                <p>Developer</p>
            </div>
            {user ?
                <div className="flex flex-row gap-2">
                    <LogoutBtns />
                </div> : null
            }
        </header >
    );
};

export default Header;

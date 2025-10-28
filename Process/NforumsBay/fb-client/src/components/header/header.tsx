import useSessionContext from "../../context/useContext";
import LogoutBtns from "./logoutBtn";

interface Homedata {
    homeData?: {
        ip: string,
        total_admin: number,
        total_anonymous: number,
        total_users: number,
        active_users: number,
        total_categories: number,
        total_boards: number,
        total_threads: number
    }
}

const Header: React.FC<Homedata> = ({ homeData }) => {
    const { user } = useSessionContext();
    return (
        <header className="bg-black flex justify-between text-gray-300 px-4 py-2">
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

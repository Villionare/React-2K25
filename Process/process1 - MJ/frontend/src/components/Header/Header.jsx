import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../../Context/AuthContext";
import { useContext, useState } from "react";
import Dropdown from "../../UserDropDown/dropDown";

const Header = () => {

    const { login, logout, userData } = useContext(UserAuthContext);
    const [dropOptions] = useState(['Profile', 'logout']);
    // const handleLogout = () => {
    // We can also use the setter to log out
    // setCurrentUser(null);
    // };

    return <>
        <div className="flex flex-row gap-0 items-center fixed top-0 left-0 right-0 pl-2 z-5 h-10 rounded-bl-3xl bg-[#333333] font-[Poppins]">

            <div className="flex items-center lg:flex-1">
                <img src="/favicon.png" className="w-10 min-w-[50px]" alt="MJ" />
                <span className="hidden lg:inline text-xl text-white">
                    <Link to={'/'}>MoviesJournal</Link>
                </span>
            </div>

            <div className="hidden md:block md:flex-1">
                <ul className="list-none flex px-2 justify-evenly text-white md:gap-2">
                    <Link to={'/'}>
                        <li className="menu-list-item active-bold">Home</li>
                    </Link>
                    <Link to={'categories'}>
                        <li className="menu-list-item">Categories</li>
                    </Link>
                    <Link to={'charts'}>
                        <li className="menu-list-item">Chart</li>
                    </Link>
                    <Link to={'ranking'}>
                        <li className="menu-list-item">Ranking</li>
                    </Link>
                </ul>
            </div>

            <div className="flex-1 flex flex-row justify-evenly items-center gap-2 md:flex-1/3 lg:flex-1">

                <Link
                    to="/search"
                    className="h-8 m-1 flex-1 flex items-center bg-[#3d3d3d] rounded-lg px-3 lg:flex-1/4 cursor-text"
                >
                    <span className="flex-1 text-[#858585] text-xs">Search any movie</span>
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                </Link>


                <div className="text-white flex gap-2 justify-center items-center">
                    <span className="text-sm">

                        <span>
                            {userData ?
                                <Dropdown dropDownName={userData.user.username} options={['Profile', 'Logout']} /> :
                                <Link to={'login'} className="flex justify-center items-center">
                                    "Login" <UserRound />
                                </Link>}
                        </span>
                        {/* <span>{userData ? userData.user.username : "Login"}</span> */}

                    </span>
                </div>

                <span className="flex text-white bg-[#3d3d3d] text-sm p-2 mr-1">
                    <i className="fa-solid fa-sun" style={{ color: "#ffffff" }}></i>
                </span>
            </div>
        </div>



        <div className="bg-[#505050] rounded-bl-3xl w-full fixed top-10 left-15 z-10">
            <marquee className=" text-white text-xs ml-5">
                When it was released in 1983, the period epic
                Razia Sultan was the most expensive Indian film ever made and one of the most
                anticipated projects in years. But alas, its fate at the box office was so
                bad that it took the entire Bollywood down with it, breaking director Kamal
                Amrohi to a point that he never made a film again
            </marquee>
        </div>
    </>
}

export default Header;
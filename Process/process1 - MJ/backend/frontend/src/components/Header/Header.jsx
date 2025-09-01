import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {

    return <>
        <div className="flex flex-row p-1 gap-0 items-center fixed top-0 left-0 right-0 pl-2 z-5 h-10 rounded-bl-3xl bg-[#333333] font-[Poppins]">

            <div className="flex items-center lg:flex-1/4">
                <img src="/favicon.png" className="w-10 min-w-[50px]" alt="MJ" />
                <span className="hidden lg:inline text-xl text-white">
                    <Link to={'/'}>MoviesJournal</Link>
                </span>
            </div>

            <div className="hidden md:block md:flex-1 lg:flex-1/4">
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

            <div className="flex-1 flex gap-3 flex-row justify-evenly h-full md:flex-1/3 lg:flex-1/4">

                {/* <div className="flex-1 flex items-center bg-[#3d3d3d] rounded-lg px-3 lg:flex-1/4">
                    <input type="text" className="flex-1 rounded-md bg-[#3d3d3d] text-[#858585] text-xs h-full mr-2 focus:outline-0 " placeholder="search any movie" />
                    <Link to={'search'}>
                        <i className="bg-[#3d3d3d] rounded-3xl fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }}></i>
                    </Link>
                </div> */}
                <Link
                    to="/search"
                    className="flex-1 flex items-center bg-[#3d3d3d] rounded-lg px-3 lg:flex-1/4 cursor-text"
                >
                    <span className="flex-1 text-[#858585] text-xs">Search any movie</span>
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                </Link>


                <div className="text-white flex justify-center items-center">
                    <span className="text-sm">
                        <Link to={'login'}>
                            <UserRound />
                        </Link>
                    </span>
                </div>

                <span className="flex text-white bg-[#3d3d3d] text-sm p-2">
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
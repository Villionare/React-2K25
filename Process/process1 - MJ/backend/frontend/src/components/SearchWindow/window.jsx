// import { Link } from "react-router-dom";

// const SearchWindow = () => {

//     return <>
//         <div>
//             <div className="flex flex-row p-1 gap-2 items-center fixed top-0 left-0 right-0 pl-2 z-1 h-10 rounded-bl-3xl bg-[#333333] font-[Poppins]">

//                 <div className="flex items-center">
//                     <img src="/favicon.png" className="w-10 min-w-[50px]" alt="MJ" />
//                     <span className="hidden lg:inline text-xl text-white">
//                         <Link to={'/'}>MoviesJournal</Link>
//                     </span>
//                 </div>

//                 <div className="flex-1 flex gap-3 flex-row justify-evenly">
//                     <div className="flex-1 flex items-center bg-[#3d3d3d] rounded-lg px-3 lg:flex-1/4">
//                         <input type="text" className="flex-1 rounded-md bg-[#3d3d3d] text-[#858585] text-xs h-full mr-2 focus:outline-0 " placeholder="search any movie" />
//                         <i className="bg-[#3d3d3d] rounded-3xl fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }}></i>
//                     </div>

//                     <div className="text-white flex justify-center items-center">
//                         <Link to={'accounts'}>
//                             <span className="text-sm">Login</span>
//                         </Link>
//                     </div>
//                     <span className="flex text-white bg-[#3d3d3d] text-sm p-2">
//                         <i className="fa-solid fa-sun" style={{ color: "#ffffff" }}></i>
//                         {/* <i className="fa-solid fa-moon"></i> */}
//                     </span>
//                 </div>
//             </div >


//             <div className="bg-[#505050] rounded-bl-3xl w-full fixed top-10 left-15 z-10">
//                 <marquee className=" text-white text-xs ml-5">
//                     When it was released in 1983, the period epic
//                     Razia Sultan was the most expensive Indian film ever made and one of the most
//                     anticipated projects in years. But alas, its fate at the box office was so
//                     bad that it took the entire Bollywood down with it, breaking director Kamal
//                     Amrohi to a point that he never made a film again
//                 </marquee>
//             </div>
//             <div className="min-h-screen"></div>
//         </div >
//     </>
// }

// export default SearchWindow;

import { Link } from "react-router-dom";

const SearchWindow = () => {
    return (
        <div>
            {/* Top Navbar */}
            <div className="flex flex-row items-center p-1 gap-2 fixed top-0 left-0 right-0 pl-2 z-10 h-10 rounded-bl-3xl bg-[#333333] font-[Poppins]">

                {/* Logo + Name */}
                <div className="flex items-center">
                    <img
                        src="/favicon.png"
                        className="w-10 min-w-[50px]"
                        alt="MoviesJournal Logo"
                    />
                    <span className="hidden lg:inline text-xl text-white">
                        <Link to="/">MoviesJournal</Link>
                    </span>
                </div>

                {/* Search + Controls */}
                <div className="flex-1 flex gap-3 flex-row justify-evenly">

                    {/* Search Bar */}
                    <div className="flex-1 flex items-center bg-[#3d3d3d] rounded-lg px-3 lg:flex-1/4">
                        <input
                            type="text"
                            className="flex-1 rounded-md bg-[#3d3d3d] text-[#858585] text-xs h-full mr-2 focus:outline-none"
                            placeholder="Search any movie"
                            aria-label="Search movies"
                        />
                        <i
                            className="fa-solid fa-magnifying-glass text-white"
                            aria-label="Search icon"
                        ></i>
                    </div>

                    {/* Login Link */}
                    <div className="text-white flex justify-center items-center">
                        <Link to="/accounts">
                            <span className="text-sm">Login</span>
                        </Link>
                    </div>

                    {/* Theme Toggle */}
                    <button
                        className="flex text-white bg-[#3d3d3d] text-sm p-2 rounded-md"
                        aria-label="Toggle theme"
                    >
                        <i className="fa-solid fa-sun text-white"></i>
                        {/* <i className="fa-solid fa-moon"></i> */}
                    </button>
                </div>
            </div>


            {/* Placeholder for content */}
            <div className="min-h-screen"></div>
        </div>
    );
};

export default SearchWindow;

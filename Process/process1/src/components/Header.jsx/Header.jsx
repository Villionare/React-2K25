const Header = () => {

    return <>
        <div className="font-[Poppins] flex flex-row items-center bg-[#333333]  fixed top-0 left-0 right-0 pl-2 z-1 h-10 rounded-bl-3xl">
            <div className="flex-1/4 md:flex-1/3 flex items-center">
                <img src="/favicon.png" className="w-10 " alt="MJ" />
                <span className="text-xl text-white hidden md:inline">MoviesJournal</span>
            </div>
            <div className="hidden flex-2/3 lg:block md:flex-1/3">
                <ul className="list-none flex px-2 justify-evenly text-white">
                    <li className="menu-list-item active-bold">Home</li>
                    <li className="menu-list-item">Categories</li>
                    <li className="menu-list-item">Chart</li>
                    <li className="menu-list-item">RanKING</li>
                    <li className="menu-list-item">Account</li>
                </ul>
            </div>
            <div className="flex-2/3 md:flex-1/3 flex px-2 justify-evenly">

                <div className="flex items-center flex-3/5">
                    <input type="text" className="flex-1 px-5 rounded-md bg-[#3d3d3d] text-[#858585] text-sm" placeholder="search any movie" />
                    <i className="ml-2 p-2 bg-[#3d3d3d] rounded-3xl fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }}></i>
                </div>

                <div className="flex-1/5 text-white flex justify-center items-center"><span>Login</span></div>
                <span className="1/5 text-white bg-[#3d3d3d] text-sm p-2">Night/Day</span>
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
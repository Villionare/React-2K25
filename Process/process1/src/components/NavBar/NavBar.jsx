const NavBar = () => {

    return <>
        <div className="fixed flex items-center flex-col gap-5 h-full pt-15">
            <div>
                <button className="bg-[#333333] w-12 h-12 flex items-center justify-center rounded-3xl">
                    <i className="fa-solid fa-bars" style={{ color: '#ffffff' }}></i>
                </button>
            </div>
            <div className="hidden h-70 md:block bg-[#333333] rounded-tr-3xl rounded-br-3xl">
                <ul className="flex flex-col items-center justify-around text-white h-full p-2 w-13">
                    <li><button className="bg-amber-300 p-2 rounded-2xl font-extrabold ">#1</button></li>
                    <li><i className="sidebar-icons fa-solid fa-magnifying-glass"></i></li>
                    <li><i className="sidebar-icons fa-solid fa-bookmark"></i></li>
                    <li><i className="sidebar-icons fa-solid fa-hourglass-half"></i></li>
                </ul>
            </div>
        </div>
    </>
}

export default NavBar;
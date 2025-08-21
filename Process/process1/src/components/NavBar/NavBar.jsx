import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return <>
        <div className="fixed z-1 flex">
            {/* Toggle Button */}
            <button
                className="p-2 m-2 bg-[#333333] rounded-3xl text-white"
                onClick={() => setOpen(!open)}
            >
                {open ? <X /> : <Menu />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-7 left-0 h-fit mt-24 bg-[#333333] text-white w-64 transform transition-transform duration-300 rounded-tr-3xl rounded-br-3xl ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <nav className="flex flex-col p-4 space-y-4">
                    <a href="#" className="p-2 flex gap-2 items-center ">
                        <button className="bg-amber-300 p-2 rounded-2xl font-extrabold ">#1 Global</button>
                    </a>
                    <a href="#" className="hover:bg-[#505050] p-2 flex gap-2 items-center ">
                        <i className="sidebar-icons fa-solid fa-magnifying-glass"></i>
                        Search
                    </a>
                    <a href="#" className="hover:bg-[#505050] p-2 flex gap-2 items-center ">
                        <i className="sidebar-icons fa-solid fa-bookmark"></i>
                        Bookmarks
                    </a>
                    <a href="#" className="hover:bg-[#505050] p-2 flex gap-2 items-center ">
                        <i className="sidebar-icons fa-solid fa-hourglass-half"></i>
                        Upcoming
                    </a>
                </nav>
            </div>
        </div>
    </>
}

export default NavBar;
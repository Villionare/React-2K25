import { useState } from "react";
import { BookmarkCheck, Calendar, ChartArea, CircleUser, Grip, House, LogOut, Menu, Trophy, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return <>

        {/* smartphones */}
        <div className="fixed flex flex-col z-2 md:hidden">

            {/* Toggle Button */}
            <button
                className="p-2 m-2 bg-[#333333] rounded-3xl text-white"
                onClick={() => setOpen(!open)}
            >
                {open ? <X /> : <Menu />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-2 left-0 h-fi mt-24 bg-[#333333] text-white w-64 transform transition-transform duration-300 rounded-tr-3xl rounded-br-3xl ${open ? "translate-x-0" : "-translate-x-full"}`}>

                <nav className="flex flex-col p-4 space-y-4">

                    <Link href="#" className="p-2 flex gap-2 items-center ">
                        <div className="bg-amber-300 p-2 rounded-2xl font-extrabold ">
                            #1 Global
                        </div>
                    </Link>

                    <Link to={'/'}>
                        <div className="flex gap-2">
                            <House />  <p>Home</p>
                        </div>
                    </Link>
                    <Link to={'categories'}>
                        <div className="flex gap-2">
                            <Grip /> <p>Categories</p>
                        </div>
                    </Link>
                    <Link to={'accounts'}>
                        <div className="flex gap-2">
                            <CircleUser /> <p>Account</p>
                        </div>
                    </Link>
                    <Link to={'charts'}>
                        <div className="flex gap-2">
                            <ChartArea /> <p>Charts</p>
                        </div>
                    </Link>
                    <Link to={'ranking'}>
                        <div className="flex gap-2">
                            <Trophy /> <p>Rankings</p>
                        </div>
                    </Link>
                    <Link href="#" >
                        <div className="flex gap-2">
                            <BookmarkCheck /> <p>Bookmarks</p>
                        </div>
                    </Link>
                    <Link href="#" >
                        <div className="flex gap-2">
                            <Calendar /> <p>Upcoming</p>
                        </div>
                    </Link>
                    <Link href="#" >
                        <div className="flex gap-2">
                            <LogOut color="#ff0000" /> <p className="text-red-500">Logout</p>
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    </>
}

export default NavBar;
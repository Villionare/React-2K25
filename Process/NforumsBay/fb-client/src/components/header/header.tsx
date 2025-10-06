import useSessionContext from "../../context/useContext";

const Header = () => {

    const { user, logout } = useSessionContext();

    return (
        <header className="bg-violet-500 text-white py-4 shadow-md">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left - Branding */}
                <div className="flex items-center">
                    <h1 className="text-4xl font-bold tracking-wide">forumsBay.</h1>
                </div>

                {/* Middle - Stats */}
                <div className="flex gap-8 text-center text-sm md:text-base">
                    <div>
                        <p className="font-semibold">Active Users</p>
                        <p className="opacity-80">120</p>
                    </div>
                    <div>
                        <p className="font-semibold">Total Users</p>
                        <p className="opacity-80">4,500</p>
                    </div>
                </div>

                {/* Right - Controls */}

                <div className="flex flex-col text-xs md:text-sm text-center md:text-right">
                    <button className="hover:underline">
                        {user?.session_data?.username}
                    </button>
                    <p className="opacity-80">
                        {
                            user?.session_data?.type === "admin" ?
                                <button className="bg-violet-700 p-2 rounded-md cursor-pointer hover:bg-violet-900 transition delay-75" onClick={() => logout()}>
                                    Admin Logout
                                </button>
                                : <button className="bg-violet-700 p-2 rounded-md cursor-pointer hover:bg-violet-900 transition delay-75" onClick={() => logout()}>
                                    Anonymous goodbye?
                                </button>
                        }
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;

import LogoutBtns from "./logoutBtn";

const Header = () => {


    return (
        <header>
            <div className="flex flex-col md:flex-row flex-nowrap justify-between px-4 bg-slate-900 font-extrabold gap-1 border-b-2 border-slate-700">

                <div className="flex items-center">
                    <h1 className="text-slate-50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight">
                        forumsBay
                    </h1>
                </div>

                <div className="flex flex-row items-center justify-between gap-2 py-1">

                    <div className="flex flex-row text-slate-400 justify-center items-center text-xs sm:text-sm md:text-lg gap-2">

                        <div className="flex flex-row justify-center items-center gap-1">
                            <p className="hidden md:block">Active Users:</p>
                            <p className="md:hidden">Active:</p>
                            <p className="text-slate-50">120</p>
                        </div>

                        <div className="flex flex-row justify-center items-center gap-1">
                            <p className="hidden md:block">Total Users:</p>
                            <p className="md:hidden">Total:</p>
                            <p className="text-slate-50">4,500</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-2">
                        <LogoutBtns />
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;

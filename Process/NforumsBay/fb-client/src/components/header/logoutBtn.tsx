import useSessionContext from "../../context/useContext";

const LogoutBtns = () => {

    const { user, logout } = useSessionContext();

    // const handleLogout = () => {
    //     logout();

    // }

    const baseTextClass = "text-xs sm:text-sm md:text-base lg:text-lg font-sans";

    const logoutBtnClass = "px-3 py-1 rounded-md cursor-pointer transition-colors duration-200 bg-slate-700 text-slate-50 hover:bg-slate-600 font-bold border border-slate-600";
    const loginBtnClass = "px-3 py-1 rounded-md cursor-pointer transition-colors duration-200 bg-cyan-600 text-slate-50 hover:bg-cyan-500 font-semibold";

    if (user?.session_data) {
        const userType = user.session_data?.type;
        const username = user.session_data?.username;

        const textClass = `text-slate-50 ${baseTextClass} flex flex-col items-end gap-1`;

        return (
            <div className={textClass}>
                <p className="text-right">
                    Hello <span className="text-slate-400 font-bold">
                        {userType === 'admin' ? 'Admin' : userType === 'anonymous' ? 'Anonymous' : ''}
                    </span> {username || 'user'}!
                    {userType === 'admin' && <span role="img" aria-label="shield"> 🛡️</span>}
                    {userType === 'anonymous' && <span role="img" aria-label="wave"> 👋</span>}
                </p>

                <button onClick={logout} className={logoutBtnClass}>
                    Logout
                </button>
            </div>
        );

    } else {
        return (
            <div className="flex flex-col sm:flex-row gap-2">
                <button className={`${loginBtnClass} ${baseTextClass}`}
                    onClick={() => console.log('Anonymous Login Action')}>
                    Anonymous Enter
                </button>
                <button className={`${loginBtnClass} ${baseTextClass}`}
                    onClick={() => console.log('Admin Login Action')}>
                    Admin Portal
                </button>
            </div>
        )
    }
}

export default LogoutBtns;

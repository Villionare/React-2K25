import useSessionContext from "../../context/useContext";

const LogoutBtns = () => {

    const { user, logout } = useSessionContext();

    if (user?.session_data) {
        const userType = user.session_data?.type;
        const username = user.session_data?.username;

        return (
            <div className="flex gap-7">
                <p className="text-red-600">
                    {userType === 'admin' && <span role="img" aria-label="shield"> 🛡️ </span>}
                    {userType === 'anonymous' && <span role="img" aria-label="wave"> 🥸 </span>}
                    {username || 'user'}
                </p>

                <button onClick={logout} className="border-1 border-gray-400 px-2 cursor-pointer">
                    Logout
                </button>
            </div>
        );
    }
}

export default LogoutBtns;

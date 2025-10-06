import useSessionContext from "../../context/useContext.js";

const Home = () => {
    const { user, login, logout } = useSessionContext();

    return <>
        <div className="text-white min-h-screen bg-amber-700">
            <p className="text-5xl text-amber-950">
                this is the start page
                <br />
                threads
                <br />
                boards
                <br />
                posts
            </p>

            <p>
                {(user?.session_data?.role === "admin") ? "Admin" : "Anonymous"}
            </p>

            <div>
                {
                    (user?.session_data?.role === "admin") ?
                        <button className="bg-cyan-600 p-4 rounded-2xl" onClick={() => logout()}>
                            Admin Logout
                        </button>
                        : null
                }
            </div>
        </div>
    </>
}

export default Home;
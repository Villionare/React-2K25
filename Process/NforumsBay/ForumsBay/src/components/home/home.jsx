import useSessionContext from "../../context/useContext";

const Home = () => {

    const { user, loading, login, logout } = useSessionContext();
    const { success = false, session_data = {} } = user ?? {};

    console.log('context data: ' + user);
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
                {(session_data.role === "admin") ? "Admin" : "Anonymous"}
            </p>

            <div>
                {
                    (session_data.role === "admin") ?
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
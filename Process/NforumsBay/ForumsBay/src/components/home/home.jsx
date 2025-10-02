import { useContext } from "react";
import useSessionContext from "../../context/useContext";
import SessionContext from "../../context/createContext";

const Home = () => {

    const { user, login, logout } = useSessionContext();
    // const { user } = useSessionContext();

    console.log('in the home: ', user);

    const { session_data, message, success } = localStorage.getItem("user");
    // const { ip, type, username } = session_data;

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
                {(session_data.type === "admin") ? "Admin" : "Anonymous"}
            </p>

            <div>
                {
                    (session_data.type === "admin") ?
                        <button className="bg-cyan-600 p-4 rounded-2xl" onClick={() => logout()}>
                            Admin Logout
                        </button>
                        : <button className="bg-cyan-600 p-4 rounded-2xl" onClick={() => logout()}>
                            anonymous Logout
                        </button>
                }
            </div>
        </div>
    </>
}

export default Home;
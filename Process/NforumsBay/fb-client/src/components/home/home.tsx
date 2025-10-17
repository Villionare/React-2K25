import { useNavigate } from "react-router-dom";
import Boards from "../boards/boards.js";
import Posts from "../posts/posts.js";
import Threads from "../threads/threads.js";
import { useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import useSessionContext from "../../context/useContext.js";

const Home = () => {
    const navigate = useNavigate();
    const { user } = useSessionContext();
    //if no user Exists then redirect
    useEffect(() => {
        const check: string | null = localStorage.getItem("user");

        if (!check) {
            navigate('/')
        }
    }, []);

    return <div className="flex bg-[#223155]">
        <Boards />
        <Threads />
        <Posts />
        {user ? toast(`welcome ${user?.session_data?.type} ${user?.session_data?.username}`) : null}
        <ToastContainer position="bottom-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce} />
    </div>
}

export default Home;
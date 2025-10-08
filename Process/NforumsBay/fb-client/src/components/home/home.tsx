import { useNavigate } from "react-router-dom";
import Boards from "../boards/boards.js";
import Posts from "../posts/posts.js";
import Threads from "../threads/threads.js";
import { useEffect } from "react";

const Home = () => {
    const navigate = useNavigate();

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
    </div>
}

export default Home;
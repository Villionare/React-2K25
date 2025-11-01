import { useNavigate } from "react-router-dom";
import Threads from "../threads/threads.js";
import { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import useSessionContext from "../../context/useContext.js";
import server from "../../api/config.js";
import BoardCategories from "../boardCategories/boardCategories.js";
import type { AxiosResponse } from "axios";
import type { HomeDataMain } from "../../Types/apiBoardCategories.js";

const Home = () => {
    const [selectedBoard, setSelectedThread] = useState<string | null>(null);
    const [dbData, setDBData] = useState<AxiosResponse<HomeDataMain> | null>(null);
    const navigate = useNavigate();
    const { user } = useSessionContext();

    //if no user Exists then redirect
    useEffect(() => {
        const check: string | null = localStorage.getItem("user");

        if (!check) {
            navigate('/')
        }
    });

    const fetchData = async () => {
        const data = await server.get('/data');
        setDBData(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return <div className="flex flex-col bg-black">
        <BoardCategories setSelectedThread={setSelectedThread} response={dbData} />
        {selectedBoard && <Threads board_slug={selectedBoard} />}

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
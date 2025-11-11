import { useNavigate } from "react-router-dom";
import Threads from "../threads/threads.js";
import { useEffect, useState } from "react";
import server from "../../api/config.js";
import BoardCategories from "../boardCategories/boardCategories.js";
import type { AxiosResponse } from "axios";
import type { HomeDataMain } from "../../Types/apiBoardCategories.js";
import connectSocket from "../../api/services/socket.js";

const Home = () => {
    const [selectedBoard, setSelectedThread] = useState<string | null>(null);
    const [dbData, setDBData] = useState<AxiosResponse<HomeDataMain> | null>(null);
    const navigate = useNavigate();

    // connecting to socket
    useEffect(() => {
        connectSocket();
    }, []);


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

    if (!dbData) {
        return <div className="flex justify-center items-center min-h-screen bg-black">
            <p className="text-white">
                Loading...
            </p>
        </div>
    } else {

        return <div className="flex flex-col bg-black">
            <BoardCategories setSelectedThread={setSelectedThread} response={dbData} />

            {/* threads full screen container */}
            {selectedBoard && <Threads board_slug={selectedBoard} />}

            {/* {user ? toast(`welcome ${user?.session_data?.type} ${user?.session_data?.username}`) : null} */}
            {/* <ToastContainer position="bottom-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce} /> */}
        </div>
    }
}

export default Home;
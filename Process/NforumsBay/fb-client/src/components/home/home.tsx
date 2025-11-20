import { useNavigate } from "react-router-dom";
import Threads from "../threads/threads.js";
import { useEffect, useState } from "react";
import BoardCategories from "../boardCategories/boardCategories.js";
import type { HomeDataMain } from "../../Types/apiBoardCategories.js";
import connectSocket from "../../api/services/socket.js";
import checkSessionExistence from "../../api/services/checkSessionExistence.js";
import fetchBoardsAndCategories from "../../api/services/fetchCategories&Boards.js";

const Home = () => {
    const [selectedBoard, setSelectedThread] = useState<string | null>(null);
    const [selectedBoardName, setSelectedThreadName] = useState<string | null>(null);
    const [dbData, setDBData] = useState<HomeDataMain>();
    const navigate = useNavigate();

    //if session does not exists then it will clear the ls.
    useEffect(() => {
        const checkSession = async () => {
            const sessionExists = await checkSessionExistence();

            if (!sessionExists) {
                console.log("cleared ls as the session doesn't exist on server");
                localStorage.removeItem('user');
                navigate('/', { replace: true });
            }
        }

        checkSession();
    }, [navigate]);

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
    }, [navigate]);

    //this will fetch all the board categoris and the Boards.
    useEffect(() => {
        const getData = async () => {
            const response = await fetchBoardsAndCategories(); // now resolved
            setDBData(response?.data);
        };

        getData();
    }, []);


    if (!dbData) {
        return <div className="flex justify-center items-center min-h-screen bg-black">
            <p className="text-white">
                Loading...
            </p>
        </div>
    } else {

        return <div className="flex flex-col bg-black">
            <BoardCategories setSelectedThread={setSelectedThread} setSelectedThreadName={setSelectedThreadName} response={dbData} />

            {/* threads full screen container */}
            {selectedBoard && <Threads board_slug={selectedBoard} selectedBoardName={selectedBoardName} />}

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
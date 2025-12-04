import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BoardCategories from "../boardCategories/boardCategories.js";
import connectSocket from "../../api/services/socket.js";
import checkSessionExistence from "../../api/services/checkSessionExistence.js";
import { useQuery } from "@tanstack/react-query";
import fetchBoardsAndCategories from "../../api/services/fetchCategories&Boards.js";

const Home = () => {
    const navigate = useNavigate();

    const {
        data: sessionExists,
        isLoading: loadingSessionData,
    } = useQuery({
        queryKey: ["checkingSessionExistenceOnServer"],
        queryFn: checkSessionExistence,
        retry: true,
    });

    useEffect(() => {
        // if (!loadingSessionData && sessionExists === false) {
        //     console.log("cleared ls as the session doesn't exist on server");
        //     localStorage.removeItem("user");
        //     navigate("/", { replace: true });
        // }

        console.log("from in the log:", sessionExists);

    }, [loadingSessionData, sessionExists, navigate]);

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

    const { isLoading, isError } = useQuery({
        queryKey: ["fetchCategories"],
        queryFn: fetchBoardsAndCategories
    });

    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen bg-black">
            <p className="text-white">
                Loading...
            </p>
        </div>
    } else if (isError) {
        return <div className="flex justify-center items-center min-h-screen bg-black">
            <p className="text-white">
                Error, Can't load the Categories.
            </p>
        </div>
    } else {

        return <div className="flex flex-col bg-black">
            <BoardCategories />
        </div>
    }
}

export default Home;
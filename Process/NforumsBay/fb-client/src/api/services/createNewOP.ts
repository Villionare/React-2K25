import type { UserContextProps } from "../../context/createContext";
import server from "../config";

const handleCreateNewOP = ({ user }: UserContextProps) => {
    const responce = server.post('boards/:slug/threads/create_thread', {
        "username": user?.data?.name,
        title: "to be given",
        textContent: "to be given",
        media: "img,img,audio"
    });
    console.log(responce);
}

export default handleCreateNewOP;

//slug: fetch all boards data,
//username: "context storage",
//title : to be entered,
//text content: to be entered,
//media: default.
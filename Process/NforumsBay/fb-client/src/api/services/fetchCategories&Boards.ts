import type { HomeDataMain } from "../../Types/apiBoardCategories";
import server from "../config";

const fetchBoardsAndCategories = async () => {
    try {
        const response = await server.get<HomeDataMain>('/data');
        return response;

    } catch (error) {
        console.log(error);
    }
}

export default fetchBoardsAndCategories;
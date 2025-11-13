import server from "../config";

const fetchThreads = async (board_slug: string) => {

    const fetched_threads = await server.get(`/boards/${board_slug}/threads`);
    return fetched_threads.data;
}

export default fetchThreads;
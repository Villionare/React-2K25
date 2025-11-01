import server from "../config";

const fetchThreads  = async (board_slug: string) => {

    const fetched_threads = await server.get(`/boards/${board_slug}/threads`);
    console.log('fetched threads: ', fetched_threads);
    
    return fetched_threads.data;
}

export default fetchThreads;
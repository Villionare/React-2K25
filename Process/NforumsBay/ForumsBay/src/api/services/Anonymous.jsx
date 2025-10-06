import server from "../config";

export const createAnonymousUser = async (username) => {
    const responce = await server.post('/anonymous/create', { username: username });
    return responce.data;
}

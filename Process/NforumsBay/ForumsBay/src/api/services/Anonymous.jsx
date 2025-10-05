import server from "../config";

const createAnonymousUser = async (username) => {
    const responce = await server.post('/anonymous/create', { username: username });
    return responce.data;
}

export default createAnonymousUser;
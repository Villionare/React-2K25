import server from "../config";

//in case of anonymous we are getting:
interface anonResponce {
    message: string,
    success: boolean,
    session_data: {
        type: string,
        username: string,
        ip: string,
        maxAge: number,
    },
}

const createAnonymousUser = async (username: string): Promise<anonResponce> => {
    const responce = await server.post('/anonymous/create', { username: username });
    return responce.data;
}

export default createAnonymousUser;

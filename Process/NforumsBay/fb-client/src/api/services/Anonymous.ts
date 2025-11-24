import type { AuthResponse } from "../../Types/authResponce";
import server from "../config";

const createAnonymousUser = async (username: string) => {
    const responce = await server.post<AuthResponse>('/anonymous/create', { username: username });
    return responce.data;
}

export default createAnonymousUser;

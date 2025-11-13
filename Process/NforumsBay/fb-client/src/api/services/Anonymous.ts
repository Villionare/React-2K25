import type { AuthResponse } from "../../Types/authResponce";
import server from "../config";

const createAnonymousUser = async (username: string): Promise<AuthResponse> => {
    const responce = await server.post<AuthResponse>('/anonymous/create', { username: username });
    console.log("responce on anonymous creation: ", responce);

    return responce.data;
}

export default createAnonymousUser;

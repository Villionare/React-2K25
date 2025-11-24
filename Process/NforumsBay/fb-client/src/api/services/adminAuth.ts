import type { AuthResponse } from "../../Types/authResponce";
import server from "../config";

export interface SignUp {
    signUpName: string,
    signUpAge: string,
    signUpUsername: string,
    signUpEmail: string,
    signUptypePassword: string
}

export interface Login {
    loginIdentifier: string,
    loginPassword: string
}

interface AdminAuthProps {
    fetchUrl: string,
    sending_data: SignUp | Login,
}

const AdminAuth = async (props: AdminAuthProps) => {
    const responce = await server.post<AuthResponse>(props.fetchUrl, props.sending_data);
    return responce.data;
}

export default AdminAuth;
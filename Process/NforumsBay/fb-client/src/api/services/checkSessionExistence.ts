import server from "../config";

interface ResponseType {
    success: boolean;
    message: string;
    session_data?: {
        type: string;
        username: string;
        ip: string;
    };
}

const checkSessionExistence = async (): Promise<boolean> => {
    try {
        const response = await server.get<ResponseType>("/me");

        if (response.data.success) {
            return true;
        } else {
            localStorage.clear();
            return false;
        }
    } catch (error) {
        console.error("Error while checking session:", error);
        localStorage.clear(); // handle network or backend errors too
        return false;
    }
};

export default checkSessionExistence;

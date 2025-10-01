import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSessionContext from "../../context/useContext";

const EnterAdminName = () => {
    // const { user, loading, login, logout } = useUserContext();
    const { user, setUser, login, logout, setFromServer } = useSessionContext();
    const [username, setUsername] = useState('');

    // {
    //     "success": "Welcome mogga",
    //     "session_data": {
    //         "role": "anonymous",
    //         "username": "mogga",
    //         "ip": "::1"
    //     }
    // }

    const navigate = useNavigate();

    //when we will be starting as an user we will first create db for it and cookies will be recieved the only we will 
    //redirect them to the home.

    const startAnonymous = async () => {
        try {
            const response = await fetch('http://localhost:9999/api/anonymous/create', {
                method: 'POST',
                credentials: 'include', // important to send cookies
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'username': username })
            });

            const result = await response.json(); // parse JSON from server
            // store the raw server response into the context (session_data or whole object)
            if (setFromServer) setFromServer(result);
            else {
                const sessionData = result.session_data || result;
                if (login) login(sessionData);
                else setUser(sessionData);
            }
            console.log('user Context data server:', result);
            navigate('home')

        } catch (e) {
            console.error('Error:', e);
        }
    };
    return <>
        <div className="bg-amber-400 p-4 flex flex-col sm:flex-row items-center justify-center gap-3 rounded-lg shadow-md">
            <input
                type="text"
                className="flex-1 w-full sm:w-auto px-4 py-2 rounded-md border border-amber-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition cursor-pointer"
                onClick={startAnonymous}
            >
                Start Session (24hrs)
            </button>
        </div>

    </>
}

export default EnterAdminName;
import { useState } from "react";
import { data, useNavigate } from "react-router-dom";
import useSessionContext from "../../context/useContext.tsx";
import createAnonymousUser from "../../api/services/Anonymous.tsx";

const EnterAdminName = () => {
    const { user, login, logout } = useSessionContext();
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const startAnonymous = async () => {
        try {
            const response = await createAnonymousUser(username);
            login(response);

            console.log('just after storing the result: ', user);

            navigate('home')
        } catch (e) {
            if (e instanceof Error) {
                console.error('Error:', e.response?.data?.message || e.message);
            } else {
                console.error('an unknown type of error occured');

            }
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
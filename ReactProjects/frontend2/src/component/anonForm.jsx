import { useState } from "react";
import useSessionContext from "../context/use";

const AnonForm = () => {
    // const { user, loading, login, logout } = useUserContext();
    const { user, login, logout } = useSessionContext();
    const [username, setUsername] = useState('');

    const startAnonymous = async () => {
        try {
            const response = await fetch('http://localhost:9999/api/anonymous/create', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'username': username })
            });

            if (!response.ok) {
                throw new Error('Responce from server is not OK: ', response.statusText);
            }

            const result = await response.json(); // parse JSON from server
            await login(result);
            console.log('just after storing the result: ', user);

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
            <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition cursor-pointer"
                onClick={logout}
            >
                Logout
            </button>
        </div>
    </>
}

export default AnonForm;
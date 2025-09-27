import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user";

const EnterAdminName = () => {
    const { user, loading, Login, Logout } = useContext(UserContext);
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    //when we will be starting as an user we will first create db for it and cookies will be recieved the only we will 
    //redirect them to the home
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
            Login(result.user);
            console.log(result);

            navigate('home')

        } catch (e) {
            console.error('Error:', e);
        }
    };
    return <>
        <div className="bg-amber-400 h-20">
            <input type="text" className="h-full mr-2 border-1 border-amber-800" placeholder="Enter your username..." value={username} onChange={(e) => setUsername(e.target.value)} />
            <button type="submit" className="cursor-pointer bg-blue-700 h-full" onClick={() => startAnonymous()}>
                Start Session (24hrs)
            </button>
        </div>
    </>
}


export default EnterAdminName;
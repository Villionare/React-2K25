import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSessionContext from "../../context/useContext";
import createAnonymousUser from "../../api/services/Anonymous";

const EnterAnonymousName = () => {
    const { login } = useSessionContext();
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const startAnonymous = async () => {
        const res = await createAnonymousUser(username);

        if (res.success) {
            console.log("session has been stored after success: ", res);
            login(res);
            navigate('/');
        } else {
            console.log("failed to login anonymous:", res);
        }
    };

    return (
        // Inner Container BG: Dark News Block (#232527) with a Column Rule border
        <div className="bg-[#232527] p-4 flex flex-col sm:flex-row items-center justify-center gap-3 rounded-lg border border-[#424549] shadow-md">
            <input
                type="text"
                // Input styling: Deep Inkwell BG, Aged Paper White Text, Faded Newsprint Placeholder, Journalist's Blue Focus
                className="flex-1 w-full sm:w-auto px-4 py-2 rounded-md border border-[#424549] bg-[#1A1C1E] text-[#EAE4D9] placeholder-[#A9A296] focus:outline-none focus:ring-2 focus:ring-[#5CA0D3]"
                placeholder="Enter your username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <button
                type="submit"
                // Button styling: Journalist's Blue BG, Aged Paper White Text, Pressed Ink Blue Hover
                className="bg-[#5CA0D3] text-[#EAE4D9] px-6 py-2 rounded-md font-semibold hover:bg-[#8BCFF2] transition cursor-pointer w-full sm:w-auto"
                onClick={startAnonymous}
            >
                Start Session (24hrs)
            </button>
        </div>
    );
}

export default EnterAnonymousName;

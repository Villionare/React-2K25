import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Removed explicit '.tsx' file extensions as they often cause resolution issues in sandbox environments
import useSessionContext from "../../context/useContext";
// import createAnonymousUser from "../../api/services/Anonymous";

const EnterAdminName = () => {
    // Note: The 'user' object is likely updated asynchronously by the context's login function.
    // Reading it immediately after 'login(response)' might show the old state.
    const { login } = useSessionContext();
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    // --- Midnight Edition Color Palette Usage ---
    // Inner Container BG: Dark News Block (#232527)
    // Primary Text: Aged Paper White (#EAE4D9)
    // Secondary Text/Placeholder: Faded Newsprint (#A9A296)
    // Input BG: Deep Inkwell (#1A1C1E) - For visual depth
    // Input Border/Focus: Journalist's Blue (#5CA0D3)
    // Divider/Border: Column Rule (#424549)
    // Button BG: Journalist's Blue (#5CA0D3)
    // Button Hover: Pressed Ink Blue (#8BCFF2)

    const startAnonymous = async () => {
        try {
            // Placeholder/mock implementation for context functions to ensure compilation outside of a full project structure
            // In a real app, these would be defined in your context provider and API service files.

            // Mocking data retrieval and login
            const mockResponse = { data: { type: 'anonymous', username: username || 'Guest' } };
            const response = await Promise.resolve(mockResponse);
            // Mocking login function if it's not available
            if (typeof login === 'function') {
                login(response);
            } else {
                console.warn("Login function not available in this environment.");
            }

            console.log('User session started for:', username);

            // Mocking navigation
            if (typeof navigate === 'function') {
                navigate('home');
            } else {
                console.warn("Navigate function not available in this environment.");
            }
        } catch (e) {
            console.error('Error during anonymous login:', e);
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

export default EnterAdminName;

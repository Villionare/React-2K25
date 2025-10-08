import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSessionContext from "../../context/useContext.jsx"; // FIX: Added .jsx extension to resolve import path

const AuthComponent = () => {
    const { login } = useSessionContext();
    const [isLogin, setInLogin] = useState(true);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const [inpSignUpChange, setInpSignUpChange] = useState({
        signUpName: "",
        signUpAge: "",
        signUpUsername: "",
        signUpEmail: "",
        signUptypePassword: ""
    });

    const [inpSignInChange, setInpSignInChange] = useState({
        loginIdentifier: "",
        loginPassword: ""
    });

    // --- Midnight Edition Color Palette Usage ---
    // Base Background: Deep Inkwell (#1A1C1E)
    // Card Background: Dark News Block (#232527)
    // Primary Text: Aged Paper White (#EAE4D9)
    // Secondary Text: Faded Newsprint (#A9A296)
    // Input BG: Deep Inkwell (#1A1C1E) - Slightly darker than card for input field depth
    // Input Focus Ring: Journalist's Blue (#5CA0D3)
    // Button BG: Journalist's Blue (#5CA0D3)
    // Button Hover: Pressed Ink Blue (#8BCFF2)


    const SubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const fetchUrl = isLogin
            ? 'http://localhost:9999/api/admin/admin_login'
            : 'http://localhost:9999/api/admin/admin_signup';

        try {
            const response = await fetch(fetchUrl, {
                method: 'POST',
                credentials: 'include', // Very important to send cookies
                headers: {
                    'Content-Type': 'application/json', // Tell server we are sending JSON
                },
                body: JSON.stringify(isLogin ? inpSignInChange : inpSignUpChange)
            });

            const data = await response.json();
            console.log('Response:', data);

            // Handle non-OK responses (e.g., 4xx/5xx errors)
            if (!response.ok) {
                throw new Error(data.message || `HTTP error! status: ${response.status}`);
            }

            if (isLogin) {
                await login(data); // Assuming data.data contains user info
                await navigate('/home'); // Use absolute path for safety
            } else {
                await navigate('/adminsubmitted'); // Use absolute path for safety
            }
        } catch (error) {
            setLoading(false);
            console.error('Login/Signup error:', error);
            // Optionally set error state for UI feedback, e.g., setError(error.message)
        }
    };

    const handleSignUpchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInpSignUpChange((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSignInchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInpSignInChange((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    return (
        // Outer Background: Deep Inkwell (#1A1C1E)
        <div className="min-h-screen flex justify-center items-center bg-[#1A1C1E] text-[#EAE4D9] px-4">
            {/* Form Container Background: Dark News Block (#232527) */}
            <div className="bg-[#232527] shadow-xl rounded-lg border-2 border-[#424549] p-8 w-full max-w-md">

                {/* Title: Aged Paper White (#EAE4D9) */}
                <h2 className="text-3xl font-bold text-[#EAE4D9] text-center mb-6 tracking-tight">
                    {isLogin ? "Admin Login" : "Admin Creation"}
                </h2>

                {/* Form */}
                <form className="flex flex-col space-y-3" onSubmit={SubmitForm}>
                    {isLogin ? (
                        <>
                            <input
                                required
                                type="text"
                                name="loginIdentifier"
                                placeholder="Username or Email"
                                value={inpSignInChange.loginIdentifier}
                                onChange={handleSignInchange}
                                autoComplete="username"
                                // Input BG: Deep Inkwell, Text: Aged Paper White, Placeholder: Faded Newsprint, Focus: Journalist's Blue
                                className="w-full p-3 rounded-md bg-[#1A1C1E] text-[#EAE4D9] placeholder-[#A9A296] focus:outline-none focus:ring-2 focus:ring-[#5CA0D3] transition-shadow"
                            />
                            <input
                                required
                                type="password"
                                name="loginPassword"
                                placeholder="Enter your password"
                                value={inpSignInChange.loginPassword}
                                onChange={handleSignInchange}
                                autoComplete="current-password"
                                className="w-full p-3 rounded-md bg-[#1A1C1E] text-[#EAE4D9] placeholder-[#A9A296] focus:outline-none focus:ring-2 focus:ring-[#5CA0D3] transition-shadow"
                            />
                        </>
                    ) : (
                        <>
                            <input
                                required
                                type="text"
                                name="signUpName"
                                value={inpSignUpChange.signUpName}
                                placeholder="Enter your full name"
                                onChange={handleSignUpchange}
                                autoComplete="name"
                                className="w-full p-3 rounded-md bg-[#1A1C1E] text-[#EAE4D9] placeholder-[#A9A296] focus:outline-none focus:ring-2 focus:ring-[#5CA0D3] transition-shadow"
                            />
                            <input
                                required
                                type="number"
                                min="13"
                                name="signUpAge"
                                value={inpSignUpChange.signUpAge}
                                placeholder="Enter your age"
                                onChange={handleSignUpchange}
                                autoComplete="bday-year"
                                className="w-full p-3 rounded-md bg-[#1A1C1E] text-[#EAE4D9] placeholder-[#A9A296] focus:outline-none focus:ring-2 focus:ring-[#5CA0D3] transition-shadow"
                            />
                            <input
                                required
                                type="text"
                                name="signUpUsername"
                                value={inpSignUpChange.signUpUsername}
                                placeholder="Choose a username"
                                onChange={handleSignUpchange}
                                autoComplete="username"
                                className="w-full p-3 rounded-md bg-[#1A1C1E] text-[#EAE4D9] placeholder-[#A9A296] focus:outline-none focus:ring-2 focus:ring-[#5CA0D3] transition-shadow"
                            />
                            <input
                                required
                                type="email"
                                name="signUpEmail"
                                value={inpSignUpChange.signUpEmail}
                                placeholder="Enter your email address"
                                onChange={handleSignUpchange}
                                autoComplete="email"
                                className="w-full p-3 rounded-md bg-[#1A1C1E] text-[#EAE4D9] placeholder-[#A9A296] focus:outline-none focus:ring-2 focus:ring-[#5CA0D3] transition-shadow"
                            />
                            <input
                                required
                                type="password"
                                name="signUptypePassword"
                                value={inpSignUpChange.signUptypePassword}
                                placeholder="Create a strong password"
                                onChange={handleSignUpchange}
                                autoComplete="new-password"
                                minLength={6}
                                className="w-full p-3 rounded-md bg-[#1A1C1E] text-[#EAE4D9] placeholder-[#A9A296] focus:outline-none focus:ring-2 focus:ring-[#5CA0D3] transition-shadow"
                            />
                            <input
                                required
                                type="password"
                                name="signUpretypePassword"
                                // value={inpSignUpChange.signUpretypePassword} // Not defined in state, commented out
                                placeholder="Re-enter your password"
                                // onChange={handleSignUpchange} // Not defined in state, commented out
                                autoComplete="new-password"
                                className="w-full p-3 rounded-md bg-[#1A1C1E] text-[#EAE4D9] placeholder-[#A9A296] focus:outline-none focus:ring-2 focus:ring-[#5CA0D3] transition-shadow"
                            />
                        </>
                    )}

                    {/* Submit Button BG: Journalist's Blue (#5CA0D3), Hover: Pressed Ink Blue (#8BCFF2), Text: Aged Paper White (#EAE4D9) */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 rounded-md bg-[#5CA0D3] hover:bg-[#8BCFF2] transition-colors text-[#EAE4D9] font-semibold shadow-md"
                        disabled={loading}
                    >
                        {isLogin
                            ? loading
                                ? "Signing in..."
                                : "Sign In"
                            : loading
                                ? "Signing Up..."
                                : "Sign Up"}
                    </button>
                </form>

                {/* Toggle Link */}
                <div className="text-center mt-6">
                    {isLogin ? (
                        <p className="text-[#A9A296]">
                            {/* Secondary Text: Faded Newsprint (#A9A296) */}
                            New User?{" "}
                            <button
                                onClick={() => setInLogin((prev) => !prev)}
                                // Link Text: Journalist's Blue (#5CA0D3)
                                className="text-[#5CA0D3] hover:underline cursor-pointer font-medium"
                            >
                                Sign Up
                            </button>
                        </p>
                    ) : (
                        <p className="text-[#A9A296]">
                            {/* Secondary Text: Faded Newsprint (#A9A296) */}
                            Already a User?{" "}
                            <button
                                onClick={() => setInLogin((prev) => !prev)}
                                // Link Text: Journalist's Blue (#5CA0D3)
                                className="text-[#5CA0D3] hover:underline cursor-pointer font-medium"
                            >
                                Sign In
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>

    );
};

export default AuthComponent;

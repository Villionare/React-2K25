import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSessionContext from "../../context/useContext";

const AuthComponent = () => {
    const { user, login, logout } = useSessionContext();
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

    const SubmitForm = async (e) => {
        e.preventDefault();

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


    const handleSignUpchange = (e) => {
        const { name, value } = e.target;
        setInpSignUpChange((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSignInchange = (e) => {
        const { name, value } = e.target;
        setInpSignInChange((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-900 text-gray-100 px-4">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg rounded-3xl p-8 w-full max-w-md">

                {/* Title */}
                <h2 className="text-3xl font-bold text-violet-400 text-center mb-6">
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
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                            <input
                                required
                                type="password"
                                name="loginPassword"
                                placeholder="Enter your password"
                                value={inpSignInChange.loginPassword}
                                onChange={handleSignInchange}
                                autoComplete="current-password"
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
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
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
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
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                            <input
                                required
                                type="text"
                                name="signUpUsername"
                                value={inpSignUpChange.signUpUsername}
                                placeholder="Choose a username"
                                onChange={handleSignUpchange}
                                autoComplete="username"
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                            <input
                                required
                                type="email"
                                name="signUpEmail"
                                value={inpSignUpChange.signUpEmail}
                                placeholder="Enter your email address"
                                onChange={handleSignUpchange}
                                autoComplete="email"
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
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
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                            <input
                                required
                                type="password"
                                name="signUpretypePassword"
                                // value={inpSignUpChange.signUpretypePassword}
                                placeholder="Re-enter your password"
                                // onChange={handleSignUpchange}
                                autoComplete="new-password"
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 rounded-lg bg-violet-600 hover:bg-violet-700 transition-colors text-white font-semibold shadow-md"
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
                        <p className="text-gray-400">
                            New User?{" "}
                            <button
                                onClick={() => setInLogin((prev) => !prev)}
                                className="text-violet-400 hover:underline cursor-pointer"
                            >
                                Sign Up
                            </button>
                        </p>
                    ) : (
                        <p className="text-gray-400">
                            Already a User?{" "}
                            <button
                                onClick={() => setInLogin((prev) => !prev)}
                                className="text-violet-400 hover:underline cursor-pointer"
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

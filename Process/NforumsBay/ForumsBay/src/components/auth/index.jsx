import { useEffect, useState } from "react";
import useFetch from "../custom/fetch";

const AuthComponent = () => {
    const [isLogin, setInLogin] = useState(true);
    const { fetchData, loading, error, data } = useFetch();

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

        const fetchurl = isLogin ?
            'http://localhost:9999/api/admin/admin_login' :
            'http://localhost:9999/api/admin/admin_signup';

        try {
            const fetchdata = await fetchData(fetchurl, {
                method: 'POST',
                credentials: 'include', // very important to send cookies
                headers: {
                    'Content-Type': 'application/json', // tell server we are sending JSON
                },
                body: JSON.stringify(isLogin ? inpSignInChange : inpSignUpChange)
            })

            console.log(fetchdata);

        } catch (e) {
            console.log(e);
            console.log(error);
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
        <div className="min-h-screen flex justify-center items-center bg-gray-900 text-gray-100">
            <div className="bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-violet-400 text-center mb-6">
                    {isLogin ? "admin login" : "admin creation"}
                </h2>

                <form className="flex flex-col gap-4" onSubmit={SubmitForm}>
                    {isLogin ? (
                        <>
                            <input
                                required
                                type="text"
                                name="loginIdentifier"
                                placeholder="username or email"
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
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />

                            <input
                                required
                                type="password"
                                name="signUpretypePassword"
                                placeholder="Re-enter your password"
                                autoComplete="new-password"
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />

                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 rounded-lg bg-violet-600 hover:bg-violet-700 transition-colors text-white font-semibold shadow-md"
                    >

                        {isLogin ?
                            loading ? "Signing in..." : "Sign In"
                            :
                            loading ? "Signing Up..." : "Sign Up"
                        }
                    </button>
                </form>

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

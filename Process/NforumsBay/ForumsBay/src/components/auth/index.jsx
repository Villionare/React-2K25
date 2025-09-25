import { useState } from "react";
import UseFetch from "../custom/fetch";

const AuthComponent = () => {
    const [isLogin, setInLogin] = useState(true);
    const { data, isError, isLoading } = UseFetch('https://dummyjson.com/products');

    const [inpSignUpChange, setInpSignUpChange] = useState({
        signUpName: "",
        signUpAge: "",
        signUpUsername: "",
        signUpEmail: "",
        signUptypePassword: ""
    });

    const [inpSignInChange, setInpSignInChange] = useState({
        loginUsername: "",
        loginEmail: "",
        LoginPassword: ""
    });

    const SubmitForm = (e) => {
        e.preventDefault();
        console.log("Form submitted");

        console.log("data: " + data + " isError: " + isError + " isLoading: " + isLoading);

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
                                type="text"
                                name="loginUsername"
                                placeholder="Enter your username"
                                value={inpSignInChange.loginUsername}
                                onChange={handleSignInchange}
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />

                            <input
                                type="email"
                                name="loginEmail"
                                placeholder="Enter your email address"
                                value={inpSignInChange.loginEmail}
                                onChange={handleSignInchange}
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />

                            <input
                                type="password"
                                name="LoginPassword"
                                placeholder="Enter your password"
                                value={inpSignInChange.LoginPassword}
                                onChange={handleSignInchange}
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                name="signUpName"
                                value={inpSignUpChange.signUpName}
                                placeholder="Enter your full name"
                                onChange={handleSignUpchange}
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />

                            <input
                                type="number"
                                name="signUpAge"
                                value={inpSignUpChange.signUpAge}
                                placeholder="Enter your age"
                                onChange={handleSignUpchange}
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />

                            <input
                                type="text"
                                name="signUpUsername"
                                value={inpSignUpChange.signUpUsername}
                                placeholder="Choose a username"
                                onChange={handleSignUpchange}
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />

                            <input
                                type="email"
                                name="signUpEmail"
                                value={inpSignUpChange.signUpEmail}
                                placeholder="Enter your email address"
                                onChange={handleSignUpchange}
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />

                            <input
                                type="password"
                                name="signUptypePassword"
                                value={inpSignUpChange.signUptypePassword}
                                placeholder="Create a strong password"
                                onChange={handleSignUpchange}
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />

                            <input
                                type="password"
                                name="signUpretypePassword"
                                placeholder="Re-enter your password"
                                className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 rounded-lg bg-violet-600 hover:bg-violet-700 transition-colors text-white font-semibold shadow-md"
                    >
                        {isLogin ? "Login" : "Sign Up"}
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

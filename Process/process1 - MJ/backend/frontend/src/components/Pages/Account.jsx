// AuthForm.jsx
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Accounts() {
    const [isLogin, setIsLogin] = useState(true);

    //SIGNUP
    //creating json to send credentials
    const [signupCredentials, setSignupCredentials] = useState({
        "username": null,
        "email": null,
        "password": null
    });

    //adding the value to the signup json
    function handleSignupChange(e) {
        const { name, value } = e.target;

        setSignupCredentials(prev => ({
            ...prev,
            [name]: value,
        }))
    }


    // LOGIN
    //creating json to send credentials
    const [signInCredentials, setSignInCredentials] = useState({
        "email": '',
        "password": ''
    });

    useEffect(() => {
        console.log(signInCredentials);
    }, [signInCredentials]);

    //adding the value to the signin json
    function handleSigninChange(e) {
        const { name, value } = e.target;

        setSignInCredentials(prev => ({
            ...prev,
            [name]: value,
        })
        )
    }

    const submitSignup = async (e) => {
        e?.preventDefault();
        try {
            // adjust port if your backend runs elsewhere; backend default in this repo is 3000
            const res = await axios.post('http://localhost:3000/api/auth/signup', signupCredentials);
            console.log('server response', res.data);

        } catch (err) {
            console.error('submit signup error:', err.response?.data || err.message);
        }

    }

    const submitLogIn = async (e) => {
        e?.preventDefault();
        try {
            // implement signin request here when ready
            console.log('signin payload', signInCredentials);
        } catch (err) {
            console.error('submit signin error', err.message || err);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center  px-4">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-sm text-white">
                {/* Heading */}
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {isLogin ? "Login" : "Sign Up"}
                </h2>

                {/* Form */}
                <form className="space-y-4">
                    {!isLogin && (
                        <div>
                            <label className="block mb-1 text-sm font-medium">Username
                                <span>(should be unique)</span>
                            </label>
                            <input
                                type="text"
                                className=" w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                                placeholder="Enter your Username"
                                name="username"
                                onChange={(e) => handleSignupChange(e)}
                                autoComplete="username"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block mb-1 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                            placeholder="Enter your email"
                            name="email"
                            onChange={(e) => isLogin ? handleSigninChange(e) : handleSignupChange(e)}
                            autoComplete="email"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                            placeholder="Enter your password"
                            name="password"
                            onChange={(e) => isLogin ? handleSigninChange(e) : handleSignupChange(e)}
                            autoComplete="new-password"
                        />
                    </div>

                    {!isLogin && (
                        <div>
                            <label className="block mb-1 text-sm font-medium">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                                placeholder="Confirm your password"
                                autoComplete="new-password"
                            />
                        </div>
                    )}

                    {/* Submit Button */}
                    {isLogin ?
                        <button
                            type="submit"
                            className="w-full bg-white text-gray-900 font-semibold py-2 rounded-lg hover:bg-gray-300 transition"
                            onClick={submitLogIn}
                        >
                            Login
                        </button>
                        :
                        <button
                            type="submit"
                            className="w-full bg-white text-gray-900 font-semibold py-2 rounded-lg hover:bg-gray-300 transition"
                            onClick={submitSignup}
                        >
                            Sign Up
                        </button>
                    }

                </form>

                {/* Toggle */}
                <p className="mt-4 text-center text-sm text-gray-300">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-white font-semibold underline"
                    >
                        {isLogin ? "Sign Up" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    );
}

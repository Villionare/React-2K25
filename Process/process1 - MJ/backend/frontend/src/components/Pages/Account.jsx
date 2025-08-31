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

    //adding the value to the json
    function submitValues(e) {
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

    //adding the value to the json
    function submitValues(e) {
        const { name, value } = e.target;

        setSignInCredentials(prev => ({
            ...prev,
            [name]: value,
        })
        )
        // console.log(signInCredentials);
    }

    const submitSignup = async () => {
        try {
            const res = await axios.post('http://localhost:5135/api/auth/signup', signupCredentials);
            console.log('server responce' + res.data);

        } catch (e) {
            console.error('submit signup error:', e.response?.data || e.message);
        }

    }

    const submitLogIn = () => {
        try {

        } catch (e) {
            console.error('submit signin error' + e);
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
                                onChange={(e) => submitValues(e)}
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
                            onChange={(e) => submitValues(e)}
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                            placeholder="Enter your password"
                            name="password"
                            onChange={(e) => submitValues(e)}
                        />
                    </div>

                    {!isLogin && (
                        <div>
                            <label className="block mb-1 text-sm font-medium">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                                placeholder="Confirm your password"
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

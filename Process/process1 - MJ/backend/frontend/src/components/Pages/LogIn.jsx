import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {

    const [signInData, setSignInData] = useState(
        {
            "userOrEmail": '',
            "password": ''
        }
    );

    const submitLogin = async (e) => {

        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5135/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signInData)
            })

            const data = await res.json()
                .catch(() => null);

            if (!res.ok) {
                console.error('Signup failed', res.status, data);
                // optionally show an error to the user
                return;
            }

            console.log('data recieved from server' + data);


        } catch (e) {
            console.error('faild to Login: ' + e);
        }

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignInData((prev) => ({ ...prev, [name]: value }))
    }

    useEffect(() => {
        console.log(signInData);

    }, [signInData]);

    return (
        <>
            <div className="flex justify-center items-center min-h-screen p-10 space-y-4">
                <div className="flex flex-col bg-[#333333] rounded-3xl text-white p-15 md:flex-row md:gap-5">

                    <div>
                        <h2 className="text-5xl font-bold mb-6 text-center mr-5">
                            Login
                        </h2>
                        <span className="hidden md:inline">
                            New here? {" "}
                            <Link to={'/signup'} className="underline hover:text-gray-200">
                                Sign Up
                            </Link>
                        </span>
                    </div>

                    <form className="flex flex-col md:flex-row gap-5 space-y-6" onSubmit={(e) => { submitLogin(e) }}>
                        <div className="space-y-4 min-w-[40vw]">

                            <div>
                                <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-300">
                                    Username or Email
                                </label>
                                <input
                                    id="username"
                                    className="w-full px-3 py-2 rounded-lg bg-[#505050] text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    type="text"
                                    name="userOrEmail"
                                    placeholder="Enter your username or email"
                                    autoComplete="username"
                                    onChange={e => { handleInputChange(e) }}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-300">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    className="w-full px-3 py-2 rounded-lg bg-[#505050] text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                    onChange={e => { handleInputChange(e) }}
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    name="remember"
                                    className="rounded"
                                />
                                <label htmlFor="remember" className="text-sm text-gray-300">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="min-w-[20vw] rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        >
                            Login
                        </button>
                    </form>

                    <div className="md:hidden">
                        <span>
                            New here? {" "}
                            <Link to={'/signup'} className="underline hover:text-gray-200">
                                Sign Up
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIn;

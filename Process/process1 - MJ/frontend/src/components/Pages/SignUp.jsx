import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    const [signUpData, setSignUpData] = useState(
        {
            "fullname": '',
            "username": '',
            "email": '',
            "password": ''
        }
    );

    const SubmitSignUp = async (e) => {
        e.preventDefault();

        try {
            // use explicit backend origin so the request reaches the server during dev
            const res = await fetch('http://localhost:5135/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signUpData),
            });

            // parse JSON (await the promise) and handle non-OK responses
            const data = await res.json();

            if (!res.ok) {
                console.error('Signup failed', res.status, data);
                // optionally show an error to the user
                return;
            }

            if (res.status = 201) {
                navigate('/login');
            }

            console.log('response from server', data);
            // TODO: redirect user or update UI on successful signup

        } catch (e) {
            console.error(e);
        }

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignUpData((prev) => ({
            ...prev,
            [name]: value
        }
        ))
    }

    useEffect(() => {
        console.log(signUpData);

    }, [signUpData]);

    return <>
        <div className="flex justify-center items-center min-h-screen p-10 space-y-4">

            <div className="flex flex-col  bg-[#333333] rounded-3xl text-white p-15 md:flex-row md:gap-5">

                <div>
                    <h2 className="text-5xl font-bold mb-6 text-center mr-5">
                        Sign Up
                    </h2>
                    <span className="hidden md:inline">
                        Already a User? {" "}
                        <Link to={'/login'} className="underline hover:text-gray-200">
                            Login
                        </Link>
                    </span>
                </div>

                <form className="flex flex-col md:flex-row gap-5 space-y-6" onSubmit={(e) => { SubmitSignUp(e) }}>
                    <div className="space-y-4 min-w-[40vw]">

                        <div>
                            <label htmlFor="fullname" className="block mb-1 text-sm font-medium text-gray-300">
                                Full Name
                            </label>
                            <input
                                id="fullname"
                                className="w-full px-3 py-2 rounded-lg bg-[#505050] text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                                type="text"
                                name="fullname"
                                placeholder="Enter your full name"
                                autoComplete="name"
                                onChange={(e) => { handleInputChange(e) }}
                            />
                        </div>

                        <div>
                            <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-300">
                                Username
                            </label>
                            <input
                                id="username"
                                className="w-full px-3 py-2 rounded-lg bg-[#505050] text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                                type="text"
                                name="username"
                                placeholder="Enter your unique username"
                                autoComplete="username"
                                onChange={(e) => { handleInputChange(e) }}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <input
                                id="email"
                                className="w-full px-3 py-2 rounded-lg bg-[#505050] text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                autoComplete="email"
                                onChange={(e) => { handleInputChange(e) }}
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
                                autoComplete="new-password"
                                onChange={(e) => { handleInputChange(e) }}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                id="agree"
                                type="checkbox"
                                name="agree"
                                className="rounded"
                            />
                            <label htmlFor="agree" className="text-sm text-gray-300">
                                I agree to the <a href="/terms" className="underline hover:text-gray-200">terms and policies</a> of MoviesJournal
                            </label>
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="min-w-[20vw] rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="md:hidden">
                    <span>
                        Already a User? {" "}
                        <Link to={'login'} className="underline hover:text-gray-200">
                            Login
                        </Link>
                    </span>
                </div>
            </div>

        </div>
    </>
}

export default SignUp;
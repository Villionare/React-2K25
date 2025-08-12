import React from "react";

function Signup() {
    return (
        <div className="bg-gray-50 pt-20 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h1>
            <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-4">
                <input type="text" placeholder="Full Name" className="w-full border p-3 rounded" />
                <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
                <input type="password" placeholder="Password" className="w-full border p-3 rounded" />
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full">
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default Signup;

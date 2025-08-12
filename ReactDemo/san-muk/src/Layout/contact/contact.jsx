import React from "react";

function Contact() {
    return (
        <div className="bg-gray-50 pt-20 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-4">
                <input type="text" placeholder="Name" className="w-full border p-3 rounded" />
                <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
                <textarea placeholder="Message" className="w-full border p-3 rounded h-28"></textarea>
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full">
                    Send
                </button>
            </form>
        </div>
    );
}

export default Contact;

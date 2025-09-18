import React from "react";

export default function ProfilePage({ user, onLogout }) {
    if (!user) {
        return (
            <div className="h-screen flex items-center justify-center bg-[#0b1412] text-gray-300">
                <p>No user logged in</p>
            </div>
        );
    }

    const initials = user.name
        ? user.name.split(" ").map((n) => n[0]).join("")
        : "U";

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b1412] to-[#05110f] p-6">
            <div className="w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-800 bg-[#06120f]/80 backdrop-blur-md p-8 text-center">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-emerald-600/30 text-emerald-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {initials}
                </div>

                {/* Name */}
                <h2 className="text-white text-xl font-semibold">{user.name}</h2>

                {/* Phone */}
                <p className="text-gray-400 text-sm mt-1">{user.phone}</p>

                {/* Logout button */}
                <button
                    onClick={onLogout}
                    className="mt-6 w-full rounded-xl py-2 bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

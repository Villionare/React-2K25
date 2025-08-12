import React from "react";

function Services() {
    return (
        <div className="bg-gray-50 pt-20 min-h-screen px-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h1>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                    <p className="text-gray-600">Build fast, modern, and responsive websites.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                    <p className="text-gray-600">Develop smooth, user-friendly mobile applications.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                    <p className="text-gray-600">Create visually appealing and easy-to-use designs.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;

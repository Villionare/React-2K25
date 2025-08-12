import React from "react";
import { Outlet } from "react-router-dom";

function About() {
    return (
        <div className="bg-gray-50 pt-20 min-h-screen px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
                <p className="text-gray-600 leading-relaxed">
                    We are passionate about delivering high-quality web and mobile solutions for our clients.
                    Our mission is to combine technology with creativity to create outstanding products.
                </p>
            </div>
        </div>
        // <Outlet />
    );
}

export default About;

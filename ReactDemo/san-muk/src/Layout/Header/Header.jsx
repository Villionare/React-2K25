import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-teal-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="text-xl font-bold tracking-wide">MyBrand</span>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-teal-400 transition">Home</Link>
                    <Link to="/account" className="hover:text-teal-400 transition">Account</Link>
                    <Link to="/services" className="hover:text-teal-400 transition">Services</Link>
                    <Link to="/about/contact" className="hover:text-teal-400 transition">Contact</Link>
                    <Link to="/about" className="hover:text-teal-400 transition">About Us</Link>
                </nav>

                {/* Login/Signup */}
                <div className="flex space-x-4">
                    <Link
                        to="/login"
                        className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-lg transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-4 py-2 rounded-lg transition"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;

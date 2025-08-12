import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="bg-gray-50 mt-10">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-teal-500 to-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
                    {/* Text */}
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Welcome to <span className="text-yellow-300">MyBrand</span>
                        </h1>
                        <p className="text-lg opacity-90">
                            We help you create modern, responsive, and fast web applications with ease.
                        </p>
                        <div className="space-x-4">
                            <Link
                                to="/services"
                                className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
                            >
                                Explore Services
                            </Link>
                            <Link
                                to="/about"
                                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 mt-10 md:mt-0">
                        <img
                            src="https://placehold.co/600x400"
                            alt="Hero"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Features / Services Preview */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Our Key Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-teal-500 mb-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                        <p className="text-gray-600">
                            Build modern, responsive websites tailored to your business needs.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-blue-500 mb-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m-6-8h6" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                        <p className="text-gray-600">
                            Create fast, smooth, and user-friendly mobile applications.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-yellow-500 mb-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-16H3l9 16z" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                        <p className="text-gray-600">
                            Craft visually appealing and highly usable interface designs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-900 text-white py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
                    <p className="mb-6 opacity-90">
                        Let’s work together to create something amazing for your brand.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-teal-500 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;

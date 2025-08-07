import React, { useState } from 'react';

// Main application component to demonstrate the CommonForm
const MainApp = () => {
    // Define configurations for different forms
    const loginFormConfig = {
        inputs: [
            { id: 'username', type: 'text', name: 'username', placeholder: 'Username', required: true, label: 'Username' },
            { id: 'password', type: 'password', name: 'password', placeholder: 'Password', required: true, label: 'Password' },
        ],
        buttons: [
            { type: 'submit', text: 'Login', style: 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md' },
            { type: 'button', text: 'Forgot Password?', style: 'text-blue-500 font-semibold' },
        ],
    };

    const profileFormConfig = {
        inputs: [
            { id: 'firstName', type: 'text', name: 'firstName', placeholder: 'John', required: true, label: 'First Name' },
            { id: 'lastName', type: 'text', name: 'lastName', placeholder: 'Doe', required: true, label: 'Last Name' },
            { id: 'email', type: 'email', name: 'email', placeholder: 'john.doe@example.com', required: true, label: 'Email Address' },
            { id: 'bio', type: 'textarea', name: 'bio', placeholder: 'Tell us about yourself...', label: 'Bio' },
        ],
        buttons: [
            { type: 'submit', text: 'Save Profile', style: 'bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md' },
            { type: 'reset', text: 'Reset', style: 'bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md' },
        ],
    };

    // Define a generic submit handler
    const handleFormSubmit = (formData) => {
        console.log('Form submitted with data:', formData);
        // You would typically send this data to a server here.
        // For this example, we just log it.
        alert('Form submitted! Check the console for data.');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
            <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg space-y-8">
                <h1 className="text-3xl font-bold text-center text-gray-800">Dynamic Form Component Example</h1>

                {/* Example 1: Login Form */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Login</h2>
                    <CommonForm
                        inputs={loginFormConfig.inputs}
                        buttons={loginFormConfig.buttons}
                        onSubmit={handleFormSubmit}
                    />
                </div>

                {/* Example 2: Profile Update Form */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Edit Profile</h2>
                    <CommonForm
                        inputs={profileFormConfig.inputs}
                        buttons={profileFormConfig.buttons}
                        onSubmit={handleFormSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

// The CommonForm component
// It takes inputs (array of objects), buttons (array of objects), and an onSubmit function as props.
const CommonForm = ({ inputs, buttons, onSubmit }) => {
    // Initialize state from the inputs prop
    const initialState = inputs.reduce((acc, input) => {
        acc[input.name] = '';
        return acc;
    }, {});

    console.log(initialState);

    const [formData, setFormData] = useState(initialState);

    // Handle changes to form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Map over the inputs array to dynamically render form fields */}
            {inputs.map((input) => (
                <div key={input.id} className="space-y-1">
                    {input.label && (
                        <label htmlFor={input.id} className="block text-sm font-medium text-gray-700">
                            {input.label}
                        </label>
                    )}
                    {/* Use a switch statement or conditional rendering to handle different input types */}
                    {input.type === 'textarea' ? (
                        <textarea
                            id={input.id}
                            name={input.name}
                            value={formData[input.name]}
                            onChange={handleChange}
                            placeholder={input.placeholder}
                            required={input.required}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                            rows="4"
                        />
                    ) : (
                        <input
                            id={input.id}
                            type={input.type}
                            name={input.name}
                            value={formData[input.name]}
                            onChange={handleChange}
                            placeholder={input.placeholder}
                            required={input.required}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                        />
                    )}
                </div>
            ))}

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        type={button.type}
                        className={`px-4 py-2 font-bold rounded-md transition-colors duration-200 ${button.style}`}
                    >
                        {button.text}
                    </button>
                ))}
            </div>
        </form>
    );
};

export default MainApp;

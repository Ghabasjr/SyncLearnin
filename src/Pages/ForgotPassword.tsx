import React from 'react';

const ForgotPassword = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md flex flex-col items-center space-y-6">
                <h1 className="font-bold text-2xl text-gray-800">Forgot Password</h1>
                <p className="text-gray-600 text-center">Enter your email to reset your password</p>

                <div className="w-full">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-100"
                        aria-label="Email"
                    />
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ForgotPassword;

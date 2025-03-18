import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useLoginMutation } from "../api/use-auth";

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const loginMutation = useLoginMutation();

    // Validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters"),
    });

    // Handle form submission
    const handleSubmit = (values: any, { setSubmitting }) => {
        setIsLoading(true);
        loginMutation.mutate(values, {
            onSuccess: (response) => {
                console.log("Login response:", response);

                // Check if response.status is 200 before navigating
                if (response?.status === 200) {
                    toast.success("Login successful!");

                    // Store token and user details in sessionStorage
                    sessionStorage.setItem("token", response?.data?.token);
                    sessionStorage.setItem("user", JSON.stringify(response?.data?.user));

                    // Navigate to Dashboard
                    navigate("/dashboard");
                } else {
                    toast.error(response?.message || "Login failed");
                }
            },
            onError: (error) => {
                console.error("Login error:", error);
                toast.error("Login failed. Please check your credentials.");
            },
            onSettled: () => {
                setIsLoading(false);
                setSubmitting(false);
            },
        });
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full p-4">
            {/* Left Side - Only Visible on Medium Screens & Up */}
            <div className="hidden md:flex w-1/2 h-full flex-col justify-center items-center bg-[#23CE6B] p-10 text-white">
                <div className="flex flex-col items-center space-y-4">
                    <img src="/Group 1516.svg" alt="Logo" />
                    <img className="filter invert" src="/SyncLearn.svg" alt="SyncLearn logo" />
                </div>

                {/* Text Section */}
                <div className="flex flex-col items-center text-center mt-10 space-y-4">
                    <h1 className="text-2xl font-bold">
                        Kick Start Your Learning Journey with our Top Courses
                    </h1>
                    <p className="text-sm font-medium">
                        Take charge of your future with courses designed to help students succeed!
                        Whether you're preparing for exams, exploring new subjects, or building skills
                        for your dream career, our expert-led programs make learning engaging and effective.
                        Start today and unlock endless opportunities!
                    </p>
                </div>
            </div>

            {/* Right Side - Form Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
                <h1 className="text-3xl font-semibold text-black mb-6">Welcome Back</h1>

                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="w-full max-w-md space-y-4">
                            {/* Email Field */}
                            <div>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full bg-gray-100 rounded-xl p-3 border focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="w-full bg-gray-100 rounded-xl p-3 border focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Forgot Password Link */}
                            <div className="text-right">
                                <a href="forgotpassword" className="text-green-600 hover:underline">Forgot Password?</a>
                            </div>

                            {/* Submit Button with Spinner */}
                            <button
                                type="submit"
                                disabled={isSubmitting || isLoading}
                                className="w-full bg-[#23CE6B] text-white rounded-xl p-3 font-semibold hover:bg-green-600 flex justify-center items-center"
                            >
                                {isLoading ? <span className="loading loading-spinner"></span> : "Log In"}
                            </button>
                        </Form>
                    )}
                </Formik>

                {/* Sign Up Link */}
                <div className="mt-4 text-center">
                    <span className="text-gray-600">Don't have an account? </span>
                    <a href="signup" className="text-green-600 font-semibold hover:underline">Sign Up</a>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Login;

import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const SignUp = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    // Validation schema using Yup
    const validationSchema = Yup.object({
        username: Yup.string()
            .required("Username is required")
            .min(3, "Username must be at least 3 characters"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters"),
        confirmPassword: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref("password"), ""], "Passwords must match"),
    });

    // Handle form submission
    const handleSubmit = (values, { setSubmitting }) => {
        setIsLoading(true);
        setTimeout(() => {
            console.log("Form values:", values);
            setIsLoading(false);
            setSubmitting(false);
            navigate("/otppage"); // Navigate to OTP page
        }, 2000); // Simulating API request
    };

    return (
        <div className="flex min-h-screen w-full">
            {/* Left Side - Form */}
            <div className="w-1/2 h-full flex flex-col justify-center items-center p-10 bg-white ">
                <h1 className="text-3xl font-semibold text-black mb-6">Sign Up</h1>

                <Formik
                    initialValues={{
                        username: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="w-full max-w-md space-y-4">
                            {/* Username Field */}
                            <div>
                                <Field
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2"
                                />
                                <ErrorMessage
                                    name="username"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2"
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
                                    className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <Field
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2"
                                />
                                <ErrorMessage
                                    name="confirmPassword"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Submit Button with Spinner */}
                            <button
                                type="submit"
                                disabled={isSubmitting || isLoading}
                                className="btn btn-success bg-[#23CE6B] w-full rounded-xl text-black flex justify-center items-center p-2"
                            >
                                {isLoading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                            </button>
                        </Form>
                    )}
                </Formik>
                <span className="mt-4 flex items-start justify-start">Already have an account? <a href="/login">Log In</a></span>
            </div>

            {/* Right Side - Image & Text */}
            <div className="hidden w-1/2 h-full md:flex flex-col justify-center items-center bg-[#23CE6B] p-10 text-center text-white">
                {/* Image Section */}
                <div className="mb-6">
                    <img src="Group 1427.png" alt="Learning logo" className="w-48 md:w-64" />
                </div>

                {/* Text Section */}
                <div className="max-w-lg flex flex-col items-center space-y-6">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        Kick-Start Your Learning Journey with Our Top Courses
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed">
                        Take charge of your future with courses designed to help students succeed! Whether you're
                        preparing for exams, exploring new subjects, or building skills for your dream career, our
                        expert-led programs make learning engaging and effective. <br />Start today and unlock endless opportunities!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

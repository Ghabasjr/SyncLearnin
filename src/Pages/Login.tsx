import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

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
            <div className="hidden w-1/2 mt-10 rounded-sm h-full md:flex flex-col justify-center items-center bg-[#23CE6B] p-10 text-center text-white">
                {/* Image Section */}
                <img className="filter invert" src="/SyncLearn.svg" alt="SyncLearn logo" />

                <div className="flex flex-col space-y-4 items-center mt-60">
                    <h1 className="text-2xl font-bold">Kick Start Your Learning Journey with our Top Courses</h1>
                    <p className="text-sm font-medium">Take charge of your future with courses designed to help students succeed!
                        Whether you're preparing for exams, exploring new subjects,
                        or building skills for your dream career, our expert-led programs make
                        learning engaging and effective.
                        Start today and unlock endless opportunities!</p>
                </div>

                {/* Text Section */}
                <div className="max-w-lg flex flex-col items-center space-y-6"></div>
            </div>

            {/* Right Side - Image & Text */}
            <div className="w-1/2 h-full mt-10 flex flex-col justify-center items-center p-10 bg-white">
                <h1 className="text-3xl font-semibold text-black mb-6">Welcome Back</h1>

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

                            <div><a href="forgotpassword">Forgot Password</a></div>

                            {/* Submit Button with Spinner */}
                            <button
                                type="submit"
                                disabled={isSubmitting || isLoading}
                                className="btn btn-success bg-[#23CE6B] w-full rounded-xl text-black flex justify-center items-center p-2"
                            >
                                {isLoading ? <span className="loading loading-spinner"></span> : "Log In"}
                            </button>
                        </Form>
                    )}
                </Formik>
                <div className="flex mt-4 items-start justify-start">
                    Don't have an account? <a href="signup">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;

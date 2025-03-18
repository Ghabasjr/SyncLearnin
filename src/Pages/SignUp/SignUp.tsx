import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useSignUpMutation } from "../../api/use-auth";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const signupMutation = useSignUpMutation();

    const validationSchema = Yup.object({
        fullname: Yup.string().required("Full name is required"),
        phone_number: Yup.string()
            .matches(/^\d+$/, "Phone number must be numeric")
            .required("Phone number is required"),
        role: Yup.string().required("Role is required"),
        level: Yup.string().required("Level is required"),
        dob: Yup.date().required("Date of birth is required"),
        location: Yup.string().required("Location is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        gender: Yup.string().oneOf(["Male", "Female"], "Select a valid gender"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters"),
        confirm_password: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref("password"), ""], "Passwords must match"),
    });

    const handleSubmit = async (values: any, { setSubmitting }) => {
        setIsLoading(true);
        signupMutation.mutate(values, {
            onSuccess: (response) => {
                console.log("response", response)
                toast.success("Sign up successful", response?.data?.message);
                navigate("/otppage", { state: { email: values.email } });
                setIsLoading(false);
                setSubmitting(false);
            },
            onError: (error) => {
                toast.error(error?.message || "An error occurred");
                setIsLoading(false);
                setSubmitting(false);
            }
        });
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full ">
            {/* Left Side - Only Visible on Medium Screens & Up */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-6 md:p-10 bg-white">
                <h1 className="text-3xl font-semibold text-black mb-6">Sign Up</h1>
                <Formik
                    initialValues={{
                        fullname: "",
                        phone_number: "",
                        role: "",
                        level: "",
                        dob: "",
                        location: "",
                        email: "",
                        gender: "",
                        password: "",
                        confirm_password: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="w-full max-w-md space-y-4">
                            <Field type="text" name="fullname" placeholder="Full Name" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2" />
                            <ErrorMessage name="fullname" component="div" className="text-red-500 text-sm mt-1" />

                            <Field type="text" name="phone_number" placeholder="Phone Number" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2" />
                            <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm mt-1" />

                            <Field as="select" name="role" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2">
                                <option value="">Select Role</option>
                                <option value="Student">Student</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Administrator">Administrator</option>
                            </Field>
                            <ErrorMessage name="role" component="div" className="text-red-500 text-sm mt-1" />

                            <Field as="select" name="level" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2">
                                <option value="">Select Level</option>
                                <option value="Beginner">Primary</option>
                                <option value="Intermediate">Secondary</option>
                                <option value="Advanced">Advanced</option>
                            </Field>
                            <ErrorMessage name="level" component="div" className="text-red-500 text-sm mt-1" />


                            <Field type="date" name="dob" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2" />
                            <ErrorMessage name="dob" component="div" className="text-red-500 text-sm mt-1" />

                            <Field type="text" name="location" placeholder="Location" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2" />
                            <ErrorMessage name="location" component="div" className="text-red-500 text-sm mt-1" />

                            <Field type="email" name="email" placeholder="Email" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2" />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />

                            <Field as="select" name="gender" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2">
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Field>
                            <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />

                            <Field type="password" name="password" placeholder="Password" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2" />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />

                            <Field type="password" name="confirm_password" placeholder="Confirm Password" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2" />
                            <ErrorMessage name="confirm_password" component="div" className="text-red-500 text-sm mt-1" />

                            <button type="submit" disabled={isSubmitting || isLoading} className="btn btn-success bg-[#23CE6B] w-full rounded-xl text-black flex justify-center items-center p-2">
                                {isLoading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                            </button>
                        </Form>
                    )}
                </Formik>
                <div className="mt-4 text-center">
                    <span className="text-gray-600">Already have an account? <a href="/login" className="text-green-600 font-semibold hover:underline">Log In</a></span>
                </div>
            </div>
            {/* Hidden on mobile */}
            <div className="hidden md:flex flex-col items-center justify-center bg-green-500 text-white p-6 rounded-lg shadow-lg">
                <img src="/Group 1427.png" alt="Sign Up" className="w-3/4 h-auto object-cover mb-4" />
                <div className="flex flex-col space-x-4 items-center justify-center">

                    <h1 className="text-2xl font-bold text-center mb-2 mt-8">
                        Kick Start Your Learning Journey with Our Top Courses
                    </h1>
                    <p className="text-center text-lg leading-relaxed max-w-md">
                        Boost your learning, ace your exams, and explore new skills—all in one place.
                        Fun, engaging, and built for your success. Start now and shape your future!
                    </p>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default SignUp;

import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useSignUpMutation } from "../../api/use-auth";
import { toast } from "react-toastify";

const SignUp = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const signupMutation = useSignUpMutation();

    // Validation schema using Yup
    const validationSchema = Yup.object({
        firstname: Yup.string().required("First name is required"),
        lastname: Yup.string().required("Last name is required"),
        phone: Yup.string()
            .matches(/^\d+$/, "Phone number must be numeric")
            .required("Phone number is required"),
        role: Yup.string().required("Role is required"),
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

    // Handle form submission
    const handleSubmit = async (values: any, { setSubmitting }) => {
        setIsLoading(true);

        signupMutation.mutate(values, {
            onSuccess: (response) => {
                console.log("signup successful", response);
                toast.success("Sign up successful", response?.message);
                console.log("signup successful", response);
                navigate("/otppage");
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
        <div className="flex flex-col md:flex-row min-h-screen w-full p-4">
            <div className="w-1/2 h-full flex flex-col justify-center items-center p-10 bg-white ">
                <h1 className="text-3xl font-semibold text-black mb-6">Sign Up</h1>

                <Formik
                    initialValues={{
                        firstname: "",
                        lastname: "",
                        phone: "",
                        role: "",
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
                            <div>
                                <Field type="text" name="firstname" placeholder="First Name" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2" />
                                <ErrorMessage name="firstname" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <Field type="text" name="lastname" placeholder="Last Name" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2" />
                                <ErrorMessage name="lastname" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <Field type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2" />
                                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <Field type="text" name="role" placeholder="Role" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2" />
                                <ErrorMessage name="role" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <Field type="email" name="email" placeholder="Email" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2" />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <Field as="select" name="gender" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2">
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Field>
                                <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <Field type="password" name="password" placeholder="Password" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2" />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <Field type="password" name="confirm_password" placeholder="Confirm Password" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2" />
                                <ErrorMessage name="confirm_password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <button type="submit" disabled={isSubmitting || isLoading} className="btn btn-success bg-[#23CE6B] w-full rounded-xl text-black flex justify-center items-center p-2">
                                {isLoading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                            </button>
                        </Form>
                    )}
                </Formik>
                <div className="mt-4 text-center">

                    <span className="text-gray-600 mt-4 flex items-start justify-start">Already have an account?
                        <a href="/login" className="text-green-600 font-semibold hover:underline">Log In</a>
                    </span>
                </div>
            </div>
            <div className="hidden md:flex w-1/2 h-full flex-col justify-center items-center bg-[#23CE6B] p-10 text-white">
                <div className="mb-6">
                    <img src="Group 1427.png" alt="Learning logo" className="w-48 md:w-64" />
                </div>
                <div className="max-w-lg flex flex-col items-center space-y-6">
                    <h1 className="text-2xl md:text-3xl font-bold">Kick-Start Your Learning Journey with Our Top Courses</h1>
                    <p className="text-base md:text-lg leading-relaxed">Take charge of your future with courses designed to help students succeed! Whether you're preparing for exams, exploring new subjects, or building skills for your dream career, our expert-led programs make learning engaging and effective. <br />Start today and unlock endless opportunities!</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

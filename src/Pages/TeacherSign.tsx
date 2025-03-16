import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useSignUpMutation } from "../api/use-auth";
import { toast } from "react-toastify";

const SignUp = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const signupMutation = useSignUpMutation();

    // Validation schema using Yup
    const validationSchema = Yup.object({
        firstname: Yup.string().required("First name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        phone: Yup.string().matches(/^\d+$/, "Phone number must be numeric").required("Phone number is required"),
        state: Yup.string().required("State is required"),
        city: Yup.string().required("City is required"),
        dob: Yup.date().required("Date of Birth is required"),
        gender: Yup.string().oneOf(["Male", "Female"], "Select a valid gender"),
        degree: Yup.string().required("Degree is required"),
        password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
        confirm_password: Yup.string().required("Confirm Password is required").oneOf([Yup.ref("password"), ""], "Passwords must match"),
    });

    const handleSubmit = async (values: any, { setSubmitting }) => {
        setIsLoading(true);
        signupMutation.mutate(values, {
            onSuccess: (response) => {
                toast.success("Sign up successful");
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
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

                <Formik
                    initialValues={{
                        firstname: "",
                        email: "",
                        phone: "",
                        state: "",
                        city: "",
                        dob: "",
                        gender: "",
                        degree: "",
                        password: "",
                        confirm_password: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">
                            <Field type="text" name="firstname" placeholder="First Name" className="w-full p-2 bg-gray-200 rounded" />
                            <Field type="email" name="email" placeholder="Email" className="w-full p-2 bg-gray-200 rounded" />
                            <Field type="text" name="phone" placeholder="+234" className="w-full p-2 bg-gray-200 rounded" />

                            <div className="flex space-x-2">
                                <Field as="select" name="state" className="w-1/2 p-2 bg-gray-200 rounded">
                                    <option value="">State</option>
                                    {/* Add state options here */}
                                </Field>
                                <Field as="select" name="city" className="w-1/2 p-2 bg-gray-200 rounded">
                                    <option value="">City</option>
                                    {/* Add city options here */}
                                </Field>
                            </div>

                            <Field type="date" name="dob" placeholder="Date of Birth" className="w-full p-2 bg-gray-200 rounded" />

                            <div className="flex space-x-2">
                                <Field as="select" name="gender" className="w-1/2 p-2 bg-gray-200 rounded">
                                    <option value="">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Field>
                                <Field as="select" name="degree" className="w-1/2 p-2 bg-gray-200 rounded">
                                    <option value="">Degree</option>
                                    {/* Add degree options here */}
                                </Field>
                            </div>

                            <Field type="password" name="password" placeholder="Password" className="w-full p-2 bg-gray-200 rounded" />
                            <Field type="password" name="confirm_password" placeholder="Confirm Password" className="w-full p-2 bg-gray-200 rounded" />

                            <button type="submit" disabled={isSubmitting || isLoading} className="w-full p-2 bg-green-500 text-white font-bold rounded">
                                {isLoading ? "Loading..." : "Sign Up"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SignUp;

import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useSignUpMutation } from "../api/use-auth";
import { toast } from "react-toastify";

// Nigerian States and Cities Data
const nigerianStates = {
    Lagos: ["Ikeja", "Surulere", "Yaba", "Victoria Island"],
    Abuja: ["Garki", "Maitama", "Wuse"],
    Kano: ["Kano Municipal", "Fagge", "Tarauni", "Nassarawa"],
    Ogun: ["Abeokuta", "Sagamu", "Ijebu-Ode", "Ilaro"],
    Oyo: ["Ibadan", "Ogbomosho", "Iseyin", "Oyo"],
    Rivers: ["Port Harcourt", "Obio-Akpor", "Eleme"],
};

// Validation Schema
const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^\d+$/, "Phone number must be numeric").required("Phone is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    dob: Yup.date().required("Date of Birth is required"),
    gender: Yup.string().oneOf(["Male", "Female"], "Select a valid gender"),
    degree: Yup.string().required("Degree is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords must match")
        .required("Confirm Password is required"),
});

const SignUp = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const signupMutation = useSignUpMutation();

    // Form Submission Handler
    const handleSubmit = async (values, { setSubmitting }) => {
        setIsLoading(true);
        signupMutation.mutate(values, {
            onSuccess: () => {
                toast.success("Sign up successful!");
                navigate("/otppage");
                setIsLoading(false);
                setSubmitting(false);
            },
            onError: (error) => {
                toast.error(error?.message || "An error occurred");
                setIsLoading(false);
                setSubmitting(false);
            },
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
                    {({ values, isSubmitting, setFieldValue }) => (
                        <Form className="space-y-4">
                            <Field type="text" name="firstname" placeholder="First Name" className="w-full p-2 bg-gray-200 rounded" />
                            <ErrorMessage name="firstname" component="div" className="text-red-500 text-sm" />

                            <Field type="email" name="email" placeholder="Email" className="w-full p-2 bg-gray-200 rounded" />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                            <Field type="text" name="phone" placeholder="Phone" className="w-full p-2 bg-gray-200 rounded" />
                            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />

                            {/* State & City Dropdowns */}
                            <div className="flex space-x-2">
                                <Field
                                    as="select"
                                    name="state"
                                    className="w-1/2 p-2 bg-gray-200 rounded"
                                    onChange={(e) => {
                                        setFieldValue("state", e.target.value);
                                        setFieldValue("city", ""); // Reset city
                                    }}
                                >
                                    <option value="">Select State</option>
                                    {Object.keys(nigerianStates).map((state) => (
                                        <option key={state} value={state}>
                                            {state}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name="state" component="div" className="text-red-500 text-sm" />

                                <Field as="select" name="city" className="w-1/2 p-2 bg-gray-200 rounded">
                                    <option value="">Select City</option>
                                    {values.state &&
                                        nigerianStates[values.state]?.map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                </Field>
                                <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                            </div>

                            <Field type="date" name="dob" className="w-full p-2 bg-gray-200 rounded" />
                            <ErrorMessage name="dob" component="div" className="text-red-500 text-sm" />

                            {/* Gender & Degree Dropdowns */}
                            <div className="flex space-x-2">
                                <Field as="select" name="gender" className="w-1/2 p-2 bg-gray-200 rounded">
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Field>
                                <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />

                                <Field as="select" name="degree" className="w-1/2 p-2 bg-gray-200 rounded">
                                    <option value="">Select Degree</option>
                                    <option value="NCE">NCE</option>
                                    <option value="BSc">BSc</option>
                                    <option value="MSc">MSc</option>
                                    <option value="PhD">PhD</option>
                                </Field>
                                <ErrorMessage name="degree" component="div" className="text-red-500 text-sm" />
                            </div>

                            <Field type="password" name="password" placeholder="Password" className="w-full p-2 bg-gray-200 rounded" />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

                            <Field type="password" name="confirm_password" placeholder="Confirm Password" className="w-full p-2 bg-gray-200 rounded" />
                            <ErrorMessage name="confirm_password" component="div" className="text-red-500 text-sm" />

                            <button
                                type="submit"
                                disabled={isSubmitting || isLoading}
                                className="w-full p-2 bg-green-500 text-white font-bold rounded"
                            >
                                {isLoading || isSubmitting ? <span className="loading loading-spinner"></span> : "Sign Up"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SignUp;

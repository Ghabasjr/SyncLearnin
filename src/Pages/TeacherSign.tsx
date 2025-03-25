// import { useNavigate } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useState } from "react";
// import { useSignUpMutation } from "../api/use-auth";
// import { toast } from "react-toastify";

// // Nigerian States and Cities Data
// const nigerianStates = {
//     Lagos: ["Ikeja", "Surulere", "Yaba", "Victoria Island"],
//     Abuja: ["Garki", "Maitama", "Wuse"],
//     Kano: ["Kano Municipal", "Fagge", "Tarauni", "Nassarawa"],
//     Ogun: ["Abeokuta", "Sagamu", "Ijebu-Ode", "Ilaro"],
//     Oyo: ["Ibadan", "Ogbomosho", "Iseyin", "Oyo"],
//     Rivers: ["Port Harcourt", "Obio-Akpor", "Eleme"],
// };

// // Validation Schema
// const validationSchema = Yup.object({
//     firstname: Yup.string().required("First name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     phone: Yup.string().matches(/^\d+$/, "Phone number must be numeric").required("Phone is required"),
//     state: Yup.string().required("State is required"),
//     city: Yup.string().required("City is required"),
//     dob: Yup.date().required("Date of Birth is required"),
//     gender: Yup.string().oneOf(["Male", "Female"], "Select a valid gender"),
//     degree: Yup.string().required("Degree is required"),
//     password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
//     confirm_password: Yup.string()
//         .oneOf([Yup.ref("password"), ""], "Passwords must match")
//         .required("Confirm Password is required"),
// });

// const SignUp = () => {
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(false);
//     const signupMutation = useSignUpMutation();

//     // Form Submission Handler
//     const handleSubmit = async (values, { setSubmitting }) => {
//         setIsLoading(true);
//         signupMutation.mutate(values, {
//             onSuccess: () => {
//                 toast.success("Sign up successful!");
//                 navigate("/otppage");
//                 setIsLoading(false);
//                 setSubmitting(false);
//             },
//             onError: (error) => {
//                 toast.error(error?.message || "An error occurred");
//                 setIsLoading(false);
//                 setSubmitting(false);
//             },
//         });
//     };

//     return (
//         <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
//             <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
//                 <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

//                 <Formik
//                     initialValues={{
//                         firstname: "",
//                         email: "",
//                         phone: "",
//                         state: "",
//                         city: "",
//                         dob: "",
//                         gender: "",
//                         degree: "",
//                         password: "",
//                         confirm_password: "",
//                     }}
//                     validationSchema={validationSchema}
//                     onSubmit={handleSubmit}
//                 >
//                     {({ values, isSubmitting, setFieldValue }) => (
//                         <Form className="space-y-4">
//                             <Field type="text" name="firstname" placeholder="First Name" className="w-full p-2 bg-gray-200 rounded" />
//                             <ErrorMessage name="firstname" component="div" className="text-red-500 text-sm" />

//                             <Field type="email" name="email" placeholder="Email" className="w-full p-2 bg-gray-200 rounded" />
//                             <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

//                             <Field type="text" name="phone" placeholder="Phone" className="w-full p-2 bg-gray-200 rounded" />
//                             <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />

//                             {/* State & City Dropdowns */}
//                             <div className="flex space-x-2">
//                                 <Field
//                                     as="select"
//                                     name="state"
//                                     className="w-1/2 p-2 bg-gray-200 rounded"
//                                     onChange={(e) => {
//                                         setFieldValue("state", e.target.value);
//                                         setFieldValue("city", ""); // Reset city
//                                     }}
//                                 >
//                                     <option value="">Select State</option>
//                                     {Object.keys(nigerianStates).map((state) => (
//                                         <option key={state} value={state}>
//                                             {state}
//                                         </option>
//                                     ))}
//                                 </Field>
//                                 <ErrorMessage name="state" component="div" className="text-red-500 text-sm" />

//                                 <Field as="select" name="city" className="w-1/2 p-2 bg-gray-200 rounded">
//                                     <option value="">Select City</option>
//                                     {values.state &&
//                                         nigerianStates[values.state]?.map((city) => (
//                                             <option key={city} value={city}>
//                                                 {city}
//                                             </option>
//                                         ))}
//                                 </Field>
//                                 <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
//                             </div>

//                             <Field type="date" name="dob" className="w-full p-2 bg-gray-200 rounded" />
//                             <ErrorMessage name="dob" component="div" className="text-red-500 text-sm" />

//                             {/* Gender & Degree Dropdowns */}
//                             <div className="flex space-x-2">
//                                 <Field as="select" name="gender" className="w-1/2 p-2 bg-gray-200 rounded">
//                                     <option value="">Select Gender</option>
//                                     <option value="Male">Male</option>
//                                     <option value="Female">Female</option>
//                                 </Field>
//                                 <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />

//                                 <Field as="select" name="degree" className="w-1/2 p-2 bg-gray-200 rounded">
//                                     <option value="">Select Degree</option>
//                                     <option value="NCE">NCE</option>
//                                     <option value="BSc">BSc</option>
//                                     <option value="MSc">MSc</option>
//                                     <option value="PhD">PhD</option>
//                                 </Field>
//                                 <ErrorMessage name="degree" component="div" className="text-red-500 text-sm" />
//                             </div>

//                             <Field type="password" name="password" placeholder="Password" className="w-full p-2 bg-gray-200 rounded" />
//                             <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

//                             <Field type="password" name="confirm_password" placeholder="Confirm Password" className="w-full p-2 bg-gray-200 rounded" />
//                             <ErrorMessage name="confirm_password" component="div" className="text-red-500 text-sm" />

//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting || isLoading}
//                                 className="w-full p-2 bg-green-500 text-white font-bold rounded"
//                             >
//                                 {isLoading || isSubmitting ? <span className="loading loading-spinner"></span> : "Sign Up"}
//                             </button>
//                         </Form>
//                     )}
//                 </Formik>
//             </div>
//         </div>
//     );
// };

// export default SignUp;


import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useSignUpMutation } from "../api/use-auth";
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
                navigate("/otppage",
                    { state: { email: values.email } }
                );
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
                                <option value="Teacher">Teacher</option>
                                {/* <option value="Administrator">Administrator</option> */}
                            </Field>
                            <ErrorMessage name="role" component="div" className="text-red-500 text-sm mt-1" />

                            <Field as="select" name="level" className="input input-bordered w-full bg-[#EAEAEA] rounded-xl p-2">
                                <option value="">Select Level</option>
                                <option value="Diploma">Diploma</option>
                                <option value="NCE">NCE</option>
                                <option value="Bsc">B.sc</option>
                                <option value="Msc">M.sc</option>
                                <option value="P.hd">P.hd</option>
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

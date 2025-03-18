import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { useVerifyEmailMutation } from "../../api/use-auth";
import { toast } from "react-toastify";

const OtpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    otp: Yup.array()
        .of(Yup.string().matches(/\d$/, "Must be a number").required("Required"))
        .length(6, "OTP must be exactly 6 digits"),
});

const OtpPage = () => {
    const inputRefs = useRef([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const verifyEmail = useVerifyEmailMutation();

    const isForgotPassword = location.pathname.includes("forgot-password");

    const handleOtpVerification = (values: any) => {
        setLoading(true);
        verifyEmail.mutate(values, {
            onSuccess: (response) => {
                console.log("OTP verified:", response);
                if (response?.success && response?.message === "OTP verified") {
                    toast.success(response?.message);
                    navigate("/reset-password");
                } else {
                    toast.error(response?.message || "OTP verification failed");
                }
            },
            onError: (error) => {
                console.error("OTP verification failed:", error);
                toast.error("OTP verification failed. Please check your OTP.");
            },
            onSettled: () => setLoading(false),
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <img src="/Group 1464.png" alt="Email OTP" className="w-32 mb-6" />
            <h1 className="text-2xl font-semibold mb-4">
                {isForgotPassword ? "Reset Password OTP" : "Enter OTP"}
            </h1>
            <Formik
                initialValues={{ email: "", otp: ["", "", "", "", "", ""] }}
                validationSchema={OtpSchema}
                onSubmit={handleOtpVerification}
            >
                {({ values, setFieldValue }) => {
                    const isButtonDisabled = values.otp.some((val) => val === "");
                    return (
                        <Form className="flex flex-col items-center">
                            <div className="mb-4 w-full max-w-md">
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full p-2"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="flex space-x-2 mb-2">
                                {values.otp.map((_, index) => (
                                    <Field
                                        key={index}
                                        type="text"
                                        name={`otp[${index}]`}
                                        maxLength="1"
                                        className="input input-bordered w-10 h-10 text-center text-lg"
                                        innerRef={(el) => (inputRefs.current[index] = el)}
                                        onChange={(e) => {
                                            const { value } = e.target;
                                            if (/^\d?$/.test(value)) {
                                                setFieldValue(`otp[${index}]`, value);
                                                if (value && index < 5) {
                                                    inputRefs.current[index + 1]?.focus();
                                                }
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "Backspace" && !values.otp[index] && index > 0) {
                                                inputRefs.current[index - 1]?.focus();
                                            }
                                        }}
                                    />
                                ))}
                            </div>
                            <button
                                type="submit"
                                className={`btn w-64 mt-4 ${isButtonDisabled ? "btn-disabled" : "btn-success"}`}
                                disabled={isButtonDisabled || loading}
                            >
                                {loading ? <span className="loading loading-spinner"></span> : "Verify"}
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default OtpPage;

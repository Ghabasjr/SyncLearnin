import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { useVerifyEmailMutation } from "../../api/use-auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const OtpSchema = Yup.object().shape({
    otp: Yup.array()
        .of(Yup.string().matches(/^\d$/, "Must be a number").required("Required"))
        .length(6, "OTP must be exactly 6 digits"),
});

const OtpPage = () => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const verifyEmail = useVerifyEmailMutation();

    // Retrieve email from location.state
    const email = location.state?.email || "";

    useEffect(() => {
        if (!email) {
            toast.error("No email provided. Redirecting...");
            navigate("/enter-email"); // Redirect if email is missing
        }
    }, [email, navigate]);

    const handleOtpVerification = (values: { otp: string[] }) => {
        setLoading(true);
        const otpCode = values.otp.join("");

        verifyEmail.mutate(
            { email, code: otpCode },
            {
                onSuccess: (response) => {
                    toast.success(response?.message || "OTP verified successfully");
                    navigate("/dashboard");
                },
                onError: () => {
                    toast.error("OTP verification failed. Please check your OTP.");
                },
                onSettled: () => setLoading(false),
            }
        );
    };

    if (!email) return null; // Prevent rendering if redirect is about to happen

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <img src="/Group 1464.png" alt="Email OTP" className="w-32 mb-6" />
            <h1 className="text-2xl font-semibold mb-4">Enter OTP</h1>
            <Formik
                initialValues={{ otp: ["", "", "", "", "", ""] }}
                validationSchema={OtpSchema}
                onSubmit={handleOtpVerification}
            >
                {({ values, setFieldValue }) => {
                    const isButtonDisabled = values.otp.some((val) => val === "");

                    return (
                        <Form className="flex flex-col items-center">
                            {/* Hidden email field */}
                            <Field type="hidden" name="email" value={email} />

                            <div className="flex space-x-2 mb-2">
                                {values.otp.map((_, index) => (
                                    <Field
                                        key={index}
                                        type="text"
                                        name={`otp[${index}]`}
                                        maxLength="1"
                                        className="input input-bordered w-10 h-10 text-center text-lg"
                                        innerRef={(el: HTMLInputElement | null) => (inputRefs.current[index] = el)}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const { value } = e.target;
                                            if (/^\d?$/.test(value)) {
                                                setFieldValue(`otp[${index}]`, value);
                                                if (value && index < 5) {
                                                    inputRefs.current[index + 1]?.focus();
                                                }
                                            }
                                        }}
                                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
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
            <ToastContainer />
        </div>
    );
};

export default OtpPage;

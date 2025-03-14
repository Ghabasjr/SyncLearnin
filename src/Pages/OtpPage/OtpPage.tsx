import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const OtpSchema = Yup.object().shape({
    otp: Yup.array()
        .of(Yup.string().matches(/^\d$/, "Must be a number").required("Required"))
        .length(6, "OTP must be exactly 6 digits"),
});

const OtpPage = () => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            {/* Image */}
            <img src="/Group 1464.png" alt="Email OTP" className="w-32 mb-6" />

            {/* OTP Heading */}
            <h1 className="text-2xl font-semibold mb-4">Enter OTP</h1>

            {/* Formik Form */}
            <Formik
                initialValues={{ otp: ["", "", "", "", "", ""] }}
                validationSchema={OtpSchema}
                onSubmit={(values) => {
                    setLoading(true);
                    setTimeout(() => {
                        console.log("OTP Submitted:", values.otp.join(""));
                        setLoading(false);
                        navigate("/dashboard");
                    }, 2000); // Simulate API call
                }}
            >
                {({ values, setFieldValue }) => {
                    const isButtonDisabled = values.otp.some((val) => val === "");

                    return (
                        <Form className="flex flex-col items-center">
                            {/* OTP Input Fields */}
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

                            {/* Verify Button with Loading Spinner */}
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

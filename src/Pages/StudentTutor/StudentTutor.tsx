import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const StudentTutor = () => {
    const navigate = useNavigate();

    const handleStudent = () => {
        navigate('/signup')
    };
    const handleTutor = () => {
        navigate('/teachersign')
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center space-y-3 mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Welcome to SyncLearn</h1>
                <p className="text-lg font-medium text-gray-600">
                    Please select one option below to proceed
                </p>
            </div>

            {/* Options Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {/* Student Option */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-64 h-44 bg-[url('/body.svg')] bg-cover bg-center rounded-lg shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center"
                    onClick={handleStudent}
                >
                    <p className="text-xl text-white font-semibold">Student</p>
                </motion.div>

                {/* Tutor Option */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-64 h-44 bg-[url('/Tutorpic.svg')] bg-cover bg-center rounded-lg shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center"
                    onClick={handleTutor}
                >
                    <p className="text-xl text-white font-semibold">Tutor</p>
                </motion.div>
            </div>
        </div>
    );
};

export default StudentTutor;

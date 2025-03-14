import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';


const StudentTutor = () => {
    const navigate = useNavigate();

    const handleStudent = () => {
        navigate('/signup')
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-100">
            <div className="flex p-6 rounded-lg space-x-6 ">
                <motion.div initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="bg-[url('/body.svg')] bg-cover bg-center p-6 shadow-md rounded-lg text-center hover:bg-gray-200">
                    <div onClick={handleStudent} className="w-64 h-40 flex items-center justify-center cursor-pointer  transition">
                        <p className="text-xl text-white mt-20 font-semibold">
                            Student
                        </p>
                    </div>
                </motion.div>

                <motion.div initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="bg-[url('/Tutorpic.svg')] bg-cover bg-center p-6 hover:bg-gray-200 shadow-md rounded-lg text-center">
                    <div onClick={handleStudent} className="w-64 h-40 flex items-center justify-center cursor-pointer  transition">

                        <p className="text-xl text-white mt-20 font-semibold">
                            Tutor
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default StudentTutor;

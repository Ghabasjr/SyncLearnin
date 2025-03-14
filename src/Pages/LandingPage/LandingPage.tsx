import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleStarted = () => {
        navigate('/studenttutor')
    };
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-[url('/body.svg')] bg-cover bg-center bg-no-repeat h-screen flex flex-col">
                <NavBar />
                <div className="flex flex-col items-center justify-center h-full text-white text-6xl md:text-7xl font-semibold text-center px-4 mt-40">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>
                        Learning Made Simple
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}>
                        Success Made Inevitable
                    </motion.h1>
                    <div className=' mt-4'>
                        <button onClick={handleStarted} className='btn btn-success w-40 h-12 text-white rounded-3xl'>Get Started</button>
                    </div>
                </div>

            </div>

            {/* Course Section */}
            <section className="flex flex-row items-center p-8 mt-8 space-x-20 items-center justify-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl font-semibold text-center text-gray-800">
                    Browse Our Best Courses
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className=" flex flex-row items-center space-x-4 items-center justify-center">

                    <img className='w-[200px] h-[200px]' src="/Group 1471.png" alt="calculus logo" />
                    <img className='w-[200px] h-[200px]' src="/Group 1474.png" alt="Linear Algebra" />
                    <img className='w-[200px] h-[200px]' src="/Group 1472.png" alt="cyber security" />
                </motion.div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-12 px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center text-5xl font-semibold mb-12">
                    WHY CHOOSE US
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="bg-white p-6 shadow-md rounded-lg text-center">
                        <img src="/Rectangle 80.png" alt="Comprehensive Course Library" className="mx-auto mb-4 w-24 h-24 object-cover" />
                        <h2 className="text-2xl font-bold">Comprehensive Course Library</h2>
                        <p className="text-gray-600 mt-2">From mathematics and science to business and the arts, we provide expertly crafted courses for students worldwide.</p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="bg-white p-6 shadow-md rounded-lg text-center">
                        <img src="/Group.png" alt="Flexible & Self-Paced" className="mx-auto mb-4 w-24 h-24 object-cover" />
                        <h2 className="text-2xl font-bold">Flexible & Self-Paced</h2>
                        <p className="text-gray-600 mt-2">Learn at your own convenience with 24/7 access to course materials, whether you're a student or a professional.</p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="bg-white p-6 shadow-md rounded-lg text-center">
                        <h2 className="text-2xl font-bold">Expert Instructors & Resources</h2>
                        <p className="text-gray-600 mt-2">Our courses are designed by experienced educators and industry experts, ensuring top-quality content.</p>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="bg-white p-6 shadow-md rounded-lg text-center">
                        <img src="unsplash_9dvb7vm6IS4.png" alt="Free & Accessible" className="mx-auto mb-4 w-24 h-24 object-cover" />
                        <h2 className="text-2xl font-bold">Free & Accessible</h2>
                        <p className="text-gray-600 mt-2">Education should be within reach for everyone! Our courses are free, with optional certifications.</p>
                    </motion.div>
                </div>
            </section>
            <div className='flex justify-center p-8 items-center mt-4'>
                <button onClick={handleStarted} className='btn btn-success text-white rounded-3xl'>Get Started</button>
            </div>
            {/* About Us Section */}
            <div className="flex flex-col md:flex-row justify-center items-center min-h-screen px-6 md:px-20">
                <img src="/Group 1491.png" alt="Student" className="max-w-sm w-full" />
                <div className="flex flex-col justify-center p-6 md:ml-10 text-center md:text-left">
                    <h1 className='font-semibold text-2xl md:text-3xl'>One Platform, Endless Learning</h1>
                    <p className='font-medium text-lg mt-4'>
                        Unlock your potential with a single platform that offers a vast selection of courses tailored to your interests and goals.
                        Whether you’re looking to upskill, switch careers, or explore a new passion, we’ve got something for everyone.
                        Learn at your own pace, anytime, anywhere. Start your journey today!
                    </p>
                </div>
            </div>


            {/* Testimonials Section */}
            <section className="py-12 px-6 md:px-12 text-center">
                <h1 className="font-bold text-4xl text-gray-800">Trusted by Students Around the Globe</h1>
                <h2 className="font-medium text-2xl text-gray-600 mt-2">What our tutors and students say about us</h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
                    {/* Testimonial 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="bg-white shadow-md rounded-lg p-6 text-left"
                    >
                        <div className="flex items-center space-x-4">
                            <img src="/_MG_2698.jpg" alt="Educator" className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <h3 className="font-bold text-lg">Alex Johnson</h3>
                                <p className="text-sm text-gray-500">Educator</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mt-4">"As an educator, I absolutely love using online educational platforms! The ability to share lectures, assignments, and quizzes effortlessly has made my job so much easier."</p>
                    </motion.div>

                    {/* Testimonial 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-white shadow-md rounded-lg p-6 text-left"
                    >
                        <div className="flex items-center space-x-4">
                            <img src="/_MG_2698.jpg" alt="Student" className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <h3 className="font-bold text-lg">Sarah Williams</h3>
                                <p className="text-sm text-gray-500">Student</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mt-4">"Learning through SyncLearn has been a life-saver for me! I can study at my own pace, revisit lessons anytime, and even take quizzes to test my knowledge."</p>
                    </motion.div>
                </div>
            </section>
            <div className='flex bg-[#D9D9D9] justify-around p-6 items-center mt-4'>
                <h1 className='font-semibold text-2xl'>Ready To Get Started With</h1>
                <button onClick={handleStarted} className='btn btn-success text-white rounded-3xl'>Get Started</button>
            </div>

            {/* Footer Section */}
            <div className='mt-4 p-6 space-y-2'>
                <Footer />
            </div>
        </div>
    );
}

export default LandingPage;

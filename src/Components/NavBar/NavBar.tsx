import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the menu toggle

const NavBar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignUp = () => {
        navigate("/studenttutor");
    };

    const handleLogin = () => {
        navigate("/studenttutor");
    };

    return (
        <header className="fixed top-0 left-0 w-full rounded-full shadow-md z-50">
            <nav className="flex justify-between items-center max-w-6xl mx-auto p-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img className="cursor-pointer w-10" src="/Group 1517.png" alt="" />
                    <img className="cursor-pointer w-32" src="/SyncLearn.svg" alt="SyncLearn Logo" />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Navigation Links (Desktop) */}
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <li className="hover:text-green-600 cursor-pointer">About Us</li>
                    <li className="hover:text-green-600 cursor-pointer">Courses</li>
                    <li className="hover:text-green-600 cursor-pointer">Contact Us</li>
                </ul>

                {/* Buttons (Desktop) */}
                <div className="hidden md:flex space-x-4">
                    <button
                        onClick={handleLogin}
                        className="px-4 py-2 border border-green-600 text-green-600 rounded-md cursor-pointer hover:bg-green-100 transition"
                    >
                        Log In
                    </button>
                    <button onClick={handleSignUp} className="btn btn-success">
                        Sign Up
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full p-4">
                    <ul className="flex flex-col space-y-4 text-gray-700 font-medium text-center">
                        <li className="hover:text-green-600 cursor-pointer">About Us</li>
                        <li className="hover:text-green-600 cursor-pointer">Courses</li>
                        <li className="hover:text-green-600 cursor-pointer">Contact Us</li>
                        <button
                            onClick={handleLogin}
                            className="w-full px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-100 transition"
                        >
                            Log In
                        </button>
                        <button onClick={handleSignUp} className="btn btn-success w-full">
                            Sign Up
                        </button>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default NavBar;

import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate("/signup");
    };

    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <header className="fixed top-0 left-0 w-full rounded-full mt-4 shadow-md z-50">
            <nav className="flex justify-between items-center max-w-6xl mx-auto p-4">
                <div className="flex">
                    <img className="cursor-pointer" src="/SyncLearn.svg" alt="synclearn Logo" />
                </div>
                {/* Navigation Links */}
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li className="hover:text-green-600 cursor-pointer">About Us</li>
                    <li className="hover:text-green-600 cursor-pointer">Courses</li>
                    <li className="hover:text-green-600 cursor-pointer">Contact Us</li>
                </ul>

                {/* Buttons */}
                <div className="flex space-x-4">
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
        </header>
    );
};

export default NavBar;

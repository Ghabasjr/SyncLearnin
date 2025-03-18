import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();



    const handleLogout = () => {
        navigate("/login");
        console.log("Logging out...");
    };
    return (
        <div className="fixed left-0 top-14 h-full w-16 md:w-64 bg-gray-200 shadow-lg flex flex-col p-6 transition-all duration-300">
            {/* Sidebar Items */}
            <div className="flex flex-col space-y-6 flex-grow">
                {[
                    { src: "Home - 192x192.svg", label: "Dashboard" },
                    { src: "/Group 1386.svg", label: "Courses" },
                    { src: "Vector (3).svg", label: "Explore" },
                    { src: "Vector (4).svg", label: "Chats" },
                    { src: "Group 1387.svg", label: "Profile" },
                    { src: "Vector (2).svg", label: "Settings" },
                ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 text-black text-xl group cursor-pointer hover:text-green-500">
                        <img src={item.src} alt={item.label} className="w-6 h-6" />
                        <span className="hidden md:block">{item.label}</span>
                    </div>
                ))}
            </div>

            {/* Logout Button (Now Visible) */}
            <div onClick={handleLogout} className="mb-20 flex items-center space-x-3 text-red-600 text-xl cursor-pointer hover:text-red-500">
                <img src="/undefined.svg" alt="Log Out" className="w-6 h-6" />
                <span className="hidden md:block">Logout</span>
            </div>
        </div>
    );
};

export default SideBar;

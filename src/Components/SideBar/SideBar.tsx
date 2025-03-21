import { useNavigate } from "react-router-dom";
import Portal from "../../Common/Modals/Portal"; // Adjust the import path as needed
import { useState } from "react";

interface SideBarProps { }

const SideBar: React.FC<SideBarProps> = () => {
    const navigate = useNavigate();
    const [isChatModalOpen, setIsChatModalOpen] = useState(false);

    const handleLogout = () => {
        navigate("/login");
        console.log("Logging out...");
    };

    const handleChatClick = () => {
        setIsChatModalOpen(true);
    };

    const handleCloseChatModal = () => {
        setIsChatModalOpen(false);
    };

    const sidebarItems = [
        { src: "Home - 192x192.svg", label: "Dashboard", onClick: undefined },
        { src: "/Group 1386.svg", label: "Courses", onClick: undefined },
        { src: "Vector (3).svg", label: "Explore", onClick: undefined },
        { src: "Vector (4).svg", label: "Chats", onClick: handleChatClick },
        { src: "Group 1387.svg", label: "Profile", onClick: undefined },
        { src: "Vector (2).svg", label: "Settings", onClick: undefined },
    ];

    return (
        <div className="fixed left-0 top-14 h-full w-16 md:w-64 bg-gray-200 shadow-lg flex flex-col p-6 transition-all duration-300">
            {/* Sidebar Items */}
            <div className="flex flex-col space-y-6 flex-grow">
                {sidebarItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-3 text-black text-xl group cursor-pointer hover:text-green-500"
                        onClick={item.onClick}
                    >
                        <img src={item.src} alt={item.label} className="w-6 h-6" />
                        <span className="hidden md:block">{item.label}</span>
                    </div>
                ))}
            </div>

            {/* Logout Button */}
            <div onClick={handleLogout} className="mb-20 flex items-center space-x-3 text-red-600 text-xl cursor-pointer hover:text-red-500">
                <img src="/logout.svg" alt="Log Out" className="w-6 h-6" />
                <span className="hidden md:block">Logout</span>
            </div>

            {/* Render the Portal modal conditionally */}
            {isChatModalOpen && (
                <Portal onClose={handleCloseChatModal}>
                    <div className=" left-20  bg-gray-200 p-4 rounded-lg shadow-lg w-80 ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full p-2 border rounded-md mb-4"
                        />
                        <div className="h-80 overflow-y-auto">
                            {[...Array(10)].map((_, index) => (
                                <div key={index} className="flex items-center p-2 border-b">
                                    <img
                                        src=""
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full mr-3"
                                    />
                                    <div>
                                        <p className="font-bold">{ }</p>
                                        <p className="text-sm text-gray-600">{ }</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Portal>
            )}
        </div>
    );
};

export default SideBar;

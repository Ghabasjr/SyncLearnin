import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

interface ChatProps {
    onClose: () => void;
}

const Chat: React.FC<ChatProps> = ({ onClose }) => {
    const ref = useRef<HTMLElement | null>(null);
    const [mounted, setMounted] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        let portalDiv = document.querySelector<HTMLElement>("#portal");

        if (!portalDiv) {
            portalDiv = document.createElement("div");
            portalDiv.id = "portal";
            document.body.appendChild(portalDiv);
        }

        ref.current = portalDiv;
        setMounted(true);
    }, []);

    const chatUsers = [
        { name: "Joshua", message: "Gud Evening", avatar: "/avatar1.jpg" },
        { name: "Joshua", message: "Gud Evening", avatar: "/avatar1.jpg" },
        { name: "Joshua", message: "Gud Evening", avatar: "/avatar1.jpg" },
        { name: "Joshua", message: "Gud Evening", avatar: "/avatar1.jpg" },
        { name: "Joshua", message: "Gud Evening", avatar: "/avatar1.jpg" },
        { name: "Joshua", message: "Gud Evening", avatar: "/avatar1.jpg" },
    ];

    return mounted && ref.current
        ? createPortal(
            <>
                {/* Backdrop */}
                <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40" onClick={onClose} />

                {/* Chat Panel */}
                <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl rounded-l-2xl p-5 z-50 flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold">Chats</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-600 hover:text-red-500 text-xl"
                        >
                            ✖
                        </button>
                    </div>

                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg mt-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />

                    {/* Chat List */}
                    <div className="flex-1 overflow-y-auto space-y-3">
                        {chatUsers
                            .filter((user) =>
                                user.name.toLowerCase().includes(search.toLowerCase())
                            )
                            .map((user, index) => (
                                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-green-100 rounded-lg cursor-pointer transition">
                                    <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="font-semibold">{user.name}</p>
                                        <p className="text-gray-600 text-sm truncate">{user.message}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </>,
            ref.current
        )
        : null;
};

export default Chat;

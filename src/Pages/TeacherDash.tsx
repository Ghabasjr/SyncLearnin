import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import SideBar from "../Components/SideBar/SideBar";

const DashBoard = () => {
    const navigate = useNavigate();

    const handleTest = () => {
        // Redirect to TestScreen
        navigate("/testscreen");
    };

    return (
        <div className="">
            {/* Navigation and Sidebar */}
            <Nav />
            <SideBar />

            {/* Main Content */}
            <div className="flex-1 flex justify-center items-center p-4 m-4">
                <div className="text-center p-8 bg-white shadow-lg rounded-lg">
                    <h1 className="text-2xl font-bold">Welcome to SyncLearn</h1>
                    <p className="mt-4">
                        To proceed, you must take a test to verify as a qualified Teacher here in SyncLearn.
                    </p>
                    <p className="mt-2">Click the button below to start.</p>
                    <button
                        onClick={handleTest}
                        className="btn btn-success mt-4 px-6 py-2 rounded-4xl"
                    >
                        Take Test
                    </button>

                    {/* Add a button to open the chat modal */}
                    {/* <button
                        onClick={handleChatClick}
                        className="btn btn-primary mt-4 px-6 py-2 rounded-4xl"
                    >
                        Chats
                    </button> */}
                </div>
            </div>


        </div>
    );
};

export default DashBoard;
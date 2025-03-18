import { useState } from 'react';
import Nav from '../Components/Nav/Nav';
import SideBar from '../Components/SideBar/SideBar';

const TestScreen = () => {
    const subjects = ["Mathematics", "Physic", "History", "Biology", "English Language", "Economics", "Commerce"];
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

    const toggleSubject = (subject: any) => {
        setSelectedSubjects((prev) =>
            prev.includes(subject)
                ? prev.filter((s) => s !== subject) // Remove if already selected
                : [...prev, subject] // Add if not selected
        );
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <Nav />

                <div className="flex-1 flex flex-col justify-center items-center p-8">
                    {/* Title */}
                    <h1 className="text-5xl font-bold mb-6">Select your core subjects</h1>

                    {/* Search Bar */}
                    <div className="w-96 mb-6">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-full rounded-full"
                        />
                    </div>

                    {/* Subject Tags */}
                    <div className="flex flex-wrap gap-3 max-w-lg justify-center">
                        {subjects.map((subject) => (
                            <button
                                key={subject}
                                onClick={() => toggleSubject(subject)}
                                className={`px-4 py-2 rounded-full transition ${selectedSubjects.includes(subject)
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-300 text-black"
                                    }`}
                            >
                                {subject}
                            </button>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button className="mt-8 px-6 py-2 bg-green-500 text-white rounded-full shadow-md">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestScreen;

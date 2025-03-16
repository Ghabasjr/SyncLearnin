
const TeacherDashboard = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Header */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h1 className="text-2xl font-semibold">Welcome, Teacher!</h1>
                <p className="text-gray-600">Manage your classes and track student progress.</p>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Class Management */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Your Classes</h2>
                    <ul className="text-gray-700">
                        <li className="py-2 border-b">Mathematics 101</li>
                        <li className="py-2 border-b">Physics for Beginners</li>
                        <li className="py-2">Advanced Chemistry</li>
                    </ul>
                </div>

                {/* Notifications */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Notifications</h2>
                    <p className="text-gray-600">No new notifications.</p>
                </div>

                {/* Student Progress */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Student Progress</h2>
                    <p className="text-gray-600">View and assess student performance.</p>
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;

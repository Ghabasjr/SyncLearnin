


const Nav = () => {
    const user = sessionStorage.getItem("user");

    return (
        <header className="bg-gray-200 px-6 py-2 shadow-md">
            <nav className="flex items-center justify-between">
                {/* Left: Welcome Message */}
                <img className="w-10 cursor-pointer" src="/Group 1517.png" alt="SyncLogo" />
                <h1 className="text-lg font-semibold">Welcome back, {user}</h1>

                {/* Center: Search & Notification Icons */}
                <div className="flex items-center space-x-4">
                    <button className="btn btn-ghost btn-circle">
                        <img src="/Vector.svg" alt="Search" className="w-5 h-5" />
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <img src="Vector (1).svg" alt="notification" className="w-5 h-5" />
                    </button>
                    {/* Right: User Profile Picture */}
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-300"></div>
                </div>

            </nav>
        </header>
    );
};

export default Nav;

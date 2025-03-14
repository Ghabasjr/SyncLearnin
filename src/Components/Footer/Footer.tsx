const Footer = () => {
    return (
        <div className="bg-[#D9D9D9] font-semibold text-gray-950 p-8">
            {/* Footer Content */}
            <div className="grid md:grid-cols-4 gap-8 text-left text-sm md:text-base">
                {/* Footer Description */}
                <div className="space-y-3">
                    <p className="leading-relaxed">
                        <span className="font-bold">SyncLearn</span> is a cutting-edge educational platform designed to revolutionize
                        online learning through interactive and adaptive experiences. Our mission
                        is to make high-quality education accessible to everyone by leveraging advanced technology,
                        personalized learning paths, and real-time collaboration.
                    </p>
                </div>

                {/* Footer Links */}
                <div className="space-y-3 flex flex-col">
                    <h2 className="text-lg font-bold">Information</h2>
                    <span className="hover:text-green-600 cursor-pointer">About Us</span>
                    <span className="hover:text-green-600 cursor-pointer">Blog</span>
                    <span className="hover:text-green-600 cursor-pointer">News</span>
                </div>

                {/* Legal and Policy Links */}
                <div className="space-y-3 flex flex-col">
                    <h2 className="text-lg font-bold">Legal and Policy</h2>
                    <span className="hover:text-green-600 cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-green-600 cursor-pointer">Terms and Conditions</span>
                    <span className="hover:text-green-600 cursor-pointer">FAQs</span>
                </div>

                {/* Support Section */}
                <div className="space-y-3 flex flex-col">
                    <h2 className="text-lg font-bold">Support</h2>
                    <span className="hover:text-green-600 cursor-pointer">Help Center</span>
                    <span className="hover:text-green-600 cursor-pointer">Contact Us</span>
                    <span className="hover:text-green-600 cursor-pointer">FAQs</span>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-end space-x-6 mt-6">
                <img className="cursor-pointer w-6 h-6" src="Group 27.png" alt="Facebook Logo" />
                <img className="cursor-pointer w-6 h-6" src="Group 29.png" alt="Instagram Logo" />
                <img className="cursor-pointer w-6 h-6" src="Group 30.png" alt="X Logo" />
                <img className="cursor-pointer w-6 h-6" src="Group 34.png" alt="YouTube Logo" />
            </div>

            {/* Copyright Section */}
            <hr className="border-gray-400 my-6" />
            <div className="flex justify-between text-sm text-gray-700">
                <p className="font-bold">SyncLearn</p>
                <p>© {new Date().getFullYear()} SyncLearn. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;

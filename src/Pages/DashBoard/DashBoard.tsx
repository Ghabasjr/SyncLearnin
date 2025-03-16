import React, { useEffect, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import SideBar from "../../Components/SideBar/SideBar";
import TeacherDashboard from "../../Components/TeacherDashboard"

const DashBoard = () => {
    const [role, setRole] = useState(null);

    useEffect(() => {
        // Fetch user role from localStorage or API (Modify as needed)
        const userRole = localStorage.getItem("userRole");
        setRole(userRole);
    }, []);

    return (
        <div>
            <Nav />
            <SideBar />
            {role === "teacher" ? <TeacherDashboard /> : null}
        </div>
    );
};

export default DashBoard;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useState } from "react";
const Profile = () => {
    const studentData = {
        name: "John Doe",
        studentId: "STU123456",
        courseName: "Computer Science",
        courseId: "CS101",
        mobileNo: "0740427745",
        email: "john.doe@example.com",
    };
    const [mobileNo, setMobileNo] = useState(studentData.mobileNo);
    const [email, setEmail] = useState(studentData.email);
    return (_jsxs("div", { className: "flex flex-col items-center justify-between min-h-screen bg-gray-100 p-4", children: [_jsxs("div", { className: "w-full flex justify-between items-center px-6 py-4 bg-white shadow-md rounded-lg", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-700", children: "E-Attendance" }), _jsx("h2", { className: "text-lg font-semibold text-gray-700", children: "Student Portal" })] }), _jsxs("div", { className: "flex flex-col items-center justify-center flex-grow w-full ", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-800 mb-4", children: "Hi Student! \uD83C\uDF93" }), _jsx(Card, { className: "w-full max-w-md ", children: _jsxs(CardContent, { className: "space-y-4", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-700", children: "Profile" }), _jsxs("div", { className: "space-y-1", children: [_jsx(Label, { children: "Student Name" }), _jsx("div", { className: "px-3 py-2 bg-gray-200 rounded-2xl", children: studentData.name })] }), _jsxs("div", { className: "space-y-1", children: [_jsx(Label, { children: "Student ID" }), _jsx("div", { className: "px-3 py-2 bg-gray-200 rounded-2xl", children: studentData.studentId })] }), _jsxs("div", { className: "grid grid-cols-2 gap-2", children: [_jsxs("div", { className: "space-y-1 ", children: [_jsx(Label, { htmlFor: "mobile-no", children: "Mobile No" }), _jsx(Input, { id: "mobile-no", placeholder: "Mobile Number", value: mobileNo, className: "rounded-2xl", onChange: (e) => setMobileNo(e.target.value) })] }), _jsxs("div", { className: "space-y-1 rounded-2xl", children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", placeholder: "Email Address", value: email, className: "rounded-2xl", onChange: (e) => setEmail(e.target.value) })] })] }), _jsxs("div", { className: "space-y-1", children: [_jsx(Label, { children: "Course Name" }), _jsx("div", { className: "px-3 py-2 bg-gray-200 rounded-2xl", children: studentData.courseName })] }), _jsxs("div", { className: "space-y-1", children: [_jsx(Label, { children: "Course ID" }), _jsx("div", { className: "px-3 py-2 bg-gray-200 rounded-2xl", children: studentData.courseId })] })] }) })] })] }));
};
export default Profile;

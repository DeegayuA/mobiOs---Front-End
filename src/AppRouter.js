import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Login from "./pages/Student/Login";
import StudentLayout from "./pages/Student/StudentLayout";
import ResetPassword from "./pages/Student/ResetPassword";
import Confirmation from "./pages/Student/Confirmation";
import QRScanner from "./pages/Student/QRScanner";
import Attendence from "./pages/Student/Attendence";
import StudentProfile from "./pages/Student/Profile";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminAttendance from "./pages/Admin/AdminAttendance";
import Course from "./pages/Admin/Course";
import Students from "./pages/Admin/Students";
import ClassSchedule from "./pages/Admin/ClassSchedule";
import { Profile } from "./pages/Admin/Profile";
import { AddCourse } from "./pages/Admin/AddCourse";
import { AddModule } from "./pages/Admin/AddModule";
import { AddSchedule } from "./pages/Admin/AddSchedule";
import { Reports } from "./pages/Admin/Reports";
import { AddStudent } from "./pages/Admin/AddStudent";
// import Profile from "./pages/Admin/Profile";
export default function AppRouter() {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(AdminLogin, {}) }), _jsx(Route, { path: "/admin", element: _jsx(AdminDashboard, {}), children: _jsx(Route, { index: true, element: _jsx(Navigate, { to: "/admin/dashboard" }) }) }), _jsx(Route, { path: "/admin/dashboard", element: _jsx(AdminDashboard, {}) }), _jsx(Route, { path: "/admin/attendance", element: _jsx(AdminAttendance, {}) }), _jsx(Route, { path: "/admin/courses", element: _jsx(Course, {}) }), _jsx(Route, { path: "/admin/students", element: _jsx(Students, {}) }), _jsx(Route, { path: "/admin/classschedule", element: _jsx(ClassSchedule, {}) }), _jsx(Route, { path: "/admin/profile", element: _jsx(Profile, {}) }), _jsx(Route, { path: "/admin/add-course", element: _jsx(AddCourse, {}) }), _jsx(Route, { path: "/admin/add-module", element: _jsx(AddModule, {}) }), _jsx(Route, { path: "/admin/add-schedule", element: _jsx(AddSchedule, {}) }), _jsx(Route, { path: "/admin/reports", element: _jsx(Reports, {}) }), _jsx(Route, { path: "/admin/add-student", element: _jsx(AddStudent, {}) }), _jsx(Route, { path: "/", element: _jsx(Login, {}) }), _jsx(Route, { path: "/reset-password", element: _jsx(ResetPassword, {}) }), _jsx(Route, { path: "/confirmation", element: _jsx(Confirmation, {}) }), _jsxs(Route, { path: "/student", element: _jsx(StudentLayout, {}), children: [_jsx(Route, { path: "qr-scanner", element: _jsx(QRScanner, {}) }), _jsx(Route, { path: "attendence", element: _jsx(Attendence, {}) }), _jsx(Route, { path: "profile", element: _jsx(StudentProfile, {}) })] })] }) }));
}

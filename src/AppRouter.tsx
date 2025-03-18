
import Login from "./pages/Student/Login";
import StudentLayout from "./pages/Student/StudentLayout"; 
import ResetPassword from "./pages/Student/ResetPassword";
import Confirmation from "./pages/Student/Confirmation";
import QRScanner from "./pages/Student/QRScanner";
import Attendence from "./pages/Student/Attendence";
import Profile from "./pages/Student/Profile";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminAttendance from "./pages/Admin/AdminAttendance";
import Course from "./pages/Admin/Course";
import Students from "./pages/Admin/Students";
import ClassSchedule from "./pages/Admin/ClassSchedule";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Common Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirmation" element={<Confirmation />} />
        

        {/* Admin Routes (Web View) */}
        {/* <Route path="/admin" element={<AdminLayout />}> */}
          {/* Nested Admin Routes */}
          {/* <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} /> */}
        {/* </Route> */}

        {/* Student Routes (Mobile View) */}
        <Route path="/student" element={<StudentLayout />}>
        <Route path="qr-scanner" element={<QRScanner />} />
        <Route path="attendence" element={<Attendence />} />
        <Route path="profile" element={<Profile />} />
  
        </Route>

        {/* 404 - Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
        

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Navigate to="/admin/dashboard" />} />
        </Route>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/attendance" element={<AdminAttendance />} />
        <Route path="/admin/courses" element={<Course />} />
        <Route path="/admin/students" element={<Students />} />
        <Route path="/admin/classschedule" element={<ClassSchedule />} />
      </Routes>
    </Router>
  );
}
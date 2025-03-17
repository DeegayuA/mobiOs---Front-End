import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminAttendance from "./pages/Admin/AdminAttendance";
import Course from "./pages/Admin/Course";
import Students from "./pages/Admin/Students";
import ClassSchedule from "./pages/Admin/ClassSchedule";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

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
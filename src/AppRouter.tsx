import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Admin/Login";
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
// import Profile from "./pages/Admin/Profile";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Navigate to="/admin/dashboard" />} />
        </Route>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/attendance" element={<AdminAttendance />} />
        <Route path="/admin/courses" element={<Course />} />
        <Route path="/admin/students" element={<Students />} />
        <Route path="/admin/classschedule" element={<ClassSchedule />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/add-course" element={<AddCourse />} />
        <Route path="/admin/add-module" element={<AddModule />} />
        <Route path="/admin/add-schedule" element={<AddSchedule />} />
        <Route path="/admin/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}
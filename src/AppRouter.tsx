import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./pages/Admin/AdminLayout";
import Login from "./pages/Admin/Login";
import StudentLayout from "./pages/Student/StudentLayout"; // Student mobile layout
import ResetPassword from "./pages/Student/ResetPassword";
import Confirmation from "./pages/Student/Confirmation";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirmation" element={<Confirmation />} />

        {/* Admin Routes (Web View) */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Nested Admin Routes */}
          {/* <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>

        {/* Student Routes (Mobile View) */}
        <Route path="/student" element={<StudentLayout />}>
          {/* Nested Student Routes */}
          {/* <Route index element={<StudentDashboard />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="courses" element={<StudentCourses />} /> */}
        </Route>

        {/* 404 - Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

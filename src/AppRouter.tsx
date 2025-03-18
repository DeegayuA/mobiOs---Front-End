import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./pages/Admin/AdminLayout";
import Login from "./pages/Student/Login";
import StudentLayout from "./pages/Student/StudentLayout"; 
import ResetPassword from "./pages/Student/ResetPassword";
import Confirmation from "./pages/Student/Confirmation";
import QRScanner from "./pages/Student/QRScanner";
import Attendence from "./pages/Student/Attendence";
import Profile from "./pages/Student/Profile";

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
      </Routes>
    </Router>
  );
}

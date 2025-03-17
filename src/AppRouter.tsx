import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Admin/Login";
import AdminLayout from "./pages/Admin/AdminLayout";
// import Dashboard from "@/pages/admin/Dashboard";
// import Users from "@/pages/admin/Users";
// import Settings from "@/pages/admin/Settings";
// import NotFound from "@/pages/NotFound";

export default function AppRouter() {
  return (
    <Router>
        
      <Routes>

      <Route path="/" element={<Login />} />
      
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>

        {/* Other Routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

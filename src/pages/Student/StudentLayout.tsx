import { Outlet } from "react-router-dom";
import BottomNav from "../../components/Student/BottomNavBar"; // Import the BottomNav component

export default function StudentLayout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="p-4 bg-white border-b shadow-md flex justify-between items-center">
        <h1 className="text-lg font-bold">E-Attendance</h1>
        <span className="text-gray-500">Student Portal</span>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <Outlet /> {/* This will render child routes inside StudentLayout */}
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}


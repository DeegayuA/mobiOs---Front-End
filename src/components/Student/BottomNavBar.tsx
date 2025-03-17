import { NavLink } from "react-router-dom";
import { Home, QrCode, User } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t shadow-md p-2 flex justify-around">
      <NavLink to="/attendance" className="flex flex-col items-center text-gray-600 hover:text-black">
        <Home className="h-5 w-5" />
        <span className="text-xs">Attendance</span>
      </NavLink>
      <NavLink to="/qr" className="flex flex-col items-center text-gray-600 hover:text-black">
        <QrCode className="h-5 w-5" />
        <span className="text-xs">QR</span>
      </NavLink>
      <NavLink to="/profile" className="flex flex-col items-center text-gray-600 hover:text-black">
        <User className="h-5 w-5" />
        <span className="text-xs">Profile</span>
      </NavLink>
    </div>
  );
}

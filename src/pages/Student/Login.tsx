import { useEffect, useState } from "react";
import { LoginForm } from "../../components/login-form";

export default function Login() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className={`flex ${
        isMobile ? "min-h-screen items-center justify-center p-4" : "min-h-screen items-center justify-center bg-gray-100"
      }`}
    >
      <LoginForm portalType="Student" />
    </div>
  );
}

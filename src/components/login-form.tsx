import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";

interface LoginFormProps extends React.ComponentProps<"div"> {
  portalType: "Admin" | "Student";
}

export function LoginForm({ portalType, className, ...props }: LoginFormProps) {
  const navigate = useNavigate(); // ✅ Ensure useNavigate is inside a <BrowserRouter>

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // ✅ Prevent full page reload
    navigate("/student/qr-scanner"); // ✅ Redirect after login
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center min-h-screen justify-center p-6",
        portalType === "Admin" ? "bg-gradient-to-br from-blue-50 to-gray-200" : "bg-gray-100",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-sm md:max-w-lg lg:max-w-xl shadow-xl rounded-2xl p-6 md:p-10 bg-white">
        <CardHeader className="text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 whitespace-nowrap">
            E-Attendance
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-gray-600 mt-1">{portalType} Portal</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}> {/* ✅ Fix: Calls handleLogin on submit */}
            <div className="flex flex-col gap-6">
              {/* Email Input */}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-10 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="h-10 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

             
              <Button
                type="submit" 
                className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Login
              </Button>

              
              <div className="text-center">
                <a
                  href="/reset-password"
                  className="text-sm md:text-base text-blue-600 hover:text-blue-800 underline transition"
                >
                  Reset Password
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

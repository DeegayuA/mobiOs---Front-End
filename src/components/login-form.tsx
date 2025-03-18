import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";

interface LoginFormProps extends React.ComponentProps<"div"> {
  portalType: "Admin" | "Student";
}

export function LoginForm({ portalType = "Student", className, ...props }: LoginFormProps) {
  console.log("Portal Type:", portalType); 
  const navigate = useNavigate(); 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); 
    navigate("/student/qr-scanner"); 
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center min-h-screen justify-center w-full",
        portalType === "Admin" ? "bg-gradient-to-br from-blue-50 to-gray-200" : "bg-gray-100",
        className
      )}
      {...props}
    >
      <Card className="w-full h-full max-w-md md:max-w-xl lg:max-w-2xl shadow-xl rounded-2xl md:p-12 bg-white">
        <CardHeader className="text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 whitespace-nowrap">
            E-Attendance
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-gray-600 mt-1">{portalType} Portal</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6 items-center">
             
              <div className="grid gap-2 w-full">
                <Label htmlFor="email" className="text-gray-700 font-medium text-center">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-10 w-full text-md border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              
              <div className="grid gap-2 w-full">
                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="h-10 w-full text-md border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

             
              <Button
                type="submit" 
                className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all duration-300"
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

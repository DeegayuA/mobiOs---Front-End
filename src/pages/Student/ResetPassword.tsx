import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle password reset logic
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">
      <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg shadow-xl rounded-2xl p-6 md:p-8 bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Reset Password
          </CardTitle>
          <p className="text-gray-600 text-sm md:text-base mt-1">
            Enter your email to receive a password reset link.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-3">
              <label className="text-gray-700 font-medium text-sm">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Send Reset Link
            </Button>

            <div className="text-center">
              <a href="/login" className="text-sm md:text-base text-blue-600 hover:text-blue-800 underline transition">
                Back to Login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

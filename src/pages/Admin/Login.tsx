import React from "react";
import { LoginForm } from "../../components/login-form"; // Adjust the path if necessary

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <LoginForm />
    </div>
  );
}

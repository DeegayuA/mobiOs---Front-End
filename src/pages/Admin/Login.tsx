import React from "react";
import { LoginForm } from "../../components/login-form";

export default function AdminLogin() {
  return (
    <div className="w-full flex h-screen items-center justify-center bg-gray-100 p-4">
      <LoginForm 
      portalType="Admin"/>
    </div>
  );
}

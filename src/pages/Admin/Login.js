import { jsx as _jsx } from "react/jsx-runtime";
import { LoginForm } from "../../components/login-form";
export default function AdminLogin() {
    return (_jsx("div", { className: "w-full flex h-screen items-center justify-center bg-gray-100 p-4", children: _jsx(LoginForm, { portalType: "Admin" }) }));
}

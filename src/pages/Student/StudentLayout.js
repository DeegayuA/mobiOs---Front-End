import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import BottomNavBar from "../../components/Student/BottomNavBar";
const StudentLayout = () => {
    return (_jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx("div", { className: "flex-grow", children: _jsx(Outlet, {}) }), _jsx(BottomNavBar, {})] }));
};
export default StudentLayout;

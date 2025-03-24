import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
export default function AdminAttendance() {
    return (_jsxs(SidebarProvider, { children: [_jsx(AppSidebar, {}), _jsx(SidebarInset, { children: _jsxs("div", { children: [_jsx("header", { className: "flex h-16 shrink-0 items-center gap-2 shadow-md", children: _jsxs("div", { className: "flex items-center gap-2 px-4", children: [_jsx(SidebarTrigger, { className: "-ml-1" }), _jsx(Separator, { orientation: "vertical", className: "mr-2 h-4" }), _jsx(Breadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { className: "hidden md:block", children: _jsx(BreadcrumbLink, { href: "#", children: "Admin" }) }), _jsx(BreadcrumbSeparator, { className: "hidden md:block" }), _jsxs(BreadcrumbItem, { children: [_jsx(BreadcrumbPage, { children: "NAME" }), _jsx(BreadcrumbPage, { className: "absolute right-5", children: "Hi! admin" })] })] }) })] }) }), _jsx("div", { className: "flex flex-1 flex-col gap-4 p-4 pt-0", children: _jsx("div", { className: "flex flex-col gap-6 p-6", children: _jsx("h2", { className: "text-xl font-semibold uppercase", children: "NAME" }) }) })] }) })] }));
}

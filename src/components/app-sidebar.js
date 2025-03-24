import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { BookOpen, Bot, LayoutDashboard, LifeBuoy, PersonStanding, PieChart, School, Send, } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "../components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
export const UserContext = React.createContext(null);
const data = {
    user: {
        name: "Admin",
        email: "admin@e-attendance.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/admin/dashboard",
            icon: LayoutDashboard,
            isActive: true,
        },
        {
            title: "Attendance",
            url: "/admin/attendance",
            icon: School,
        },
        {
            title: "Program",
            url: "#",
            icon: BookOpen,
            isActive: true,
            items: [
                {
                    title: "Courses/Modules",
                    url: "/admin/courses",
                },
                {
                    title: "Class Schedule",
                    url: "/admin/classschedule",
                },
            ],
        },
        {
            title: "Students",
            url: "/admin/students",
            icon: PersonStanding,
        },
        {
            title: "Reports",
            url: "/admin/reports",
            icon: PieChart,
        },
        {
            title: "Profile",
            url: "/admin/profile",
            icon: Bot,
        },
    ],
    navSecondary: [
        {
            title: "Support",
            url: "/admin/support",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "/admin/feedback",
            icon: Send,
        },
    ],
};
export function AppSidebar({ ...props }) {
    return (_jsxs(Sidebar, { variant: "inset", ...props, children: [_jsx(SidebarHeader, { children: _jsx(SidebarMenu, { children: _jsx(SidebarMenuItem, { children: _jsx(SidebarMenuButton, { size: "lg", asChild: true, children: _jsxs("a", { href: "/", children: [_jsx("div", { className: "text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg", children: _jsx("img", { src: "/src/assets/letter-e.png", alt: "Sidebar Icon" }) }), _jsx("div", { className: "grid flex-1 text-left text-sm leading-tight", children: _jsx("span", { className: "truncate font-medium", children: "E-Attendance" }) })] }) }) }) }) }), _jsxs(SidebarContent, { children: [_jsx(NavMain, { items: data.navMain }), _jsx(NavSecondary, { items: data.navSecondary, className: "mt-auto" })] }), _jsx(SidebarFooter, { children: _jsx(NavUser, { user: data.user }) })] }));
}

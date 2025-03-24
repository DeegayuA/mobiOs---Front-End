import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Button } from "../../components/ui/button";
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "../../components/ui/table";
export default function AdminClassSchedule() {
    const [activeFilter, setActiveFilter] = React.useState("courses");
    function handleFilterClick(filter) {
        setActiveFilter(filter);
    }
    function handleGenerateQR(courseName, moduleName) {
        alert(`QR code generated for ${courseName} - ${moduleName}`);
    }
    const classScheduleData = [
        {
            courseName: "Artificial Intelligence",
            courseId: "AI101",
            module: "Deep Learning",
            moduleId: "DL201",
            qrCode: "https://placehold.co/150x150.png"
        },
        {
            courseName: "Data Science",
            courseId: "DS101",
            module: "Machine Learning",
            moduleId: "ML202",
            qrCode: "https://placehold.co/150x150.png"
        },
        {
            courseName: "Cyber Security",
            courseId: "CS101",
            module: "Cloud Security",
            moduleId: "CS303",
            qrCode: "https://placehold.co/150x150.png"
        },
        {
            courseName: "Robotics",
            courseId: "RO101",
            module: "Embedded Systems",
            moduleId: "RO201",
            qrCode: "https://placehold.co/150x150.png"
        },
        {
            courseName: "Quantum Computing",
            courseId: "QC101",
            module: "Quantum Algorithms",
            moduleId: "QC201",
            qrCode: "https://placehold.co/150x150.png"
        },
        {
            courseName: "Biochemistry",
            courseId: "BC101",
            module: "Bioinformatics",
            moduleId: "BC201",
            qrCode: "https://placehold.co/150x150.png"
        },
        {
            courseName: "Network Engineering",
            courseId: "NE101",
            module: "Network Security",
            moduleId: "NE201",
            qrCode: "https://placehold.co/150x150.png"
        },
        {
            courseName: "Quantum Computing",
            courseId: "QC101",
            module: "Quantum Algorithms",
            moduleId: "QC201",
            qrCode: "https://placehold.co/150x150.png"
        },
        {
            courseName: "Biochemistry",
            courseId: "BC101",
            module: "Bioinformatics",
            moduleId: "BC201",
            qrCode: "https://placehold.co/150x150.png"
        },
        {
            courseName: "Network Engineering",
            courseId: "NE101",
            module: "Network Security",
            moduleId: "NE201",
            qrCode: "https://placehold.co/150x150.png"
        }
    ];
    return (_jsxs(SidebarProvider, { children: [_jsx(AppSidebar, {}), _jsx(SidebarInset, { children: _jsxs("div", { className: "border border-[var(--primary-border-color)] rounded-lg shadow-md xs:rounded-none", children: [_jsxs("header", { className: "flex h-16 shrink-0 items-center gap-2 shadow-md px-4 border-[var(--primary-border-color)] border-b", children: [_jsx(SidebarTrigger, { className: "-ml-1" }), _jsx(Separator, { orientation: "vertical", className: "mr-2 h-4 bg-[var(--primary-border-color)]" }), _jsx(Breadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { className: "hidden md:block", children: _jsx(BreadcrumbLink, { href: "#", children: "Programs" }) }), _jsx(BreadcrumbSeparator, { className: "hidden md:block" }), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbPage, { children: "Class Schedule" }) })] }) }), _jsx("span", { className: "ml-auto font-medium text-gray-600", children: "Hi! Admin" })] }), _jsxs("div", { className: "flex flex-1 flex-col p-6", children: [_jsx("h2", { className: "text-2xl font-semibold", children: "PROGRAMS \u2014 CLASS SCHEDULE" }), _jsx("div", { className: "overflow-x-auto bg-white shadow-md rounded-lg p-4 mt-4 border border-[var(--primary-border-color)]", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Course Name" }), _jsx(TableHead, { children: "Course ID" }), _jsx(TableHead, { children: "Module" }), _jsx(TableHead, { children: "Module ID" }), _jsx(TableHead, { children: "QR" }), _jsx(TableHead, { children: "Action" })] }) }), _jsx(TableBody, { children: classScheduleData.map((row, index) => (_jsxs(TableRow, { className: "hover:bg-gray-100", children: [_jsx(TableCell, { children: row.courseName }), _jsx(TableCell, { children: row.courseId }), _jsx(TableCell, { children: row.module }), _jsx(TableCell, { children: row.moduleId }), _jsx(TableCell, { children: _jsx("img", { src: row.qrCode, alt: "QR Code", className: "w-16 h-16" }) }), _jsxs(TableCell, { children: [_jsx(Button, { variant: "link", size: "sm", children: "View" }), " |", _jsx(Button, { variant: "link", size: "sm", onClick: () => handleGenerateQR(row.courseName, row.module), children: "Generate QR" })] })] }, index))) })] }) })] })] }) })] }));
}

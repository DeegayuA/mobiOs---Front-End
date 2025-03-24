import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Button } from "../../components/ui/button";
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "../../components/ui/table";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../../components/ui/select";
const studentsData = [
    { name: "John Doe", id: "S001", mobile: "1234567890", email: "john@example.com" },
    { name: "Jane Smith", id: "S002", mobile: "2345678901", email: "jane@example.com" },
    { name: "Mark Johnson", id: "S003", mobile: "3456789012", email: "mark@example.com" },
];
const coursesData = [
    { name: "Course 1" },
    { name: "Course 2" },
    { name: "Course 3" },
];
export default function AdminStudents() {
    const [selectedStudent, setSelectedStudent] = useState("all");
    const [selectedCourse, setSelectedCourse] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const filteredData = studentsData.filter((student) => (selectedStudent === "all" || student.name === selectedStudent) &&
        (selectedCourse === "all" || student.email.includes(selectedCourse)) &&
        (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.id.toLowerCase().includes(searchTerm.toLowerCase())));
    return (_jsxs(SidebarProvider, { children: [_jsx(AppSidebar, {}), _jsx(SidebarInset, { children: _jsxs("div", { className: "border border-[var(--primary-border-color)] rounded-lg shadow-md xs:rounded-none", children: [_jsxs("header", { className: "flex h-16 shrink-0 items-center gap-2 shadow-md px-4 border-[var(--primary-border-color)] border-b", children: [_jsx(SidebarTrigger, { className: "-ml-1" }), _jsx(Separator, { orientation: "vertical", className: "mr-2 h-4 bg-[var(--primary-border-color)]" }), _jsx(Breadcrumb, { children: _jsx(BreadcrumbList, { children: _jsx(BreadcrumbItem, { className: "hidden md:block", children: _jsx(BreadcrumbLink, { href: "#", children: "Students" }) }) }) }), _jsx("span", { className: "ml-auto font-medium text-gray-600", children: "Welcome back, Admin!" })] }), _jsxs("div", { className: "flex flex-1 flex-col p-8 space-y-6", children: [_jsx("h2", { className: "text-2xl font-semibold  text-left", children: "STUDENTS" }), _jsxs("div", { className: "flex justify-between mt-4", children: [_jsxs("div", { className: "flex gap-4 max-w-[500px]", children: [_jsxs(Select, { value: selectedStudent, onValueChange: setSelectedStudent, children: [_jsx(SelectTrigger, { className: "border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300", children: selectedStudent === "all" ? "Select Student" : selectedStudent }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Students" }), studentsData.map((student) => (_jsx(SelectItem, { value: student.name, children: student.name }, student.id)))] })] }), _jsxs(Select, { value: selectedCourse, onValueChange: setSelectedCourse, children: [_jsx(SelectTrigger, { className: "border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300", children: selectedCourse === "all" ? "Select Course" : selectedCourse }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Courses" }), coursesData.map((course, index) => (_jsx(SelectItem, { value: course.name, children: course.name }, index)))] })] }), _jsx(Input, { type: "text", placeholder: "Search", className: "border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300 w-full", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "accent", children: "Add Student" }), _jsx(Button, { variant: "secondary", children: "Bulk Upload" })] })] }), _jsx("div", { className: "overflow-x-auto bg-white shadow-md rounded-lg p-4 mt-6  text-left border border-[var(--primary-border-color)]", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Student Name" }), _jsx(TableHead, { children: "Student ID" }), _jsx(TableHead, { children: "Mobile No" }), _jsx(TableHead, { children: "Email ID" }), _jsx(TableHead, { children: "Actions" })] }) }), _jsx(TableBody, { children: filteredData.map((student, index) => (_jsxs(TableRow, { className: "odd:bg-gray-100 even:bg-white", children: [_jsx(TableCell, { className: "px-4 py-2", children: student.name }), _jsx(TableCell, { className: "px-4 py-2", children: student.id }), _jsx(TableCell, { className: "px-4 py-2", children: student.mobile }), _jsx(TableCell, { className: "px-4 py-2", children: student.email }), _jsxs(TableCell, { className: "space-y-1", children: [_jsx(Button, { variant: "link", size: "sm", title: "Reset student password", children: "Reset Password" }), _jsx(Button, { variant: "link", size: "sm", children: "View" }), _jsx(Button, { variant: "link", size: "sm", children: "Edit" })] })] }, index))) })] }) })] })] }) })] }));
}

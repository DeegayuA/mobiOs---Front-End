import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { BreadcrumbList, BreadcrumbPage } from "../../components/ui/breadcrumb";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../components/ui/select"; // Import Select components
import { Input } from "../../components/ui/input"; // Import Input component
const data = {
    "Artificial Intelligence": ["Deep Learning", "Neural Networks", "AI Ethics"],
    "Data Science": ["Machine Learning", "Data Analytics", "Big Data"],
    "Cyber Security": ["Cryptography", "Cloud Security", "Ethical Hacking"],
    "Quantum Computing": ["Quantum Algorithms", "Quantum Cryptography"],
    "Robotics": ["Embedded Systems", "Automation"],
    "Biochemistry": ["Bioinformatics", "Genetic Engineering"],
    "Network Engineering": ["Network Security", "Wireless Communications"],
    "IoT Systems": ["Smart Devices", "Edge Computing"],
    "Software Engineering": ["Agile Development", "Software Testing"]
};
const courseData = Array.from({ length: 30 }, (_, i) => ({
    course: i % 3 === 0 ? "Artificial Intelligence" : i % 3 === 1 ? "Data Science" : "Cyber Security",
    module: i % 3 === 0 ? "Deep Learning" : i % 3 === 1 ? "Machine Learning" : "Cloud Security",
    instructor: `Instructor ${i + 1}`,
    classDate: `2025-04-${String(1 + (i % 30)).padStart(2, '0')}`,
    totalStudents: Math.floor(Math.random() * 50) + 1, // Example random student count
}));
export default function AdminDashboard() {
    const allModules = Object.values(data).flat();
    const [selectedCourse, setSelectedCourse] = useState("all");
    const [selectedModule, setSelectedModule] = useState("all");
    const [modules, setModules] = useState(allModules);
    const [filteredData, setFilteredData] = useState(courseData);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        const filtered = courseData.filter((item) => (selectedCourse === "all" || item.course === selectedCourse) &&
            (selectedModule === "all" || item.module === selectedModule) &&
            (item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.instructor.toLowerCase().includes(searchTerm.toLowerCase())));
        setFilteredData(filtered);
    }, [selectedCourse, selectedModule, searchTerm]);
    return (_jsxs(SidebarProvider, { children: [_jsx(AppSidebar, {}), _jsx(SidebarInset, { children: _jsxs("div", { className: "border border-[var(--primary-border-color)] rounded-lg shadow-md xs:rounded-none", children: [_jsxs("header", { className: "flex h-16 shrink-0 items-center gap-2 shadow-md px-4 border-[var(--primary-border-color)] border-b", children: [_jsx(SidebarTrigger, { className: "-ml-1" }), _jsx(Separator, { orientation: "vertical", className: "mr-2 h-4 bg-[var(--primary-border-color)]" }), _jsx(Breadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { className: "hidden md:block", children: _jsx(BreadcrumbLink, { href: "#", children: "Admin" }) }), _jsx(BreadcrumbSeparator, { className: "hidden md:block" }), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbPage, { className: "", children: "Dashboard" }) })] }) }), _jsx("span", { className: "ml-auto font-medium text-gray-600", children: "Hi! Admin" })] }), _jsxs("div", { className: "flex flex-1 flex-col gap-4 p-6 ", children: [_jsx("h2", { className: "text-2xl font-semibold uppercase px-4 text-left", children: "DASHBOARD" }), _jsxs("div", { className: "grid px-4 grid-cols-2 xl:grid-cols-6 sm:grid-cols-3 gap-4 md:grid-cols-4 gap-4 gap-4 flex-wrap max-w-full min-w-[200px]", children: [_jsxs(Card, { className: "border border-[var(--primary-border-color)]", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Number of Active Courses" }) }), _jsx(CardContent, { children: _jsx("p", { className: "text-4xl font-bold", children: Object.keys(data).length }) })] }), _jsxs(Card, { className: "border border-[var(--primary-border-color)]", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Number of Active Modules" }) }), _jsx(CardContent, { children: _jsx("p", { className: "text-4xl font-bold", children: Object.values(data).flat().length }) })] }), _jsxs(Card, { className: "border border-[var(--primary-border-color)]", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Number of Active Students" }) }), _jsx(CardContent, { children: _jsx("p", { className: "text-4xl font-bold", children: courseData.length }) })] }), _jsxs(Card, { className: "border border-[var(--primary-border-color)]", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Number of Instructors" }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-4xl font-bold", children: "5" }), " "] })] }), _jsxs(Card, { className: "border border-[var(--primary-border-color)]", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Total Classes Conducted" }) }), _jsx(CardContent, { children: _jsx("p", { className: "text-4xl font-bold", children: courseData.length }) })] }), _jsxs(Card, { className: "border border-[var(--primary-border-color)]", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Total Attendance Count" }) }), _jsx(CardContent, { children: _jsx("p", { className: "text-4xl font-bold", children: courseData.reduce((sum, item) => sum + item.totalStudents, 0) }) })] })] }), _jsxs("div", { className: "flex gap-4 px-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium mb-2  text-left", children: "Course Filter" }), _jsxs(Select, { value: selectedCourse, onValueChange: (value) => setSelectedCourse(value), children: [_jsx(SelectTrigger, { className: "border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300", children: selectedCourse === "all" ? "Select Course" : selectedCourse }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Courses" }), Object.keys(data).map(course => (_jsx(SelectItem, { value: course, children: course }, course)))] })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium mb-2  text-left", children: "Module Filter" }), _jsxs(Select, { value: selectedModule, onValueChange: setSelectedModule, children: [_jsx(SelectTrigger, { className: "border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300", children: selectedModule === "all" ? "Select Module" : selectedModule }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Modules" }), modules.map(module => (_jsx(SelectItem, { value: module, children: module }, module)))] })] })] }), _jsxs("div", { className: "flex-0 min-w-[250px] w-full", children: [_jsx("h3", { className: "text-lg font-medium mb-2 min-w-[200px]  text-left", children: "Search" }), _jsx(Input, { type: "text", placeholder: "Search by Course, Module, or Instructor", className: "border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300 w-full", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })] })] }), _jsx("div", { className: "overflow-x-auto bg-white shadow-md rounded-lg mx-4 p-4 text-left border border-[var(--primary-border-color)]", children: _jsxs(Table, { className: "px-4 border-collapse w-full", children: [_jsx(TableHeader, { className: "color-[var(--primary-border-color)]", children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Courses" }), _jsx(TableHead, { children: "Modules" }), _jsx(TableHead, { children: "Class Dates" }), _jsx(TableHead, { children: "Instructor" })] }) }), _jsx(TableBody, { children: filteredData.map((row, index) => (_jsxs(TableRow, { className: "hover:bg-gray-100", children: [_jsx(TableCell, { children: row.course }), _jsx(TableCell, { children: row.module }), _jsx(TableCell, { children: row.classDate }), _jsx(TableCell, { children: row.instructor })] }, index))) })] }) })] })] }) })] }));
}

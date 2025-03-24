import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "../../components/ui/table";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../components/ui/select";
import { Input } from "../../components/ui/input";
// Dummy Data for API Simulation
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
}));
export default function Course() {
    const [selectedCourse, setSelectedCourse] = useState("all");
    const [selectedModule, setSelectedModule] = useState("all");
    const [modules, setModules] = useState(Object.values(data).flat());
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
    return (_jsxs(SidebarProvider, { children: [_jsx(AppSidebar, {}), _jsx(SidebarInset, { children: _jsxs("div", { className: "border border-[var(--primary-border-color)] rounded-lg shadow-md xs:rounded-none", children: [_jsxs("header", { className: "flex h-16 shrink-0 items-center gap-2 shadow-md px-4 border-[var(--primary-border-color)] border-b", children: [_jsx(SidebarTrigger, { className: "-ml-1" }), _jsx(Separator, { orientation: "vertical", className: "mr-2 h-4 bg-[var(--primary-border-color)]" }), _jsx(Breadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { className: "hidden md:block", children: _jsx(BreadcrumbLink, { href: "#", children: "Admin" }) }), _jsx(BreadcrumbSeparator, { className: "hidden md:block" }), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbPage, { children: "Course Management" }) })] }) }), _jsx("span", { className: "ml-auto font-medium text-gray-600", children: "Hi! Admin" })] }), _jsxs("div", { className: "flex flex-1 flex-col p-6", children: [_jsx("h2", { className: "text-2xl font-semibold uppercase px-4  text-left", children: "Course Management" }), _jsx("h3", { className: "text-lg font-medium mt-4 mb-2 px-4  text-left", children: "Filter" }), _jsxs("div", { className: "flex gap-2 py-4 px-4", children: [_jsxs("div", { className: "flex-0", children: [_jsx("h3", { className: "text-lg font-medium mb-2 min-w-[150px]  text-left", children: "Course Filter" }), _jsxs(Select, { value: selectedCourse, onValueChange: (value) => setSelectedCourse(value), children: [_jsx(SelectTrigger, { className: "border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300", children: selectedCourse === "all" ? "Select Course" : selectedCourse }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Courses" }), Object.keys(data).map(course => (_jsx(SelectItem, { value: course, children: course }, course)))] })] })] }), _jsxs("div", { className: "flex-0", children: [_jsx("h3", { className: "text-lg font-medium mb-2 min-w-[150px]  text-left", children: "Module Filter" }), _jsxs(Select, { value: selectedModule, onValueChange: setSelectedModule, children: [_jsx(SelectTrigger, { className: "border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300", children: selectedModule === "all" ? "Select Module" : selectedModule }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Modules" }), modules.map(module => (_jsx(SelectItem, { value: module, children: module }, module)))] })] })] }), _jsxs("div", { className: "flex-0 min-w-[250px] w-full", children: [_jsx("h3", { className: "text-lg font-medium mb-2 min-w-[200px]  text-left", children: "Search" }), _jsx(Input, { type: "text", placeholder: "Search by Course, Module, or Instructor", className: "border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300 w-full", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })] })] }), _jsx("div", { className: "overflow-x-auto bg-white shadow-md rounded-lg mx-4 p-4 text-left border border-[var(--primary-border-color)]", children: _jsxs(Table, { children: [_jsx(TableHeader, { className: "color-[var(--primary-border-color)]", children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Course" }), _jsx(TableHead, { children: "Module" }), _jsx(TableHead, { children: "Class Date" }), _jsx(TableHead, { children: "Instructor" })] }) }), _jsx(TableBody, { children: filteredData.map((row, index) => (_jsxs(TableRow, { className: "hover:bg-gray-100", children: [_jsx(TableCell, { children: row.course }), _jsx(TableCell, { children: row.module }), _jsx(TableCell, { children: row.classDate }), _jsx(TableCell, { children: row.instructor })] }, index))) })] }) })] })] }) })] }));
}

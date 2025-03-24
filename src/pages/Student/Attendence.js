import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ModuleSelector from "../../components/Student/ModuleSelector";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
const Attendance = () => {
    const [selectedModule, setSelectedModule] = useState("");
    const attendanceRecords = [
        { date: "2024-03-18", time: "10:00", module: "AI & ML", attended: true },
        { date: "2024-03-17", time: "14:00", module: "Big Data", attended: false },
        { date: "2024-03-16", time: "09:30", module: "Network Security", attended: true },
        { date: "2024-03-18", time: "10:00", module: "AI & ML", attended: true },
        { date: "2024-03-16", time: "14:30", module: "AI & ML", attended: false },
        { date: "2024-03-14", time: "09:45", module: "AI & ML", attended: true },
        { date: "2024-03-17", time: "14:00", module: "Big Data", attended: false },
        { date: "2024-03-15", time: "16:30", module: "Big Data", attended: true },
        { date: "2024-03-13", time: "11:00", module: "Big Data", attended: false },
        { date: "2024-03-16", time: "09:30", module: "Network Security", attended: true },
        { date: "2024-03-14", time: "15:15", module: "Network Security", attended: false },
        { date: "2024-03-12", time: "08:45", module: "Network Security", attended: true },
        { date: "2024-03-15", time: "11:00", module: "Cloud Computing", attended: true },
        { date: "2024-03-13", time: "14:45", module: "Cloud Computing", attended: false },
        { date: "2024-03-11", time: "10:15", module: "Cloud Computing", attended: true },
        { date: "2024-03-14", time: "15:30", module: "Data Science", attended: false },
        { date: "2024-03-12", time: "09:00", module: "Data Science", attended: true },
        { date: "2024-03-10", time: "13:30", module: "Data Science", attended: false },
        { date: "2024-03-13", time: "13:00", module: "Software Engineering", attended: true },
        { date: "2024-03-11", time: "16:45", module: "Software Engineering", attended: false },
        { date: "2024-03-09", time: "10:30", module: "Software Engineering", attended: true },
        { date: "2024-03-12", time: "10:15", module: "Cybersecurity", attended: false },
        { date: "2024-03-10", time: "14:15", module: "Cybersecurity", attended: true },
        { date: "2024-03-08", time: "11:45", module: "Cybersecurity", attended: false },
        { date: "2024-03-11", time: "16:45", module: "Blockchain Technology", attended: true },
        { date: "2024-03-09", time: "12:00", module: "Blockchain Technology", attended: false },
        { date: "2024-03-07", time: "15:30", module: "Blockchain Technology", attended: true },
        { date: "2024-03-10", time: "09:00", module: "Machine Learning", attended: true },
        { date: "2024-03-08", time: "13:45", module: "Machine Learning", attended: false },
        { date: "2024-03-06", time: "10:30", module: "Machine Learning", attended: true }
    ];
    const moduleOptions = [...new Set(attendanceRecords.map(record => record.module))];
    const filteredRecords = selectedModule
        ? attendanceRecords.filter(record => record.module === selectedModule)
        : attendanceRecords;
    return (_jsxs("div", { className: "flex flex-col items-center justify-between min-h-screen bg-gray-100 p-4", children: [_jsxs("div", { className: "w-full flex justify-between items-center px-6 py-4 bg-white shadow-md rounded-lg", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-700", children: "E-Attendance" }), _jsx("h2", { className: "text-lg font-semibold text-gray-700", children: "Student Portal" })] }), _jsxs("div", { className: "flex flex-col items-center justify-center flex-grow w-full", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-800 mb-4", children: "Hi Student! \uD83C\uDF93" }), _jsxs("div", { className: "w-full max-w-4xl p-1 bg-white rounded-2xl shadow-md", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-800 mb-2", children: "Attendance Records" }), _jsx(ModuleSelector, { modules: moduleOptions, selectedModule: selectedModule, onModuleChange: setSelectedModule }), _jsx("div", { className: "w-full border rounded-xl overflow-hidden shadow-md bg-white", children: _jsx("div", { className: "overflow-auto", children: _jsxs(Table, { className: "w-full", children: [_jsx(TableHeader, { children: _jsxs(TableRow, { className: "bg-gray-300", children: [_jsx(TableHead, { className: "text-left p-2 text-blue-600 w-1/4", children: "Date" }), _jsx(TableHead, { className: "text-left p-2 text-blue-600 w-1/4", children: "Time" }), _jsx(TableHead, { className: "text-left p-2 text-blue-600 w-1/4", children: "Module" }), _jsx(TableHead, { className: "text-left p-2 text-blue-600 w-1/4", children: "Attendance" })] }) }), _jsx(TableBody, { children: filteredRecords.length > 0 ? (filteredRecords.map((record, index) => (_jsxs(TableRow, { className: "border-b", children: [_jsx(TableCell, { className: "p-1 w-1/4", children: record.date }), _jsx(TableCell, { className: "p-1 w-1/4", children: record.time }), _jsx(TableCell, { className: "p-1 w-1/4", children: record.module }), _jsx(TableCell, { className: "p-2 w-1/4", children: record.attended ? (_jsx("span", { className: "text-green-600 font-semibold", children: "Present" })) : (_jsx("span", { className: "text-red-600 font-semibold", children: "Absent" })) })] }, index)))) : (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: 4, className: "text-center text-gray-500 p-4", children: "No attendance records found." }) })) })] }) }) })] })] })] }));
};
export default Attendance;

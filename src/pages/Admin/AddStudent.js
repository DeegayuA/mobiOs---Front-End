import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Input } from "../../components/ui/input";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { IoMdAdd } from "react-icons/io";
export function AddStudent() {
    const form = useForm({
        defaultValues: {
            studentName: "",
            studentId: "",
            mobile: "",
            email: ""
        }
    });
    // function onSubmit(values) {
    //     console.log(values);
    // }
    const [courseName, setCourseName] = useState("");
    const [courses, setCourses] = useState([]);
    // const handleAddCourse = () => {
    //     if (courseName.trim() !== "") {
    //         setCourses([...courses, courseName]);
    //         setCourseName(""); // Clear input after adding
    //     }
    // };
    // const handleRemoveCourse = (index) => {
    //     setCourses(courses.filter((_, i) => i !== index));
    // };
    return (_jsxs(SidebarProvider, { children: [_jsx(AppSidebar, {}), _jsx(SidebarInset, { children: _jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsxs("header", { className: "flex h-16 items-center gap-2 shadow-md px-4 w-full", children: [_jsx(SidebarTrigger, { className: "-ml-1" }), _jsx(Separator, { orientation: "vertical", className: "mr-2 h-4" }), _jsx(Breadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { className: "hidden md:block", children: _jsx(BreadcrumbLink, { href: "#", children: "PROGRAMS" }) }), _jsx(BreadcrumbSeparator, { className: "hidden md:block" }), _jsxs(BreadcrumbItem, { children: [_jsx(BreadcrumbPage, { children: "ADD COURSE" }), _jsx(BreadcrumbPage, { className: "absolute right-5", children: "Hi! admin" })] })] }) })] }), _jsx("div", { className: "flex flex-col gap-4 p-4 flex-1", children: _jsx(Form, { ...form, children: _jsx("form", { className: "space-y-6 p-[3%]", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx(FormField, { control: form.control, name: "studentName", render: ({ field }) => (_jsx(FormItem, { children: _jsx(FormControl, { children: _jsx(Input, { placeholder: "Student Name", ...field, className: "border rounded-md p-2 w-full" }) }) })) }), _jsx(FormField, { control: form.control, name: "studentId", render: ({ field }) => (_jsx(FormItem, { children: _jsx(FormControl, { children: _jsx(Input, { placeholder: "Student ID", ...field, className: "border rounded-md p-2 w-full" }) }) })) }), _jsxs("div", { className: "flex space-x-[5%] w-full", children: [_jsx(FormField, { control: form.control, name: "mobile", render: ({ field }) => (_jsx(FormItem, { className: "w-[50%]", children: _jsx(FormControl, { children: _jsx(Input, { placeholder: "Mobile Number", ...field, className: "border rounded-md p-2  " }) }) })) }), _jsx(FormField, { control: form.control, name: "email", render: ({ field }) => (_jsx(FormItem, { className: "w-[50%]", children: _jsx(FormControl, { children: _jsx(Input, { placeholder: "Email", ...field, className: "border rounded-md p-2 " }) }) })) })] }), _jsxs("div", { className: "flex items-center mb-4", children: [_jsx("input", { type: "text", value: courseName, onChange: (e) => setCourseName(e.target.value), placeholder: "Course", className: "border rounded-md p-2 w-[70%]" }), _jsx(IoMdAdd, { className: "text-4xl ml-4 cursor-pointer lg:ml-[15%]" })] }), _jsx("div", { className: "border p-3 rounded-md", children: courses.length === 0 ? (_jsx("p", { className: "text-gray-500", children: "No courses added" })) : (courses.map((course, index) => (_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("span", { children: course }), _jsx("button", { className: "text-red-500 hover:text-red-700 text-sm", children: "Remove" })] }, index)))) }), _jsx(Button, { type: "submit", className: "bg-black text-white border border-black rounded-md px-6 py-2 hover:bg-gray-800 lg:w-[20%] md:w-auto", children: "Submit" })] }), _jsxs("div", { className: "space-y-4 md:pl-12 lg:pl-24 lg:max-w-xs lg:ml-[30%]", children: [_jsx("div", { className: "border rounded-md p-2 w-full text-center", children: _jsx("p", { className: "text-gray-500", children: "Created By User" }) }), _jsx("div", { className: "border rounded-md p-2 w-full text-center", children: _jsx("p", { className: "text-gray-500", children: "Created Date" }) }), _jsx("div", { className: "border rounded-md p-2 w-full text-center", children: _jsx("p", { className: "text-gray-500", children: "Last Edited User" }) }), _jsx("div", { className: "border rounded-md p-2 w-full text-center", children: _jsx("p", { className: "text-gray-500", children: "Last Edited Date" }) })] })] }) }) }) })] }) })] }));
}

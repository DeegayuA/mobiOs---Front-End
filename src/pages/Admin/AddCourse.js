import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Input } from "../../components/ui/input";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
export function AddCourse() {
    const form = useForm({
        defaultValues: {
            courseName: "",
            courseId: "",
            courseDescription: "",
            startDate: "",
            endDate: "",
        },
    });
    // function onSubmit(values: { name: string; age: number }) {
    //     console.log(values);
    // }
    return (_jsxs(SidebarProvider, { children: [_jsx(AppSidebar, {}), _jsx(SidebarInset, { children: _jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsxs("header", { className: "flex h-16 items-center gap-2 shadow-md px-4 w-full", children: [_jsx(SidebarTrigger, { className: "-ml-1" }), _jsx(Separator, { orientation: "vertical", className: "mr-2 h-4" }), _jsx(Breadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { className: "hidden md:block", children: _jsx(BreadcrumbLink, { href: "#", children: "PROGRAMS" }) }), _jsx(BreadcrumbSeparator, { className: "hidden md:block" }), _jsxs(BreadcrumbItem, { children: [_jsx(BreadcrumbPage, { children: "ADD COURSE" }), _jsx(BreadcrumbPage, { className: "absolute right-5", children: "Hi! admin" })] })] }) })] }), _jsx("div", { className: "flex flex-col gap-4 p-4 flex-1", children: _jsx(Form, { ...form, children: _jsx("form", { className: "space-y-6 p-[3%]", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx(FormField, { control: form.control, name: "courseName", render: ({ field }) => (_jsx(FormItem, { children: _jsx(FormControl, { children: _jsx(Input, { placeholder: "Course Name", ...field, className: "border rounded-md p-2 w-full" }) }) })) }), _jsx(FormField, { control: form.control, name: "courseId", render: ({ field }) => (_jsx(FormItem, { children: _jsx(FormControl, { children: _jsx(Input, { placeholder: "Course ID", ...field, className: "border rounded-md p-2 w-full" }) }) })) }), _jsx(FormField, { control: form.control, name: "courseDescription", render: ({ field }) => (_jsx(FormItem, { children: _jsx(FormControl, { children: _jsx(Input, { placeholder: "Course Description", ...field, className: "border rounded-md p-2 w-full" }) }) })) }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-1", children: [_jsx(FormField, { control: form.control, name: "startDate", render: ({ field }) => (_jsxs(FormItem, { className: "lg:w-[70%]  ", children: [_jsx(FormControl, { children: _jsx(Input, { type: "date", ...field, className: "border rounded-md " }) }), _jsx(FormDescription, { children: "Start Date" })] })) }), _jsx(FormField, { control: form.control, name: "endDate", render: ({ field }) => (_jsxs(FormItem, { className: " lg:ml-[40%] ", children: [_jsx(FormControl, { children: _jsx(Input, { type: "date", ...field, className: "border rounded-md p-2 " }) }), _jsx(FormDescription, { children: "End Date" })] })) })] }), _jsx(Button, { type: "submit", className: "bg-black text-white border border-black rounded-md px-6 py-2 hover:bg-gray-800 w-full md:w-auto", children: "Submit" })] }), _jsxs("div", { className: "space-y-4 md:pl-12 lg:pl-24 lg:max-w-xs lg:ml-[30%]", children: [_jsx("div", { className: "border rounded-md p-2 w-full text-center", children: _jsx("p", { className: "text-gray-500", children: "Created By User" }) }), _jsx("div", { className: "border rounded-md p-2 w-full text-center", children: _jsx("p", { className: "text-gray-500", children: "Created Date" }) }), _jsx("div", { className: "border rounded-md p-2 w-full text-center", children: _jsx("p", { className: "text-gray-500", children: "Last Edited User" }) }), _jsx("div", { className: "border rounded-md p-2 w-full text-center", children: _jsx("p", { className: "text-gray-500", children: "Last Edited Date" }) })] })] }) }) }) })] }) })] }));
}

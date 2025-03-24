import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Input } from "../../components/ui/input";
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
export function Profile() {
    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
        }),
        email: z.string().email({
            message: "Please enter a valid email.",
        }),
        mobile: z.string().min(10, {
            message: "Mobile number must be at least 10 characters.",
        }),
        newPassword: z.string().min(6, {
            message: "Password must be at least 6 characters.",
        }),
        confirmPassword: z.string().min(6, {
            message: "Password must be at least 6 characters.",
        })
    }).refine(data => data.newPassword === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"]
    });
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            mobile: "",
            newPassword: "",
            confirmPassword: ""
        },
    });
    function onSubmit(values) {
        console.log(values);
    }
    return (_jsxs(SidebarProvider, { children: [_jsx(AppSidebar, {}), _jsx(SidebarInset, { children: _jsxs("div", { className: "border border-[var(--primary-border-color)] rounded-lg shadow-md xs:rounded-none", children: [_jsxs("header", { className: "flex h-16 shrink-0 items-center gap-2 shadow-md px-4 border-[var(--primary-border-color)] border-b", children: [_jsx(SidebarTrigger, { className: "-ml-1" }), _jsx(Separator, { orientation: "vertical", className: "mr-2 h-4 bg-[var(--primary-border-color)]" }), _jsx(Breadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { className: "hidden md:block", children: _jsx(BreadcrumbLink, { href: "#", children: "Programs" }) }), _jsx(BreadcrumbSeparator, { className: "hidden md:block" }), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbPage, { children: "Course" }) })] }) }), _jsx("span", { className: "ml-auto font-medium text-gray-600", children: "Hi! Admin" })] }), _jsxs("div", { className: "flex flex-1 flex-col gap-4 p-4 pt-0", children: [_jsx("div", { className: "flex flex-col gap-6 p-6", children: _jsx("h2", { className: "text-xl font-semibold uppercase", children: "PROFILE" }) }), _jsx(Form, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx(FormField, { control: form.control, name: "name", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormControl, { children: _jsx(Input, { placeholder: "Name", ...field, className: "border border-[var(--primary-border-color)] rounded-md p-2 lg:w-1/2 " }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "email", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormControl, { children: _jsx(Input, { placeholder: "Email", ...field, className: "border border-[var(--primary-border-color)] rounded-md p-2 lg:w-1/2" }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "mobile", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormControl, { children: _jsx(Input, { placeholder: "Mobile Number", ...field, className: "border border-[var(--primary-border-color)] rounded-md p-2 lg:w-1/2" }) }), _jsx(FormMessage, {})] })) })] }), _jsxs("div", { className: "mt-8", children: [_jsx("h3", { className: "text-lg font-medium mb-4", children: "Change Password" }), _jsxs("div", { className: "space-y-4", children: [_jsx(FormField, { control: form.control, name: "newPassword", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormControl, { children: _jsx(Input, { type: "password", placeholder: "New Password", ...field, className: "border border-[var(--primary-border-color)] rounded-md p-2 lg:w-1/2" }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "confirmPassword", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormControl, { children: _jsx(Input, { type: "password", placeholder: "Re Enter Password", ...field, className: "border border-[var(--primary-border-color)] rounded-md p-2 lg:w-1/2" }) }), _jsx(FormMessage, {})] })) })] })] }), _jsx("div", { children: _jsx(Button, { type: "submit", variant: "accent", children: "Update" }) })] }) })] })] }) })] }));
}

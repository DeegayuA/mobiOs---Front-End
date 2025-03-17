import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Input } from "../../components/ui/input";
// import { Textarea } from "../../components/ui/textarea";



"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
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

    function onSubmit(values) {
        console.log(values);
    }



    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <div>
                    <header className="flex h-16 shrink-0 items-center gap-2 shadow-md">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator orientation="vertical" className="mr-2 h-4" />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="#">
                                            PROGRAMS
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>ADD COURSE</BreadcrumbPage>
                                        <BreadcrumbPage className="absolute right-5">Hi! admin</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <div className="flex flex-col gap-6 p-6">
                            <h2 className="text-xl font-semibold uppercase">ADD COURSE</h2>
                        </div>
                        {/* code goes hrer */}
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Left Column */}
                                    <div className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="courseName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Course Name"
                                                            {...field}
                                                            className="border rounded-md p-2 w-full md:w-4/5"
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="courseId"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Course ID"
                                                            {...field}
                                                            className="border rounded-md p-2 w-full md:w-4/5"
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="courseDescription"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Course Description"
                                                            {...field}
                                                            className="border rounded-md p-2 w-full md:w-4/5"
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                                            <FormField
                                                control={form.control}
                                                name="startDate"
                                                render={({ field }) => (
                                                    <FormItem className="w-full sm:w-40">
                                                        <FormControl>
                                                            <Input
                                                                type="text"
                                                                placeholder="Start Date"
                                                                {...field}
                                                                className="border rounded-md p-2 w-full"
                                                            />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="endDate"
                                                render={({ field }) => (
                                                    <FormItem className="w-full sm:w-40">
                                                        <FormControl>
                                                            <Input
                                                                type="text"
                                                                placeholder="End Date"
                                                                {...field}
                                                                className="border rounded-md p-2 w-full"
                                                            />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <Button
                                                type="submit"
                                                className="bg-black text-white border border-black rounded-md px-6 py-2 hover:bg-gray-800"
                                            >
                                                Submit
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="space-y-4 md:pl-12 lg:pl-32">
                                        <div className="border rounded-md p-2 w-full sm:w-60">
                                            <p className="text-gray-500">Created By User</p>
                                        </div>

                                        <div className="border rounded-md p-2 w-full sm:w-60">
                                            <p className="text-gray-500">Created Date</p>
                                        </div>

                                        <div className="border rounded-md p-2 w-full sm:w-60">
                                            <p className="text-gray-500">Last Edited User</p>
                                        </div>

                                        <div className="border rounded-md p-2 w-full sm:w-60">
                                            <p className="text-gray-500">Last Edited Date</p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Form>

                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}

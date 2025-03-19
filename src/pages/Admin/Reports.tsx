import React, { useEffect, useRef, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Input } from "../../components/ui/input";
import { ChevronDown, Check, RefreshCw } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


"use client"

import { Button } from "../../components/ui/button";





export function Reports() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState('All Courses');
    const [loading, setLoading] = useState(false);




    const courses = [
        'All Courses',
        'Artificial Intelligence',
        'Data Science',
        'Cyber Security',
        'Quantum Computing',
        'Robotics',
        'Biochemistry',
        'Network Engineering',
        'IoT Systems',
        'Software Engineering'
    ];


    // Sample attendance data by week for each course
    const attendanceData = {
        'All Courses': [
            { week: 'Week 1', attendance: 420 },
            { week: 'Week 2', attendance: 390 },
            { week: 'Week 3', attendance: 410 },
            { week: 'Week 4', attendance: 380 },
            { week: 'Week 5', attendance: 430 },
            { week: 'Week 6', attendance: 415 },
        ],
        'Artificial Intelligence': [
            { week: 'Week 1', attendance: 85 },
            { week: 'Week 2', attendance: 82 },
            { week: 'Week 3', attendance: 90 },
            { week: 'Week 4', attendance: 78 },
            { week: 'Week 5', attendance: 88 },
            { week: 'Week 6', attendance: 80 },
        ],
        'Data Science': [
            { week: 'Week 1', attendance: 65 },
            { week: 'Week 2', attendance: 62 },
            { week: 'Week 3', attendance: 60 },
            { week: 'Week 4', attendance: 67 },
            { week: 'Week 5', attendance: 70 },
            { week: 'Week 6', attendance: 75 },
        ],
        'Cyber Security': [
            { week: 'Week 1', attendance: 50 },
            { week: 'Week 2', attendance: 48 },
            { week: 'Week 3', attendance: 52 },
            { week: 'Week 4', attendance: 55 },
            { week: 'Week 5', attendance: 53 },
            { week: 'Week 6', attendance: 57 },
        ]
    };

    // Add sample data for other courses
    courses.forEach(course => {
        if (!attendanceData[course]) {
            attendanceData[course] = [
                { week: 'Week 1', attendance: Math.floor(Math.random() * 50) + 30 },
                { week: 'Week 2', attendance: Math.floor(Math.random() * 50) + 30 },
                { week: 'Week 3', attendance: Math.floor(Math.random() * 50) + 30 },
                { week: 'Week 4', attendance: Math.floor(Math.random() * 50) + 30 },
                { week: 'Week 5', attendance: Math.floor(Math.random() * 50) + 30 },
                { week: 'Week 6', attendance: Math.floor(Math.random() * 50) + 30 },
            ];
        }
    });

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectCourse = (course) => {
        setLoading(true);
        setSelectedCourse(course);
        setIsOpen(false);

        // Simulate data loading
        setTimeout(() => {
            setLoading(false);
        }, 800);
    };

    //const toggleDropdown = () => setIsOpen(!isOpen);



    useEffect(() => {
        // Auto-refresh simulation
        const interval = setInterval(() => {
            // Simulate refresh by briefly showing loading state
            setLoading(true);
            setTimeout(() => setLoading(false), 500);
        }, 30000);

        return () => clearInterval(interval);
    }, []);













    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <div className="border border-[var(--primary-border-color)] rounded-lg shadow-md xs:rounded-none">
                    <header className="flex h-16 shrink-0 items-center gap-2 shadow-md px-4 border-[var(--primary-border-color)] border-b">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4 bg-[var(--primary-border-color)]" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">Programs</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Course</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <span className="ml-auto font-medium text-gray-600">Hi! Admin</span>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <div className="flex flex-col gap-6 p-6">
                            <h2 className="text-xl font-semibold uppercase">REPORTS</h2>
                        </div>
                        {/* code goes hrer */}
                        <div className="relative w-48">

                            <button
                                onClick={toggleDropdown}
                                className="flex items-center w-[120%] justify-between  px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                            >
                                <span>{selectedCourse}</span>
                                <ChevronDown className="w-4 h-4 ml-2" />
                            </button>

                            {isOpen && (
                                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                                    {courses.map((course) => (
                                        <div
                                            key={course}
                                            onClick={() => selectCourse(course)}
                                            className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${selectedCourse === course ? 'bg-blue-100' : ''
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>{course}</span>
                                                {selectedCourse === course && <Check className="w-4 h-4 text-blue-500" />}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {/* here */}

                        {/* bar chart here  */}
                        {/* <div className="p-5 w-full h-[20%]"> */}
                        <div className="bg-white rounded-lg w-[50%]   p-4 ">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Weekly Student Attendance</h2>
                                {loading ? (
                                    <div className="flex items-center">
                                        <RefreshCw className="w-4 h-4 text-gray-400 animate-spin mr-2" />
                                        <span className="text-xs text-gray-500">Loading...</span>
                                    </div>
                                ) : (
                                    <span className="text-xs text-gray-500">Auto-refreshes every 30s</span>
                                )}
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                {loading ? (
                                    <div className="flex justify-center items-center h-48">
                                        <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
                                    </div>
                                ) : (
                                    <div className="h-70">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart
                                                data={attendanceData[selectedCourse]}
                                                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                                            >
                                                <XAxis dataKey="week" />
                                                <YAxis />
                                                <Tooltip formatter={(value) => value.toLocaleString()} />
                                                <Legend />
                                                <Bar dataKey="attendance" name="Students" fill="#3b82f6" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* </div> */}
                        {/* bar chart end */}






                        <div className="flex space-x-[5%]">
                            <Input
                                disabled
                                placeholder="Reports"
                                className="border rounded-md p-2 w-1/2 border-[var(--primary-border-color)]"
                            />


                            <Button
                                type="submit"
                                variant="accent"
                            >
                                Download
                            </Button>
                        </div>




                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}






{/* <div className="relative inline-block text-left w-72" ref={dropdownRef}>
<button
    onClick={() => setIsOpen(!isOpen)}
    className="hover:bg-transparent focus:ring-0 focus:outline-none font-medium rounded-lg text-lg px-6 py-3 text-center inline-flex items-center w-full justify-between border border-gray-300 bg-white shadow-sm"
    type="button"
>
    <span className="flex items-center gap-2">
        Dropdown Menu
    </span>
    <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
        />
    </svg>
</button>

{isOpen && (
    <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-72 dark:bg-gray-700">
        <ul className="py-2 text-lg text-gray-700 dark:text-gray-200">
            <li>
                <a href="#" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Dashboard
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Settings
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Earnings
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Sign out
                </a>
            </li>
        </ul>
    </div>
)}
</div> */}

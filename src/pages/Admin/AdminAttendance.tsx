import React, { useState, useEffect } from "react";
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
    const [selectedCourse, setSelectedCourse] = useState<keyof typeof data | "all">("all");
    const [selectedModule, setSelectedModule] = useState<string>("all");
    const [modules, setModules] = useState<string[]>(Object.values(data).flat());
    const [filteredData, setFilteredData] = useState(courseData);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        let filtered = courseData.filter((item) =>
            (selectedCourse === "all" || item.course === selectedCourse) &&
            (selectedModule === "all" || item.module === selectedModule) &&
            (item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.instructor.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredData(filtered);
    }, [selectedCourse, selectedModule, searchTerm]);

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
                                    <BreadcrumbLink href="#">Admin</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Course Management</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <span className="ml-auto font-medium text-gray-600">Hi! Admin</span>
                    </header>

                    <div className="flex flex-1 flex-col p-6">
                        <h2 className="text-2xl font-semibold uppercase px-4  text-left">Course Management</h2>
                        <h3 className="text-lg font-medium mt-4 mb-2 px-4  text-left">Filter</h3>
                        <div className="flex gap-2 py-4 px-4">
                            <div className="flex-0">
                                <h3 className="text-lg font-medium mb-2 min-w-[150px]  text-left">Course Filter</h3>
                                <Select value={selectedCourse} onValueChange={(value) => setSelectedCourse(value as keyof typeof data | "all")}>
                                    <SelectTrigger className="border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300">
                                        {selectedCourse === "all" ? "Select Course" : selectedCourse}
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Courses</SelectItem>
                                        {Object.keys(data).map(course => (
                                            <SelectItem key={course} value={course}>{course}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex-0">
                                <h3 className="text-lg font-medium mb-2 min-w-[150px]  text-left">Module Filter</h3>
                                <Select value={selectedModule} onValueChange={setSelectedModule}>
                                    <SelectTrigger className="border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300">
                                        {selectedModule === "all" ? "Select Module" : selectedModule}
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Modules</SelectItem>
                                        {modules.map(module => (
                                            <SelectItem key={module} value={module}>{module}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex-0 min-w-[250px] w-full">
                                <h3 className="text-lg font-medium mb-2 min-w-[200px]  text-left">Search</h3>

                                <Input
                                    type="text"
                                    placeholder="Search by Course, Module, or Instructor"
                                    className="border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300 w-full"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="overflow-x-auto bg-white shadow-md rounded-lg mx-4 p-4 text-left border border-[var(--primary-border-color)]">
                            <Table>
                                <TableHeader className="color-[var(--primary-border-color)]">
                                    <TableRow>
                                        <TableHead>Course</TableHead>
                                        <TableHead>Module</TableHead>
                                        <TableHead>Class Date</TableHead>
                                        <TableHead>Instructor</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredData.map((row, index) => (
                                        <TableRow key={index} className="hover:bg-gray-100">
                                            <TableCell>{row.course}</TableCell>
                                            <TableCell>{row.module}</TableCell>
                                            <TableCell>{row.classDate}</TableCell>
                                            <TableCell>{row.instructor}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}

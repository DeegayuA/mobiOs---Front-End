import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
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
}));

export default function AdminDashboard() {
  const allModules = Object.values(data).flat();
  const [selectedCourse, setSelectedCourse] = useState<keyof typeof data | "all">("all");
  const [selectedModule, setSelectedModule] = useState<string>("all");
  const [modules, setModules] = useState<string[]>(allModules);
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
        <div>
          <header className="flex h-16 shrink-0 items-center gap-2 shadow-md px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Admin</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="">Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <span className="ml-auto font-medium text-gray-600">Hi! Admin</span>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-6">
            <h2 className="text-2xl font-semibold uppercase px-4 text-left">DASHBOARD</h2>

            <div className="grid px-4 grid-cols-2 xl:grid-cols-6 sm:grid-cols-3 gap-4 md:grid-cols-4 gap-4 gap-4 flex-wrap max-w-full min-w-[200px]">
              <Card>
                <CardHeader>
                  <CardTitle>Number of Active Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{Object.keys(data).length}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Number of Active Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{Object.values(data).flat().length}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Number of Active Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{courseData.length}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Number of Instructors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">5</p> {/* Example Static Value */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Total Classes Conducted</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{courseData.length}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Total Attendance Count</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{courseData.reduce((sum, item) => sum + item.totalStudents, 0)}</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 px-4">
              <div>
                <h3 className="text-lg font-medium mb-2  text-left">Course Filter</h3>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger className="border rounded p-2">
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

              <div>
                <h3 className="text-lg font-medium mb-2  text-left">Module Filter</h3>
                <Select value={selectedModule} onValueChange={setSelectedModule}>
                  <SelectTrigger className="border rounded p-2">
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

              <div className="flex-0 min-w-[200px] w-full">
                <h3 className="text-lg font-medium mb-2 min-w-[200px]  text-left">Search</h3>
                <Input
                  type="text"
                  placeholder="Search by Course, Module, or Instructor"
                  className="border rounded p-3 elevation-1 hover:elevation-2 transition-all duration-300 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4 text-left">
              <Table className="px-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Courses</TableHead>
                    <TableHead>Modules</TableHead>
                    <TableHead>Class Dates</TableHead>
                    <TableHead>Instructor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((row, index) => (
                    <TableRow key={index}>
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

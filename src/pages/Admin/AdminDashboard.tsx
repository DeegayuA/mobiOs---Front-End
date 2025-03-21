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
import { motion } from "framer-motion";

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
  const [selectedCourse, setSelectedCourse] = useState<keyof typeof data | "all">("all");
  const [selectedModule, setSelectedModule] = useState<string>("all");
  const [modules, setModules] = useState<string[]>(selectedCourse === "all" ? [] : data[selectedCourse] || []);
  const [filteredData, setFilteredData] = useState(courseData);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const heightAdjustment = 210; 
  const rowsPerPage = Math.floor((window.innerHeight - heightAdjustment) / 50); 

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  useEffect(() => {
    if (selectedCourse === "all") {
      setSelectedModule("all");
      setSearchTerm("");
    }
    let filtered = courseData.filter((item) =>
      (selectedCourse === "all" || item.course === selectedCourse) &&
      (selectedModule === "all" || item.module === selectedModule) &&
      (item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.instructor.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredData(filtered);
  }, [selectedCourse, selectedModule, searchTerm]);

  useEffect(() => {
    setModules(selectedCourse === "all" ? allModules : data[selectedCourse] || []);
  }, [selectedCourse]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      <div className="border border-[var(--primary-border-color)] rounded-lg shadow-md xs:rounded-none xl:h-[calc(100vh-10px)] xl:overflow-hidden h-full">
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
                  <BreadcrumbPage className="">Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <span className="ml-auto font-medium text-gray-600">Hi! Admin</span>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-6 overflow-y-auto">
            <h2 className="text-2xl font-semibold uppercase px-4 text-left">DASHBOARD</h2>

            <div className="grid px-4 grid-cols-2 xl:grid-cols-6 sm:grid-cols-3 gap-4 md:grid-cols-4 gap-4 gap-4 flex-wrap max-w-full min-w-[200px]">
              <Card className="border border-[var(--primary-border-color)]">
                <CardHeader>
                  <CardTitle>Number of Active Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-[var(--accent)]">{Object.keys(data).length}</p>
                </CardContent>
              </Card>
              <Card className="border border-[var(--primary-border-color)]">
                <CardHeader>
                  <CardTitle>Number of Active Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-[var(--accent)]">{Object.values(data).flat().length}</p>
                </CardContent>
              </Card>
              <Card className="border border-[var(--primary-border-color)]">
                <CardHeader>
                  <CardTitle>Number of Active Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-[var(--accent)]">{courseData.length}</p>
                </CardContent>
              </Card>
              <Card className="border border-[var(--primary-border-color)]">
                <CardHeader>
                  <CardTitle>Number of Active Instructors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-[var(--accent)]">5</p> {/* Example Static Value */}
                </CardContent>
              </Card>
              <Card className="border border-[var(--primary-border-color)]">
                <CardHeader>
                  <CardTitle>Total Classes Conducted</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-[var(--accent)]">{courseData.length}</p>
                </CardContent>
              </Card>
              <Card className="border border-[var(--primary-border-color)]">
                <CardHeader>
                  <CardTitle>Total Attendance Count</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-[var(--accent)]">{courseData.reduce((sum, item) => sum + item.totalStudents, 0)}</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 px-4 flex-wrap">
              <div>
                <h3 className="text-lg font-medium mb-2  text-left">Course Filter</h3>
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

              {selectedCourse !== "all" && (
                <div>
                  <h3 className="text-lg font-medium mb-2 text-left">Module Filter</h3>
                  <Select value={selectedModule} onValueChange={setSelectedModule}>
                    <SelectTrigger className="border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300">
                      {selectedModule === "all" ? "Select Module" : selectedModule}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Modules</SelectItem>
                      {modules.map((module) => (
                        <SelectItem key={module} value={module}>{module}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="flex-0 min-w-[250px] w-full">
                <h3 className="text-lg font-medium mb-2 text-left">Search</h3>
                <Input
                  type="text"
                  placeholder="Search by Course, Module, or Instructor"
                  className="border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300 min-w-[200px] sm:min-w-100 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <motion.div
              key={currentPage} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="overflow-x-auto bg-white shadow-md rounded-lg mx-4 p-4 text-left border border-[var(--primary-border-color)]">
                <Table className="px-4 border-collapse w-full">
                  <TableHeader className="color-[var(--primary-border-color)]">
                    <TableRow>
                      <TableHead>Courses</TableHead>
                      <TableHead>Modules</TableHead>
                      <TableHead>Class Dates</TableHead>
                      <TableHead>Instructor</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentRows.map((row, index) => (
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
            </motion.div>
            
            <div className="flex align-center justify-center gap-4 items-center ">
              <button
                onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-[var(--accent)] text-secondary rounded-lg"
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-[var(--accent)] text-secondary rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

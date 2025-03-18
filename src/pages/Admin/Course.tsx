import React, { useState, useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../../components/ui/table";

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

export default function AdminCourse() {
  const [activeFilter, setActiveFilter] = useState<string>("courses");
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
        <div>
          <header className="flex h-16 shrink-0 items-center gap-2 shadow-md px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
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

          <div className="flex flex-1 flex-col p-6">
            <h2 className="text-2xl font-semibold">Programs - Course</h2>
            <h3 className="text-lg font-medium mt-4 mb-2">Filter</h3>

            <div className="flex gap-4 mt-4">
              <Select onValueChange={setSelectedCourse}>
                <SelectTrigger className="border border-gray-300 rounded px-4 py-2">
                  {selectedCourse === "all" ? "Select Course" : selectedCourse}
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Select Course</SelectItem>
                  {Object.keys(data).map(course => (
                    <SelectItem key={course} value={course}>{course}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={setSelectedModule}>
                <SelectTrigger className="border border-gray-300 rounded px-4 py-2">
                  {selectedModule === "all" ? "Select Module" : selectedModule}
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Select Module</SelectItem>
                  {modules.map(module => (
                    <SelectItem key={module} value={module}>{module}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                type="text"
                placeholder="Search by Course, Module, or Instructor"
                className="w-1/3 border border-gray-300 rounded px-4 py-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4 mt-4">
              <Table>



                <TableBody>
                  <TableRow>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Module</TableHead>
                    <TableHead>Class Date</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                  {filteredData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.course}</TableCell>
                      <TableCell>{row.module}</TableCell>
                      <TableCell>{row.classDate}</TableCell>
                      <TableCell>{row.instructor}</TableCell>
                      <TableCell>
                        <Button variant="link" size="sm">View</Button>
                        <span className="mx-1">|</span>
                        <Button variant="link" size="sm">Edit</Button>
                        <span className="mx-1">|</span>
                        <Button variant="link" size="sm">Add Module</Button>
                      </TableCell>
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

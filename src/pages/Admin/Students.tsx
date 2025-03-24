import React, { useState } from "react";
import { motion } from "framer-motion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Button } from "../../components/ui/button";
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "../../components/ui/table";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../../components/ui/select";

const studentsData = [
  { name: "John Doe", id: "S001", mobile: "1234567890", email: "john@example.com" },
  { name: "Jane Smith", id: "S002", mobile: "2345678901", email: "jane@example.com" },
  { name: "Mark Johnson", id: "S003", mobile: "3456789012", email: "mark@example.com" },
  { name: "Alice Brown", id: "S004", mobile: "4567890123", email: "alice@example.com" },
  { name: "Bob White", id: "S005", mobile: "5678901234", email: "bob@example.com" },
  { name: "Charlie Black", id: "S006", mobile: "6789012345", email: "charlie@example.com" },
  { name: "David Green", id: "S007", mobile: "7890123456", email: "david@example.com" },
  { name: "Emily Red", id: "S008", mobile: "8901234567", email: "emily@example.com" },
  { name: "Frank Blue", id: "S009", mobile: "9012345678", email: "frank@example.com" },
  { name: "Grace Yellow", id: "S010", mobile: "0123456789", email: "grace@example.com" },
];

const coursesData = [
  { name: "Course 1" },
  { name: "Course 2" },
  { name: "Course 3" },
];

export default function AdminStudents() {
  const [selectedStudent, setSelectedStudent] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const heightAdjustment = 200;
  const rowsPerPage = Math.floor((window.innerHeight - heightAdjustment) / 50); // Adjust for your layout

  const filteredData = studentsData.filter((student) =>
    (selectedStudent === "all" || student.name === selectedStudent) &&
    (selectedCourse === "all" || student.email.includes(selectedCourse)) &&
    (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

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
                  <BreadcrumbLink href="#">Students</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <span className="ml-auto font-medium text-gray-600">Welcome back, Admin!</span>
          </header>

          <div className="flex flex-1 flex-col px-6 py-8 space-y-4">
            <h2 className="text-2xl font-semibold  text-left">STUDENTS</h2>

            <div className="flex justify-between mt-4">
              {/* Filter Section */}
              <div className="flex gap-4 max-w-[500px]">
                <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                                    <SelectTrigger className="border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300">
                    {selectedStudent === "all" ? "Select Student" : selectedStudent}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Students</SelectItem>
                    {studentsData.map((student) => (
                      <SelectItem key={student.id} value={student.name}>{student.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                                    <SelectTrigger className="border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300">
                    {selectedCourse === "all" ? "Select Course" : selectedCourse}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    {coursesData.map((course, index) => (
                      <SelectItem key={index} value={course.name}>{course.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Search"
                  className="border border-[var(--primary-border-color)] rounded-lg p-3 elevation-1 hover:elevation-2 transition-all duration-300 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <Button variant="accent">Add Student</Button>
                <Button variant="secondary">Bulk Upload</Button>
              </div>
            </div>

            {/* Table */}
            <motion.div
              key={currentPage} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4 mt-6  text-left border border-[var(--primary-border-color)]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Student ID</TableHead>
                      <TableHead>Mobile No</TableHead>
                      <TableHead>Email ID</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentRows.map((student, index) => (
                      <TableRow key={index} className="odd:bg-gray-100 even:bg-white">
                        <TableCell className="px-4 py-2">{student.name}</TableCell>
                        <TableCell className="px-4 py-2">{student.id}</TableCell>
                        <TableCell className="px-4 py-2">{student.mobile}</TableCell>
                        <TableCell className="px-4 py-2">{student.email}</TableCell>
                        <TableCell className="space-y-1">
                          <Button variant="link" size="sm" title="Reset student password">Reset Password</Button>
                          <Button variant="link" size="sm">View</Button>
                          <Button variant="link" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </motion.div>

            <div className="flex align-center justify-center gap-4 items-center">
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
import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Button } from "../../components/ui/button";
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "../../components/ui/table";
import { Input } from "../../components/ui/input";

export default function AdminStudents() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div>
          <header className="flex h-16 items-center gap-4 shadow-md px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Students</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <span className="ml-auto font-medium text-gray-600">Welcome back, Admin!</span>
          </header>

          <div className="flex flex-1 flex-col p-8 space-y-6">
            <h2 className="text-2xl font-semibold">STUDENTS</h2>

            {/* Buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="default">Add Student</Button>
              <Button variant="secondary">Bulk Upload</Button>
            </div>

            {/* Filter Section */}
            <h3 className="text-lg font-medium mt-6 mb-2">Filter</h3>
            <div className="flex gap-4 w-full">
              <Button variant="default" className="w-full min-w-[200px]">Student 1</Button>
              <Button variant="outline" className="w-full min-w-[200px]">Student 2</Button>
              <Button variant="outline" className="w-full min-w-[200px]">Course 1</Button>
              <Button variant="outline" className="w-full min-w-[200px]">Course 2</Button>
            </div>
            <Input type="text" placeholder="Search" className="w-1/3 mt-2" />

            {/* Table */}
            <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4 mt-6">
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
                  <TableRow className="odd:bg-gray-100 even:bg-white">
                    <TableCell className="px-4 py-2">-</TableCell>
                    <TableCell className="px-4 py-2">-</TableCell>
                    <TableCell className="px-4 py-2">-</TableCell>
                    <TableCell className="px-4 py-2">-</TableCell>
                    <TableCell className="space-y-1">
                      <Button variant="link" size="sm" title="Reset student password">Reset Password</Button>
                      <Button variant="link" size="sm">View</Button>
                      <Button variant="link" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
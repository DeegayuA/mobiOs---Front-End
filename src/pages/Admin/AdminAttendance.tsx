import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "../../components/ui/table";

export default function AdminAttendance() {
  const [activeFilter, setActiveFilter] = React.useState<string>("courses");

  function handleFilterClick(filter: string): void {
    setActiveFilter(filter);
  }

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
                  <BreadcrumbPage>Attendance</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <span className="ml-auto font-medium text-gray-600">Hi! Admin</span>
          </header>

          <div className="flex flex-1 flex-col p-6">
            <h2 className="text-2xl font-semibold uppercase">Attendance</h2>
            <h3 className="text-lg font-medium mt-4 mb-2">Filter</h3>
            <div className="flex gap-4">
              <Button
                variant={activeFilter === "courses" ? "default" : "outline"}
                onClick={() => handleFilterClick("courses")}
                className="py-2 px-4"
              >
                Courses
              </Button>
              <Button
                variant={activeFilter === "modules" ? "default" : "outline"}
                onClick={() => handleFilterClick("modules")}
                className="py-2 px-4"
              >
                Modules
              </Button>
              <Input
                type="text"
                placeholder="Search..."
                className="w-1/3"
              />
            </div>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4 mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Courses</TableHead>
                    <TableHead>Modules</TableHead>
                    <TableHead>Class Dates</TableHead>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Student ID</TableHead>
                    <TableHead>Attendance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h3 className="text-lg font-medium mt-6">Overall Student Attendance %</h3>
            <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4 mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Courses</TableHead>
                    <TableHead>Modules</TableHead>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Student ID</TableHead>
                    <TableHead>Attendance %</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
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

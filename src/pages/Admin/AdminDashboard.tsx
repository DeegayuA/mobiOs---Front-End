import React from "react";
import { Outlet } from "react-router-dom"; // For rendering nested routes
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Button } from "../../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { BreadcrumbList, BreadcrumbPage } from "../../components/ui/breadcrumb";
import { Input } from "../../components/ui/input";

export default function AdminDashboard() {
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
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <span className="ml-auto font-medium text-gray-600">Hi! Admin</span>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-6">
            <div className="flex flex-1 flex-col gap-4">
              <h2 className="text-2xl font-semibold uppercase">DASHBOARD</h2>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Number of Active Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">0</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Number of Active Students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">0</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Filter</h3>
                <div className="flex gap-4">
                  <Button variant={activeFilter === "courses" ? "default" : "outline"} onClick={() => handleFilterClick("courses")}>
                    Courses
                  </Button>
                  <Button variant={activeFilter === "modules" ? "default" : "outline"} onClick={() => handleFilterClick("modules")}>
                    Modules
                  </Button>
                  {/* <Input
                    type="text"
                    placeholder="Search..."
                    className="w-1/3"
                  /> */}
                </div>
              </div>

              <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Courses</TableHead>
                      <TableHead>Modules</TableHead>
                      <TableHead>Class Dates</TableHead>
                      <TableHead>Total Students</TableHead>
                      <TableHead>Attendance Count</TableHead>
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
                      <TableCell>-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

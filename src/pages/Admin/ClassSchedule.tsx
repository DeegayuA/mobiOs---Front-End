import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "../../components/ui/table";

export default function AdminClassSchedule() {
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
                  <BreadcrumbLink href="#">Programs</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Class Schedule</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <span className="ml-auto font-medium text-gray-600">Hi! Admin</span>
          </header>

          <div className="flex flex-1 flex-col p-6">
            <h2 className="text-2xl font-semibold">PROGRAMS — CLASS SCHEDULE</h2>
            {/* <h3 className="text-lg font-medium mt-4 mb-2">Filter</h3> */}
            {/* <Button className="absolute right-5 ml-4">ADD COURSE</Button> */}

            {/* <div className="flex gap-4">
              <Button
                variant={activeFilter === "courses" ? "default" : "outline"}
                onClick={() => handleFilterClick("courses")}
              >
                Courses
              </Button>
              <Button
                variant={activeFilter === "modules" ? "default" : "outline"}
                onClick={() => handleFilterClick("modules")}
              >
                Modules
              </Button>
              <Input type="text" placeholder="Search..." className="w-1/3" />
            </div> */}

            <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Course ID</TableHead>
                    <TableHead>Module</TableHead>
                    <TableHead>Module ID</TableHead>
                    <TableHead>QR</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <Button variant="link" size="sm">View</Button> |
                      <Button variant="link" size="sm">Generate QR</Button>
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

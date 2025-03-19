import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Button } from "../../components/ui/button";
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "../../components/ui/table";

export default function AdminClassSchedule() {
  const [activeFilter, setActiveFilter] = React.useState<string>("courses");

  function handleFilterClick(filter: string): void {
    setActiveFilter(filter);
  }

  function handleGenerateQR(courseName: string, moduleName: string) {
    alert(`QR code generated for ${courseName} - ${moduleName}`);
  }

  const classScheduleData = [
    {
      courseName: "Artificial Intelligence",
      courseId: "AI101",
      module: "Deep Learning",
      moduleId: "DL201",
      qrCode: "https://placehold.co/150x150.png"
    },
    {
      courseName: "Data Science",
      courseId: "DS101",
      module: "Machine Learning",
      moduleId: "ML202",
      qrCode: "https://placehold.co/150x150.png"
    },
    {
      courseName: "Cyber Security",
      courseId: "CS101",
      module: "Cloud Security",
      moduleId: "CS303",
      qrCode: "https://placehold.co/150x150.png"
    },
    {
      courseName: "Robotics",
      courseId: "RO101",
      module: "Embedded Systems",
      moduleId: "RO201",
      qrCode: "https://placehold.co/150x150.png"
    },
    {
      courseName: "Quantum Computing",
      courseId: "QC101",
      module: "Quantum Algorithms",
      moduleId: "QC201",
      qrCode: "https://placehold.co/150x150.png"
    },
    {
      courseName: "Biochemistry",
      courseId: "BC101",
      module: "Bioinformatics",
      moduleId: "BC201",
      qrCode: "https://placehold.co/150x150.png"
    },
    {
      courseName: "Network Engineering",
      courseId: "NE101",
      module: "Network Security",
      moduleId: "NE201",
      qrCode: "https://placehold.co/150x150.png"
    },
    {
      courseName: "Quantum Computing",
      courseId: "QC101",
      module: "Quantum Algorithms",
      moduleId: "QC201",
      qrCode: "https://placehold.co/150x150.png"
    },
    {
      courseName: "Biochemistry",
      courseId: "BC101",
      module: "Bioinformatics",
      moduleId: "BC201",
      qrCode: "https://placehold.co/150x150.png"
    },
    {
      courseName: "Network Engineering",
      courseId: "NE101",
      module: "Network Security",
      moduleId: "NE201",
      qrCode: "https://placehold.co/150x150.png"
    }
  ];

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
                  <BreadcrumbPage>Class Schedule</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <span className="ml-auto font-medium text-gray-600">Hi! Admin</span>
          </header>

          <div className="flex flex-1 flex-col p-6">
            <h2 className="text-2xl font-semibold">PROGRAMS — CLASS SCHEDULE</h2>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4 mt-4 border border-[var(--primary-border-color)]">
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
                  {classScheduleData.map((row, index) => (
                    <TableRow key={index} className="hover:bg-gray-100">
                      <TableCell>{row.courseName}</TableCell>
                      <TableCell>{row.courseId}</TableCell>
                      <TableCell>{row.module}</TableCell>
                      <TableCell>{row.moduleId}</TableCell>
                      <TableCell><img src={row.qrCode} alt="QR Code" className="w-16 h-16" /></TableCell>
                      <TableCell>
                        <Button variant="link" size="sm">View</Button> |
                        <Button
                          variant="link"
                          size="sm"
                          onClick={() => handleGenerateQR(row.courseName, row.module)}
                        >
                          Generate QR
                        </Button>
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

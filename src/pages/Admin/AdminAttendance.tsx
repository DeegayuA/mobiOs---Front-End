import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";

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
      <header className="flex h-16 shrink-0 items-center gap-2 shadow-md">
        <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Admin
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Attendance</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex flex-col gap-6 p-6">
          <h2 className="text-xl font-semibold uppercase">Attendance</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-muted p-6 shadow-md">
              <p className="text-sm text-gray-500">Number of Active Courses</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="rounded-lg bg-muted p-6 shadow-md">
              <p className="text-sm text-gray-500">Number of Active Students</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>

          <div>
          <h3 className="text-lg font-medium">Filter</h3>
          <div className="mt-2 flex gap-4">
            <button
              className={`px-4 py-2 rounded transition-all duration-300 transform focus:outline-none focus:ring-2 ${
                activeFilter === "courses"
                  ? "bg-primary text-white scale-105"
                  : "bg-muted text-muted-foreground hover:bg-primary-dark"
              }`}
              onClick={() => handleFilterClick("courses")}
            >
              Courses
            </button>
            <button
              className={`px-4 py-2 rounded transition-all duration-300 transform focus:outline-none focus:ring-2 ${
                activeFilter === "modules"
                  ? "bg-secondary text-white scale-105"
                  : "bg-muted text-muted-foreground hover:bg-secondary-dark"
              }`}
              onClick={() => handleFilterClick("modules")}
            >
              Modules
            </button>
          </div>
        </div>

          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border border-gray-200 p-2">Courses</th>
                  <th className="border border-gray-200 p-2">Modules</th>
                  <th className="border border-gray-200 p-2">Class Dates</th>
                  <th className="border border-gray-200 p-2">Total Students</th>
                  <th className="border border-gray-200 p-2">Attendance Count</th>
                  <th className="border border-gray-200 p-2">Attendance %</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-2">-</td>
                  <td className="border border-gray-200 p-2">-</td>
                  <td className="border border-gray-200 p-2">-</td>
                  <td className="border border-gray-200 p-2">-</td>
                  <td className="border border-gray-200 p-2">-</td>
                  <td className="border border-gray-200 p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </SidebarInset>
    </SidebarProvider>
  );
}

import React from "react";
import { Outlet } from "react-router-dom"; // For rendering nested routes
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";

export default function AdminDashboard() {
  const [activeFilter, setActiveFilter] = React.useState<string>("courses");

  function handleFilterClick(filter: string): void {
    setActiveFilter(filter);
  }

  return (
    <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
    <div className="bg-white rounded-lg shadow-xl p-6 space-y-6">
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
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex flex-col gap-6 p-6">
          <h2 className="text-3xl font-bold">DASHBOARD</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg bg-muted p-6 shadow-md">
              <p className="text-sm text-gray-500">Number of Active Courses</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="rounded-lg bg-muted p-6 shadow-md">
              <p className="text-sm text-gray-500">Number of Active Students</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-lg">
          <h3 className="text-lg font-medium">Filter</h3>
          <div className="mt-2 flex gap-4">
            <button
              className="px-6 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 ${
                activeFilter === "courses"
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-primary-dark"
              }"
              onClick={() => handleFilterClick("courses")}
            >
              Courses
            </button>
            <button
              className="px-6 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 ${
                activeFilter === "modules"
                  ? "bg-secondary text-white"
                  : "bg-muted text-muted-foreground hover:bg-secondary-dark"
              }"
              onClick={() => handleFilterClick("modules")}
            >
              Modules
            </button>
          </div>
        </div>

          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-200 text-left text-lg font-semibold">
                  <th className="border border-gray-200 p-4">Courses</th>
                  <th className="border border-gray-200 p-4">Modules</th>
                  <th className="border border-gray-200 p-4">Class Dates</th>
                  <th className="border border-gray-200 p-4">Total Students</th>
                  <th className="border border-gray-200 p-4">Attendance Count</th>
                  <th className="border border-gray-200 p-4">Attendance %</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 hover:scale-105 transition-all duration-200">
                  <td className="border border-gray-200 p-4">-</td>
                  <td className="border border-gray-200 p-4">-</td>
                  <td className="border border-gray-200 p-4">-</td>
                  <td className="border border-gray-200 p-4">-</td>
                  <td className="border border-gray-200 p-4">-</td>
                  <td className="border border-gray-200 p-4">-</td>
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

import React from "react";
import { SidebarProvider, Sidebar, SidebarContent, SidebarTrigger, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "../../components/ui/sidebar"; // Adjust the path if necessary
import { Outlet } from "react-router-dom"; // For rendering nested routes

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>🏠 Dashboard</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>📂 Users</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>⚙️ Settings</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>🚪 Logout</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        {/* Main Admin Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <SidebarTrigger /> {/* Toggle Button */}
          <Outlet /> {/* This will render the admin pages inside this layout */}
        </div>
      </div>
    </SidebarProvider>
  );
}

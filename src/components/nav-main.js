"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, } from "@/components/ui/sidebar";
export function NavMain({ items, }) {
    return (_jsxs(SidebarGroup, { children: [_jsx(SidebarGroupLabel, { children: "Platform" }), _jsx(SidebarMenu, { children: items.map((item) => (_jsx(Collapsible, { asChild: true, defaultOpen: item.isActive, children: _jsxs(SidebarMenuItem, { children: [_jsx(SidebarMenuButton, { asChild: true, tooltip: item.title, children: _jsxs("a", { href: item.url, children: [_jsx(item.icon, {}), _jsx("span", { children: item.title })] }) }), item.items?.length ? (_jsxs(_Fragment, { children: [_jsx(CollapsibleTrigger, { asChild: true, children: _jsxs(SidebarMenuAction, { className: "data-[state=open]:rotate-90", children: [_jsx(ChevronRight, {}), _jsx("span", { className: "sr-only", children: "Toggle" })] }) }), _jsx(CollapsibleContent, { children: _jsx(SidebarMenuSub, { children: item.items?.map((subItem) => (_jsx(SidebarMenuSubItem, { children: _jsx(SidebarMenuSubButton, { asChild: true, children: _jsx("a", { href: subItem.url, children: _jsx("span", { children: subItem.title }) }) }) }, subItem.title))) }) })] })) : null] }) }, item.title))) })] }));
}

"use client";

import {
  BadgeDollarSign,
  BookText,
  ChartNoAxesCombined,
  FileText,
  HelpCircle,
  House,
  LogOut,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useAuth } from "@/lib/context/AuthProvider";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: House,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: BadgeDollarSign,
  },
  {
    title: "Invoices",
    url: "/invoices",
    icon: FileText,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartNoAxesCombined,
  },
];

export function AppSidebar() {
  const { logout } = useAuth();

  return (
    <Sidebar collapsible="icon" className="xl:flex z-50">
      <SidebarHeader className="text-2xl font-bold flex flex-row items-center gap-1 h-16">
        <BookText size={34} />
        Invoices
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="mb-2">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="grid grid-cols-2">
        <div>
          <Button
            className="flex justify-start w-full cursor-pointer"
            variant={"ghost"}
          >
            <HelpCircle />
            Help
          </Button>
          <Button
            className="flex justify-start w-full cursor-pointer"
            variant={"ghost"}
            onClick={logout}
          >
            <LogOut />
            Log Out
          </Button>
        </div>

        <div className="flex justify-end items-center px-2 py-1  ">
          <Button className="cursor-pointer" variant={"ghost"}>
            <Settings className="scale-125" size={24} />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

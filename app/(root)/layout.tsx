// import Sidebar from "@/components/Sidebar";

import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen">
      {/* <Sidebar /> */}
      <Header />
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 pt-16 px-6">{children}</main>
      </SidebarProvider>
    </div>
  );
};
export default DashboardLayout;

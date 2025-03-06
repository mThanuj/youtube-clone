import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

type HomeLayoutProps = {
  children: React.ReactNode;
};

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="p-4 bg-blue-500">
        <p>My Navbar</p>
      </div>
      {children}
    </SidebarProvider>
  );
};

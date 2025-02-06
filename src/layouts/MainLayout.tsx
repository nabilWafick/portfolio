import React from "react";
import { Nav } from "@/components/Nav";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={`  min-h-screen`}>
      <Nav />
      <div className="">{children}</div>
    </div>
  );
}

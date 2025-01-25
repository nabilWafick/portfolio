import React from "react";
import { Poppins } from "next/font/google";
import { Nav } from "@/components/Nav";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      className={`${poppins.className} bg-[#0a192f] text-[#8892b0] min-h-screen`}
    >
      <Nav />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
}

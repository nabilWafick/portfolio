import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import MainLayout from "@/layouts/MainLayout";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Nabil SOUMANOU",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-[#0a192f] text-[#8892b0]`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

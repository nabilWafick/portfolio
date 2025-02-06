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
    <html lang="fr">
      <body className={`${ubuntu.className}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

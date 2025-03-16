import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Joshi | Portfolio",
  description: "Portfolio of Aditya Joshi | Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`bg-[#161716] ${inter.className} antialiased min-h-full`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

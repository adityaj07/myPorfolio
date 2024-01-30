import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

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
    <html lang="en">
      <body className={`bg-[#161716] ${inter.className} m-0 p-0 `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

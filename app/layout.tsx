-0import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Import Script component
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
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${process.env.GOOGLE_ANALYTICS_ID});
          `}
        </Script>
      </head>
      <body
        className={`bg-[#161716] ${inter.className} antialiased min-h-full`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

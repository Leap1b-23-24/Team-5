import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Stack } from "@mui/material";
import Navbar from "@/components/header/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E Commerce",
  description: "Welcome to my web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

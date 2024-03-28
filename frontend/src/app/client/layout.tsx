"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./_components/header&footer/Footer";
import Header from "./_components/header&footer/Header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "E Commerce",
//   description: "Welcome to my web",
// };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight:"500", 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uzum market clone",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

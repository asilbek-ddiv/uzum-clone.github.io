import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  Navbar
} from "@/components/importData";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Uzum online do'koni clone",
    template: "%s | Uzum online do'kon clone",
  },
  description: "Eng zo‘r online do‘kon. Mahsulotlaringiz shu yerda!",
  keywords: ["uzum market", "uzum", "dokon", "ecommerce", "e-commerce", "dukon", "online shop", "online", "shop", "uz", "mahsulot"],
  authors: [{ name: "Asilbek Developer" }],
  creator: "Asilbek Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(`
      ███╗   ██╗███████╗██╗    ██║ ████████╗
      ████╗  ██║██╔════╝ ██║  ██║  ╚═╗██╔══╝
      ██╔██╗ ██║█████╗    █████║     ║██║   
      ██║╚██╗██║██╔══╝   ██╔══██║    ║██║   
      ██║ ╚████║███████╗██║    ██║   ║██║   
      ╚═╝  ╚═══╝╚══════╝╚═╝    ╚═╝   ╚══╝   
  `);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable}`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/footer";

export const metadata: Metadata = {
  title: {
    default: "Uzum online do'koni - Barcha mahsulotlar bir joyda",
    template: "%s | Uzum Market"
  },

  description: "O'zbekistondagi eng yirik online do'kon. Eng arzon narxlarda turli xil mahsulotlarni toping. Maishiy texnika, kiyim-kechak, elektronika va boshqalar.",

  openGraph: {
    title: "Uzum online do'koni - Barcha mahsulotlar bir joyda",
    description: "O'zbekistondagi eng yirik online do'kon. Eng arzon narxlarda turli xil mahsulotlarni toping.",
    url: "https://uzum-market-online.vercel.app/",
    type: "website",
    locale: "uz_UZ",
    images: [
      {
        url: "/images/og-image.jpg",
        alt: "Uzum online do'koni"
      }
    ]
  },

  // Twitter (X) uchun alohida sozlamalar
  twitter: {
    card: "summary_large_image",
    title: "Uzum online do'koni - Barcha mahsulotlar bir joyda",
    description: "O'zbekistondagi eng yirik online do'kon. Eng arzon narxlarda turli xil mahsulotlarni toping.",
    images: ["/images/twitter-image.jpg"],
  },

  authors: [{ name: "Asilbek Developer" }],
  creator: "Asilbek Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
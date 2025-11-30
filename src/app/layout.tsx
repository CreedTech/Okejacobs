import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactLenis } from "@/utils/lenis"; // We'll create this wrapper

const syne = Syne({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "OTG Photography",
  description: "Fine Art Photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${inter.variable}`}>
        <ReactLenis root>
          <Header />
          <main>{children}</main>
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}

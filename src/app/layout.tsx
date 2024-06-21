import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutHeader from "./layouts/LayoutHeader";
import LayoutFooter from "./layouts/LayoutFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adiysfr",
  description: "Welcome to my blog app",
  icons: {
    icon: '/markadi.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutHeader/>

        {children}
        
        <LayoutFooter/>
      </body>
    </html>
  );
}

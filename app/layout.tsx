import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "VaiDarPraia - HomePage",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col lg:grid lg:grid-cols-body h-screen">
          <Navbar />
          <main className="bg-white flex-grow">{children}</main>
          <div className="p-10 bg-gradient-to-r from-blue-950 to-cyan-950 backdrop-opacity-80">
            info
          </div>
        </div>
      </body>
    </html>
  );
}

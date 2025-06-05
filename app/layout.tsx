// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import Navbar from "./_components/Navbar";
import ReactQueryProvider from "./utils/ReactQueryProvider";

export const metadata: Metadata = {
  title: "VaiDarPraia - HomePage",
};

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <div className="flex flex-col lg:flex-row h-screen">
          <Navbar />
          <ReactQueryProvider>
            <main className="flex-grow relative overflow-hidden">
              {children}
            </main>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VaiDarPraia - HomePage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grid sm:grid-cols-bodysm lg:grid-cols-body md:grid-cols-bodymd h-screen">
          <div className="flex-col bg-slate-200	"></div>
          <main className="bg-white">{children}</main>
          <div className="bg-gradient-to-r from-blue-950 to-cyan-950 backdrop-opacity-80">
            info
          </div>
        </div>
      </body>
    </html>
  );
}

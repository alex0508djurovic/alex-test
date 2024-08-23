import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import HistoryProvider from "@/context/historyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aleksandar TS test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative w-full h-[100vh] flex flex-col justify-start align-middle ">
          <Header />
          <div className="flex flex-col justify-center align-middle w-full h-full mt-[60px] pr-5 sm:flex-row">
            <Sidebar />
            <HistoryProvider>{children}</HistoryProvider>
          </div>
        </div>
      </body>
    </html>
  );
}

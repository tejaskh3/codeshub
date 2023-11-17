import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";
import RecoilRootWrapper from "@/components/providers/RecoilRootWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "codesHub",
  description: "A platform to practice coding questions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <html lang="en">
        <body className={inter.className}><RecoilRootWrapper>{children}</RecoilRootWrapper></body>
      </html>
  );
}

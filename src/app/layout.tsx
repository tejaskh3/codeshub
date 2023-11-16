// "use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { RecoilRoot } from "recoil";
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
    // <RecoilRoot>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    // </RecoilRoot>
  );
}

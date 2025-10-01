import type { Metadata } from "next";
import type { ReactNode } from "react";  // 추가
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "도란도란 펜션",
  description: "자연 속 편안한 휴식을 선사하는 도란도란 펜션",
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={inter.variable}>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pretendard/dist/web/static/pretendard.css" />
        </head>
        <body>

            {children}


        </body>
        </html>
  );
}

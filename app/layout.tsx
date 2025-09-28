import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

// Inter (Google Fonts)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});



export const metadata: Metadata = {
  title: "도란도란 펜션",
  description: "자연 속 편안한 휴식을 선사하는 도란도란 펜션. 넓은 객실과 아늑한 인테리어, 가족과 친구가 함께 머물기 좋은 공간에서 특별한 하루를 즐기세요. 펜션 주변의 산과 강이 어우러진 풍경, 바비큐와 캠프파이어, 다양한 편의시설로 잊지 못할 여행을 완성합니다. 도란도란 펜션에서 따뜻한 대화와 추억을 만들어 보세요.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={inter.variable}>
      <head>
        {/* Pretendard CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
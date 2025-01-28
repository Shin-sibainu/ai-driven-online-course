import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

// Noto Sans JPフォントの設定
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"], // 必要な太さを指定
  preload: false, // 日本語フォントは容量が大きいため、preloadをfalseに設定
});

export const metadata: Metadata = {
  title: "ShinCode Pro | AI駆動開発マスターコース",
  description:
    "AIを活用した爆速開発手法を学ぶ実践的なコース。Cursor、Claude、Bolt.new等の最新AIツールを駆使し、アイデアを最短で形にする方法を習得。個人開発からプロダクトローンチまで、現役エンジニアが徹底サポート。",
  keywords:
    "ShinCode Pro, AI開発, Cursor, ChatGPT, Claude, Bolt.new, AI駆動開発, 個人開発, プロダクト開発, AIツール, プログラミング講座, 爆速開発",
  openGraph: {
    title: "ShinCode Pro | AI駆動開発マスターコース",
    description:
      "AIを活用した爆速開発手法を学ぶ実践的なコース。アイデアを最短で形にする方法を習得しよう。",
    images: [
      {
        url: "https://images.unsplash.com/photo-1673187735167-a38ac66a16ef",
        width: 800,
        height: 600,
        alt: "ShinCode Pro - AI Development Course",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}

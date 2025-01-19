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
  title: "ShinCode Pro | 実践的なWeb開発講座",
  description:
    "プログラミング未経験から始められる実践的なWeb開発講座。実践的なプロジェクト学習、24時間質問対応、ポートフォリオ作成サポートで、確実にWeb開発スキルを身につけられます。",
  keywords:
    "ShinCode Pro, Web開発, プログラミング講座, ポートフォリオ作成, プロジェクト学習",
  openGraph: {
    title: "ShinCode Pro | 実践的なWeb開発講座",
    description:
      "プログラミング未経験から始められる実践的なWeb開発講座。確実にWeb開発スキルを身につけよう。",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
        width: 800,
        height: 600,
        alt: "ShinCode Pro - Web Development Course",
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

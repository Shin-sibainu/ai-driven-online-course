"use client";

import { Code2 } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  会社情報: [
    // { label: "会社概要", href: "#" },
    { label: "特定商取引法に基づく表記", href: "#" },
    { label: "プライバシーポリシー", href: "#" },
    { label: "利用規約", href: "#" },
  ],
  講座について: [
    {
      label: "ShinCode_Camp",
      href: "https://code-s-school-5bc2.thinkific.com/bundles/shincode-pro",
    },
    { label: "AI駆動開発マスターコース", href: "/" },
    // { label: "ビジネス副業コース", href: "#" },
    // { label: "法人研修", href: "#" },
  ],
  サポート: [
    { label: "よくある質問", href: "#faq" },
    { label: "受講の流れ", href: "#howitworks" },
    { label: "お問い合わせ", href: "https://x.com/Shin_Engineer" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-background/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl">ShinCode Pro</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              実践的なWeb開発スキルを、
              確実に身につけるオンライン学習プラットフォーム
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ShinCode Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

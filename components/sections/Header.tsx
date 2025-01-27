"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const navigation = [
  { name: "カリキュラム", href: "#curriculum" },
  { name: "特徴", href: "#features" },
  { name: "料金", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

// スクロールマージンをCSSで設定
const scrollMarginStyle = {
  scrollMarginTop: "4rem", // ヘッダーの高さ分
};

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-background/80 backdrop-blur-lg border-b border-border"
      >
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">ShinCode Pro</span>
              <span className="text-sm text-muted-foreground hidden sm:inline-block">
                AI駆動開発マスターコース
              </span>
            </div>

            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <Button size="sm" className="group">
                無料で予約する
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

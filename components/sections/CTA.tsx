"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Timer } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* 背景のグラデーションとパターン */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
              <Timer className="w-4 h-4" />
              <span className="text-sm font-medium">先行予約受付中</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
              AI時代の新しい開発スキルを
              <br />
              今すぐ手に入れよう
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              予約特典として20%OFFクーポンをプレゼント。
              <br />
              メールアドレスを登録して、リリース時にいち早く受講を開始できます。
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-2xl font-bold">先行予約特典</h3>
              </div>
              <ul className="space-y-3 mb-6 text-muted-foreground">
                <li>✓ 20%OFFクーポン</li>
                <li>✓ 優先受講権</li>
                <li>✓ Discordサーバー招待リンクも提供</li>
              </ul>
              <Link 
                href="https://skinny-talos-8be.notion.site/1891dcf229c280139d19f2d8d1048b90?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full group">
                  無料で予約する
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground text-center mt-4">
                ＊予約は無料です。メールアドレスのみで登録できます。
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

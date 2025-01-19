"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

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
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
              <Code2 className="w-4 h-4" />
              <span className="text-sm font-medium">今すぐ始めよう</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
              Web開発の新しい扉を開く
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              ShinCode Proで、あなたのWeb開発の夢を実現。
              実践的なプロジェクトで、確実にスキルアップを実現します。
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <Card className="p-8 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">無料トライアル</h3>
              <p className="text-muted-foreground mb-6">
                7日間の無料トライアルで、ShinCode
                Proの学習体験を実感してください。
                充実したコンテンツとサポート体制をご確認いただけます。
              </p>
              <Button size="lg" className="w-full group">
                無料で始める
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>

            <Card className="p-8 bg-[#5865F2] text-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold">Discordコミュニティ</h3>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
              <p className="text-white/90 mb-6">
                24時間いつでも質問できる専用Discordチャンネルに参加。 ShinCode
                Proの現役エンジニアや仲間たちと交流しながら学習を進められます。
              </p>
              <Button size="lg" variant="secondary" className="w-full group">
                コミュニティに参加
                <MessageCircle className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

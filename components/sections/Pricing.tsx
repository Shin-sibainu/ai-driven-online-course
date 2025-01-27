"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, CreditCard, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const features = [
  "全カリキュラムへの無期限アクセス",
  "AI開発テンプレート集",
  "専用Discordコミュニティ参加権",
  "24時間質問し放題",
  "実践的なプロジェクト開発",
  "収益化までのロードマップ",
  "最新のAIツール活用ガイド",
  "定期的なコンテンツアップデート",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <Badge className="mb-4">料金プラン</Badge>
          <h2 className="text-3xl font-bold mb-4">シンプルな料金体系</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            一度のお支払いで全ての機能にアクセス可能。
            <br />
            追加料金や月額料金は一切ありません。
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="p-8 border-primary shadow-lg">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <Badge className="bg-primary text-primary-foreground">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Youtube視聴特別価格
                </Badge>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  AI駆動開発マスターコース
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">¥39,800</span>
                  <span className="text-muted-foreground">（税込）</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  <s>通常価格 ¥59,800</s>
                </p>
              </div>

              <div className="grid gap-4 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full" size="lg">
                <CreditCard className="mr-2 w-4 h-4" />
                【先着予約】無料で20%OFFクーポンを受け取る
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                ＊予約なのでお支払いは発生いたしません。メールアドレスのみで予約できます。
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

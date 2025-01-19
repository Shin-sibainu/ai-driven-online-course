"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Layout,
  Rocket,
  ArrowRight,
  CheckCircle2,
  PersonStanding,
  Building,
  Laptop2,
  Bot,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const phases = [
  {
    title: "Week 1: 基礎固め",
    duration: "1週目",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    description: "Web開発の基礎を徹底的に学習",
    topics: [
      "Webの仕組み",
      "Cursorで開発環境のセットアップ",
      "HTML/CSS/JavaScriptの基礎",
      "TypeScriptの基本文法",
      "Reactの基礎とHooks",
      "GitとGitHubの使い方",
    ],
  },
  {
    title: "Week 2: フロントエンド開発",
    duration: "2週目",
    icon: Layout,
    color: "from-purple-500 to-pink-500",
    description: "Next.jsでのアプリ開発を習得",
    topics: [
      "Next.jsの基礎",
      "Tailwind CSSでのUI実装",
      "APIとの連携方法",
      "データフェッチとレンダリング(キャッシュ)",
    ],
  },
  {
    title: "Week 3: バックエンド開発",
    duration: "3週目",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    description: "バックエンドとAI機能の実装",
    topics: [
      "Supabaseでのバックエンド構築",
      "データベース設計の基礎と構築",
      "ORMの利用とデータフェッチ",
      "ユーザー認証とWebhook",
      "Stripe決済の実装",
    ],
  },
  {
    title: "Week 4: プロダクトローンチ",
    duration: "4週目",
    icon: Rocket,
    color: "from-red-500 to-orange-500",
    description: "本番環境への展開とサービス公開",
    topics: [
      "本番環境の構築とVercelへデプロイ",
      "カスタムドメイン設定",
      "アクセス解析の実装",
      "認証と決済の本番環境への適用",
    ],
  },
  {
    title: "Week 5: 個人開発者へ",
    duration: "5週目",
    icon: Laptop2,
    color: "from-orange-500 to-yellow-500",
    description: "個人開発者としてのスタート",
    topics: [
      "ShinCodeからの課題・提出・評価",
      "売れるアイデアの見つけ方",
      "市場調査と競合調査",
      "MVP開発のコツ",
      "マーケティング・集客戦略",
    ],
  },
  {
    title: "Week 6: AI駆動開発",
    duration: "特典週",
    icon: Bot,
    color: "from-purple-600 to-pink-600",
    description: "AI駆動で作る爆速アプリ開発",
    topics: [
      "個人開発に必要なAIツールの紹介",
      "Claudeを使った要件定義・設計",
      "Bolt.newを利用したUI開発",
      "Cursorを使ったMVP開発",
    ],
  },
];

export function CurriculumRoadmap() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8883_1px,transparent_1px),linear-gradient(to_bottom,#8883_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <Badge className="mb-4">カリキュラム</Badge>
          <h2 className="text-4xl font-bold mb-6">
            5週間＋特典1週で身に付く
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 text-transparent bg-clip-text">
                ロードマップ
              </span>
              <motion.span
                className="absolute -top-1 left-0 right-0 h-full w-full bg-gradient-to-r from-primary via-blue-600 to-purple-600 opacity-30 blur-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 1 }}
              />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            段階的に実力を積み上げ、
            <br />
            確実にスキルを身につけるカリキュラム設計。
            <br />
            <span className="text-primary font-medium">
              ＋AI駆動開発の特典付き
            </span>
          </p>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Connection Line */}
          <div className="absolute left-[2.25rem] top-12 bottom-12 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative p-6 md:ml-12 hover:shadow-lg transition-all duration-300 group">
                {/* Phase Number */}
                <div className="absolute left-0 md:-left-12 top-6 w-8 h-8 rounded-full bg-background flex items-center justify-center border-2 border-primary z-10">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} p-0.5 mb-4`}
                    >
                      <div className="w-full h-full rounded-[10px] flex items-center justify-center">
                        <phase.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {phase.title}
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <Badge variant="secondary" className="mb-4">
                      {phase.duration}
                    </Badge>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>

                  <div className="md:col-span-3">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {phase.topics.map((topic, topicIndex) => (
                        <motion.div
                          key={topicIndex}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.1 * topicIndex,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{topic}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Layout, Bot, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const solutions = [
  {
    icon: Code2,
    title: "アプリ全体の企画・設計スキル",
    description: "完成から逆算したアプリ開発の設計力を養います。",
    topics: [
      "Webアプリのアイデア出し",
      "要件定義・機能定義",
      "データベース設計",
      "Notionを使ったプロジェクト管理",
    ],
    color: "bg-blue-500",
  },
  {
    icon: Layout,
    title: "技術スタックの選定スキル",
    description:
      "作るアプリよっては利用する技術スタックが異なります。その選定力も養います。",
    topics: [
      "Next.js App Router",
      "BaaSの利用",
      "インフラ構築",
      "本番環境への適用",
    ],
    color: "bg-green-500",
  },
  {
    icon: Rocket,
    title: "AI駆動開発スキル",
    description: "AIツールを使いこなした開発力を養います。",
    topics: [
      "Cursorで開発",
      "Bolt.newで高品質UI",
      "Claudeへの壁打ち",
      "他AIツールの紹介",
    ],
    color: "bg-orange-500",
  },
  {
    icon: Bot,
    title: "マーケティングスキル",
    description:
      "開発力だけではマネタイズはできません。ビジネスに必要なマーケティング力も養います。",
    topics: [
      "マネタイズの基本",
      "買い切り or サブスク",
      "SNSと広告を使った集客",
      "利用されるLPの作り方",
    ],
    color: "bg-purple-500",
  },
];

export function Solution() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <Badge className="mb-4">特徴</Badge>
          <h2 className="text-4xl font-bold mb-6">
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 text-transparent bg-clip-text">
                AI駆動で個人開発するための
              </span>
              <motion.span
                className="absolute -top-1 left-0 right-0 h-full w-full bg-gradient-to-r from-primary via-blue-600 to-purple-600 opacity-30 blur-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 1 }}
              />
            </span>
            <br />
            総合的なスキルの獲得
          </h2>
          <p className="text-xl text-muted-foreground">
            技術力だけでなく、アイデアを実現し、
            <br />
            収益化までできる実践的なスキルが身につきます。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group">
                <div
                  className={`w-12 h-12 rounded-lg ${solution.color} text-white flex items-center justify-center mb-4`}
                >
                  <solution.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {solution.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {solution.topics.map((topic, topicIndex) => (
                    <div
                      key={topicIndex}
                      className="bg-muted/50 rounded-lg px-3 py-2 text-sm text-muted-foreground"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="#curriculum">
            <Button size="lg" className="group">
              カリキュラムを見る
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

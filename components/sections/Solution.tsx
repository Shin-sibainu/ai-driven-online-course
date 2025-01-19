"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Layout, Bot, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const solutions = [
  {
    icon: Code2,
    title: "効率的な学習設計",
    description:
      "たった5週間で、Web開発からAI活用まで。効率的なカリキュラムで確実に習得",
    topics: ["体系的な学習", "実践重視", "最短習得", "即戦力化"],
    color: "bg-blue-500",
  },
  {
    icon: Layout,
    title: "現代的な開発手法",
    description:
      "Next.js、TypeScript、AIツールなど、今求められている技術が学べます",
    topics: ["最新技術", "AI活用", "効率的開発", "実践的ツール"],
    color: "bg-green-500",
  },
  {
    icon: Bot,
    title: "手厚いサポート",
    description: "分からないことはすぐに質問。Discordサポート付き",
    topics: [
      "ShinCodeへ壁打ち相談",
      "質問し放題",
      "情報共有",
      "モチベーション維持",
    ],
    color: "bg-purple-500",
  },
  {
    icon: Rocket,
    title: "実績につながる",
    description:
      "オリジナルプロダクトの開発から公開まで。実践的な経験が得られます",
    topics: ["ポートフォリオ", "成果物作成", "公開経験", "実践スキル"],
    color: "bg-orange-500",
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
                個人開発者になるための
              </span>
              <motion.span
                className="absolute -top-1 left-0 right-0 h-full w-full bg-gradient-to-r from-primary via-blue-600 to-purple-600 opacity-30 blur-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 1 }}
              />
            </span>
            <br />
            総合的なスキル
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
          <Button size="lg" className="group">
            カリキュラムの詳細を見る
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

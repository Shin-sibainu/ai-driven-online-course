"use client";

import { Card } from "@/components/ui/card";
import { Brain, Code2, Rocket, Coins } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const problems = [
  {
    icon: Brain,
    title: "技術選定の迷い",
    description:
      "React? Next.js? どの技術を使えばいいのか分からず、最初の一歩が踏み出せない",
    color: "text-red-500",
  },
  {
    icon: Code2,
    title: "開発の壁",
    description:
      "プログラミングの基礎から最新のフレームワークまで、独学では効率的に学べない",
    color: "text-amber-500",
  },
  {
    icon: Rocket,
    title: "アイデアの実現",
    description: "「作りたいものがある」けれど、具体的な実装方法が分からない",
    color: "text-emerald-500",
  },
  {
    icon: Coins,
    title: "収益化の不安",
    description:
      "せっかく作ったアプリを、どうやって世に出して収益化すればいいのか分からない",
    color: "text-blue-500",
  },
];

export function Problems() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            個人開発に挑戦する時の
            <br />
            よくある悩み
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            アイデアはあるのに、なかなか形にできない...
            <br />
            そんなあなたの悩みを解決します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 ${problem.color}`}
                >
                  <problem.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

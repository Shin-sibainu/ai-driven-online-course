"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  PlayCircle,
  Code2,
  Rocket,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const steps = [
  {
    icon: PlayCircle,
    title: "カリキュラム視聴",
    description:
      "AIを活用した最新の開発手法を、実践的な動画で学習できます。好きな時間に、自分のペースで進められます。",
    color: "bg-blue-500",
  },
  {
    icon: Code2,
    title: "ハンズオン学習",
    description:
      "実際のプロダクト開発を通して、AIツールの使い方から本番デプロイまでを体験。理解が深まります。",
    color: "bg-emerald-500",
  },
  {
    icon: MessageCircle,
    title: "コミュニティサポート",
    description:
      "専用のDiscordサーバーで、分からないことを質問したり、仲間と情報交換ができます。24時間いつでも質問OK。",
    color: "bg-purple-500",
  },
  {
    icon: Rocket,
    title: "プロダクトローンチ",
    description:
      "学んだ知識を活かして、自分だけのプロダクトを開発。収益化の方法まで学べます。",
    color: "bg-orange-500",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24" id="howitworks">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">学習の進め方</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            自分のペースで学べる、
            <br />
            実践的なカリキュラムとコミュニティサポート。
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted -translate-y-1/2 hidden lg:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 relative group">
                  <div
                    className={`w-16 h-16 rounded-2xl ${step.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto`}
                  >
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-3 left-4 bg-primary text-primary-foreground text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-center">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <Link
            href="https://skinny-talos-8be.notion.site/1891dcf229c280139d19f2d8d1048b90?pvs=105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="group">
              【先着予約】無料で20%OFFクーポンを受け取る
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

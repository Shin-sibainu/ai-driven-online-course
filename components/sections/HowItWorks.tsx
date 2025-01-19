"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, BookOpen, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const steps = [
  {
    icon: Lightbulb,
    title: "無料カウンセリング",
    description: "あなたの目標や現在のスキルレベルをヒアリングし、最適な学習プランをご提案します。",
    color: "bg-yellow-500"
  },
  {
    icon: BookOpen,
    title: "カリキュラム選択",
    description: "目標達成に必要なカリキュラムを選択し、学習環境をセットアップします。",
    color: "bg-emerald-500"
  },
  {
    icon: Users,
    title: "学習開始",
    description: "専任メンターのサポートを受けながら、実践的なプロジェクトに取り組みます。",
    color: "bg-blue-500"
  },
  {
    icon: Target,
    title: "目標達成",
    description: "キャリアサポートを受けながら、就職・転職・副業を実現します。",
    color: "bg-purple-500"
  }
];

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            学習の流れ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            TechMasterでの学習は、あなたの目標達成まで<br />
            しっかりとサポートします。
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
                  <div className={`w-16 h-16 rounded-2xl ${step.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-3 left-4 bg-primary text-primary-foreground text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                  <p className="text-muted-foreground text-center">{step.description}</p>
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
          <Button size="lg" className="group">
            無料カウンセリングを予約する
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
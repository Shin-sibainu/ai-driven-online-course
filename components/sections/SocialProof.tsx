"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const companies = [
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=128&h=128&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=128&h=128&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=128&h=128&fit=crop&auto=format",
];

const achievements = [
  {
    icon: Star,
    value: "4.9",
    label: "受講生満足度",
    suffix: "/5.0",
    color: "text-yellow-500"
  },
  {
    icon: TrendingUp,
    value: "92",
    label: "就職・転職成功率",
    suffix: "%",
    color: "text-emerald-500"
  },
  {
    icon: Award,
    value: "1200",
    label: "累計受講生数",
    suffix: "+",
    color: "text-blue-500"
  }
];

export function SocialProof() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <Badge className="mb-4">実績</Badge>
          <h2 className="text-4xl font-bold mb-6">
            多くの受講生から<br />
            選ばれています
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            TechMasterは、数多くの実績と信頼を積み重ねてきました。<br />
            私たちは結果にこだわり続けます。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center h-full hover:shadow-lg transition-shadow duration-300">
                <achievement.icon className={`w-12 h-12 mx-auto mb-4 ${achievement.color}`} />
                <div className="text-4xl font-bold mb-2">
                  {achievement.value}{achievement.suffix}
                </div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-8">受講生の転職・就職先企業（一部）</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {companies.map((company, index) => (
              <motion.img
                key={index}
                src={company}
                alt={`Company ${index + 1}`}
                className="w-24 h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
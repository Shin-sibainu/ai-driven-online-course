"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const features = [
  "非エンジニアの方でもOK",
  "アイデア出しからアプリ開発リリースまで",
  "マネタイズ手法も大公開",
  "副業やビジネスへの応用も可能",
];

const Circles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-blue-600/20 via-primary/20 to-purple-600/20 blur-3xl animate-slow-spin" />
      <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-600/20 via-primary/20 to-blue-600/20 blur-3xl animate-slow-spin-reverse" />

      {/* Floating particles */}
      {/* {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/50 rounded-full"
          style={{
            top: `${20 + i * 30}%`,
            left: `${10 + i * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))} */}

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8883_1px,transparent_1px),linear-gradient(to_bottom,#8883_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
    </div>
  );
};

export function Hero() {
  return (
    <section className="pt-32 pb-16 overflow-hidden relative">
      <Circles />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">
                あなたの人生を変えるプログラミング
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 text-transparent bg-clip-text">
                  AI駆動開発で
                </span>
                <motion.span
                  className="absolute -top-1 left-0 right-0 h-full w-full bg-gradient-to-r from-primary via-blue-600 to-purple-600 opacity-30 blur-xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.3 }}
                  transition={{ duration: 1 }}
                />
              </span>
              <br />
              <span className="text-foreground">アイデアを形にしよう</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              「アイデアはあるけど、Webアプリの作り方がわからない」
              <br />
              そんな想いを卒業しませんか？
              実際のプロダクト開発を通して本物の開発力を身に付ける講座です。
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button size="lg" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  無料でカリキュラム内容を見る
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2 backdrop-blur-sm bg-background/50 p-2 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary via-blue-600 to-purple-600 rounded-2xl blur opacity-30"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                  alt="Programming Education"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent">
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { value: "1,200+", label: "受講生数" },
                        { value: "96%", label: "完走率" },
                        { value: "150+", label: "アプリ公開実績" },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          className="bg-background/90 backdrop-blur-sm rounded-lg p-4 text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.8 + index * 0.1,
                          }}
                        >
                          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

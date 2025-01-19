"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function Demo() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">学習環境のご紹介</h2>
            <p className="text-xl mb-6">
              最新のクラウド開発環境で、環境構築の手間なく学習を開始できます。
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span>ブラウザだけで完結する開発環境</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span>リアルタイムのコードレビュー機能</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span>進捗管理ダッシュボード</span>
              </div>
            </div>
            <Button className="mt-8" size="lg">
              <PlayCircle className="mr-2 w-5 h-5" />
              デモ動画を見る
            </Button>
          </div>
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="学習環境"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                <PlayCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
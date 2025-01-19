"use client";

import { Card } from "@/components/ui/card";
import { HelpCircle, ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const faqs = [
  {
    question: "プログラミング未経験でも大丈夫ですか？",
    answer: "はい、完全未経験の方でも安心して受講いただけます。基礎から丁寧に説明し、個別サポートも充実しています。"
  },
  {
    question: "仕事しながらの受講は可能ですか？",
    answer: "可能です。すべての講座は録画形式で提供されており、自分のペースで学習を進められます。また、平日夜間や休日のサポートも実施しています。"
  },
  {
    question: "受講期間の延長は可能ですか？",
    answer: "はい、一定の条件のもと、受講期間の延長が可能です。詳細は個別にご相談ください。"
  },
  {
    question: "分割払いは可能ですか？",
    answer: "はい、最大12回までの分割払いに対応しています。手数料は無料です。"
  }
];

export function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">よくある質問</h2>
          <p className="text-muted-foreground">
            ご不明な点がございましたら、お気軽にお問い合わせください
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              variants={fadeIn}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <button
                  className="w-full flex justify-between items-center"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <div className="flex items-center">
                    <HelpCircle className="w-5 h-5 mr-3 text-primary" />
                    <span className="font-semibold text-left">{faq.question}</span>
                  </div>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="mt-4 pl-8 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
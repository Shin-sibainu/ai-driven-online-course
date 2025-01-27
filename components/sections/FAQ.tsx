"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const faqs = [
  {
    question: "プログラミング未経験でも大丈夫ですか？",
    answer:
      "開発環境のセットアップから行いますのでプログラミング未経験の方でも始められます。しかし、HTML/CSS/React等の基礎知識は説明いたしません。足らない知識はShinCodeのYoutubeで無料での学習をおすすめします。",
  },
  {
    question: "仕事しながらの受講は可能ですか？",
    answer:
      "可能です。すべての講座は録画形式で提供されており、自分のペースで学習を進められます。また、Discordでは24時間質問が可能で、仕事の合間に学習を進めることができます。",
  },
  {
    question: "受講期間に制限はありますか？",
    answer:
      "いいえ、全てのコンテンツに無期限でアクセスできます。一度お支払いいただければ、永続的にコンテンツを視聴可能です。また、アップデートされる新しいコンテンツも追加料金なしで視聴できます。",
  },
  {
    question: "AIツールの利用料は別途かかりますか？",
    answer:
      "AIツールに無料枠はありますが、個人開発を完遂させるには基本的にAIの課金は必須になります。最低限Cursorへの課金が必須ですので、各々で月額20$のお支払いをおすすめいたします。",
  },
  {
    question: "サポートはどのような形で受けられますか？",
    answer:
      "専用のDiscordサーバーで、24時間質問が可能です。30分程度であればShinCodeへ通話でご相談に乗ることも可能です。",
  },
  {
    question: "返品対応は受け付けていますか？",
    answer:
      "はい。本コースにご満足いただけない場合は全額返金させていただきます。ただ、Stripeでの決済になりますので手数料の3.6%分の払い戻しは致しかねますのでご了承ください。",
  },
];

export function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-muted/30 to-background"
      style={{ scrollMarginTop: "4rem" }}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <Badge className="mb-4">FAQ</Badge>
          <h2 className="text-3xl font-bold mb-4">よくある質問</h2>
          <p className="text-xl text-muted-foreground">
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
              <Card className="p-6 hover:shadow-md transition-shadow duration-300">
                <button
                  className="w-full flex justify-between items-center"
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                >
                  <div className="flex items-center">
                    <HelpCircle className="w-5 h-5 mr-3 text-primary" />
                    <span className="font-semibold text-left">
                      {faq.question}
                    </span>
                  </div>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
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

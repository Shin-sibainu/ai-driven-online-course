"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const pricingPlans = [
  {
    name: "ベーシックプラン",
    price: "98,000",
    features: [
      "オンライン教材の視聴",
      "課題レビュー（月2回）",
      "質問対応（平日のみ）",
      "3ヶ月間の受講期間"
    ],
    recommended: false
  },
  {
    name: "プロフェッショナルプラン",
    price: "198,000",
    features: [
      "オンライン教材の視聴",
      "課題レビュー（無制限）",
      "24時間質問対応",
      "6ヶ月間の受講期間",
      "転職・副業支援",
      "プロジェクト開発指導"
    ],
    recommended: true
  },
  {
    name: "エンタープライズプラン",
    price: "298,000",
    features: [
      "プロフェッショナルプランの全機能",
      "個別メンタリング（月4回）",
      "企業紹介・案件紹介",
      "12ヶ月間の受講期間",
      "カスタマイズされた学習プラン",
      "キャリアコンサルティング"
    ],
    recommended: false
  }
];

export function Pricing() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">料金プラン</h2>
          <p className="text-muted-foreground">
            あなたの目標に合わせて最適なプランをお選びください
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              variants={fadeIn}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <Badge className="bg-primary text-primary-foreground">おすすめ</Badge>
                </div>
              )}
              <Card className={`p-6 h-full flex flex-col ${plan.recommended ? 'border-primary shadow-lg' : ''}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">¥{plan.price}</span>
                  <span className="text-muted-foreground">（税込）</span>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.recommended ? "default" : "outline"}>
                  <CreditCard className="mr-2 w-4 h-4" />
                  プランを選択
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
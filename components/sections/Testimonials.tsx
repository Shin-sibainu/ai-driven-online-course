"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const testimonials = [
  {
    name: "田中 優子",
    role: "Webエンジニア",
    company: "株式会社TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80",
    content: "未経験からWebエンジニアになれました。実践的なカリキュラムと手厚いサポートのおかげで、3ヶ月で内定をいただけました。",
    course: "Web開発完全習得コース"
  },
  {
    name: "鈴木 健一",
    role: "フリーランスエンジニア",
    company: "個人事業主",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80",
    content: "副業としてフリーランスを始めることができました。案件獲得から確定申告まで、実践的なノウハウを学べて大変満足です。",
    course: "ビジネス副業コース"
  },
  {
    name: "佐藤 美咲",
    role: "AIエンジニア",
    company: "AITech株式会社",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80",
    content: "AI開発の基礎から最新のトレンドまで、体系的に学ぶことができました。実務で即戦力として活躍できています。",
    course: "AI駆動開発コース"
  }
];

export function Testimonials() {
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
          <h2 className="text-3xl font-bold mb-4">受講生の声</h2>
          <p className="text-muted-foreground">
            実際に講座を受講された方々の声をご紹介
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              variants={fadeIn}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mb-4 flex-grow">
                  <Quote className="w-8 h-8 text-primary/20 mb-2" />
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </div>
                <Badge variant="secondary">{testimonial.course}</Badge>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
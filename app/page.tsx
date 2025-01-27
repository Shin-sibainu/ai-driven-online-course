"use client";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Solution } from "@/components/sections/Solution";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { CurriculumRoadmap } from "@/components/sections/CurriculumRoadmap";
import { FAQ } from "@/components/sections/FAQ";

// ・見込み客の興味付けを行うコンテンツ
// ・悩みへの共感
// ・問題の提起
// ・原因の特定
// ・解決策の提示
// ・ベネフィット
// ・商品の特徴
// ・実績評価
// ・オファー
// ・Q&A
// ・CTA

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <CurriculumRoadmap />
        <SocialProof />
        <HowItWorks />
        <Pricing />
        <FAQ/>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function Header() {
  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">ShinCode Pro</span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#features"
                className="text-muted-foreground hover:text-foreground"
              >
                特徴
              </Link>
              <Link
                href="#courses"
                className="text-muted-foreground hover:text-foreground"
              >
                コース一覧
              </Link>
              <Link
                href="#pricing"
                className="text-muted-foreground hover:text-foreground"
              >
                料金
              </Link>
            </nav>
            <Button>無料で始める</Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

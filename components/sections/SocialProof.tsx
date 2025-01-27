"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const achievements = [
  {
    icon: Users,
    value: "30,000",
    label: "累計Udemy受講生数",
    suffix: "+",
    color: "text-blue-500",
  },
  {
    icon: Star,
    value: "4.6",
    label: "Udemy評価",
    suffix: "/5.0",
    color: "text-yellow-500",
  },
  {
    icon: Award,
    value: "250",
    label: "公開動画数(Youtubeも含む)",
    suffix: "+",
    color: "text-emerald-500",
  },
];

const reviews = [
  {
    name: "田中さん",
    role: "エンジニア転職成功",
    avatar: "/avatars/user1.png",
    comment:
      "プログラミング未経験でしたが、実践的な内容で3ヶ月で転職に成功しました。特にAIツールの活用方法が目から鱗でした。",
    rating: 5,
  },
  {
    name: "鈴木さん",
    role: "副業でアプリ開発",
    avatar: "/avatars/user2.png",
    comment:
      "個人開発の進め方が具体的で分かりやすかったです。実際に副業で月10万円の収益が出せるようになりました。",
    rating: 5,
  },
  {
    name: "佐藤さん",
    role: "起業準備中",
    avatar: "/avatars/user3.png",
    comment:
      "AIを活用した開発手法が非常に実践的で、開発速度が格段に上がりました。起業の準備にも役立っています。",
    rating: 4,
  },
];

function ReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {reviews.map((review, index) => (
            <div
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_33.33%]"
              key={index}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={review.avatar} />
                    <AvatarFallback>{review.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {review.role}
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}

export function SocialProof() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-muted/30 to-background"
    >
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
            3万人以上の
            <br />
            受講生が選ぶ講座
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            講師のShinCodeはUdemyでの豊富な実績をもとに、
            <br />
            最新のAIカリキュラムをお届けします。
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
                <achievement.icon
                  className={`w-12 h-12 mx-auto mb-4 ${achievement.color}`}
                />
                <div className="text-4xl font-bold mb-2">
                  {achievement.value}
                  {achievement.suffix}
                </div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          className="text-center"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8">受講生の声</h3>
          <ReviewCarousel />
        </motion.div> */}
      </div>
    </section>
  );
}

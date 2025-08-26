import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import ParallaxBackground from "@/components/ui/ParallaxBackground"

export default function HeroSection() {
  return (
    <ParallaxBackground
      backgroundImage="/gload-background-1.jpg"
      speed={0.5}
      className="py-20 lg:py-32"
      overlay={true}
      overlayOpacity={0.6}
      tileSize="600px"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="slideUp" delay={200}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              <span className="text-accent">Kゴールド・ダイヤモンド</span>取引の国際企業
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
              投資 · 収集 · グローバル接続
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              大阪を拠点とし、精錬業者・宝飾商・国際顧客にサービスを提供。
              <br />
              安定したサプライチェーンと専門的な実行力で日本と世界を結びます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                事業について
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-accent bg-white/10 backdrop-blur-sm shadow-lg"
              >
                お問い合わせ
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </ParallaxBackground>
  )
}

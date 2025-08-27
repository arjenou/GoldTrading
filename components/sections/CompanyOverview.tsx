import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Diamond, Coins, Shield, TrendingUp, Globe, Users } from "lucide-react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"

export default function CompanyOverview() {
  return (
    <section id="company-overview" className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <ScrollAnimation animation="slideInLeft" delay={100}>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 mb-4 sm:mb-6">大阪ゴールドトレーディング</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  大阪に本社を置き、18K金とダイヤモンドの大口取引を専門としています。信頼できる供給源を提供するだけでなく、
                  金地金代理、鑑定サポート、収集品流通、ビジネス社交スペースなどの付加価値サービスをお客様にお届けします。
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">国際化と新経済構造の中で、お客様の信頼できる長期パートナーとなることを目指しています。</p>
              </div>
            </div>
          </ScrollAnimation>

        {/* Right Content - Vision Pillars */}
          <ScrollAnimation animation="slideInRight" delay={300}>
            <div className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Coins className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">核心取引</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">K金・ダイヤモンド</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">市場コンサルティング</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">投資戦略指導</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">収集流通</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">高級芸術品取引</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">社交空間</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">シガーバー会員制</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

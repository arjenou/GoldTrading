import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Diamond, Coins, Shield, TrendingUp, Globe, Users } from "lucide-react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"

export default function CompanyOverview() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollAnimation animation="slideInLeft" delay={100}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">大阪ゴールドトレーディング</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  大阪に本社を置き、18Kゴールドジュエリーとダイヤモンドの大口取引を専門としています。信頼できる供給源を提供するだけでなく、
                  金地金代理、鑑定サポート、収集品流通、ビジネス社交スペースなどの付加価値サービスをお客様にお届けします。
                  国際化と新経済構造の中で、お客様の信頼できる長期パートナーとなることを目指しています。
                </p>
              </div>
            </div>
          </ScrollAnimation>

        {/* Right Content - Vision Pillars */}
          <ScrollAnimation animation="slideInRight" delay={300}>
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coins className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">核心取引</h4>
                  <p className="text-sm text-muted-foreground">Kゴールドジュエリー・ダイヤモンド</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">市場コンサルティング</h4>
                  <p className="text-sm text-muted-foreground">投資戦略指導</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">収集流通</h4>
                  <p className="text-sm text-muted-foreground">高級芸術品取引</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">社交空間</h4>
                  <p className="text-sm text-muted-foreground">シガーバー会員制</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

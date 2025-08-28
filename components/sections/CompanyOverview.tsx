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
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed" style={{ textIndent: '1em' }}>
                  大阪を拠点に、K18ジュエリーとダイヤモンドの取引を主軸とし、
                  精錬業者、宝飾商、コレクターなど多様なお客様に安定した供給と専門的なサービスを提供しています。
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed" style={{ textIndent: '1em' }}>さらに、金地金の正規代理や鑑定サポート、洋酒・高級時計・金工芸品といったコレクション流通、
                  そして会員制ラウンジ（シガーバー等）による交流の場を通じ、付加価値のあるサービスを展開しています。
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed" style={{ textIndent: '1em' }}>
                  国際化とIR開発により新しい経済圏が広がる大阪において、
                  お客様と長期的な信頼関係を築き、共に成長するパートナーであることを目指します。
                </p>
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
                  <p className="text-xs sm:text-sm text-muted-foreground"> K18ジュエリー・ダイヤモンドの安定供給と大口取引</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">資産ソリューション</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground"> 不動産・貴金属の運用やM&A支援を含む総合アドバイザリー</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">コレクション流通</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">洋酒・高級時計・金工芸品など、資産価値を持つコレクションの流通</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">会員制ラウンジ</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">富裕層向けのクラブ空間で、エンターテインメントとネットワークの場を展開</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

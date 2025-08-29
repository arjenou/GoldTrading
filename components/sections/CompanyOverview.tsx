import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Diamond, Coins, Shield, TrendingUp, Globe, Users, Heart, Target } from "lucide-react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import Image from "next/image"

export default function CompanyOverview() {
  return (
    <>
      <section id="company-overview" className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <ScrollAnimation animation="slideInLeft" delay={100}>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 mb-4 sm:mb-6">Gold Trading Osaka</h2>
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
                    <p className="text-xs sm:text-sm text-muted-foreground">  K18ジュエリー・ダイヤモンド
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">資産ソリューション</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground"> 不動産・貴金属・M&A支援
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">コレクション流通</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">洋酒・高級時計・金工芸品</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">会員制ラウンジ</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">富裕層向けのクラブ</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">エンターテインメント</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="py-16 sm:py-20 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[500px] sm:min-h-[600px]">
          {/* Left Side - Mission Content with Gold Overlay */}
          <ScrollAnimation animation="slideInLeft" delay={200}>
            <div className="relative h-full min-h-[300px] sm:min-h-[400px] bg-gradient-to-br from-yellow-50 to-amber-100">
              {/* Background Image (blurred office interior) */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-600/30"></div>
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-12 flex flex-col justify-center h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 4L18.5 10.5L25 11L20 15.5L21.5 22L16 18.5L10.5 22L12 15.5L7 11L13.5 10.5L16 4Z" fill="white" opacity="0.8"/>
                      <circle cx="16" cy="16" r="8" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                    </svg>
                  </div>
                </div>
                
                {/* Mission Text */}
                <div className="text-white">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 montserrat">
                    MISSION
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed lead">
                    持続可能な未来を<br className="only-sp" />
                    創造する使命
                  </p>
                  <div className="mt-6 space-y-3">
                    <p className="text-sm sm:text-base leading-relaxed opacity-90">
                      貴金属と宝石のリサイクルを推進し、環境負荷を軽減する
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed opacity-90">
                      コンプライアンスと透明性を堅持し、長期的な信頼を築く
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed opacity-90">
                      持続可能なビジネスと交流のエコシステムを創造する
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Side - Vision Content with Gold Overlay */}
          <ScrollAnimation animation="slideInRight" delay={400}>
            <div className="relative h-full min-h-[300px] sm:min-h-[400px] bg-gradient-to-br from-amber-50 to-yellow-100">
              {/* Background Image (blurred office interior) */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-600/30"></div>
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-12 flex flex-col justify-center h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="2" fill="white" opacity="0.8"/>
                      <circle cx="24" cy="8" r="2" fill="white" opacity="0.8"/>
                      <circle cx="16" cy="16" r="2" fill="white" opacity="0.8"/>
                      <circle cx="8" cy="24" r="2" fill="white" opacity="0.8"/>
                      <circle cx="24" cy="24" r="2" fill="white" opacity="0.8"/>
                      <path d="M8 8L24 8M8 8L16 16M16 16L24 24M8 24L16 16M24 8L16 16" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                    </svg>
                  </div>
                </div>
                
                {/* Vision Text */}
                <div className="text-white">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 montserrat">
                    VISION
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed lead">
                    MISSIONを達成するために<br className="only-sp" />
                    目指すべき未来
                  </p>
                  <div className="mt-6 space-y-3">
                    <p className="text-sm sm:text-base leading-relaxed opacity-90">
                      大阪は今、国際化と新しい経済時代へと歩みを進めています。
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed opacity-90">
                      Osaka Gold Trading は、Kゴールドジュエリーとダイヤモンド貿易を中核に据え、
                      市場コンサルティング、コレクション流通、そしてシガーバーを融合した社交空間を提供し、
                      日本と世界のマーケットをつなぐ専門的な貿易会社として発展を続けます。
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed opacity-90">
                      そして、大阪の新しい時代において、信頼と高品質を代表する存在となります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

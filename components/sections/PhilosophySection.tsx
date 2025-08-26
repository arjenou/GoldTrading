import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Recycle, 
  Scale, 
  Heart, 
  Coins, 
  TrendingUp, 
  Globe, 
  Users 
} from "lucide-react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollAnimation animation="slideInLeft" delay={100}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">企業理念・ビジョン</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  持続可能な発展を核心とし、信頼と品質を重視したビジネス生態系を構築
                </p>
              </div>
              
              {/* Value Commitments */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">価値コミットメント</h3>
                
                <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Recycle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">環境責任</h4>
                      <p className="text-muted-foreground">
                        貴金属・宝石のリサイクル利用を推進し、環境負荷を軽減、持続可能な発展に貢献
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Scale className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">コンプライアンス・透明性</h4>
                      <p className="text-muted-foreground">
                        コンプライアンスと透明性の原則を堅持し、長期信頼関係を構築、すべての取引の信頼性を確保
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">生態系構築</h4>
                      <p className="text-muted-foreground">
                        持続可能なビジネス・社交生態系を構築し、お客様により多くの価値と機会を創造
                      </p>
                    </div>
                  </CardContent>
                </Card>
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
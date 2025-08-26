import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Diamond, Coins, Shield } from "lucide-react"
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

          {/* Right Content - Service Cards */}
          <ScrollAnimation animation="slideInRight" delay={300}>
            <div className="grid gap-6">
              <Card className="border-border hover:border-accent transition-colors">
                <CardContent className="p-6 flex items-center space-x-4">
                  <Diamond className="h-12 w-12 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">ダイヤモンド取引</h3>
                    <p className="text-muted-foreground">
                      高品質ダイヤモンドの卸売と国際流通、透明で合規な信頼できるリソース
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent transition-colors">
                <CardContent className="p-6 flex items-center space-x-4">
                  <Coins className="h-12 w-12 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Kゴールドジュエリー</h3>
                    <p className="text-muted-foreground">18Kゴールドジュエリーの卸売・輸出入、業者様に長期安定供給を提供</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent transition-colors">
                <CardContent className="p-6 flex items-center space-x-4">
                  <Shield className="h-12 w-12 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">認証金地金</h3>
                    <p className="text-muted-foreground">正規ルートでの認証金地金代理販売、取引の安全性と透明性を確保</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SlidingGradient from "@/components/ui/SlidingGradient"
import {
  ArrowRight,
  Diamond,
  Coins,
  Shield,
  TrendingUp,
  Award,
  Globe,
  BarChart3,
  Wine,
  Watch,
  Gem,
  Users,
} from "lucide-react"

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 relative"
      style={{
        backgroundImage: "url('/gload-background-2.jpg')",
        backgroundRepeat: 'repeat',
        backgroundSize: '600px',
      }}
    >
      <SlidingGradient />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">事業サービス</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            取引から投資、鑑定から収集まで、包括的な専門サービスを提供
          </p>
        </div>

        <div className="space-y-16">
          {/* Service 1: Kゴールドジュエリー取引 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Coins className="h-10 w-10 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">Kゴールドジュエリー取引</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                18Kゴールドジュエリー（新品・中古）の卸売・輸出入、精錬業者・宝飾商・国際代理店に長期安定供給を提供。
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">新品・中古18Kゴールドジュエリー卸売</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">国際輸出入取引サービス</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">長期安定サプライチェーン保証</span>
                </div>
              </div>
            </div>
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                  <Coins className="h-16 w-16 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service 2: ダイヤモンド取引 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="border-border lg:order-1">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                  <Diamond className="h-16 w-16 text-accent" />
                </div>
              </CardContent>
            </Card>
            <div className="lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <Diamond className="h-10 w-10 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">ダイヤモンド取引</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                高品質ダイヤモンドの卸売と国際流通、透明で合規なルートで宝飾業界と収集顧客に信頼できるリソースを提供。
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">高品質ダイヤモンド卸売取引</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">透明で合規な取引ルート</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">国際流通ネットワークサポート</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: 認証金地金代理 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-10 w-10 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">認証金地金代理</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                正規ルートでの日本公認金地金と国際認証金地金の代理販売、取引の安全性と出所の透明性を確保。
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">日本公認金地金代理</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">国際認証金地金販売</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">出所透明、取引安全</span>
                </div>
              </div>
            </div>
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                  <Shield className="h-16 w-16 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service 4: 貴金属・宝石鑑定 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="border-border lg:order-1">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                  <Award className="h-16 w-16 text-accent" />
                </div>
              </CardContent>
            </Card>
            <div className="lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-10 w-10 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">貴金属・宝石鑑定</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                権威ある機関と連携し、金・ダイヤモンド・宝石の専門鑑定と評価を提供、取引と収集の真の価値を保証。
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">権威機関連携鑑定</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">専門価値評価サービス</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">取引収集価値保証</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service 5: 市場・投資コンサルティング */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="h-10 w-10 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">市場・投資コンサルティング</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                金・ダイヤモンド市場トレンドに基づき、不動産・株式・収集品と組み合わせ、お客様に多様化した配置提案を提供。
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">貴金属市場トレンド分析</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">多様化投資配置提案</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">専門投資戦略策定</span>
                </div>
              </div>
            </div>
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service 6: 高級収集品流通 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="border-border lg:order-1">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Wine className="h-12 w-12 text-accent" />
                    <Watch className="h-12 w-12 text-accent" />
                    <Gem className="h-12 w-12 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="h-10 w-10 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">高級収集品流通</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                洋酒・高級時計・金工芸品の流通と仲介に特化、お客様の資産に増値性と文化的品格を兼ね備えさせます。
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">高級洋酒収集取引</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">高級時計流通仲介サービス</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">金工芸品価値評価</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service 7: 会員制シガーバー */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-10 w-10 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">会員制シガーバー</h3>
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  近日オープン
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                金文化と高級社交雰囲気を融合し、お客様にプライベートで上品なビジネス交流空間を提供。Exclusive Cigar
                Lounge — Coming soon.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">プライベート高級社交空間</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">金文化テーマ雰囲気</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">上品なビジネス交流体験</span>
                </div>
              </div>
            </div>
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                  <Users className="h-16 w-16 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            事業詳細について
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

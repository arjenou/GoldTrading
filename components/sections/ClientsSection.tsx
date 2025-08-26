import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Shield,
  Award,
  Scale,
  TrendingUp,
  Gem,
  Users,
  Factory,
  Store,
  Globe,
  Crown,
  Building2,
  Briefcase,
} from "lucide-react"

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="py-20 relative"
      style={{
        backgroundImage: "url('/gload-background-3.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* overlay mask to improve readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" aria-hidden />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">お客様・パートナー</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            お客様が私たちを選ぶ理由は、安定した供給源と専門的な実行力だけでなく、
            取引・鑑定・コンサルティング・社交を網羅する包括的なサポートを提供できるからです
          </p>
        </div>

        {/* Service Targets */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">サービス対象</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Factory className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">精錬業者</h4>
                <p className="text-muted-foreground leading-relaxed">
                  貴金属精錬企業に安定した原料供給と専門的な市場分析サービスを提供
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Store className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">宝飾商・小売業者</h4>
                <p className="text-muted-foreground leading-relaxed">
                  宝飾小売業者の優良供給源確保をサポート、製品鑑定と市場トレンドコンサルティングを提供
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">国際貿易商</h4>
                <p className="text-muted-foreground leading-relaxed">
                  国際金・ダイヤモンド貿易商に越境取引サポートとコンプライアンス保証を提供
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Crown className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">収集家・富裕層顧客</h4>
                <p className="text-muted-foreground leading-relaxed">
                  収集家に希少コレクション取引、投資コンサルティング、プライベートカスタマイズサービスを提供
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">企業・ファミリーオフィス</h4>
                <p className="text-muted-foreground leading-relaxed">
                  企業とファミリーオフィスに資産配置提案と財産管理ソリューションを提供
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Briefcase className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">専門機関</h4>
                <p className="text-muted-foreground leading-relaxed">
                  金融機関・投資ファンドなどの専門機関と長期協力関係を構築
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-accent/20 bg-gradient-to-br from-background to-muted/20">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">選ばれる理由</h3>
                <p className="text-lg text-muted-foreground">従来の取引を超越し、包括的な専門サポートを提供</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">安定供給源</h4>
                      <p className="text-muted-foreground text-sm">
                        長期安定サプライチェーン保証、供給源品質と納期を確保
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">専門実行</h4>
                      <p className="text-muted-foreground text-sm">
                        経験豊富なチーム、専門的な取引実行とリスク管理を提供
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Scale className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">コンプライアンス保証</h4>
                      <p className="text-muted-foreground text-sm">
                        国際貿易法規を厳格遵守、すべての取引のコンプライアンスと透明性を確保
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">市場コンサルティング</h4>
                      <p className="text-muted-foreground text-sm">市場トレンドに基づく専門投資提案と戦略指導</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Gem className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">鑑定サービス</h4>
                      <p className="text-muted-foreground text-sm">
                        権威機関認証の専門鑑定、コレクションの真の価値を保証
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">社交ネットワーク</h4>
                      <p className="text-muted-foreground text-sm">
                        高級ビジネス社交プラットフォーム、ビジネス協力機会を拡大
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partnership Opportunities */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-6">協力機会</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            各種専門機関との長期協力関係構築を歓迎し、共に国際市場を開拓します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              パートナーになる
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              協力詳細について
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

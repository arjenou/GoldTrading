import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import ParallaxBackground from "@/components/ui/ParallaxBackground"
import Image from "next/image"
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
    <ParallaxBackground
      backgroundImage="/back-03.jpg"
      speed={0.05}
      className="py-20 relative"
      overlay={true}
      overlayOpacity={0.7}
      tileSize="500px"
    >
      <div id="clients" className="absolute top-0 left-0 invisible" aria-hidden />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg" style={{ color: '#c8ae83' }} >お客様・パートナー</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto drop-shadow-md" style={{ color: '#c8ae83' }} >
              お客様が私たちを選ぶ理由は、安定した供給源と専門的な実行力だけでなく、
              取引・鑑定・コンサルティング・社交を網羅する包括的なサポートを提供できるからです
            </p>
          </div>
        </ScrollAnimation>

        {/* Service Targets */}
        <ScrollAnimation animation="slideUp" delay={200}>
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 精錬業者 */}
              <div className="group relative cursor-pointer">
                <div className="relative px-4">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/service-pattern/player.png"
                      alt="精錬業者"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:opacity-80"
                    />
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 -mt-8 relative z-10 mx-2 group-hover:bg-yellow-50/90" style={{ border: '1px solid #D0A900', position: 'relative' }}>
                  <div className="bg-white/90 backdrop-blur-sm p-6 text-center h-32 flex flex-col justify-start pt-4 relative after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:pointer-events-none after:border after:border-[#D0A900] transition-all duration-300 group-hover:bg-yellow-50/90">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">精錬業者</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      貴金属精錬企業に安定した原料供給と専門的な市場分析サービスを提供
                    </p>
                  </div>
                </div>
              </div>

              {/* 宝飾商・小売業者 */}
              <div className="group relative cursor-pointer">
                <div className="relative px-4">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/service-pattern/player.png"
                      alt="宝飾商・小売業者"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:opacity-80"
                    />
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 -mt-8 relative z-10 mx-2 group-hover:bg-yellow-50/90" style={{ border: '1px solid #D0A900', position: 'relative' }}>
                  <div className="bg-white/90 backdrop-blur-sm p-6 text-center h-32 flex flex-col justify-start pt-4 relative after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:pointer-events-none after:border after:border-[#D0A900] transition-all duration-300 group-hover:bg-yellow-50/90">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">宝飾商・小売業者</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      宝飾小売業者の優良供給源確保をサポート、製品鑑定と市場トレンドコンサルティングを提供
                    </p>
                  </div>
                </div>
              </div>

              {/* 国際貿易商 */}
              <div className="group relative cursor-pointer">
                <div className="relative px-4">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/service-pattern/player.png"
                      alt="国際貿易商"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:opacity-80"
                    />
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 -mt-8 relative z-10 mx-2 group-hover:bg-yellow-50/90" style={{ border: '1px solid #D0A900', position: 'relative' }}>
                  <div className="bg-white/90 backdrop-blur-sm p-6 text-center h-32 flex flex-col justify-start pt-4 relative after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:pointer-events-none after:border after:border-[#D0A900] transition-all duration-300 group-hover:bg-yellow-50/90">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">国際貿易商</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      国際金・ダイヤモンド貿易商に越境取引サポートとコンプライアンス保証を提供
                    </p>
                  </div>
                </div>
              </div>

              {/* 収集家・富裕層顧客 */}
              <div className="group relative cursor-pointer">
                <div className="relative px-4">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/service-pattern/player.png"
                      alt="収集家・富裕層顧客"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:opacity-80"
                    />
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 -mt-8 relative z-10 mx-2 group-hover:bg-yellow-50/90" style={{ border: '1px solid #D0A900', position: 'relative' }}>
                  <div className="bg-white/90 backdrop-blur-sm p-6 text-center h-32 flex flex-col justify-start pt-4 relative after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:pointer-events-none after:border after:border-[#D0A900] transition-all duration-300 group-hover:bg-yellow-50/90">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">収集家・富裕層顧客</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      収集家に希少コレクション取引、投資コンサルティング、プライベートカスタマイズサービスを提供
                    </p>
                  </div>
                </div>
              </div>

              {/* 企業・ファミリーオフィス */}
              <div className="group relative cursor-pointer">
                <div className="relative px-4">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/service-pattern/player.png"
                      alt="企業・ファミリーオフィス"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:opacity-80"
                    />
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 -mt-8 relative z-10 mx-2 group-hover:bg-yellow-50/90" style={{ border: '1px solid #D0A900', position: 'relative' }}>
                  <div className="bg-white/90 backdrop-blur-sm p-6 text-center h-32 flex flex-col justify-start pt-4 relative after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:pointer-events-none after:border after:border-[#D0A900] transition-all duration-300 group-hover:bg-yellow-50/90">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">企業・ファミリーオフィス</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      企業とファミリーオフィスに資産配置提案と財産管理ソリューションを提供
                    </p>
                  </div>
                </div>
              </div>

              {/* 専門機関 */}
              <div className="group relative cursor-pointer">
                <div className="relative px-4">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/service-pattern/player.png"
                      alt="専門機関"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:opacity-80"
                    />
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 -mt-8 relative z-10 mx-2 group-hover:bg-yellow-50/90" style={{ border: '1px solid #D0A900', position: 'relative' }}>
                  <div className="bg-white/90 backdrop-blur-sm p-6 text-center h-32 flex flex-col justify-start pt-4 relative after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:pointer-events-none after:border after:border-[#D0A900] transition-all duration-300 group-hover:bg-yellow-50/90">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">専門機関</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      金融機関・投資ファンドなどの専門機関と長期協力関係を構築
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Why Choose Us */}
        <ScrollAnimation animation="fadeIn" delay={300}>
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/20 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-4 drop-shadow-lg">選ばれる理由</h3>
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
        </ScrollAnimation>

      </div>
    </ParallaxBackground>
  )
}
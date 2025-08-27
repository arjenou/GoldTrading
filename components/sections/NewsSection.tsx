import React from "react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Award,
  Scale,
  TrendingUp,
  Gem,
  Users,
} from "lucide-react"

export default function NewsSection() {
  const newsItems = [
    {
      date: "2025.08.27",
      content: "国際取引パートナーシップが拡大しました。より多くの国々との取引が可能になり、お客様により良いサービスをご提供いたします。"
    },
    {
      date: "2025.08.24",
      content: "ホームページが新しくなりました。今後はこちらのページをご覧ください。"
    },
    {
      date: "2025.08.24",
      content: "ホームページが新しくなりました。今後はこちらのページをご覧ください。"
    },
    {
      date: "2025.08.24",
      content: "ホームページが新しくなりました。今後はこちらのページをご覧ください。"
    },
    {
      date: "2025.08.24",
      content: "ホームページが新しくなりました。今後はこちらのページをご覧ください。"
    }
  ]

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us */}
        <ScrollAnimation animation="fadeIn" delay={100}>
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <Card className="border-accent/20 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 drop-shadow-lg">選ばれる理由</h3>
                  <p className="text-base sm:text-lg text-muted-foreground">従来の取引を超越し、包括的な専門サポートを提供</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4 min-h-[5rem] sm:min-h-[6rem]">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">安定供給源</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          長期安定サプライチェーン保証、供給源品質と納期を確保
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4 min-h-[5rem] sm:min-h-[6rem]">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Award className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">専門実行</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          経験豊富なチーム、専門的な取引実行とリスク管理を提供
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4 min-h-[5rem] sm:min-h-[6rem]">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Scale className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">コンプライアンス保証</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          国際貿易法規を厳格遵守、すべての取引のコンプライアンスと透明性を確保
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4 min-h-[5rem] sm:min-h-[6rem]">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">市場コンサルティング</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">市場トレンドに基づく専門投資提案と戦略指導</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4 min-h-[5rem] sm:min-h-[6rem]">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Gem className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">鑑定サービス</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          権威機関認証の専門鑑定、コレクションの真の価値を保証
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4 min-h-[5rem] sm:min-h-[6rem]">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">社交ネットワーク</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
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

        <ScrollAnimation animation="fadeIn" delay={200}>
          {/* セクションヘッダー - 只有这部分使用背景图 */}
          <div className="relative text-center mb-12 sm:mb-16 py-8 sm:py-12 overflow-hidden" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
            {/* 背景画像 - 只应用于标题区域 */}
            <div className="absolute inset-0">
              <div className="w-full h-full bg-[url('/news-backgroud.jpg')] bg-cover bg-center bg-no-repeat filter brightness-110"></div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white drop-shadow-2xl">
                新着情報
              </h2>
              <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-200 drop-shadow-lg px-4">
                最新のお知らせをお届けします
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={300}>
          {/* ニュースコンテンツエリア */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
              <div className="space-y-4 sm:space-y-6">
                {newsItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col lg:flex-row lg:items-start gap-3 sm:gap-4">
                      {/* 日付 */}
                      <div className="lg:w-24 flex-shrink-0">
                        <span className="text-accent font-semibold text-base sm:text-lg">
                          {item.date}
                        </span>
                      </div>
                      
                      {/* ニュース内容 */}
                      <div className="flex-1">
                        <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                    
                    {/* 分隔线 - 除了最后一个项目 */}
                    {index < newsItems.length - 1 && (
                      <div className="border-t border-gray-200 mt-4 sm:mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

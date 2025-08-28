import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SlidingGradient from "@/components/ui/SlidingGradient"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import ParallaxBackground from "@/components/ui/ParallaxBackground"
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
    <ParallaxBackground
      backgroundImage="/back-02.jpg"
      speed={0.28}
      className="py-12 sm:py-16 lg:py-20 relative"
      overlay={true}
      overlayOpacity={0.6}
      tileSize="500px"
    >
      <div id="services" className="absolute top-0 left-0 invisible" aria-hidden />
      <SlidingGradient />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" delay={100}>
          <div className="text-center mb-12 sm:mb-16">
            {/* 标题区域使用半透明背景 */}
            {/* <div className="inline-block backdrop-blur-sm rounded-2xl px-8 py-6 mb-6"> */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 drop-shadow-2xl" style={{ color: '#b8945f' }}>事業サービス</h2>
              <p className="text-base sm:text-lg max-w-2xl mx-auto drop-shadow-lg px-4" style={{ color: '#b8945f' }}>
                取引から投資、鑑定から収集まで、包括的な専門サービスを提供
              </p>
            {/* </div> */}
          </div>
        </ScrollAnimation>

        <div className="space-y-12 sm:space-y-16">
          {/* Service 1: K金取引 */}
          <ScrollAnimation animation="slideUp" delay={200}>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* 服务内容文字区域 - 添加半透明背景 */}
              <div id="service-1-text" className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 relative overflow-hidden order-1 lg:order-1">
                {/* 随机金色边框效果 */}
                <div className="absolute top-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute top-0 right-1/3 w-1/3 h-0.5 bg-gradient-to-l from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute top-0 right-0 w-0.5 h-1/3 bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-1/3 bg-gradient-to-t from-yellow-400 to-yellow-600 shadow-md"></div>
                
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <Coins className="h-8 w-8 sm:h-10 sm:w-10 text-accent drop-shadow-lg" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">K金取引</h3>
                </div>
                <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-4 sm:mb-6 drop-shadow-md">
                  18K金（新品・中古）の卸売・輸出入、精錬業者・宝飾商・国際代理店に長期安定供給を提供。
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">新品・中古18K金卸売</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">国際輸出入取引サービス</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">長期安定サプライチェーン保証</span>
                  </div>
                </div>
              </div>
              <div id="service-1-image" className="aspect-video overflow-hidden rounded-lg border border-border order-2 lg:order-2">
                <img 
                  src="/service-image/18K.jpg" 
                  alt="K金取引" 
                  className="w-full h-full object-fill"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Service 2: ダイヤモンド取引 */}
          <ScrollAnimation animation="slideUp" delay={100}>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div id="service-2-text" className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 relative overflow-hidden order-3 lg:order-2">
                {/* 随机金色边框效果 */}
                <div className="absolute top-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-gradient-to-l from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute top-0 left-0 w-0.5 h-1/2 bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-1/2 bg-gradient-to-t from-yellow-400 to-yellow-600 shadow-md"></div>
                
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <Diamond className="h-8 w-8 sm:h-10 sm:w-10 text-accent drop-shadow-lg" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">ダイヤモンド取引</h3>
                </div>
                <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-4 sm:mb-6 drop-shadow-md">
                  高品質ダイヤモンドの卸売と国際流通、透明で合規なルートで宝飾業界と収集顧客に信頼できるリソースを提供。
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">高品質ダイヤモンド卸売取引</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">透明で合規な取引ルート</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">国際流通ネットワークサポート</span>
                  </div>
                </div>
              </div>
              <div id="service-2-image" className="aspect-video overflow-hidden rounded-lg border border-border order-4 lg:order-1">
                <img 
                  src="/service-image/diamond-2.jpg" 
                  alt="ダイヤモンド取引" 
                  className="w-full h-full object-fill"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Service 3: 認証金地金代理 */}
          <ScrollAnimation animation="slideUp" delay={100}>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div id="service-3-text" className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 relative overflow-hidden order-5 lg:order-1">
                {/* 随机金色边框效果 */}
                <div className="absolute top-0 right-0 w-1/3 h-0.5 bg-gradient-to-l from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute top-0 right-0 w-0.5 h-1/2 bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-1/2 bg-gradient-to-t from-yellow-400 to-yellow-600 shadow-md"></div>
                
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-accent drop-shadow-lg" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">認証金地金代理</h3>
                </div>
                <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-4 sm:mb-6 drop-shadow-md">
                  正規ルートでの日本公認金地金と国際認証金地金の代理販売、取引の安全性と出所の透明性を確保。
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">日本公認金地金代理</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">国際認証金地金販売</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">出所透明、取引安全</span>
                  </div>
                </div>
              </div>
              <div id="service-3-image" className="aspect-video overflow-hidden rounded-lg border border-border order-6 lg:order-2">
                <img 
                  src="/service-image/gold-1.jpg" 
                  alt="認証金地金代理" 
                  className="w-full h-full object-fill"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Service 4: 貴金属・宝石鑑定 */}
          <ScrollAnimation animation="slideUp" delay={100}>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div id="service-4-text" className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 relative overflow-hidden order-7 lg:order-2">
                {/* 随机金色边框效果 */}
                <div className="absolute top-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-gradient-to-l from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute top-0 left-0 w-0.5 h-1/2 bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-1/2 bg-gradient-to-t from-yellow-400 to-yellow-600 shadow-md"></div>
                
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <Award className="h-8 w-8 sm:h-10 sm:w-10 text-accent drop-shadow-lg" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">貴金属・宝石鑑定</h3>
                </div>
                <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-4 sm:mb-6 drop-shadow-md">
                  権威ある機関と連携し、金・ダイヤモンド・宝石の専門鑑定と評価を提供、取引と収集の真の価値を保証。
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">権威機関連携鑑定</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">専門価値評価サービス</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">取引収集価値保証</span>
                  </div>
                </div>
              </div>
              <div id="service-4-image" className="aspect-video overflow-hidden rounded-lg border border-border order-8 lg:order-1">
                <img 
                  src="/service-image/diamond.jpg" 
                  alt="貴金属・宝石鑑定" 
                  className="w-full h-full object-fill"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Service 5: 市場・投資コンサルティング */}
          <ScrollAnimation animation="slideUp" delay={100}>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div id="service-5-text" className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 relative overflow-hidden order-9 lg:order-1">
                {/* 随机金色边框效果 */}
                <div className="absolute top-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute bottom-0 right-0 w-1/3 h-0.5 bg-gradient-to-l from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute top-0 right-0 w-0.5 h-1/3 bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-1/3 bg-gradient-to-t from-yellow-400 to-yellow-600 shadow-md"></div>
                
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-accent drop-shadow-lg" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">市場・投資コンサルティング</h3>
                </div>
                <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-4 sm:mb-6 drop-shadow-md">
                  金・ダイヤモンド市場トレンドに基づき、不動産・株式・収集品と組み合わせ、お客様に多様化した配置提案を提供。
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">貴金属市場トレンド分析</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">多様化投資配置提案</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">専門投資戦略策定</span>
                  </div>
                </div>
              </div>
              <div id="service-5-image" className="aspect-video overflow-hidden rounded-lg border border-border order-10 lg:order-2">
                <img 
                  src="/service-image/consult.jpg" 
                  alt="市場・投資コンサルティング" 
                  className="w-full h-full object-fill"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Service 6: 高級収集品流通 */}
          <ScrollAnimation animation="slideUp" delay={100}>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div id="service-6-text" className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 relative overflow-hidden order-11 lg:order-2">
                {/* 随机金色边框效果 */}
                <div className="absolute top-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-gradient-to-l from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute top-0 left-0 w-0.5 h-1/2 bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-1/2 bg-gradient-to-t from-yellow-400 to-yellow-600 shadow-md"></div>
                
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-accent drop-shadow-lg" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">高級収集品流通</h3>
                </div>
                <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-4 sm:mb-6 drop-shadow-md">
                  洋酒・高級時計・金工芸品の流通と仲介に特化、お客様の資産に増値性と文化的品格を兼ね備えさせます。
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">高級洋酒収集取引</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">高級時計流通仲介サービス</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">金工芸品価値評価</span>
                  </div>
                </div>
              </div>
              <div id="service-6-image" className="aspect-video overflow-hidden rounded-lg border border-border order-12 lg:order-1">
                <img 
                  src="/service-image/lofty.jpg" 
                  alt="高級収集品流通" 
                  className="w-full h-full object-fill"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Service 7: 会員制シガーバー */}
          <ScrollAnimation animation="slideUp" delay={100}>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div id="service-7-text" className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 relative overflow-hidden order-13 lg:order-1">
                {/* 随机金色边框效果 */}
                <div className="absolute top-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute bottom-0 right-0 w-1/3 h-0.5 bg-gradient-to-l from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute top-0 right-0 w-0.5 h-1/3 bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-md"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-1/3 bg-gradient-to-t from-yellow-400 to-yellow-600 shadow-md"></div>
                
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 text-accent drop-shadow-lg" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">会員制シガーバー</h3>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/40 backdrop-blur-sm text-xs">
                    近日オープン
                  </Badge>
                </div>
                <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-4 sm:mb-6 drop-shadow-md">
                  金文化と高級社交雰囲気を融合し、お客様にプライベートで上品なビジネス交流空間を提供。Exclusive Cigar
                  Lounge — Coming soon.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">プライベート高級社交空間</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">金文化テーマ雰囲気</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className="text-sm sm:text-base text-white/90 drop-shadow-sm">上品なビジネス交流体験</span>
                  </div>
                </div>
              </div>
              <div id="service-7-image" className="aspect-video overflow-hidden rounded-lg border border-border order-14 lg:order-2">
                <img 
                  src="/service-image/Bar.jpg" 
                  alt="会員制シガーバー" 
                  className="w-full h-full object-fill"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </ParallaxBackground>
  )
}
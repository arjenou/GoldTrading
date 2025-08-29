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
import { useTranslation } from "react-i18next"

export default function ServicesSection() {
  const { t, i18n } = useTranslation()
  
  // Helper function to get font class based on current language
  const getFontClass = () => {
    return i18n.language === 'ja' ? 'font-noto-sans-jp' : 
           i18n.language === 'zh' ? 'font-noto-sans-sc' : 
           i18n.language === 'en' ? 'font-montserrat' : ''
  }
  
  return (
    <ParallaxBackground
      backgroundImage="/back-02.jpg"
      speed={0.22}
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
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 drop-shadow-2xl ${getFontClass()}`} style={{ color: '#b8945f' }}>{t('servicesTitle')}</h2>
                <p className={`text-base sm:text-lg max-w-2xl mx-auto drop-shadow-lg px-4 ${getFontClass()}`} style={{ color: '#b8945f' }}>
                  {t('servicesDescription')}
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
                  <h3 className={`text-xl sm:text-2xl font-bold text-white drop-shadow-lg ${getFontClass()}`}>{t('serviceKGoldTitle')}</h3>
                </div>
                <p className={`text-base sm:text-lg text-white/95 leading-relaxed mb-4 sm:mb-6 drop-shadow-md ${getFontClass()}`}>
                  {t('serviceKGoldDesc')}
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceKGoldPoint1')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceKGoldPoint2')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceKGoldPoint3')}</span>
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
                  <h3 className={`text-xl sm:text-2xl font-bold text-white drop-shadow-lg ${getFontClass()}`}>{t('serviceDiamondTitle')}</h3>
                </div>
                <p className={`text-base sm:text-lg text-white/95 leading-relaxed mb-4 sm:mb-6 drop-shadow-md ${getFontClass()}`}>
                  {t('serviceDiamondDesc')}
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceDiamondPoint1')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceDiamondPoint2')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceDiamondPoint3')}</span>
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
                  <h3 className={`text-xl sm:text-2xl font-bold text-white drop-shadow-lg ${getFontClass()}`}>{t('serviceGoldBarsTitle')}</h3>
                </div>
                <p className={`text-base sm:text-lg text-white/95 leading-relaxed mb-4 sm:mb-6 drop-shadow-md ${getFontClass()}`}>
                  {t('serviceGoldBarsDesc')}
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceGoldBarsPoint1')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceGoldBarsPoint2')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceGoldBarsPoint3')}</span>
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
                  <h3 className={`text-xl sm:text-2xl font-bold text-white drop-shadow-lg ${getFontClass()}`}>{t('serviceAppraisalTitle')}</h3>
                </div>
                <p className={`text-base sm:text-lg text-white/95 leading-relaxed mb-4 sm:mb-6 drop-shadow-md ${getFontClass()}`}>
                  {t('serviceAppraisalDesc')}
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceAppraisalPoint1')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceAppraisalPoint2')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceAppraisalPoint3')}</span>
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
                  <h3 className={`text-xl sm:text-2xl font-bold text-white drop-shadow-lg ${getFontClass()}`}>{t('serviceInvestmentTitle')}</h3>
                </div>
                <p className={`text-base sm:text-lg text-white/95 leading-relaxed mb-4 sm:mb-6 drop-shadow-md ${getFontClass()}`}>
                  {t('serviceInvestmentDesc')}
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceInvestmentPoint1')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceInvestmentPoint2')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceInvestmentPoint3')}</span>
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
                  <h3 className={`text-xl sm:text-2xl font-bold text-white drop-shadow-lg ${getFontClass()}`}>{t('serviceCollectionTitle')}</h3>
                </div>
                <p className={`text-base sm:text-lg text-white/95 leading-relaxed mb-4 sm:mb-6 drop-shadow-md ${getFontClass()}`}>
                  {t('serviceCollectionDesc')}
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceCollectionPoint1')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceCollectionPoint2')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceCollectionPoint3')}</span>
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
                  <h3 className={`text-xl sm:text-2xl font-bold text-white drop-shadow-lg ${getFontClass()}`}>{t('serviceLoungeTitle')}</h3>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/40 backdrop-blur-sm text-xs">
                    <span className={getFontClass()}>{t('serviceLoungeSubtitle')}</span>
                  </Badge>
                </div>
                <p className={`text-base sm:text-lg text-white/95 leading-relaxed mb-4 sm:mb-6 drop-shadow-md ${getFontClass()}`}>
                  {t('serviceLoungeDesc')}
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceLoungePoint1')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceLoungePoint2')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full drop-shadow-sm"></div>
                    <span className={`text-sm sm:text-base text-white/90 drop-shadow-sm ${getFontClass()}`}>{t('serviceLoungePoint3')}</span>
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
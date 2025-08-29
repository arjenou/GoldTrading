import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Diamond, Coins, Shield, TrendingUp, Globe, Users, Heart, Target } from "lucide-react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import Image from "next/image"
import { FlowerDecorationGroup } from "@/components/ui/FlowerDecoration"
import { useTranslation } from "react-i18next"

export default function CompanyOverview() {
  const { t, i18n } = useTranslation()
  
  // Helper function to get font class based on current language
  const getFontClass = () => {
    return i18n.language === 'ja' ? 'font-noto-sans-jp' : 
           i18n.language === 'zh' ? 'font-noto-sans-sc' : ''
  }
  
  return (
    <>
      <section id="company-overview" className="py-12 sm:py-16 bg-muted/30 relative">
        {/* 花朵装饰 */}
        <FlowerDecorationGroup />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <ScrollAnimation animation="slideInLeft" delay={100}>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 mb-4 sm:mb-6">Gold Trading Osaka</h2>
                  <p className={`text-base sm:text-lg text-muted-foreground leading-relaxed ${getFontClass()}`} style={{ textIndent: '1em' }}>
                    {t('companyDescription1')}
                  </p>
                  <p className={`text-base sm:text-lg text-muted-foreground leading-relaxed ${getFontClass()}`} style={{ textIndent: '1em' }}>
                    {t('companyDescription2')}
                  </p>
                  <p className={`text-base sm:text-lg text-muted-foreground leading-relaxed ${getFontClass()}`} style={{ textIndent: '1em' }}>
                    {t('companyDescription3')}
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
                    <h4 className={`font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base ${getFontClass()}`}>{t('coreTradingTitle')}</h4>
                    <p className={`text-xs sm:text-sm text-muted-foreground ${getFontClass()}`}>{t('coreTradingDesc')}</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                    </div>
                    <h4 className={`font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base ${getFontClass()}`}>{t('assetSolutionTitle')}</h4>
                    <p className={`text-xs sm:text-sm text-muted-foreground ${getFontClass()}`}>{t('assetSolutionDesc')}</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                    </div>
                    <h4 className={`font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base ${getFontClass()}`}>{t('collectionTitle')}</h4>
                    <p className={`text-xs sm:text-sm text-muted-foreground ${getFontClass()}`}>{t('collectionDesc')}</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                    </div>
                    <h4 className={`font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base ${getFontClass()}`}>{t('loungeTitle')}</h4>
                    <p className={`text-xs sm:text-sm text-muted-foreground ${getFontClass()}`}>{t('loungeDesc1')}</p>
                    <p className={`text-xs sm:text-sm text-muted-foreground ${getFontClass()}`}>{t('loungeDesc2')}</p>
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
            <div className="relative h-full min-h-[300px] sm:min-h-[400px] bg-gradient-to-br from-yellow-50 to-amber-100 group cursor-pointer transition-all duration-300 ease-in-out">
              {/* Background Image (blurred office interior) */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-600/30 transition-all duration-300 ease-in-out group-hover:from-yellow-500/10 group-hover:to-amber-600/15"></div>
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30 transition-all duration-300 ease-in-out group-hover:bg-black/50"></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-12 flex flex-col justify-center h-full transition-all duration-300 ease-in-out group-hover:scale-[1.02]">
                {/* Icon */}
                <div className="mb-6 transition-all duration-300 ease-in-out group-hover:scale-110">
                </div>
                
                {/* Mission Text */}
                <div className="text-white">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 montserrat transition-all duration-300 ease-in-out group-hover:text-yellow-200">
                    {t('missionTitle')}
                  </h3>
                  <p className={`text-base sm:text-lg leading-relaxed lead transition-all duration-300 ease-in-out group-hover:text-yellow-100 ${getFontClass()}`}>
                    {t('missionSubtitle')}
                  </p>
                  <div className="mt-6 space-y-3">
                    <p className={`text-sm sm:text-base leading-relaxed opacity-90 transition-all duration-300 ease-in-out group-hover:opacity-100 ${getFontClass()}`}>
                      {t('missionPoint1')}
                    </p>
                    <p className={`text-sm sm:text-base leading-relaxed opacity-90 transition-all duration-300 ease-in-out group-hover:opacity-100 ${getFontClass()}`}>
                      {t('missionPoint2')}
                    </p>
                    <p className={`text-sm sm:text-base leading-relaxed opacity-90 transition-all duration-300 ease-in-out group-hover:opacity-100 ${getFontClass()}`}>
                      {t('missionPoint3')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Side - Vision Content with Gold Overlay */}
          <ScrollAnimation animation="slideInRight" delay={400}>
            <div className="relative h-full min-h-[300px] sm:min-h-[400px] bg-gradient-to-br from-amber-50 to-yellow-100 group cursor-pointer transition-all duration-300 ease-in-out">
              {/* Background Image (blurred office interior) */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-600/30 transition-all duration-300 ease-in-out group-hover:from-amber-500/10 group-hover:to-yellow-600/15"></div>
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30 transition-all duration-300 ease-in-out group-hover:bg-black/50"></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-12 flex flex-col justify-center h-full transition-all duration-300 ease-in-out group-hover:scale-[1.02]">
                
                {/* Vision Text */}
                <div className="text-white">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 montserrat transition-all duration-300 ease-in-out group-hover:text-yellow-200">
                    {t('visionTitle')}
                  </h3>
                  <p className={`text-base sm:text-lg leading-relaxed lead transition-all duration-300 ease-in-out group-hover:text-yellow-100 ${getFontClass()}`}>
                    {t('visionSubtitle')}
                  </p>
                  <div className="mt-6 space-y-3">
                    <p className={`text-sm sm:text-base leading-relaxed opacity-90 transition-all duration-300 ease-in-out group-hover:opacity-100 ${getFontClass()}`}>
                      {t('visionPoint1')}
                    </p>
                    <p className={`text-sm sm:text-base leading-relaxed opacity-90 transition-all duration-300 ease-in-out group-hover:opacity-100 ${getFontClass()}`}>
                      {t('visionPoint2')}
                    </p>
                    <p className={`text-sm sm:text-base leading-relaxed opacity-90 transition-all duration-300 ease-in-out group-hover:opacity-100 ${getFontClass()}`}>
                      {t('visionPoint3')}
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

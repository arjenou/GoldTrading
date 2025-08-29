import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import { useTranslation } from "react-i18next"

export default function HeroSection() {
  const { t, i18n } = useTranslation()
  
  // Helper function to get font class based on current language
  const getFontClass = () => {
    return i18n.language === 'ja' ? 'font-noto-sans-jp' : 
           i18n.language === 'zh' ? 'font-noto-sans-sc' : ''
  }
  
  return (
    <section id="home" className="relative py-16 sm:py-20 lg:py-32 min-h-screen overflow-hidden">
      {/* 背景图 - 不拼接，全覆盖，提高亮度 */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/gload-background-1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.6)', // 提高亮度30%
          willChange: 'transform'
        }}
      />
      
      {/* 覆盖层蒙版 */}
      <div className="absolute inset-0 bg-black/75 pointer-events-none" aria-hidden />
      
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <ScrollAnimation animation="slideUp" delay={200}>
            <div className="flex flex-col justify-center h-screen max-w-4xl space-y-6 sm:space-y-8">
              {/* 主标题 - 左对齐，调整顶部间距和移动端文字大小 */}
              <h1 
                className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg text-left -mt-20 sm:-mt-32 ${getFontClass()}`}
                style={{ color: '#cdad7d' }}
              >
                {t('heroTitle')}
              </h1>
              
              {/* 副标题 - 左对齐，移动端文字大小调整 */}
              <div className="space-y-2 mb-6 sm:mb-8 text-left">
                <p 
                  className={`text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-md ${getFontClass()}`}
                  style={{ color: '#eeead6' }}
                >
                  {t('heroSubtitle1')}
                </p>
                <p 
                  className={`text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-md ${getFontClass()}`}
                  style={{ color: '#eeead6' }}
                >
                  {t('heroSubtitle2')}
                </p>
                <p 
                  className={`text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-md ${getFontClass()}`}
                  style={{ color: '#eeead6' }}
                >
                  {t('heroSubtitle3')}
                </p>
              </div>

              {/* 按钮 - 左对齐，移动端大小调整 */}
              <div className="flex justify-start">
                <Button 
                  size="lg" 
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }}
                  className="px-6 sm:px-8 py-2 sm:py-3 text-black font-medium shadow-xl hover:opacity-90 transition-opacity text-sm sm:text-base"
                  style={{ backgroundColor: '#cdad7d' }}
                >
                  <span className={getFontClass()}>{t('contact')}</span>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
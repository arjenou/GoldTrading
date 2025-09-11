import React from "react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import { Card, CardContent } from "@/components/ui/card"
import { LightFlowerDecoration } from "@/components/ui/FlowerDecoration"
import { CardFlowerDecoration } from "@/components/ui/WhiteAreaDecoration"
import {
  Shield,
  Award,
  Scale,
  TrendingUp,
  Gem,
  Users,
} from "lucide-react"
import { useTranslation } from "react-i18next"

export default function NewsSection() {
  const { t, i18n } = useTranslation()
  
  // Helper function to get font class based on current language
    const getFontClass = () => {
    return i18n.language === 'ja' ? 'font-noto-sans-jp' :
           i18n.language === 'zh' ? 'font-noto-sans-sc' : 
           i18n.language === 'en' ? 'font-montserrat' : ''
  }
  
  const newsItems = [
    {
      date: t('newsItem1Date'),
      content: t('newsItem1Content'),
      link: t('newsItem1Link')
    },
    {
      date: t('newsItem2Date'),
      content: t('newsItem2Content'),
      link: t('newsItem2Link')
    },
    {
      date: t('newsItem3Date'),
      content: t('newsItem3Content'),
      link: t('newsItem3Link')
    },
    {
      date: t('newsItem4Date'),
      content: t('newsItem4Content'),
      link: t('newsItem4Link')
    },
    {
      date: t('newsItem5Date'),
      content: t('newsItem5Content'),
      link: t('newsItem5Link')
    }
  ]

  return (
    <section id="news" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* 花朵装饰 */}
      <LightFlowerDecoration />
      
      {/* 左侧花朵装饰 */}
      <div className="absolute left-4 top-1/3 transform -translate-y-1/2 opacity-30 pointer-events-none hidden lg:block">
        <img 
          src="/flower/flower-4.png" 
          alt="Flower decoration" 
          className="w-24 h-24 xl:w-32 xl:h-32 object-contain"
        />
      </div>
      
      {/* 右侧花朵装饰 */}
      <div className="absolute right-4 top-2/3 transform -translate-y-1/2 opacity-30 pointer-events-none hidden lg:block">
        <img 
          src="/flower/flower-3.png" 
          alt="Flower decoration" 
          className="w-20 h-20 xl:w-28 xl:h-28 object-contain"
        />
      </div>
      
      {/* 左下角花朵装饰 */}
      <div className="absolute left-8 bottom-16 opacity-25 pointer-events-none hidden xl:block">
        <img 
          src="/flower/flower-1.png" 
          alt="Flower decoration" 
          className="w-16 h-16 object-contain transform rotate-12"
        />
      </div>
      
      {/* 右上角花朵装饰 */}
      <div className="absolute right-12 top-20 opacity-25 pointer-events-none hidden xl:block">
        <img 
          src="/flower/flower-2.png" 
          alt="Flower decoration" 
          className="w-18 h-18 object-contain transform -rotate-6"
        />
      </div>
      
      {/* 中间左侧额外装饰 */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-20 pointer-events-none hidden 2xl:block">
        <img 
          src="/flower/flower-2.png" 
          alt="Flower decoration" 
          className="w-14 h-14 object-contain transform rotate-45"
        />
      </div>
      
      {/* 中间右侧额外装饰 */}
      <div className="absolute right-2 bottom-1/4 opacity-20 pointer-events-none hidden 2xl:block">
        <img 
          src="/flower/flower-1.png" 
          alt="Flower decoration" 
          className="w-12 h-12 object-contain transform -rotate-30"
        />
      </div>
      
      {/* 左上角小花装饰 */}
      <div className="absolute left-16 top-32 opacity-15 pointer-events-none hidden xl:block animate-pulse">
        <img 
          src="/flower/flower-4.png" 
          alt="Flower decoration" 
          className="w-10 h-10 object-contain transform rotate-90"
        />
      </div>
      
      {/* 右中间装饰 */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-18 pointer-events-none hidden xl:block">
        <img 
          src="/flower/flower-3.png" 
          alt="Flower decoration" 
          className="w-14 h-14 object-contain transform rotate-180"
        />
      </div>
      
      {/* 左中下装饰 */}
      <div className="absolute left-6 bottom-1/3 opacity-22 pointer-events-none hidden lg:block">
        <img 
          src="/flower/flower-2.png" 
          alt="Flower decoration" 
          className="w-16 h-16 object-contain transform -rotate-45"
        />
      </div>
      
      {/* 右下角装饰 */}
      <div className="absolute right-10 bottom-12 opacity-20 pointer-events-none hidden xl:block">
        <img 
          src="/flower/flower-1.png" 
          alt="Flower decoration" 
          className="w-18 h-18 object-contain transform rotate-60"
        />
      </div>
      
      {/* 超大屏幕额外装饰 */}
      <div className="absolute left-1/4 top-16 opacity-12 pointer-events-none hidden 2xl:block">
        <img 
          src="/flower/flower-3.png" 
          alt="Flower decoration" 
          className="w-8 h-8 object-contain transform rotate-135"
        />
      </div>
      
      <div className="absolute right-1/4 bottom-8 opacity-15 pointer-events-none hidden 2xl:block">
        <img 
          src="/flower/flower-4.png" 
          alt="Flower decoration" 
          className="w-10 h-10 object-contain transform -rotate-90"
        />
      </div>
      
      {/* 边缘微小装饰 */}
      <div className="absolute left-0 top-3/4 opacity-10 pointer-events-none hidden 2xl:block">
        <img 
          src="/flower/flower-2.png" 
          alt="Flower decoration" 
          className="w-6 h-6 object-contain transform rotate-270"
        />
      </div>
      
      <div className="absolute right-0 top-1/4 opacity-10 pointer-events-none hidden 2xl:block">
        <img 
          src="/flower/flower-1.png" 
          alt="Flower decoration" 
          className="w-8 h-8 object-contain transform rotate-15"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 新着情報 Section Header */}
        <ScrollAnimation animation="fadeIn" delay={100}>
          <div className="relative text-center mb-12 sm:mb-16 py-8 sm:py-12 overflow-hidden" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
            {/* 背景画像 - 只应用于标题区域 */}
            <div className="absolute inset-0">
              <div className="w-full h-full bg-[url('/news-backgroud.jpg')] bg-cover bg-center bg-no-repeat filter brightness-110"></div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white drop-shadow-2xl ${getFontClass()}`}>
                {t('newsTitle')}
              </h2>
              <p className={`text-base sm:text-lg max-w-2xl mx-auto text-gray-200 drop-shadow-lg px-4 ${getFontClass()}`}>
                {t('newsSubtitle')}
              </p>
            </div>
          </div>
        </ScrollAnimation>



        <ScrollAnimation animation="slideUp" delay={200}>
          {/* ニュースコンテンツエリア */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 relative">
              {/* 卡片花朵装饰 */}
              <CardFlowerDecoration />
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
                      <div className="flex-1 min-h-[120px] flex flex-col">
                        <p className={`text-gray-800 text-base sm:text-lg leading-relaxed ${getFontClass()} flex-1`}>
                          {item.content}
                        </p>
                        {item.link && (
                          <div className="mt-3 flex-shrink-0">
                            <a 
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-sm transition-colors duration-200"
                            >
                              {t('readMore')}
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                        )}
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

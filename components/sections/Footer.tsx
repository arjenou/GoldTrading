import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Coins, MapPin, Phone, Mail, Globe, Shield, Award, Users, Clock, ArrowRight } from "lucide-react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t, i18n } = useTranslation()
  
  // Helper function to get font class based on current language
  const getFontClass = () => {
    return i18n.language === 'ja' ? 'font-noto-sans-jp' : 
           i18n.language === 'zh' ? 'font-noto-sans-sc' : ''
  }
  
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/gload-background-1.jpg')] bg-cover bg-center bg-no-repeat filter brightness-50"></div>
      </div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* 主要内容区域 */}
          <ScrollAnimation animation="fadeIn" delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
              
              {/* 公司信息 */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="relative">
                    <img 
                      src="/gold-logo.png" 
                      alt="大阪ゴールドトレーディング" 
                      className="h-10 w-auto sm:h-12 drop-shadow-lg"
                    />
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full flex items-center justify-center">
                      <Shield className="h-1.5 w-1.5 sm:h-2 sm:w-2 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-bold text-white drop-shadow-lg ${getFontClass()}`}>{t('companyNameJP')}</h3>
                    <p className="text-accent font-medium text-sm sm:text-base">Osaka Gold Trading</p>
                  </div>
                </div>
                
                <p className={`text-gray-300 leading-relaxed mb-4 sm:mb-6 max-w-lg text-sm sm:text-base ${getFontClass()}`}>
                  {t('footerCompanyDesc')}
                </p>
                
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <Badge variant="outline" className="border-accent text-accent bg-transparent text-xs">
                    <Award className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
                    <span className={getFontClass()}>{t('footerCertified')}</span>
                  </Badge>
                  <Badge variant="outline" className="border-accent text-accent bg-transparent text-xs">
                    <Globe className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
                    <span className={getFontClass()}>{t('footerInternational')}</span>
                  </Badge>
                  <Badge variant="outline" className="border-accent text-accent bg-transparent text-xs">
                    <Shield className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
                    <span className={getFontClass()}>{t('footerSecurity')}</span>
                  </Badge>
                </div>
              </div>

              {/* サービス - 移动端隐藏 */}
              <div className="hidden lg:block">
                <h4 className={`text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white border-b border-accent/30 pb-2 ${getFontClass()}`}>
                  {t('footerServices')}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm sm:text-base">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span className={getFontClass()}>{t('footerService1')}</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm sm:text-base">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span className={getFontClass()}>{t('footerService2')}</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm sm:text-base">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span className={getFontClass()}>{t('footerService3')}</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm sm:text-base">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span className={getFontClass()}>{t('footerService4')}</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm sm:text-base">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span className={getFontClass()}>{t('footerService5')}</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm sm:text-base">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span className={getFontClass()}>{t('footerService6')}</span>
                  </li>
                </ul>
              </div>

              {/* 連絡先 - 移动端隐藏 */}
              <div className="hidden lg:block">
                <h4 className={`text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white border-b border-accent/30 pb-2 ${getFontClass()}`}>
                  {t('footerContact')}
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className={`text-gray-300 font-medium text-sm sm:text-base ${getFontClass()}`}>{t('footerHeadquarters')}</p>
                      <p className="text-gray-400 text-xs sm:text-sm">大阪府大阪市</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className={`text-gray-300 font-medium text-sm sm:text-base ${getFontClass()}`}>{t('footerPhone')}</p>
                      <p className="text-gray-400 text-xs sm:text-sm">080-3835-1709</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className={`text-gray-300 font-medium text-sm sm:text-base ${getFontClass()}`}>{t('footerEmail')}</p>
                      <p className="text-gray-400 text-xs sm:text-sm">hanpuku01@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className={`text-gray-300 font-medium text-sm sm:text-base ${getFontClass()}`}>{t('footerVisit')}</p>
                      <p className={`text-gray-400 text-xs sm:text-sm ${getFontClass()}`}>{t('footerByAppointment')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* フッター下部 */}
          <ScrollAnimation animation="fadeIn" delay={300}>
            <div className="border-t border-gray-700 pt-6 sm:pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                <div className="text-center lg:text-left">
                  <p className={`text-gray-400 text-xs sm:text-sm ${getFontClass()}`}>
                    {t('allRightsReserved')}
                  </p>
                  <p className={`text-gray-500 text-xs mt-1 ${getFontClass()}`}>
                    {t('licensedCompany')}
                  </p>
                </div>
                
                <div className="flex space-x-4 sm:space-x-6">
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                    <span className="sr-only">Privacy Policy</span>
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                    <span className="sr-only">Terms of Service</span>
                    <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                    <span className="sr-only">Support</span>
                    <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </footer>
  )
}
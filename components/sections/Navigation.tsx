"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Coins, Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "@/components/ui/LanguageSwitcher"

export default function Navigation() {
  const { t, i18n } = useTranslation()
  const [isLightText, setIsLightText] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Helper function to get font class based on current language
  const getFontClass = () => {
    return i18n.language === 'ja' ? 'font-noto-sans-jp' : 
           i18n.language === 'zh' ? 'font-noto-sans-sc' : 
           i18n.language === 'en' ? 'font-montserrat' : ''
  }

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    closeMobileMenu()
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Hero section (top of page) - use white text
      const heroEnd = windowHeight * 0.8 // 80% of viewport height
      
      // Clients section - check if we're in the clients section
      const clientsSection = document.getElementById('clients')
      const clientsStart = clientsSection ? clientsSection.offsetTop - 100 : 0
      const clientsEnd = clientsSection ? clientsSection.offsetTop + clientsSection.offsetHeight + 100 : 0
      
      // Use white text if in hero section or clients section
      const shouldUseLightText = scrollY < heroEnd || (scrollY >= clientsStart && scrollY <= clientsEnd)
      
      setIsLightText(shouldUseLightText)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo and Company Name */}
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
          >
            <img 
              src="/gold-logo.png" 
              alt="Gold Trading Osaka" 
              className="h-6 w-6 sm:h-8 sm:w-8"
            />
                          <div className="text-left">
                <div className="text-xs sm:text-xs font-medium tracking-wider" style={{ color: '#cdad7d' }}>
                  {t('companyName')}
                </div>
                <div className={`text-xs sm:text-sm font-bold drop-shadow-lg transition-colors duration-300 ${
                  isLightText ? 'text-white' : 'text-gray-800'
                } ${
                  i18n.language === 'ja' ? 'font-noto-sans-jp' : 
                  i18n.language === 'zh' ? 'font-noto-sans-sc' : ''
                }`}>
                  {t('companyNameJP')}
                </div>
              </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('company-overview')}
              className={`text-sm lg:text-base transition-colors drop-shadow-md leading-none flex items-center ${
                isLightText 
                  ? 'text-white/90 hover:text-white' 
                  : 'text-gray-800/90 hover:text-gray-900'
              } ${
                i18n.language === 'ja' ? 'font-noto-sans-jp' : 
                i18n.language === 'zh' ? 'font-noto-sans-sc' : ''
              }`}
            >
              {t('home')}
            </button>
            <button 
              onClick={() => scrollToSection('news')}
              className={`text-sm lg:text-base transition-colors drop-shadow-md leading-none flex items-center ${
                isLightText 
                  ? 'text-white/90 hover:text-white' 
                  : 'text-gray-800/90 hover:text-gray-900'
              } ${getFontClass()}`}
            >
              {t('news')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`text-sm lg:text-base transition-colors drop-shadow-md leading-none flex items-center ${
                isLightText 
                  ? 'text-white/90 hover:text-white' 
                  : 'text-gray-800/90 hover:text-gray-900'
              } ${getFontClass()}`}
            >
              {t('services')}
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className={`text-sm lg:text-base transition-colors drop-shadow-md leading-none flex items-center ${
                isLightText 
                  ? 'text-white/90 hover:text-white' 
                  : 'text-gray-800/90 hover:text-gray-900'
              } ${getFontClass()}`}
            >
              {t('clients')}
            </button>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher isLightText={isLightText} />
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('contact')}
              className={`transition-all duration-300 backdrop-blur-sm shadow-lg ${
                isLightText
                  ? 'border-white/50 text-white hover:bg-white hover:text-black bg-transparent'
                  : 'border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-white bg-white/80'
              }`}
            >
              <span className={`text-xs lg:text-sm ${getFontClass()}`}>{t('contact')}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-all duration-300 ${
                isLightText ? 'text-white' : 'text-gray-800'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/20">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('company-overview')}
                className={`block text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors text-left w-full ${getFontClass()}`}
              >
                {t('home')}
              </button>
              <button 
                onClick={() => scrollToSection('news')}
                className={`block text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors text-left w-full ${getFontClass()}`}
              >
                {t('news')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`block text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors text-left w-full ${getFontClass()}`}
              >
                {t('services')}
            </button>
              <button 
                onClick={() => scrollToSection('clients')}
                className={`block text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors text-left w-full ${getFontClass()}`}
              >
                {t('clients')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`block text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors text-left w-full ${getFontClass()}`}
              >
                {t('contact')}
              </button>
              {/* Mobile Language Switcher */}
              <div className="pt-2 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium text-gray-700 ${getFontClass()}`}>{t('language')}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => {
                      i18n.changeLanguage('ja')
                      closeMobileMenu()
                    }}
                    className={`px-2 py-2 text-xs rounded-md border transition-colors ${
                      i18n.language === 'ja'
                        ? 'bg-accent text-white border-accent'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    } ${getFontClass()}`}
                  >
                    🇯🇵 {t('japanese')}
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage('zh')
                      closeMobileMenu()
                    }}
                    className={`px-2 py-2 text-xs rounded-md border transition-colors ${
                      i18n.language === 'zh'
                        ? 'bg-accent text-white border-accent'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    } ${getFontClass()}`}
                  >
                    🇨🇳 {t('chinese')}
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage('en')
                      closeMobileMenu()
                    }}
                    className={`px-2 py-2 text-xs rounded-md border transition-colors ${
                      i18n.language === 'en'
                        ? 'bg-accent text-white border-accent'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    🇺🇸 {t('english')}
                  </button>
                </div>
              </div>
              
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection('contact')}
                  className="w-full border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-white bg-white/80"
                >
                  <span className={`text-sm ${getFontClass()}`}>{t('consultant')}</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

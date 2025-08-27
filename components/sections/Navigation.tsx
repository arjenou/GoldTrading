"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Coins, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isLightText, setIsLightText] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
                GOLD TRADING OSAKA
              </div>
              <div className={`text-xs sm:text-sm font-bold drop-shadow-lg transition-colors duration-300 ${
                isLightText ? 'text-white' : 'text-gray-800'
              }`}>
                大阪ゴールドトレーディング
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
              }`}
            >
              ホーム
            </button>
            <button 
              onClick={() => scrollToSection('news')}
              className={`text-sm lg:text-base transition-colors drop-shadow-md leading-none flex items-center ${
                isLightText 
                  ? 'text-white/90 hover:text-white' 
                  : 'text-gray-800/90 hover:text-gray-900'
              }`}
            >
              ニュース
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`text-sm lg:text-base transition-colors drop-shadow-md leading-none flex items-center ${
                isLightText 
                  ? 'text-white/90 hover:text-white' 
                  : 'text-gray-800/90 hover:text-gray-900'
              }`}
            >
              事業サービス
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className={`text-sm lg:text-base transition-colors drop-shadow-md leading-none flex items-center ${
                isLightText 
                  ? 'text-white/90 hover:text-white' 
                  : 'text-gray-800/90 hover:text-gray-900'
              }`}
            >
              お客様・パートナー
            </button>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
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
              <span className="text-xs lg:text-sm">お問い合わせ</span>
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
                className="block text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors text-left w-full"
              >
                ホーム
              </button>
              <button 
                onClick={() => scrollToSection('news')}
                className="block text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors text-left w-full"
              >
                ニュース
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors text-left w-full"
              >
                事業サービス
              </button>
              <button 
                onClick={() => scrollToSection('clients')}
                className="block text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors text-left w-full"
              >
                お客様・パートナー
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors text-left w-full"
              >
                お問い合わせ
              </button>
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection('contact')}
                  className="w-full border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-white bg-white/80"
                >
                  <span className="text-sm">コンサルタントに相談</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Coins, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isLightText, setIsLightText] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
          <div className="flex items-center space-x-2 sm:space-x-3">
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
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#services" className={`text-sm lg:text-base transition-colors drop-shadow-md leading-none flex items-center ${
              isLightText 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-800/90 hover:text-gray-900'
            }`}>
              事業サービス
            </a>
            <a href="#philosophy" className={`text-sm lg:text-base transition-colors drop-shadow-md leading-none flex items-center ${
              isLightText 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-800/90 hover:text-gray-900'
            }`}>
              企業理念
            </a>
            <a href="#clients" className={`text-sm lg:text-base transition-colors drop-shadow-md leading-none flex items-center ${
              isLightText 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-800/90 hover:text-gray-900'
            }`}>
              お客様・パートナー
            </a>
            <a href="#contact" className={`text-sm lg:text-base transition-colors drop-shadow-md leading-none flex items-center ${
              isLightText 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-800/90 hover:text-gray-900'
            }`}>
              お問い合わせ
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="sm"
              className={`transition-all duration-300 backdrop-blur-sm shadow-lg ${
                isLightText
                  ? 'border-white/50 text-white hover:bg-white hover:text-black bg-transparent'
                  : 'border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-white bg-white/80'
              }`}
            >
              <span className="text-xs lg:text-sm">コンサルタントに相談</span>
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
              <a 
                href="#services" 
                onClick={closeMobileMenu}
                className="block text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
              >
                事業サービス
              </a>
              <a 
                href="#philosophy" 
                onClick={closeMobileMenu}
                className="block text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
              >
                企業理念
              </a>
              <a 
                href="#clients" 
                onClick={closeMobileMenu}
                className="block text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
              >
                お客様・パートナー
              </a>
              <a 
                href="#contact" 
                onClick={closeMobileMenu}
                className="block text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
              >
                お問い合わせ
              </a>
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
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

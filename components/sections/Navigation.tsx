"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Coins } from "lucide-react"

export default function Navigation() {
  const [isLightText, setIsLightText] = useState(true)

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/gold-logo.png" 
              alt="Gold Trading Osaka" 
              className="h-8 w-8"
            />
            <div className="text-left">
              <div className="text-xs font-medium tracking-wider" style={{ color: '#cdad7d' }}>
                GOLD TRADING OSAKA
              </div>
              <div className={`text-sm font-bold drop-shadow-lg transition-colors duration-300 ${
                isLightText ? 'text-white' : 'text-gray-800'
              }`}>
                大阪ゴールドトレーディング
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className={`transition-colors drop-shadow-md ${
              isLightText 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-800/90 hover:text-gray-900'
            }`}>
              事業サービス
            </a>
            <a href="#philosophy" className={`transition-colors drop-shadow-md ${
              isLightText 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-800/90 hover:text-gray-900'
            }`}>
              企業理念
            </a>
            <a href="#clients" className={`transition-colors drop-shadow-md ${
              isLightText 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-800/90 hover:text-gray-900'
            }`}>
              お客様・パートナー
            </a>
            <a href="#contact" className={`transition-colors drop-shadow-md ${
              isLightText 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-800/90 hover:text-gray-900'
            }`}>
              お問い合わせ
            </a>
          </div>
          <Button
            variant="outline"
            className={`transition-all duration-300 backdrop-blur-sm shadow-lg ${
              isLightText
                ? 'border-white/50 text-white hover:bg-white hover:text-black bg-transparent'
                : 'border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-white bg-white/80'
            }`}
          >
            コンサルタントに相談
          </Button>
        </div>
      </div>
    </nav>
  )
}

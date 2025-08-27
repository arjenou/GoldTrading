"use client"

import React, { useEffect, useRef } from "react"

interface ParallaxBackgroundProps {
  children: React.ReactNode
  backgroundImage: string
  speed?: number
  className?: string
  overlay?: boolean
  overlayOpacity?: number
  tileSize?: string
}

export default function ParallaxBackground({
  children,
  backgroundImage,
  speed = 0.5,
  className = "",
  overlay = true,
  overlayOpacity = 0.4,
  tileSize = "400px"
}: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!backgroundRef.current) return
          
          const scrolled = window.pageYOffset
          const rate = scrolled * speed
          
          backgroundRef.current.style.transform = `translateY(${rate}px)`
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [speed])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full ${className}`}
      style={{ minHeight: '100%' }}
    >
      {/* 视差背景图 */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundRepeat: 'repeat',
          backgroundSize: tileSize,
          backgroundPosition: 'center center',
          height: '120%', // 稍微增加高度以确保滚动时有足够的背景
          width: '100%',
          position: 'absolute',
          zIndex: 0,
          top: 0,
          left: 0,
          willChange: 'transform' // 优化性能
        }}
      />
      
      {/* 覆盖层蒙版 */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ 
            opacity: overlayOpacity,
            height: '100%',
            width: '100%',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            position: 'absolute',
            zIndex: 1
          }}
          aria-hidden
        />
      )}
      
      {/* 内容层 */}
      <div className="relative z-2">
        {children}
      </div>
    </div>
  )
}

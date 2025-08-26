"use client"

import React, { useEffect, useRef, useState } from "react"

interface ParallaxBackgroundProps {
  children: React.ReactNode
  backgroundImage: string
  speed?: number
  className?: string
  overlay?: boolean
  overlayOpacity?: number
  tileSize?: string // 拼接瓦片大小
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
  const [offsetY, setOffsetY] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
        
        if (isVisible) {
          // 计算视差偏移
          const yPos = -(scrolled * speed)
          setOffsetY(yPos)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // 初始调用

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div
      ref={elementRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* 视差背景图 - 拼接模式 */}
      <div
        className="absolute w-full h-full"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundRepeat: 'repeat',
          backgroundSize: tileSize, // 可配置的拼接瓦片大小
          backgroundPosition: 'top left',
          transform: `translate3d(0, ${offsetY}px, 0)`,
          willChange: 'transform',
          height: '130%', // 增加背景高度，确保完全覆盖
          top: '-15%',
          left: '0',
          right: '0',
          bottom: '-15%'
        }}
      />
      
      {/* 覆盖层蒙版 */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: overlayOpacity }}
          aria-hidden
        />
      )}
      
      {/* 内容层 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

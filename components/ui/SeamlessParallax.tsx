"use client"

import React, { useEffect, useRef, useState } from "react"

interface SeamlessParallaxProps {
  children: React.ReactNode
  backgroundImage: string
  speed?: number
  className?: string
  overlay?: boolean
  overlayOpacity?: number
  tileSize?: string
}

export default function SeamlessParallax({
  children,
  backgroundImage,
  speed = 0.5,
  className = "",
  overlay = true,
  overlayOpacity = 0.4,
  tileSize = "400px"
}: SeamlessParallaxProps) {
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
      style={{ minHeight: '100%' }}
    >
      {/* 无缝拼接背景图 */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundRepeat: 'repeat',
          backgroundSize: tileSize,
          backgroundPosition: `0px ${offsetY * 0.3}px`, // 调整背景位置让拼接更自然
          willChange: 'transform',
          minHeight: '100%'
        }}
      />
      
      {/* 额外的背景层确保无缝覆盖 */}
      <div
        className="absolute w-full"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundRepeat: 'repeat',
          backgroundSize: tileSize,
          backgroundPosition: `0px ${(offsetY * 0.3) - parseInt(tileSize)}px`,
          height: tileSize,
          top: '100%',
          willChange: 'transform'
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
      <div className="relative z-10 min-h-full">
        {children}
      </div>
    </div>
  )
}

"use client"

import React, { useEffect, useRef, useState } from "react"

interface AdvancedParallaxProps {
  children: React.ReactNode
  backgroundImage: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
  overlay?: boolean
  overlayOpacity?: number
  tileSize?: string // 拼接瓦片大小
}

export default function AdvancedParallax({
  children,
  backgroundImage,
  speed = 0.5,
  direction = "up",
  className = "",
  overlay = true,
  overlayOpacity = 0.4,
  tileSize = "500px"
}: AdvancedParallaxProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
        
        if (isVisible) {
          let x = 0
          let y = 0
          
          switch (direction) {
            case "up":
              y = -(scrolled * speed)
              break
            case "down":
              y = scrolled * speed
              break
            case "left":
              x = -(scrolled * speed * 0.5)
              break
            case "right":
              x = scrolled * speed * 0.5
              break
          }
          
          setOffset({ x, y })
        }
      }
    }

    // 使用 requestAnimationFrame 进行性能优化
    let ticking = false
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", optimizedScroll, { passive: true })
    handleScroll() // 初始调用

    return () => window.removeEventListener("scroll", optimizedScroll)
  }, [speed, direction])

  return (
    <div
      ref={elementRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* 高级视差背景图 - 拼接模式 */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundRepeat: 'repeat',
          backgroundSize: tileSize, // 可配置的拼接瓦片大小
          backgroundPosition: 'top left',
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          willChange: 'transform',
          height: '120%',
          width: '120%',
          top: '-10%',
          left: '-10%',
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* 动态覆盖层蒙版 */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 pointer-events-none"
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

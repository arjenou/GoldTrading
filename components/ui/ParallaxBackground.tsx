"use client"

import React from "react"

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
  return (
    <div
      className={`relative overflow-hidden w-full ${className}`}
      style={{ minHeight: '100%' }}
    >
      {/* 固定背景图 - 拼接模式 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundRepeat: 'repeat',
          backgroundSize: tileSize, // 可配置的拼接瓦片大小
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed', // 固定背景
          height: '100%',
          width: '100%',
          position: 'absolute',
          zIndex: 0
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

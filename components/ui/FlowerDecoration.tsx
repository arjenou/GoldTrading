import React from "react"
import Image from "next/image"

interface FlowerDecorationProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right"
  size?: "small" | "medium" | "large"
  opacity?: number
  rotation?: number
  className?: string
}

const flowerImages = [
  "/flower/flower-1.png",
  "/flower/flower-2.png", 
  "/flower/flower-3.png",
  "/flower/flower-4.png"
]

const sizeClasses = {
  small: "w-8 h-8 sm:w-12 sm:h-12",
  medium: "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
  large: "w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
}

const positionClasses = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4", 
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "center-left": "top-1/2 left-4 -translate-y-1/2",
  "center-right": "top-1/2 right-4 -translate-y-1/2"
}

export default function FlowerDecoration({
  position = "top-right",
  size = "medium",
  opacity = 0.6,
  rotation = 0,
  className = ""
}: FlowerDecorationProps) {
  const randomFlower = flowerImages[Math.floor(Math.random() * flowerImages.length)]
  
  return (
    <div 
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none z-10 ${className}`}
      style={{
        opacity,
        transform: `rotate(${rotation}deg)`,
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
      }}
    >
      <Image
        src={randomFlower}
        alt="Decorative flower"
        fill
        className="object-contain"
        sizes="(max-width: 640px) 32px, (max-width: 1024px) 64px, 128px"
      />
    </div>
  )
}

// 批量装饰组件
export function FlowerDecorationGroup() {
  return (
    <>
      {/* 左上角装饰 */}
      <FlowerDecoration 
        position="top-left" 
        size="small" 
        opacity={0.4} 
        rotation={-15}
      />
      
      {/* 右上角装饰 */}
      <FlowerDecoration 
        position="top-right" 
        size="medium" 
        opacity={0.5} 
        rotation={25}
      />
      
      {/* 左下角装饰 */}
      <FlowerDecoration 
        position="bottom-left" 
        size="medium" 
        opacity={0.4} 
        rotation={-30}
      />
      
      {/* 右下角装饰 */}
      <FlowerDecoration 
        position="bottom-right" 
        size="small" 
        opacity={0.5} 
        rotation={45}
      />
      
      {/* 中间左侧装饰 */}
      <FlowerDecoration 
        position="center-left" 
        size="large" 
        opacity={0.3} 
        rotation={-10}
      />
      
      {/* 中间右侧装饰 */}
      <FlowerDecoration 
        position="center-right" 
        size="large" 
        opacity={0.3} 
        rotation={20}
      />
    </>
  )
}

// 轻量装饰组件（只添加少量装饰）
export function LightFlowerDecoration() {
  return (
    <>
      <FlowerDecoration 
        position="top-right" 
        size="small" 
        opacity={0.3} 
        rotation={15}
      />
      <FlowerDecoration 
        position="bottom-left" 
        size="small" 
        opacity={0.3} 
        rotation={-20}
      />
    </>
  )
}

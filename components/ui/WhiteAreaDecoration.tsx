import React from "react"
import Image from "next/image"

interface WhiteAreaDecorationProps {
  variant?: "card" | "content" | "section"
  className?: string
}

const flowerImages = [
  "/flower/flower-1.png",
  "/flower/flower-2.png", 
  "/flower/flower-3.png",
  "/flower/flower-4.png"
]

// 卡片装饰
function CardDecoration() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* 左上角装饰 */}
      <div className="absolute top-2 left-2 w-6 h-6 sm:w-8 sm:h-8">
        <Image
          src={flowerImages[0]}
          alt="Card decoration"
          fill
          className="object-contain"
          style={{ opacity: 0.3, transform: 'rotate(-15deg)' }}
          sizes="(max-width: 640px) 24px, 32px"
        />
      </div>
      
      {/* 右下角装饰 */}
      <div className="absolute bottom-2 right-2 w-6 h-6 sm:w-8 sm:h-8">
        <Image
          src={flowerImages[1]}
          alt="Card decoration"
          fill
          className="object-contain"
          style={{ opacity: 0.3, transform: 'rotate(25deg)' }}
          sizes="(max-width: 640px) 24px, 32px"
        />
      </div>
    </div>
  )
}

// 内容区域装饰
function ContentDecoration() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* 右上角装饰 */}
      <div className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10">
        <Image
          src={flowerImages[2]}
          alt="Content decoration"
          fill
          className="object-contain"
          style={{ opacity: 0.25, transform: 'rotate(30deg)' }}
          sizes="(max-width: 640px) 32px, 40px"
        />
      </div>
      
      {/* 左下角装饰 */}
      <div className="absolute bottom-4 left-4 w-8 h-8 sm:w-10 sm:h-10">
        <Image
          src={flowerImages[3]}
          alt="Content decoration"
          fill
          className="object-contain"
          style={{ opacity: 0.25, transform: 'rotate(-30deg)' }}
          sizes="(max-width: 640px) 32px, 40px"
        />
      </div>
    </div>
  )
}

// 章节装饰
function SectionDecoration() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* 左上角装饰 */}
      <div className="absolute top-6 left-6 w-8 h-8 sm:w-12 sm:h-12">
        <Image
          src={flowerImages[0]}
          alt="Section decoration"
          fill
          className="object-contain"
          style={{ opacity: 0.2, transform: 'rotate(-20deg)' }}
          sizes="(max-width: 640px) 32px, 48px"
        />
      </div>
      
      {/* 右上角装饰 */}
      <div className="absolute top-6 right-6 w-8 h-8 sm:w-12 sm:h-12">
        <Image
          src={flowerImages[1]}
          alt="Section decoration"
          fill
          className="object-contain"
          style={{ opacity: 0.2, transform: 'rotate(20deg)' }}
          sizes="(max-width: 640px) 32px, 48px"
        />
      </div>
      
      {/* 左下角装饰 */}
      <div className="absolute bottom-6 left-6 w-8 h-8 sm:w-12 sm:h-12">
        <Image
          src={flowerImages[2]}
          alt="Section decoration"
          fill
          className="object-contain"
          style={{ opacity: 0.2, transform: 'rotate(-40deg)' }}
          sizes="(max-width: 640px) 32px, 48px"
        />
      </div>
      
      {/* 右下角装饰 */}
      <div className="absolute bottom-6 right-6 w-8 h-8 sm:w-12 sm:h-12">
        <Image
          src={flowerImages[3]}
          alt="Section decoration"
          fill
          className="object-contain"
          style={{ opacity: 0.2, transform: 'rotate(40deg)' }}
          sizes="(max-width: 640px) 32px, 48px"
        />
      </div>
    </div>
  )
}

export default function WhiteAreaDecoration({
  variant = "content",
  className = ""
}: WhiteAreaDecorationProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {variant === "card" && <CardDecoration />}
      {variant === "content" && <ContentDecoration />}
      {variant === "section" && <SectionDecoration />}
    </div>
  )
}

// 预定义的装饰组件
export function CardFlowerDecoration() {
  return <WhiteAreaDecoration variant="card" />
}

export function ContentFlowerDecoration() {
  return <WhiteAreaDecoration variant="content" />
}

export function SectionFlowerDecoration() {
  return <WhiteAreaDecoration variant="section" />
}

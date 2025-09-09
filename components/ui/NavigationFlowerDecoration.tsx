"use client"

import React, { useEffect, useState } from 'react'

interface FlowerElement {
  id: number
  src: string
  left: string
  top: string
  size: string
  opacity: number
}

export default function NavigationFlowerDecoration() {
  const [flowers, setFlowers] = useState<FlowerElement[]>([])

  useEffect(() => {
    // 花朵图片列表
    const flowerImages = [
      '/flower/flower-1.png',
      '/flower/flower-2.png', 
      '/flower/flower-3.png',
      '/flower/flower-4.png'
    ]

    // 生成固定位置的花朵元素
    const generateFlowers = () => {
      // 根据屏幕大小调整花朵
      const isMobile = window.innerWidth < 768
      
      const fixedPositions = isMobile 
        ? [
            { left: '15%', top: '20%' },
            { left: '75%', top: '30%' },
            { left: '45%', top: '15%' }
          ]
        : [
            { left: '12%', top: '25%' },
            { left: '25%', top: '15%' },
            { left: '75%', top: '20%' },
            { left: '88%', top: '30%' },
            { left: '50%', top: '10%' }
          ]
      
      const newFlowers: FlowerElement[] = fixedPositions.map((position, i) => ({
        id: i,
        src: flowerImages[i % flowerImages.length], // 循环使用花朵图片
        left: position.left,
        top: position.top,
        size: isMobile ? '16px' : '24px', // 固定尺寸，更显眼
        opacity: isMobile ? 0.6 : 0.7 // 进一步提高透明度，更显眼
      }))

      setFlowers(newFlowers)
    }

    generateFlowers()

    // 监听窗口大小变化，重新生成花朵
    const handleResize = () => {
      generateFlowers()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute"
          style={{
            left: flower.left,
            top: flower.top,
          }}
        >
          <img
            src={flower.src}
            alt=""
            className="select-none"
            style={{
              width: flower.size,
              height: flower.size,
              opacity: flower.opacity,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            }}
            draggable={false}
          />
        </div>
      ))}
    </div>
  )
}

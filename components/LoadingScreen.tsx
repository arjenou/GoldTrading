"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isSwinging, setIsSwinging] = useState(true)

  useEffect(() => {
    // Start swinging animation
    const swingTimer = setTimeout(() => {
      setIsSwinging(false)
    }, 2000) // Swing for 2 seconds

    // Hide loading screen after swing completes
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
      onLoadingComplete()
    }, 2500) // Total duration: 2.5 seconds

    return () => {
      clearTimeout(swingTimer)
      clearTimeout(hideTimer)
    }
  }, [onLoadingComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <style jsx>{`
        @keyframes swing3d {
          0%, 100% {
            transform: rotateY(-20deg) rotateX(10deg);
          }
          25% {
            transform: rotateY(20deg) rotateX(-10deg);
          }
          50% {
            transform: rotateY(20deg) rotateX(10deg);
          }
          75% {
            transform: rotateY(-20deg) rotateX(-10deg);
          }
        }
        
        .logo-container {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .swing-animation {
          animation: swing3d 1.5s ease-in-out infinite;
          transform-style: preserve-3d;
          display: block;
        }
      `}</style>
      <div className="logo-container">
        <img
          src="/gold-logo.png"
          alt="Gold Trading Logo"
          width={200}
          height={200}
          className={`transition-all duration-1000 ${
            isSwinging 
              ? "swing-animation" 
              : "scale-110 opacity-0"
          }`}
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>
    </div>
  )
}

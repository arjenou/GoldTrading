"use client"

import React, { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideInLeft" | "slideInRight" | "scaleIn"
  delay?: number
  duration?: number
}

export default function ScrollAnimation({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
  duration = 600
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px -50px 0px"
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out"
    
    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return `${baseClasses} opacity-0`
        case "slideUp":
          return `${baseClasses} opacity-0 translate-y-4`
        case "slideInLeft":
          return `${baseClasses} opacity-0 -translate-x-4`
        case "slideInRight":
          return `${baseClasses} opacity-0 translate-x-4`
        case "scaleIn":
          return `${baseClasses} opacity-0 scale-98`
        default:
          return `${baseClasses} opacity-0`
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  )
}

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
  tileSize = "400px",
}: ParallaxBackgroundProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const bg = bgRef.current
    if (!wrap || !bg) return
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return

    let raf = 0
    let ticking = false
    let offsetTop = wrap.getBoundingClientRect().top + window.scrollY
    const dpr = window.devicePixelRatio || 1

    // 目标/当前位置：加一点点平滑，避免视觉抖动
    let targetY = 0
    let currentY = 0
    const SMOOTH = 0.18 // 0=无平滑，0.15~0.25较自然

    const roundToDpr = (v: number) => Math.round(v * dpr) / dpr

    const run = () => {
      raf = 0
      // 低通滤波
      currentY += (targetY - currentY) * SMOOTH
      bg.style.transform = `translate3d(0, ${currentY}px, 0)`
      // 还没追上就继续 raf
      if (Math.abs(targetY - currentY) > 0.1) raf = requestAnimationFrame(run)
      else ticking = false
    }

    const updateTarget = () => {
      const scrolled = window.scrollY - offsetTop
      targetY = roundToDpr(scrolled * speed)
      if (!ticking) {
        ticking = true
        raf = requestAnimationFrame(run)
      }
    }

    const recalc = () => {
      offsetTop = wrap.getBoundingClientRect().top + window.scrollY
      updateTarget()
    }

    // 使其成为合成层，减少闪烁
    Object.assign(bg.style, {
      willChange: "transform",
      transform: "translate3d(0,0,0)",
      backfaceVisibility: "hidden",
      contain: "paint", // 隔离绘制区域
    } as CSSStyleDeclaration)

    updateTarget()
    window.addEventListener("scroll", updateTarget, { passive: true })
    window.addEventListener("resize", recalc)
    window.addEventListener("orientationchange", recalc)

    return () => {
      window.removeEventListener("scroll", updateTarget)
      window.removeEventListener("resize", recalc)
      window.removeEventListener("orientationchange", recalc)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [speed])

  return (
    <div ref={wrapRef} className={`relative overflow-hidden w-full ${className}`} style={{ minHeight: "100%" }}>
      <div
        ref={bgRef}
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundRepeat: "repeat",
          backgroundSize: tileSize,
          backgroundPosition: "center center",
        }}
      />
      {overlay && (
        <div
          aria-hidden
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
        />
      )}
      <div className="relative z-20">{children}</div>
    </div>
  )
}

import React from "react"
import { Button } from "@/components/ui/button"
import { Coins } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Coins className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-foreground">大阪ゴールドトレーディング</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
              事業サービス
            </a>
            <a href="#philosophy" className="text-muted-foreground hover:text-accent transition-colors">
              企業理念
            </a>
            <a href="#clients" className="text-muted-foreground hover:text-accent transition-colors">
              お客様・パートナー
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
              お問い合わせ
            </a>
          </div>
          <Button
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            コンサルタントに相談
          </Button>
        </div>
      </div>
    </nav>
  )
}

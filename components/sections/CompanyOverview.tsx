import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Diamond, Coins, Shield } from "lucide-react"

export default function CompanyOverview() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">大阪ゴールドトレーディング</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            大阪に本社を置き、18Kゴールドジュエリーとダイヤモンドの大口取引を専門としています。信頼できる供給源を提供するだけでなく、
            金地金代理、鑑定サポート、収集品流通、ビジネス社交スペースなどの付加価値サービスをお客様にお届けします。
            国際化と新経済構造の中で、お客様の信頼できる長期パートナーとなることを目指しています。
          </p>
        </div>

      </div>
    </section>
  )
}

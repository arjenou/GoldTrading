import React from "react"
import { Button } from "@/components/ui/button"
import { Coins } from "lucide-react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Coins className="h-8 w-8 text-accent" />
                <span className="text-xl font-bold">大阪ゴールドトレーディング</span>
              </div>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                阪福商事合同会社
                <br />
                18Kゴールドジュエリーとダイヤモンドの専門取引企業
                <br />
                投資・収集・コンサルティング・社交を一体化したサービスを提供
              </p>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                事業詳細
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">サービス</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>18Kゴールドジュエリー取引</li>
                <li>ダイヤモンド大口卸売</li>
                <li>認証金地金代理</li>
                <li>貴金属・宝石鑑定</li>
                <li>投資コンサルティング</li>
                <li>高級収集品流通</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">連絡先</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>本社：大阪</li>
                <li>電話相談：平日 9:00-18:00</li>
                <li>オンライン対応：年中無休</li>
                <li>現地訪問：要予約</li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeIn" delay={200}>
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2024 阪福商事合同会社・大阪ゴールドトレーディング. All rights reserved.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  )
}
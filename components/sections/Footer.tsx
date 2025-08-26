import React from "react"
import { Button } from "@/components/ui/button"
import { Coins } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coins className="h-6 w-6" />
              <span className="text-lg font-semibold">大阪ゴールドトレーディング</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              阪福商事合同会社
              <br />
              法人番号：6120003029168
              <br />
              資本金：1000万円
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">連絡先情報</h4>
            <p className="text-primary-foreground/80 text-sm">
              〒541-0054
              <br />
              大阪府大阪市中央区南本町３丁目２番１１号２階２ＦＢ号室
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">ビジネス相談</h4>
            <Button
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              コンサルタントに今すぐ相談
            </Button>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">© 2024 阪福商事合同会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

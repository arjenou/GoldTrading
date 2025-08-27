import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Recycle, 
  Scale, 
  Heart, 
  Coins, 
  TrendingUp, 
  Globe, 
  Users,
  Diamond,
  Award,
  Target
} from "lucide-react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Visual Elements */}
          <ScrollAnimation animation="slideInLeft" delay={100}>
            <div className="space-y-8">
              {/* 左侧视觉元素 - 使用金色渐变 */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#D0A900] to-[#FFF9E6] rounded-full mb-6 shadow-lg">
                  <Diamond className="h-12 w-12 text-white drop-shadow-lg" />
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D0A900' }}>持続可能な未来</h2>
                <p className="text-muted-foreground">
                  貴金属取引を通じて、環境と社会に貢献する持続可能なビジネスモデルを実現
                </p>
              </div>
              
              {/* 三个核心价值图标 - 使用金色主题 */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D0A900] to-[#FFF9E6] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Recycle className="h-8 w-8 text-white drop-shadow-sm" />
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#D0A900' }}>環境配慮</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D0A900] to-[#FFF9E6] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Scale className="h-8 w-8 text-white drop-shadow-sm" />
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#D0A900' }}>信頼性</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D0A900] to-[#FFF9E6] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Heart className="h-8 w-8 text-white drop-shadow-sm" />
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#D0A900' }}>価値創造</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Content - Text Content */}
          <ScrollAnimation animation="slideInRight" delay={200}>
            <div className="space-y-8">
              <div>
                <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-6">企業理念・ビジョン</h2>
              </div>
              
              {/* Value Commitments */}
              <div className="space-y-6">
                
                {/* 三个承诺点 - 水平排列 */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Recycle className="h-4 w-4 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">環境責任</h4>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Scale className="h-4 w-4 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">コンプライアンス・透明性</h4>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="h-4 w-4 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">生態系構築</h4>
                  </div>
                </div>
                
                {/* 详细承诺描述 - 带边框的卡片 */}
                <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-accent/5 to-transparent">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      貴金属・宝石のリサイクル利用を推進し、環境負荷を軽減、持続可能な発展に貢献。コンプライアンスと透明性の原則を堅持し、長期信頼関係を構築、すべての取引の信頼性を確保。持続可能なビジネス・社交生態系を構築し、お客様により多くの価値と機会を創造。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
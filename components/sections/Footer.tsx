import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Coins, MapPin, Phone, Mail, Globe, Shield, Award, Users, Clock, ArrowRight } from "lucide-react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/gload-background-1.jpg')] bg-cover bg-center bg-no-repeat filter brightness-50"></div>
      </div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* 主要内容区域 */}
          <ScrollAnimation animation="fadeIn" delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 mb-16">
              
              {/* 公司信息 */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative">
                    <img 
                      src="/gold-logo.png" 
                      alt="大阪ゴールドトレーディング" 
                      className="h-12 w-auto drop-shadow-lg"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                      <Shield className="h-2 w-2 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">大阪ゴールドトレーディング</h3>
                    <p className="text-accent font-medium">Osaka Gold Trading</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 max-w-lg">
                  阪福商事合同会社として、18Kゴールドジュエリーとダイヤモンドの専門取引企業。
                  国際的なサプライチェーンと専門的な実行力で、日本と世界を結ぶ信頼できるパートナーです。
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <Badge variant="outline" className="border-accent text-accent bg-transparent">
                    <Award className="h-3 w-3 mr-1" />
                    認証済み
                  </Badge>
                  <Badge variant="outline" className="border-accent text-accent bg-transparent">
                    <Globe className="h-3 w-3 mr-1" />
                    国際取引
                  </Badge>
                  <Badge variant="outline" className="border-accent text-accent bg-transparent">
                    <Shield className="h-3 w-3 mr-1" />
                    セキュリティ
                  </Badge>
                </div>
              </div>

              {/* サービス */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white border-b border-accent/30 pb-2">
                  サービス
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors cursor-pointer">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span>18Kゴールドジュエリー取引</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors cursor-pointer">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span>ダイヤモンド大口卸売</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors cursor-pointer">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span>認証金地金代理</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors cursor-pointer">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span>貴金属・宝石鑑定</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors cursor-pointer">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span>投資コンサルティング</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors cursor-pointer">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span>高級収集品流通</span>
                  </li>
                </ul>
              </div>

              {/* 連絡先 */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white border-b border-accent/30 pb-2">
                  連絡先
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 font-medium">本社所在地</p>
                      <p className="text-gray-400 text-sm">大阪府大阪市</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 font-medium">電話相談</p>
                      <p className="text-gray-400 text-sm">平日 9:00-18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 font-medium">メール対応</p>
                      <p className="text-gray-400 text-sm">24時間受付</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 font-medium">現地訪問</p>
                      <p className="text-gray-400 text-sm">要予約</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* フッター下部 */}
          <ScrollAnimation animation="fadeIn" delay={300}>
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                <div className="text-center lg:text-left">
                  <p className="text-gray-400 text-sm">
                    © 2024 阪福商事合同会社・大阪ゴールドトレーディング. All rights reserved.
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Licensed and regulated precious metals trading company
                  </p>
                </div>
                
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                    <span className="sr-only">Privacy Policy</span>
                    <Shield className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                    <span className="sr-only">Terms of Service</span>
                    <Award className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                    <span className="sr-only">Support</span>
                    <Users className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </footer>
  )
}
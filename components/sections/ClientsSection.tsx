import React from "react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import ParallaxBackground from "@/components/ui/ParallaxBackground"
import Image from "next/image"
import {
  ArrowRight,
  Factory,
  Store,
  Globe,
  Crown,
  Building2,
  Briefcase,
} from "lucide-react"

export default function ClientsSection() {
  return (
    <ParallaxBackground
      backgroundImage="/back-03.jpg"
      speed={0.22}
      className="py-12 sm:py-16 lg:py-20 relative"
      overlay={true}
      overlayOpacity={0.7}
      tileSize="500px"
    >
      <div id="clients" className="absolute top-0 left-0 invisible" aria-hidden />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" delay={100}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg" style={{ color: '#c8ae83' }} >お客様・パートナー</h2>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto drop-shadow-md px-4" style={{ color: '#c8ae83' }} >
              お客様が私たちを選ぶ理由は、安定した供給源と専門的な実行力だけでなく、
              取引・鑑定・コンサルティング・社交を網羅する包括的なサポートを提供できるからです
            </p>
          </div>
        </ScrollAnimation>

        {/* Service Targets */}
        <ScrollAnimation animation="slideUp" delay={200}>
          <div className="mb-12 sm:mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* 精錬業者 */}
              <div className="group relative cursor-pointer">
                <div className="relative px-4 sm:px-8">
                  <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/service-pattern/jinglian.png"
                      alt="精錬業者"
                      width={133}
                      height={67}
                      className="w-full h-full object-cover object-bottom transition-all duration-300 group-hover:brightness-75 group-hover:opacity-80"
                    />
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 -mt-6 sm:-mt-8 relative z-10 mx-2 group-hover:bg-yellow-50/90" style={{ border: '1px solid #D0A900', position: 'relative' }}>
                  <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 text-center h-28 sm:h-32 flex flex-col justify-start pt-3 sm:pt-4 relative after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:pointer-events-none after:border after:border-[#D0A900] transition-all duration-300 group-hover:bg-yellow-50/90">
                    <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#C7ae87' }}>精錬業者</h4>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                      貴金属精錬企業に安定した原料供給と専門的な市場分析サービスを提供
                    </p>
                  </div>
                </div>
              </div>

              {/* 宝飾商・小売業者 */}
              <div className="group relative cursor-pointer">
                <div className="relative px-4 sm:px-8">
                  <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/service-pattern/player.png"
                      alt="宝飾商・小売業者"
                      width={133}
                      height={67}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:opacity-80"
                    />
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 -mt-6 sm:-mt-8 relative z-10 mx-2 group-hover:bg-yellow-50/90" style={{ border: '1px solid #D0A900', position: 'relative' }}>
                  <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 text-center h-28 sm:h-32 flex flex-col justify-start pt-3 sm:pt-4 relative after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:pointer-events-none after:border after:border-[#D0A900] transition-all duration-300 group-hover:bg-yellow-50/90">
                    <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#C7ae87' }}>宝飾商・小売業者</h4>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                      宝飾小売業者の優良供給源確保をサポート、製品鑑定と市場トレンドコンサルティングを提供
                    </p>
                  </div>
                </div>
              </div>

              {/* 国際貿易商 */}
              <div className="group relative cursor-pointer">
                <div className="relative px-4 sm:px-8">
                  <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/service-pattern/guoji.png"
                      alt="国際貿易商"
                      width={133}
                      height={67}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:opacity-80"
                    />
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 -mt-6 sm:-mt-8 relative z-10 mx-2 group-hover:bg-yellow-50/90" style={{ border: '1px solid #D0A900', position: 'relative' }}>
                  <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 text-center h-28 sm:h-32 flex flex-col justify-start pt-3 sm:pt-4 relative after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:pointer-events-none after:border after:border-[#D0A900] transition-all duration-300 group-hover:bg-yellow-50/90">
                    <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#C7ae87' }}>国際貿易商</h4>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                      国際金・ダイヤモンド貿易商に越境取引サポートとコンプライアンス保証を提供
                    </p>
                  </div>
                </div>
              </div>

              {/* 収集家・富裕層顧客 */}
              <div className="group relative cursor-pointer">
                <div className="relative px-4 sm:px-8">
                  <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/service-pattern/shoucang.png"
                      alt="収集家・富裕層顧客"
                      width={133}
                      height={67}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:opacity-80"
                    />
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 -mt-6 sm:-mt-8 relative z-10 mx-2 group-hover:bg-yellow-50/90" style={{ border: '1px solid #D0A900', position: 'relative' }}>
                  <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 text-center h-28 sm:h-32 flex flex-col justify-start pt-3 sm:pt-4 relative after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:pointer-events-none after:border after:border-[#D0A900] transition-all duration-300 group-hover:bg-yellow-50/90">
                    <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#C7ae87' }}>収集家・富裕層顧客</h4>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                      収集家に希少コレクション取引、投資コンサルティング、プライベートカスタマイズサービスを提供
                    </p>
                  </div>
                </div>
              </div>

              {/* 企業・ファミリーオフィス */}
              <div className="group relative cursor-pointer">
                <div className="relative px-4 sm:px-8">
                  <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/service-pattern/qiye.png"
                      alt="企業・ファミリーオフィス"
                      width={133}
                      height={67}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:opacity-80"
                    />
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 -mt-6 sm:-mt-8 relative z-10 mx-2 group-hover:bg-yellow-50/90" style={{ border: '1px solid #D0A900', position: 'relative' }}>
                  <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 text-center h-28 sm:h-32 flex flex-col justify-start pt-3 sm:pt-4 relative after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:pointer-events-none after:border after:border-[#D0A900] transition-all duration-300 group-hover:bg-yellow-50/90">
                    <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#C7ae87' }}>企業・ファミリーオフィス</h4>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                      企業とファミリーオフィスに資産配置提案と財産管理ソリューションを提供
                    </p>
                  </div>
                </div>
              </div>

              {/* 専門機関 */}
              <div className="group relative cursor-pointer">
                <div className="relative px-4 sm:px-8">
                  <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/service-pattern/zhuanmen.png"
                      alt="専門機関"
                      width={133}
                      height={67}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:opacity-80"
                    />
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 -mt-6 sm:-mt-8 relative z-10 mx-2 group-hover:bg-yellow-50/90" style={{ border: '1px solid #D0A900', position: 'relative' }}>
                  <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 text-center h-28 sm:h-32 flex flex-col justify-start pt-3 sm:pt-4 relative after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:pointer-events-none after:border after:border-[#D0A900] transition-all duration-300 group-hover:bg-yellow-50/90">
                    <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#C7ae87' }}>専門機関</h4>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                      金融機関・投資ファンドなどの専門機関と長期協力関係を構築
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>



      </div>
    </ParallaxBackground>
  )
}
import React from "react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Award,
  Scale,
  TrendingUp,
  Gem,
  Users,
} from "lucide-react"

export default function NewsSection() {
  const newsItems = [
    {
      date: "2025.08.27",
      content: "国際取引パートナーシップが拡大しました。より多くの国々との取引が可能になり、お客様により良いサービスをご提供いたします。"
    },
    {
      date: "2025.08.27",
      content: "Test4ホームページが新しくなりました。今後はこちらのページをご覧ください。"
    },
    {
      date: "2025.08.26",
      content: "Test3ホームページが新しくなりました。今後はこちらのページをご覧ください。"
    },
    {
      date: "2025.08.25",
      content: "Test2ホームページが新しくなりました。今後はこちらのページをご覧ください。"
    },
    {
      date: "2025.08.24",
      content: "Test1ホームページが新しくなりました。今後はこちらのページをご覧ください。"
    }
  ]

  return (
    <section id="news" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 新着情報 Section Header - 居中背景 */}
        <ScrollAnimation animation="fadeIn" delay={100}>
          <div className="relative text-center mb-12 sm:mb-16 py-8 sm:py-12 overflow-hidden">
            {/* 背景画像 - 居中显示 */}
            <div className="absolute inset-0 w-full h-full">
              <div className="w-full h-full bg-[url('/news-backgroud.jpg')] bg-cover bg-center bg-no-repeat filter brightness-110"></div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white drop-shadow-2xl">
                新着情報
              </h2>
              <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-200 drop-shadow-lg px-4">
                最新のお知らせをお届けします
              </p>
            </div>
          </div>
        </ScrollAnimation>




        <ScrollAnimation animation="slideUp" delay={200}>
          {/* ニュースコンテンツエリア */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
              <div className="space-y-4 sm:space-y-6">
                {newsItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col lg:flex-row lg:items-start gap-3 sm:gap-4">
                      {/* 日付 */}
                      <div className="lg:w-24 flex-shrink-0">
                        <span className="text-accent font-semibold text-base sm:text-lg">
                          {item.date}
                        </span>
                      </div>
                      
                      {/* ニュース内容 */}
                      <div className="flex-1">
                        <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                    
                    {/* 分隔线 - 除了最后一个项目 */}
                    {index < newsItems.length - 1 && (
                      <div className="border-t border-gray-200 mt-4 sm:mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

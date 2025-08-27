import React from "react"
import ScrollAnimation from "@/components/ui/ScrollAnimation"

export default function NewsSection() {
  const newsItems = [
    {
      date: "2025.08.27",
      content: "国際取引パートナーシップが拡大しました。より多くの国々との取引が可能になり、お客様により良いサービスをご提供いたします。"
    },
    {
      date: "2025.08.24",
      content: "ホームページが新しくなりました。今後はこちらのページをご覧ください。"
    },
    {
      date: "2025.08.24",
      content: "ホームページが新しくなりました。今後はこちらのページをご覧ください。"
    },
    {
      date: "2025.08.24",
      content: "ホームページが新しくなりました。今後はこちらのページをご覧ください。"
    },
    {
      date: "2025.08.24",
      content: "ホームページが新しくなりました。今後はこちらのページをご覧ください。"
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" delay={100}>
          {/* セクションヘッダー - 只有这部分使用背景图 */}
          <div className="relative text-center mb-16 py-12 overflow-hidden" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
            {/* 背景画像 - 只应用于标题区域 */}
            <div className="absolute inset-0">
              <div className="w-full h-full bg-[url('/news-backgroud.jpg')] bg-cover bg-center bg-no-repeat filter brightness-110"></div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-2xl">
                新着情報
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow-lg">
                最新のお知らせをお届けします
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={200}>
          {/* ニュースコンテンツエリア */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="space-y-6">
                {newsItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      {/* 日付 */}
                      <div className="lg:w-24 flex-shrink-0">
                        <span className="text-accent font-semibold text-lg">
                          {item.date}
                        </span>
                      </div>
                      
                      {/* ニュース内容 */}
                      <div className="flex-1">
                        <p className="text-gray-800 text-lg leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                    
                    {/* 分隔线 - 除了最后一个项目 */}
                    {index < newsItems.length - 1 && (
                      <div className="border-t border-gray-200 mt-6"></div>
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

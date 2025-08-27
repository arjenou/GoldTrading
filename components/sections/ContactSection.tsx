import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import {
  ArrowRight,
  Phone,
  MapPin,
  MessageSquare,
} from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" delay={100}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">お問い合わせ</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              大阪ゴールドトレーディングへのお問い合わせをお待ちしております。
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              専門的な取引・投資サービスを提供いたします
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={200}>
          <div className="flex justify-center items-center max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <Card className="border-accent/20">
                <CardContent className="p-6 sm:p-8">
                  <form className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground text-sm sm:text-base">
                        お名前 *
                      </Label>
                      <Input
                        id="name"
                        placeholder="お名前をご入力ください"
                        className="border-border focus:border-accent text-sm sm:text-base"
                        required
                        autoComplete="name"
                        inputMode="text"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground text-sm sm:text-base">
                        メールアドレス *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="メールアドレスをご入力ください"
                        className="border-border focus:border-accent text-sm sm:text-base"
                        required
                        autoComplete="email"
                        inputMode="email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground text-sm sm:text-base">
                        電話番号
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="電話番号をご入力ください"
                        className="border-border focus:border-accent text-sm sm:text-base"
                        autoComplete="tel"
                        inputMode="tel"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-foreground text-sm sm:text-base">
                        サービス要望 *
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full border-border focus:border-accent text-sm sm:text-base">
                          <SelectValue placeholder="ご興味のあるサービスをお選びください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="k-gold-diamond">K金・ダイヤモンド取引</SelectItem>
                          <SelectItem value="gold-bars">認証金地金代理</SelectItem>
                          <SelectItem value="appraisal">貴金属・宝石鑑定</SelectItem>
                          <SelectItem value="investment">市場・投資コンサルティング</SelectItem>
                          <SelectItem value="collectibles">高級収集品流通</SelectItem>
                          <SelectItem value="cigar-lounge">シガーバー会員相談</SelectItem>
                          <SelectItem value="partnership">パートナーシップ</SelectItem>
                          <SelectItem value="other">その他のお問い合わせ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground text-sm sm:text-base">
                        詳細メッセージ
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="ご要望や質問を詳しくお書きください。専門的な回答をできるだけ早くお返しいたします..."
                        className="border-border focus:border-accent min-h-[120px] text-sm sm:text-base"
                        rows={5}
                        autoComplete="off"
                        inputMode="text"
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group text-sm sm:text-base"
                      >
                        <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        コンサルタントに今すぐ相談
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground text-center">
                      お客様のプライバシー情報を保護することをお約束し、24時間以内にお問い合わせにお返事いたします
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollAnimation>

        {/* Additional Contact Options */}
        <ScrollAnimation animation="fadeIn" delay={300}>
          <div className="mt-12 sm:mt-16">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* Company Information - Left Side */}
              <div className="rounded-2xl p-6 sm:p-8 border border-accent/20">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">大阪ゴールドトレーディング</h4>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                      <span className="text-foreground text-sm sm:text-base">080-3835-1709</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                      <span className="text-foreground text-sm sm:text-base">www.hanpuku01@gmail.com</span>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-1" />
                      <div className="text-foreground text-sm sm:text-base">
                        <p>〒541-0054</p>
                        <p>大阪府大阪市中央区南本町3丁目2-11</p>
                        <p>日幸ビル 2階 2FB号室</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent text-xs sm:text-sm"
                      >
                        <Phone className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        電話相談予約
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent text-xs sm:text-sm"
                      >
                        <MapPin className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        現地訪問予約
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Map - Right Side */}
              <div className="rounded-2xl p-6 sm:p-8 border border-accent/20">
                <div className="h-64 sm:h-80 w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.1234567890123!2d135.50000000000000!3d34.68194444444444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e5b5b5b5b5b5%3A0x1234567890123456!2z5aSn6YGT44Kq44Oq44Kk44Oq44O85YyW5aSn6YGT44Kq44Oq44Kk44Oq44O85YyW!5e0!3m2!1sja!2sjp!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="大阪ゴールドトレーディング 所在地"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
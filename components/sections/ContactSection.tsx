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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">お問い合わせ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              大阪ゴールドトレーディングへのお問い合わせをお待ちしております。専門的な取引・投資サービスを提供いたします
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={200}>
          <div className="flex justify-center items-center max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <Card className="border-accent/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">お問い合わせ送信</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          お名前 *
                        </Label>
                        <Input
                          id="name"
                          placeholder="お名前をご入力ください"
                          className="border-border focus:border-accent"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          メールアドレス *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="メールアドレスをご入力ください"
                          className="border-border focus:border-accent"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-foreground">
                        サービス要望 *
                      </Label>
                      <Select>
                        <SelectTrigger className="border-border focus:border-accent">
                          <SelectValue placeholder="ご興味のあるサービスをお選びください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="k-gold-diamond">Kゴールドジュエリー・ダイヤモンド取引</SelectItem>
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
                      <Label htmlFor="message" className="text-foreground">
                        詳細メッセージ
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="ご要望や質問を詳しくお書きください。専門的な回答をできるだけ早くお返しいたします..."
                        className="border-border focus:border-accent min-h-[120px]"
                        rows={5}
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group"
                      >
                        <MessageSquare className="mr-2 h-5 w-5" />
                        コンサルタントに今すぐ相談
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">
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
          <div className="text-center mt-16">
            <h3 className="text-xl font-bold text-foreground mb-6">その他の連絡方法</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Phone className="mr-2 h-4 w-4" />
                電話相談予約
              </Button>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <MapPin className="mr-2 h-4 w-4" />
                現地訪問予約
              </Button>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                オンライン即時相談
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
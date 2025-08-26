import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  Diamond,
  Coins,
  Shield,
  Globe,
  TrendingUp,
  Users,
  Award,
  Gem,
  BarChart3,
  Wine,
  Watch,
  Recycle,
  Scale,
  Heart,
  Target,
  Factory,
  Store,
  Building2,
  Crown,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Coins className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-foreground">大阪ゴールドトレーディング</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                事業サービス
              </a>
              <a href="#philosophy" className="text-muted-foreground hover:text-accent transition-colors">
                企業理念
              </a>
              <a href="#clients" className="text-muted-foreground hover:text-accent transition-colors">
                お客様・パートナー
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                お問い合わせ
              </a>
            </div>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              コンサルタントに相談
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-accent text-accent">
              阪福商事合同会社
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-accent">Kゴールド・ダイヤモンド</span>取引の国際企業
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              投資 · 収集 · グローバル接続
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              大阪を拠点とし、精錬業者・宝飾商・国際顧客にサービスを提供。
              <br />
              安定したサプライチェーンと専門的な実行力で日本と世界を結びます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                事業について
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
      </section>

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

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 text-center">
                <Diamond className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">ダイヤモンド取引</h3>
                <p className="text-muted-foreground">
                  高品質ダイヤモンドの卸売と国際流通、透明で合規な信頼できるリソース
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 text-center">
                <Coins className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Kゴールドジュエリー</h3>
                <p className="text-muted-foreground">18Kゴールドジュエリーの卸売・輸出入、業者様に長期安定供給を提供</p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">認証金地金</h3>
                <p className="text-muted-foreground">正規ルートでの認証金地金代理販売、取引の安全性と透明性を確保</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">事業サービス</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              取引から投資、鑑定から収集まで、包括的な専門サービスを提供
            </p>
          </div>

          <div className="space-y-16">
            {/* Service 1: Kゴールドジュエリー取引 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Coins className="h-10 w-10 text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">Kゴールドジュエリー取引</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  18Kゴールドジュエリー（新品・中古）の卸売・輸出入、精錬業者・宝飾商・国際代理店に長期安定供給を提供。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">新品・中古18Kゴールドジュエリー卸売</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">国際輸出入取引サービス</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">長期安定サプライチェーン保証</span>
                  </div>
                </div>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                    <Coins className="h-16 w-16 text-accent" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Service 2: ダイヤモンド取引 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="border-border lg:order-1">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                    <Diamond className="h-16 w-16 text-accent" />
                  </div>
                </CardContent>
              </Card>
              <div className="lg:order-2">
                <div className="flex items-center space-x-3 mb-6">
                  <Diamond className="h-10 w-10 text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">ダイヤモンド取引</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  高品質ダイヤモンドの卸売と国際流通、透明で合規なルートで宝飾業界と収集顧客に信頼できるリソースを提供。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">高品質ダイヤモンド卸売取引</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">透明で合規な取引ルート</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">国際流通ネットワークサポート</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3: 認証金地金代理 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-10 w-10 text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">認証金地金代理</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  正規ルートでの日本公認金地金と国際認証金地金の代理販売、取引の安全性と出所の透明性を確保。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">日本公認金地金代理</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">国際認証金地金販売</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">出所透明、取引安全</span>
                  </div>
                </div>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                    <Shield className="h-16 w-16 text-accent" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Service 4: 貴金属・宝石鑑定 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="border-border lg:order-1">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                    <Award className="h-16 w-16 text-accent" />
                  </div>
                </CardContent>
              </Card>
              <div className="lg:order-2">
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="h-10 w-10 text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">貴金属・宝石鑑定</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  権威ある機関と連携し、金・ダイヤモンド・宝石の専門鑑定と評価を提供、取引と収集の真の価値を保証。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">権威機関連携鑑定</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">専門価値評価サービス</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">取引収集価値保証</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 5: 市場・投資コンサルティング */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <TrendingUp className="h-10 w-10 text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">市場・投資コンサルティング</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  金・ダイヤモンド市場トレンドに基づき、不動産・株式・収集品と組み合わせ、お客様に多様化した配置提案を提供。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">貴金属市場トレンド分析</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">多様化投資配置提案</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">専門投資戦略策定</span>
                  </div>
                </div>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-accent" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Service 6: 高級収集品流通 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="border-border lg:order-1">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Wine className="h-12 w-12 text-accent" />
                      <Watch className="h-12 w-12 text-accent" />
                      <Gem className="h-12 w-12 text-accent" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="lg:order-2">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="h-10 w-10 text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">高級収集品流通</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  洋酒・高級時計・金工芸品の流通と仲介に特化、お客様の資産に増値性と文化的品格を兼ね備えさせます。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">高級洋酒収集取引</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">高級時計流通仲介サービス</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">金工芸品価値評価</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 7: 会員制シガーバー */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-10 w-10 text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">会員制シガーバー</h3>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    近日オープン
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  金文化と高級社交雰囲気を融合し、お客様にプライベートで上品なビジネス交流空間を提供。Exclusive Cigar
                  Lounge — Coming soon.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">プライベート高級社交空間</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">金文化テーマ雰囲気</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">上品なビジネス交流体験</span>
                  </div>
                </div>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                    <Users className="h-16 w-16 text-accent" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              事業詳細について
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section id="clients" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">お客様・パートナー</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              お客様が私たちを選ぶ理由は、安定した供給源と専門的な実行力だけでなく、
              取引・鑑定・コンサルティング・社交を網羅する包括的なサポートを提供できるからです
            </p>
          </div>

          {/* Service Targets */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">サービス対象</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                    <Factory className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">精錬業者</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    貴金属精錬企業に安定した原料供給と専門的な市場分析サービスを提供
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                    <Store className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">宝飾商・小売業者</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    宝飾小売業者の優良供給源確保をサポート、製品鑑定と市場トレンドコンサルティングを提供
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                    <Globe className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">国際貿易商</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    国際金・ダイヤモンド貿易商に越境取引サポートとコンプライアンス保証を提供
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                    <Crown className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">収集家・富裕層顧客</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    収集家に希少コレクション取引、投資コンサルティング、プライベートカスタマイズサービスを提供
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                    <Building2 className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">企業・ファミリーオフィス</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    企業とファミリーオフィスに資産配置提案と財産管理ソリューションを提供
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                    <Briefcase className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">専門機関</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    金融機関・投資ファンドなどの専門機関と長期協力関係を構築
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/20 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">選ばれる理由</h3>
                  <p className="text-lg text-muted-foreground">従来の取引を超越し、包括的な専門サポートを提供</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">安定供給源</h4>
                        <p className="text-muted-foreground text-sm">
                          長期安定サプライチェーン保証、供給源品質と納期を確保
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Award className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">専門実行</h4>
                        <p className="text-muted-foreground text-sm">
                          経験豊富なチーム、専門的な取引実行とリスク管理を提供
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Scale className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">コンプライアンス保証</h4>
                        <p className="text-muted-foreground text-sm">
                          国際貿易法規を厳格遵守、すべての取引のコンプライアンスと透明性を確保
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <TrendingUp className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">市場コンサルティング</h4>
                        <p className="text-muted-foreground text-sm">市場トレンドに基づく専門投資提案と戦略指導</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Gem className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">鑑定サービス</h4>
                        <p className="text-muted-foreground text-sm">
                          権威機関認証の専門鑑定、コレクションの真の価値を保証
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">社交ネットワーク</h4>
                        <p className="text-muted-foreground text-sm">
                          高級ビジネス社交プラットフォーム、ビジネス協力機会を拡大
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Partnership Opportunities */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">協力機会</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              各種専門機関との長期協力関係構築を歓迎し、共に国際市場を開拓します
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                パートナーになる
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                協力詳細について
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">企業理念・ビジョン</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              持続可能な発展を核心とし、信頼と品質を重視したビジネス生態系を構築
            </p>
          </div>

          {/* Value Commitments */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">価値コミットメント</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Recycle className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">環境責任</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    貴金属・宝石のリサイクル利用を推進し、環境負荷を軽減、持続可能な発展に貢献
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Scale className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">コンプライアンス・透明性</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    コンプライアンスと透明性の原則を堅持し、長期信頼関係を構築、すべての取引の信頼性を確保
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">生態系構築</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    持続可能なビジネス・社交生態系を構築し、お客様により多くの価値と機会を創造
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Target className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-8">ビジョン</h3>
            </div>

            <Card className="border-accent/20 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-12">
                <div className="space-y-6 text-center">
                  <p className="text-xl text-foreground leading-relaxed font-medium">
                    大阪は国際化と新経済時代に向かっています。
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    大阪ゴールドトレーディングは引き続き{" "}
                    <span className="text-accent font-semibold">Kゴールドジュエリー・ダイヤモンド取引</span>{" "}
                    を核心とし、市場コンサルティング・収集流通・シガーバー社交空間を結合し、
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    日本とグローバル市場を結ぶ専門貿易会社となり、大阪の新たな構図において{" "}
                    <span className="text-accent font-semibold">信頼性と高品質</span>を代表します。
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <Badge variant="outline" className="border-accent text-accent px-4 py-2">
                      国際化接続
                    </Badge>
                    <Badge variant="outline" className="border-accent text-accent px-4 py-2">
                      専門貿易
                    </Badge>
                    <Badge variant="outline" className="border-accent text-accent px-4 py-2">
                      信頼品質
                    </Badge>
                    <Badge variant="outline" className="border-accent text-accent px-4 py-2">
                      大阪新構図
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vision Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coins className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">核心取引</h4>
              <p className="text-sm text-muted-foreground">Kゴールドジュエリー・ダイヤモンド</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">市場コンサルティング</h4>
              <p className="text-sm text-muted-foreground">投資戦略指導</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">収集流通</h4>
              <p className="text-sm text-muted-foreground">高級芸術品取引</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">社交空間</h4>
              <p className="text-sm text-muted-foreground">シガーバー会員制</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">お問い合わせ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              大阪ゴールドトレーディングへのお問い合わせをお待ちしております。専門的な取引・投資サービスを提供いたします
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">ビジネスコンサルティング範囲</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Coins className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Kゴールドジュエリー・ダイヤモンド取引協力</h4>
                      <p className="text-muted-foreground">
                        卸売調達・国際貿易・サプライチェーン協力等の関連ビジネス相談
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">金地金・収集品相談</h4>
                      <p className="text-muted-foreground">認証金地金代理・高級収集品流通・投資コンサルティング</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">鑑定・市場コンサルティング</h4>
                      <p className="text-muted-foreground">専門鑑定サービス・市場トレンド分析・投資戦略指導</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">シガーバー会員・ビジネス意向</h4>
                      <p className="text-muted-foreground">
                        高級社交空間会員申請とビジネス協力機会
                        <Badge variant="secondary" className="ml-2 bg-accent/10 text-accent border-accent/20">
                          近日オープン
                        </Badge>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-muted/30 rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">連絡先情報</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">会社所在地</p>
                      <p className="text-muted-foreground text-sm">
                        〒541-0054 大阪府大阪市中央区南本町３丁目２番１１号２階２ＦＢ号室
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">会社情報</p>
                      <p className="text-muted-foreground text-sm">
                        阪福商事合同会社 | 法人番号：6120003029168 | 資本金：1000万円
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">営業時間</p>
                      <p className="text-muted-foreground text-sm">月曜日〜金曜日 9:00-18:00 (日本時間)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
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

          {/* Additional Contact Options */}
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
        </div>
      </section>

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
    </div>
  )
}

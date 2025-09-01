import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ja: {
    translation: {
      // 导航栏
      home: 'ホーム',
      news: 'ニュース',
      services: '事業サービス',
      clients: 'お客様・パートナー',
      contact: 'お問い合わせ',
      consultant: 'コンサルタントに相談',
      
      // 公司名称
      companyName: 'GOLD TRADING OSAKA',
      companyNameJP: '大阪ゴールドトレーディング',
      
      // 语言切换
      language: '言語',
      japanese: '日本語',
      chinese: '中文',
      
      // 其他常用文本
      learnMore: '詳細を見る',
      readMore: '続きを読む',
      submit: '送信',
      cancel: 'キャンセル',
      loading: '読み込み中...',
      error: 'エラーが発生しました',
      success: '送信完了',
      
      // Hero Section
      heroTitle: '大阪ゴールドトレーディング',
      heroSubtitle1: '大阪を拠点に、K18ジュエリーとダイヤモンドを中心とした国際貿易を展開。',
      heroSubtitle2: '国際化が進む大阪、IR開発によって広がる新しい経済圏の中で、',
      heroSubtitle3: '確かな供給力と専門性で、日本と世界を結ぶ信頼のパートナーを目指します。',
      
      // Company Overview Section
      companyOverviewTitle: '会社概要',
      companyOverviewSubtitle: '大阪を拠点とした国際貿易の専門企業',
      companyDescription1: '大阪を拠点に、K18ジュエリーとダイヤモンドの取引を主軸とし、精錬業者、宝飾商、コレクターなど多様なお客様に安定した供給と専門的なサービスを提供しています。',
      companyDescription2: 'さらに、金地金の正規代理や鑑定サポート、洋酒・高級時計・金工芸品といったコレクション流通、そして会員制ラウンジ（シガーバー等）による交流の場を通じ、付加価値のあるサービスを展開しています。',
      companyDescription3: '国際化とIR開発により新しい経済圏が広がる大阪において、お客様と長期的な信頼関係を築き、共に成長するパートナーであることを目指します。',
      
      // Company Pillars
      coreTradingTitle: '核心取引',
      coreTradingDesc: 'K18ジュエリー・ダイヤモンド',
      assetSolutionTitle: '資産ソリューション',
      assetSolutionDesc: '不動産・貴金属・M&A支援',
      collectionTitle: 'コレクション流通',
      collectionDesc: '洋酒・高級時計・金工芸品',
      loungeTitle: '会員制ラウンジ',
      loungeDesc1: '富裕層向けのクラブ',
      loungeDesc2: 'エンターテインメント',
      
      // Mission & Vision
      missionTitle: 'MISSION',
      missionSubtitle: '持続可能な未来を創造する使命',
      missionPoint1: '貴金属と宝石のリサイクルを推進し、環境負荷を軽減する',
      missionPoint2: 'コンプライアンスと透明性を堅持し、長期的な信頼を築く',
      missionPoint3: '持続可能なビジネスと交流のエコシステムを創造する',
      
      visionTitle: 'VISION',
      visionSubtitle: 'MISSIONを達成するために目指すべき未来',
      visionPoint1: '大阪は今、国際化と新しい経済時代へと歩みを進めています。',
      visionPoint2: 'Osaka Gold Trading は、Kゴールドジュエリーとダイヤモンド貿易を中核に据え、市場コンサルティング、コレクション流通、そしてシガーバーを融合した社交空間を提供し、日本と世界のマーケットをつなぐ専門的な貿易会社として発展を続けます。',
      visionPoint3: 'そして、大阪の新しい時代において、信頼と高品質を代表する存在となります。',
      
      // Services Section
      servicesTitle: '事業サービス',
      servicesSubtitle: '専門的な貿易サービス',
      servicesDescription: '取引から投資、鑑定から収集まで、包括的な専門サービスを提供',
      
      // Service Details
      serviceKGoldTitle: 'K金取引',
      serviceKGoldDesc: '18K金（新品・中古）の卸売・輸出入、精錬業者・宝飾商・国際代理店に長期安定供給を提供。',
      serviceKGoldPoint1: '新品・中古18K金卸売',
      serviceKGoldPoint2: '国際輸出入取引サービス',
      serviceKGoldPoint3: '長期安定サプライチェーン保証',
      
      serviceDiamondTitle: 'ダイヤモンド取引',
      serviceDiamondDesc: '厳選されたダイヤモンドの国際取引',
      serviceDiamondPoint1: '厳選されたダイヤモンドの国際取引',
      serviceDiamondPoint2: '品質保証と鑑定サービス',
      serviceDiamondPoint3: 'グローバルサプライチェーン',
      
      serviceConsultingTitle: '国際貿易コンサルティング',
      serviceConsultingDesc: '貿易業務の専門的なアドバイスとサポート',
      serviceConsultingPoint1: '市場分析と戦略提案',
      serviceConsultingPoint2: 'リスク管理とコンプライアンス',
      serviceConsultingPoint3: '国際取引サポート',
      
      // Additional Services
      serviceDiamondTitle: 'ダイヤモンド取引',
      serviceDiamondDesc: '高品質ダイヤモンドの卸売と国際流通、透明で合規なルートで宝飾業界と収集顧客に信頼できるリソースを提供。',
      serviceDiamondPoint1: '高品質ダイヤモンド卸売取引',
      serviceDiamondPoint2: '透明で合規な取引ルート',
      serviceDiamondPoint3: '国際流通ネットワークサポート',
      
      serviceGoldBarsTitle: '認証金地金代理',
      serviceGoldBarsDesc: '正規ルートでの日本公認金地金と国際認証金地金の代理販売、取引の安全性と出所の透明性を確保。',
      serviceGoldBarsPoint1: '日本公認金地金代理',
      serviceGoldBarsPoint2: '国際認証金地金販売',
      serviceGoldBarsPoint3: '出所透明、取引安全',
      
      serviceAppraisalTitle: '貴金属・宝石鑑定',
      serviceAppraisalDesc: '権威ある機関と連携し、金・ダイヤモンド・宝石の専門鑑定と評価を提供、取引と収集の真の価値を保証。',
      serviceAppraisalPoint1: '権威機関連携鑑定',
      serviceAppraisalPoint2: '専門価値評価サービス',
      serviceAppraisalPoint3: '取引収集価値保証',
      
      serviceInvestmentTitle: '市場・投資コンサルティング',
      serviceInvestmentDesc: '金・ダイヤモンド市場トレンドに基づき、不動産・株式・収集品と組み合わせ、お客様に多様化した配置提案を提供。',
      serviceInvestmentPoint1: '貴金属市場トレンド分析',
      serviceInvestmentPoint2: '多様化投資配置提案',
      serviceInvestmentPoint3: '専門投資戦略策定',
      
      serviceCollectionTitle: '高級収集品流通',
      serviceCollectionDesc: '洋酒・高級時計・金工芸品の流通と仲介に特化、お客様の資産に増値性と文化的品格を兼ね備えさせます。',
      serviceCollectionPoint1: '高級洋酒収集取引',
      serviceCollectionPoint2: '高級時計流通仲介サービス',
      serviceCollectionPoint3: '金工芸品価値評価',
      
      serviceLoungeTitle: '会員制シガーバー',
      serviceLoungeSubtitle: '近日オープン',
      serviceLoungeDesc: '金文化と高級社交雰囲気を融合し、お客様にプライベートで上品なビジネス交流空間を提供。',
      serviceLoungePoint1: 'プライベート高級社交空間',
      serviceLoungePoint2: '金文化テーマ雰囲気',
      serviceLoungePoint3: '上品なビジネス交流体験',
      
      // News Section
      newsTitle: 'ニュース',
      newsSubtitle: '最新情報',
      
      // Company Information
      companyLegalName: '社名（商号）',
      companyNameLegal: '阪福商事合同会社（ハンフクショウジ）',
      companyAddress: '本店所在地',
      companyAddressDetail: '〒541-0054 大阪府大阪市中央区南本町3丁目2番11号 2階 2FB号室',
      companyNumber: '法人番号',
      companyNumberValue: '6120-0030-29168',
      companyCapital: '資本金',
      companyCapitalValue: '1,000万円',
      companyBusiness: '事業内容',
      companyBusinessDetail: '貴金属・宝飾品を中心とした取引・流通事業、資産運用及び経営アドバイザリー事業、並びに高付加価値ライフスタイル関連事業の企画・運営。',
      companyContact: 'お問い合わせ',
      
      // News Items
      newsItem1Date: '2025.08.11',
      newsItem1Content: '日本製ジュエリーの国際競争力向上、K18技術革新で海外市場開拓加速。伝統工芸と最新技術を融合した日本製ジュエリーが、アジア富裕層市場で高い評価を得ており、輸出額が前年比30%増加。品質とデザインの両面で世界市場での存在感を高めている。',
      newsItem1Link: 'https://www.fortunebusinessinsights.com/jp/%E3%82%B8%E3%83%A5%E3%82%A8%E3%83%AA%E3%83%BC%E5%B8%82%E5%A0%B4-102107',
      newsItem2Date: '2025.06.25',
      newsItem2Content: 'マネーフォワード、超富裕層向け資産管理プラットフォームを2025年6月に提供開始。金融資産10億円以上を対象に、専用アプリと専門コンシェルジュによる総合資産管理サービスを展開。非金融資産も含めた可視化を通じて、次世代資産運用の基盤を支える。',
      newsItem2Link: 'https://prtimes.jp/main/html/rd/p/000000007.000141034.html',
      newsItem3Date: '2025.04.14',
      newsItem3Content: '大阪初のIR着工、「夢洲」が経済変革の起点に。日本初の統合型リゾート施設が2025年4月に着工。ホテル・カジノ・MICE機能を併せ持ち、大阪・関西圏に新たな産業と雇用創出をもたらす期待が高まる。',
      newsItem3Link: 'https://www.nikkei.com/article/DGXZQOUF11CGD0R10C25A4000000/',
      newsItem4Date: '2025.03.01',
      newsItem4Content: '大谷翔平×今与によるK18七宝ダイヤモンドペンダント、MLB東京シリーズ記念で318点限定発売。日本伝統工芸・七宝焼を用いたK18製ジュエリーが、2025年MLB東京シリーズ開催を記念して登場。限定318点の高付加価値商品として、高資産層コレクターの注目を集めること必至。',
      newsItem4Link: 'https://prtimes.jp/main/html/rd/p/000000084.000049012.html',
      newsItem5Date: '2025.02.13',
      newsItem5Content: '日本の富裕層、2025年に過去最高を更新—165万世帯、金融資産469兆円。野村総研の調査によると、純金融資産1億円以上を持つ世帯が増加し、富裕層・超富裕層の合計は165.3万世帯に。資産市場の拡大と高需要を背景に、資産運用ニーズのさらなる高まりが見込まれる。',
      newsItem5Link: 'https://www.nri.com/jp/news/newsrelease/20250213_1.html',
      readMore: '続きを読む',
      
      // Clients Section
      clientsTitle: 'お客様・パートナー',
      clientsSubtitle: '信頼できるパートナーシップ',
      clientsDescription: 'お客様が私たちを選ぶ理由は、安定した供給源と専門的な実行力だけでなく、取引・鑑定・コンサルティング・社交を網羅する包括的なサポートを提供できるからです',
      
      // Client Types
      clientRefiner: '精錬業者',
      clientRefinerDesc: '貴金属精錬企業に安定した原料供給と専門的な市場分析サービスを提供',
      clientJewelry: '宝飾商・小売業者',
      clientJewelryDesc: '宝飾小売業者の優良供給源確保をサポート、製品鑑定と市場トレンドコンサルティングを提供',
      clientInternational: '国際貿易商',
      clientInternationalDesc: '国際金・ダイヤモンド貿易商に越境取引サポートとコンプライアンス保証を提供',
      clientCollector: '収集家・富裕層顧客',
      clientCollectorDesc: '収集家に希少コレクション取引、投資コンサルティング、プライベートカスタマイズサービスを提供',
      clientCorporate: '企業・ファミリーオフィス',
      clientCorporateDesc: '企業とファミリーオフィスに資産配置提案と財産管理ソリューションを提供',
      clientInstitution: '専門機関',
      clientInstitutionDesc: '金融機関・投資ファンドなどの専門機関と長期協力関係を構築',
      
      // Contact Section
      contactTitle: 'お問い合わせ',
      contactSubtitle: 'お気軽にお問い合わせください',
      contactDescription1: '大阪ゴールドトレーディングへのお問い合わせをお待ちしております。',
      contactDescription2: '専門的な取引・投資サービスを提供いたします',
      nameLabel: 'お名前',
      emailLabel: 'メールアドレス',
      phoneLabel: '電話番号',
      serviceLabel: 'サービス要望',
      messageLabel: '詳細メッセージ',
      sendButton: '送信',
      sending: '送信中...',
      successMessage: 'メールが正常に送信されました。24時間以内にご返信いたします。',
      errorMessage: 'もう一度お試しください。',
      privacyMessage: 'お客様のプライバシー情報を保護することをお約束し',
      responseMessage: '24時間以内にお問い合わせにお返事いたします',
      
      // Form Placeholders
      namePlaceholder: 'お名前をご入力ください',
      emailPlaceholder: 'メールアドレスをご入力ください',
      phonePlaceholder: '電話番号をご入力ください',
      servicePlaceholder: 'ご興味のあるサービスをお選びください',
      messagePlaceholder: 'ご要望や質問を詳しくお書きください。専門的な回答をできるだけ早くお返しいたします...',
      
      // Service Options
      serviceKGold: 'K18金',
      serviceGoldBars: 'インゴットの購入・売却',
      serviceAppraisal: '貴金属・宝石鑑定',
      serviceInvestment: '資産運用',
      servicePartnership: 'パートナーシップ',
      serviceOther: 'その他のお問い合わせ',
      
      // Validation Messages
      requiredFields: 'お名前、メールアドレス、サービス要望は必須項目です。',
      invalidEmail: '有効なメールアドレスを入力してください。',
      networkError: 'ネットワークエラーが発生しました。',
      sendFailed: '送信に失敗しました。',
      
      // Footer
      footerDescription: '大阪を拠点とした国際貿易の専門企業',
      footerCompanyDesc: '阪福商事合同会社として、18K金とダイヤモンドの専門取引企業。国際的なサプライチェーンと専門的な実行力で、日本と世界を結ぶ信頼できるパートナーです。',
      footerServices: 'サービス',
      footerContact: '連絡先',
      footerHeadquarters: '本社所在地',
      footerPhone: '電話相談',
      footerEmail: 'メール対応',
      footerVisit: '現地訪問',
      footerByAppointment: '要予約',
      footerCertified: '認証済み',
      footerInternational: '国際取引',
      footerSecurity: 'セキュリティ',
      footerService1: '18K金取引',
      footerService2: 'ダイヤモンド大口卸売',
      footerService3: '認証金地金代理',
      footerService4: '貴金属・宝石鑑定',
      footerService5: '投資コンサルティング',
      footerService6: '高級収集品流通',
      allRightsReserved: '© 2024 阪福商事合同会社・大阪ゴールドトレーディング. All rights reserved.',
      licensedCompany: 'Licensed and regulated precious metals trading company',
    }
  },
  zh: {
    translation: {
      // 导航栏
      home: '首页',
      news: '新闻资讯',
      services: '业务服务',
      clients: '客户伙伴',
      contact: '联系我们',
      consultant: '咨询顾问',
      
      // 公司名称
      companyName: 'GOLD TRADING OSAKA',
      companyNameJP: '大阪黄金交易',
      
      // 语言切换
      language: '语言',
      japanese: '日本語',
      chinese: '中文',
      
      // 其他常用文本
      learnMore: '了解更多',
      readMore: '阅读更多',
      submit: '提交',
      cancel: '取消',
      loading: '加载中...',
      error: '发生错误',
      success: '发送成功',
      
      // Hero Section
      heroTitle: '大阪黄金交易',
      heroSubtitle1: '以大阪为基地，专注于K18珠宝和钻石的国际贸易。',
      heroSubtitle2: '在大阪国际化进程和IR开发带来的新经济圈中，',
      heroSubtitle3: '我们致力于成为连接日本与世界的可靠合作伙伴，提供稳定的供应能力和专业性。',
      
      // Company Overview Section
      companyOverviewTitle: '公司概况',
      companyOverviewSubtitle: '以大阪为基地的专业国际贸易企业',
      companyDescription1: '以大阪为基地，以K18珠宝和钻石交易为主轴，为精炼商、珠宝商、收藏家等多样化客户提供稳定供应和专业服务。',
      companyDescription2: '此外，通过金条正规代理、鉴定支持、洋酒、高级手表、金工艺品等收藏品流通，以及会员制休息室（雪茄吧等）的交流场所，提供高附加值的服务。',
      companyDescription3: '在因国际化和IR开发而扩展新经济圈的大阪，我们致力于与客户建立长期信赖关系，成为共同成长的合作伙伴。',
      
      // Company Pillars
      coreTradingTitle: '核心交易',
      coreTradingDesc: 'K18珠宝・钻石',
      assetSolutionTitle: '资产解决方案',
      assetSolutionDesc: '房地产・贵金属・并购支持',
      collectionTitle: '收藏品流通',
      collectionDesc: '洋酒・高级手表・金工艺品',
      loungeTitle: '会员制休息室',
      loungeDesc1: '面向富裕阶层的俱乐部',
      loungeDesc2: '娱乐',
      
      // Mission & Vision
      missionTitle: '使命',
      missionSubtitle: '创造可持续未来的使命',
      missionPoint1: '推进贵金属和宝石的回收利用，减轻环境负担',
      missionPoint2: '坚持合规性和透明度，建立长期信赖',
      missionPoint3: '创造可持续的商业和交流生态系统',
      
      visionTitle: '愿景',
      visionSubtitle: '为实现使命而追求的未來',
      visionPoint1: '大阪现在正迈向国际化和新的经济时代。',
      visionPoint2: '大阪黄金交易将以K金珠宝和钻石贸易为核心，提供市场咨询、收藏品流通，以及融合雪茄吧的社交空间，作为连接日本和世界市场的专业贸易公司持续发展。',
      visionPoint3: '并且，在大阪的新时代中，成为代表信赖和高质量的存在。',
      
      // Services Section
      servicesTitle: '业务服务',
      servicesSubtitle: '专业的贸易服务',
      servicesDescription: '从交易到投资，从鉴定到收藏，提供全面的专业服务',
      
      // Service Details
      serviceKGoldTitle: 'K金交易',
      serviceKGoldDesc: '18K金（新品・二手）的批发・进出口，为精炼商・珠宝商・国际代理商提供长期稳定供应。',
      serviceKGoldPoint1: '新品・二手18K金批发',
      serviceKGoldPoint2: '国际进出口交易服务',
      serviceKGoldPoint3: '长期稳定供应链保证',
      
      serviceDiamondTitle: '钻石交易',
      serviceDiamondDesc: '精选钻石的国际交易',
      serviceDiamondPoint1: '精选钻石的国际交易',
      serviceDiamondPoint2: '质量保证和鉴定服务',
      serviceDiamondPoint3: '全球供应链',
      
      serviceConsultingTitle: '国际贸易咨询',
      serviceConsultingDesc: '贸易业务的专业建议和支持',
      serviceConsultingPoint1: '市场分析和战略建议',
      serviceConsultingPoint2: '风险管理和合规',
      serviceConsultingPoint3: '国际贸易支持',
      
      // Additional Services
      serviceDiamondTitle: '钻石交易',
      serviceDiamondDesc: '高品质钻石的批发和国际流通，通过透明合规的渠道为珠宝行业和收藏客户提供可靠的资源。',
      serviceDiamondPoint1: '高品质钻石批发交易',
      serviceDiamondPoint2: '透明合规的交易渠道',
      serviceDiamondPoint3: '国际流通网络支持',
      
      serviceGoldBarsTitle: '认证金条代理',
      serviceGoldBarsDesc: '通过正规渠道代理销售日本公认金条和国际认证金条，确保交易安全和来源透明。',
      serviceGoldBarsPoint1: '日本公认金条代理',
      serviceGoldBarsPoint2: '国际认证金条销售',
      serviceGoldBarsPoint3: '来源透明、交易安全',
      
      serviceAppraisalTitle: '贵金属・宝石鉴定',
      serviceAppraisalDesc: '与权威机构合作，提供金・钻石・宝石的专业鉴定和评估，保证交易和收藏的真实价值。',
      serviceAppraisalPoint1: '权威机构合作鉴定',
      serviceAppraisalPoint2: '专业价值评估服务',
      serviceAppraisalPoint3: '交易收藏价值保证',
      
      serviceInvestmentTitle: '市场・投资咨询',
      serviceInvestmentDesc: '基于金・钻石市场趋势，结合房地产・股票・收藏品，为客户提供多样化的配置建议。',
      serviceInvestmentPoint1: '贵金属市场趋势分析',
      serviceInvestmentPoint2: '多样化投资配置建议',
      serviceInvestmentPoint3: '专业投资战略制定',
      
      serviceCollectionTitle: '高级收藏品流通',
      serviceCollectionDesc: '专注于洋酒・高级手表・金工艺品的流通和中介，为客户资产提供增值性和文化品位。',
      serviceCollectionPoint1: '高级洋酒收藏交易',
      serviceCollectionPoint2: '高级手表流通中介服务',
      serviceCollectionPoint3: '金工艺品价值评估',
      
      serviceLoungeTitle: '会员制雪茄吧',
      serviceLoungeSubtitle: '即将开业',
      serviceLoungeDesc: '融合金文化和高级社交氛围，为客户提供私密优雅的商业交流空间。',
      serviceLoungePoint1: '私密高级社交空间',
      serviceLoungePoint2: '金文化主题氛围',
      serviceLoungePoint3: '优雅的商业交流体验',
      
      // News Section
      newsTitle: '新闻资讯',
      newsSubtitle: '最新信息',
      
      // Company Information
      companyLegalName: '公司名称（商号）',
      companyNameLegal: '阪福商事合同会社（ハンフクショウジ）',
      companyAddress: '总部所在地',
      companyAddressDetail: '〒541-0054 大阪府大阪市中央区南本町3丁目2番11号 2階 2FB号室',
      companyNumber: '法人编号',
      companyNumberValue: '6120-0030-29168',
      companyCapital: '注册资本',
      companyCapitalValue: '1,000万円',
      companyBusiness: '业务内容',
      companyBusinessDetail: '以贵金属・珠宝饰品为中心的交易・流通事业、资产管理及经营咨询事业、以及高附加值生活方式相关事业的策划・运营。',
      companyContact: '联系我们',
      
      // News Items
      newsItem1Date: '2025.08.11',
      newsItem1Content: '日本制珠宝国际竞争力提升，K18技术创新加速海外市场开拓。融合传统工艺与最新技术的日本制珠宝在亚洲富裕层市场获得高度评价，出口额同比增长30%。在品质与设计两方面提升世界市场存在感。',
      newsItem1Link: 'https://www.fortunebusinessinsights.com/jp/%E3%82%B8%E3%83%A5%E3%82%A8%E3%83%AA%E3%83%BC%E5%B8%82%E5%A0%B4-102107',
      newsItem2Date: '2025.06.25',
      newsItem2Content: 'Money Forward推出超富裕层资产管理平台，聚焦专业化与可视化服务。面向金融资产10亿日元以上客户，提供专用应用和专业管家综合资产管理服务。通过包含非金融资产的可视化，支撑下一代资产运用的基础。',
      newsItem2Link: 'https://prtimes.jp/main/html/rd/p/000000007.000141034.html',
      newsItem3Date: '2025.04.14',
      newsItem3Content: '大阪梦洲首座IR项目开工，助力地区经济腾飞。日本首个综合度假区于2025年4月正式开工建设，集酒店、赌场、MICE功能于一体，为大阪关西地区带来新产业和就业机会，经济发展前景广阔。',
      newsItem3Link: 'https://www.nikkei.com/article/DGXZQOUF11CGD0R10C25A4000000/',
      newsItem4Date: '2025.03.01',
      newsItem4Content: '大谷翔平×今与联名K18吊坠限量发售，兼具传统技法与奢华材质。采用日本传统七宝烧工艺制作的K18珠宝，为纪念2025年MLB东京系列赛特别推出。限量318件的高附加值商品，必将吸引高资产层收藏家的关注。',
      newsItem4Link: 'https://prtimes.jp/main/html/rd/p/000000084.000049012.html',
      newsItem5Date: '2025.02.13',
      newsItem5Content: '日本富裕层家庭总数创历史新高，金融资产总额达469兆円。野村综合研究所调查显示，纯金融资产1亿日元以上家庭持续增长，富裕层与超富裕层合计达165.3万户。在资产市场扩大和高需求的背景下，资产运用需求将进一步增长。',
      newsItem5Link: 'https://www.nri.com/jp/news/newsrelease/20250213_1.html',
      readMore: '阅读更多',
      
      // Clients Section
      clientsTitle: '客户伙伴',
      clientsSubtitle: '值得信赖的合作伙伴关系',
      clientsDescription: '客户选择我们的原因不仅是稳定的供应源和专业的执行力，还因为我们能够提供涵盖交易、鉴定、咨询、社交的全面支持',
      
      // Client Types
      clientRefiner: '精炼商',
      clientRefinerDesc: '为贵金属精炼企业提供稳定的原料供应和专业市场分析服务',
      clientJewelry: '珠宝商・零售商',
      clientJewelryDesc: '支持珠宝零售商确保优质供应源，提供产品鉴定和市场趋势咨询服务',
      clientInternational: '国际贸易商',
      clientInternationalDesc: '为国际金・钻石贸易商提供跨境交易支持和合规保证',
      clientCollector: '收藏家・富裕阶层客户',
      clientCollectorDesc: '为收藏家提供稀有收藏品交易、投资咨询、私人定制服务',
      clientCorporate: '企业・家族办公室',
      clientCorporateDesc: '为企业与家族办公室提供资产配置建议和财富管理解决方案',
      clientInstitution: '专业机构',
      clientInstitutionDesc: '与金融机构・投资基金等专业机构建立长期合作关系',
      
      // Contact Section
      contactTitle: '联系我们',
      contactSubtitle: '欢迎随时联系我们',
      contactDescription1: '我们期待您联系大阪黄金交易。',
      contactDescription2: '提供专业的交易和投资服务',
      nameLabel: '姓名',
      emailLabel: '邮箱地址',
      phoneLabel: '电话号码',
      serviceLabel: '服务需求',
      messageLabel: '详细留言',
      sendButton: '发送',
      sending: '发送中...',
      successMessage: '邮件已成功发送。我们将在24小时内回复您。',
      errorMessage: '请再试一次。',
      privacyMessage: '我们承诺保护您的隐私信息',
      responseMessage: '我们将在24小时内回复您的咨询',
      
      // Form Placeholders
      namePlaceholder: '请输入您的姓名',
      emailPlaceholder: '请输入您的邮箱地址',
      phonePlaceholder: '请输入您的电话号码',
      servicePlaceholder: '请选择您感兴趣的服务',
      messagePlaceholder: '请详细描述您的需求或问题。我们将尽快为您提供专业回答...',
      
      // Service Options
      serviceKGold: 'K18金',
      serviceGoldBars: '金条购买・销售',
      serviceAppraisal: '贵金属・宝石鉴定',
      serviceInvestment: '资产管理',
      servicePartnership: '合作伙伴关系',
      serviceOther: '其他咨询',
      
      // Validation Messages
      requiredFields: '姓名、邮箱地址、服务需求为必填项。',
      invalidEmail: '请输入有效的邮箱地址。',
      networkError: '发生网络错误。',
      sendFailed: '发送失败。',
      
      // Footer
      footerDescription: '以大阪为基地的专业国际贸易企业',
      footerCompanyDesc: '作为阪福商事合同会社，是18K金和钻石的专业交易企业。通过国际供应链和专业的执行力，成为连接日本与世界的可靠合作伙伴。',
      footerServices: '服务',
      footerContact: '联系方式',
      footerHeadquarters: '总部所在地',
      footerPhone: '电话咨询',
      footerEmail: '邮件支持',
      footerVisit: '实地访问',
      footerByAppointment: '需预约',
      footerCertified: '已认证',
      footerInternational: '国际贸易',
      footerSecurity: '安全',
      footerService1: '18K金交易',
      footerService2: '钻石大宗批发',
      footerService3: '认证金条代理',
      footerService4: '贵金属・宝石鉴定',
      footerService5: '投资咨询',
      footerService6: '高级收藏品流通',
      allRightsReserved: '© 2024 阪福商事合同会社・大阪黄金交易. 版权所有.',
      licensedCompany: '获得许可和监管的贵金属交易公司',
    }
  },
  en: {
    translation: {
      // Navigation
      home: 'Home',
      news: 'News',
      services: 'Services',
      clients: 'Clients & Partners',
      contact: 'Contact',
      consultant: 'Consult with Expert',
      
      // Company Name
      companyName: 'GOLD TRADING OSAKA',
      companyNameJP: 'Osaka Gold Trading',
      
      // Language Switcher
      language: 'Language',
      japanese: '日本語',
      chinese: '中文',
      english: 'English',
      
      // Other common texts
      learnMore: 'Learn More',
      readMore: 'Read More',
      submit: 'Submit',
      cancel: 'Cancel',
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Sent successfully',
      
      // Hero Section
      heroTitle: 'Osaka Gold Trading',
      heroSubtitle1: 'Based in Osaka, we specialize in international trade of K18 jewelry and diamonds.',
      heroSubtitle2: 'In Osaka, which is advancing toward internationalization and expanding new economic zones through IR development,',
      heroSubtitle3: 'we aim to be a reliable partner connecting Japan and the world with solid supply capabilities and expertise.',
      
      // Company Overview Section
      companyOverviewTitle: 'Company Overview',
      companyOverviewSubtitle: 'Professional International Trading Company Based in Osaka',
      companyDescription1: 'Based in Osaka, we focus on K18 jewelry and diamond trading, providing stable supply and professional services to diverse clients including refiners, jewelers, and collectors.',
      companyDescription2: 'Furthermore, through authorized gold bar agency, appraisal support, collection distribution including fine wines, luxury watches, and gold crafts, and member lounges (cigar bars, etc.) for networking, we provide value-added services.',
      companyDescription3: 'In Osaka, where new economic zones are expanding through internationalization and IR development, we aim to build long-term trust relationships with clients and become partners for mutual growth.',
      
      // Company Pillars
      coreTradingTitle: 'Core Trading',
      coreTradingDesc: 'K18 Jewelry & Diamonds',
      assetSolutionTitle: 'Asset Solutions',
      assetSolutionDesc: 'Real Estate, Precious Metals & M&A Support',
      collectionTitle: 'Collection Distribution',
      collectionDesc: 'Fine Wines, Luxury Watches & Gold Crafts',
      loungeTitle: 'Member Lounge',
      loungeDesc1: 'Club for High Net Worth',
      loungeDesc2: 'Entertainment',
      
      // Mission & Vision
      missionTitle: 'MISSION',
      missionSubtitle: 'Mission to Create a Sustainable Future',
      missionPoint1: 'Promote recycling of precious metals and gemstones to reduce environmental impact',
      missionPoint2: 'Maintain compliance and transparency to build long-term trust',
      missionPoint3: 'Create a sustainable business and networking ecosystem',
      
      visionTitle: 'VISION',
      visionSubtitle: 'Future We Aim For to Achieve Our Mission',
      visionPoint1: 'Osaka is now advancing toward internationalization and a new economic era.',
      visionPoint2: 'Osaka Gold Trading will continue to develop as a specialized trading company connecting Japanese and world markets, with K-gold jewelry and diamond trading at its core, providing market consulting, collection distribution, and social spaces integrating cigar bars.',
      visionPoint3: 'And we will become a presence representing trust and high quality in Osaka\'s new era.',
      
      // Services Section
      servicesTitle: 'Business Services',
      servicesSubtitle: 'Professional Trading Services',
      servicesDescription: 'From trading to investment, from appraisal to collection, providing comprehensive professional services',
      
      // Service Details
      serviceKGoldTitle: 'K-Gold Trading',
      serviceKGoldDesc: 'Wholesale and import/export of 18K gold (new and pre-owned), providing long-term stable supply to refiners, jewelers, and international agents.',
      serviceKGoldPoint1: 'New and pre-owned 18K gold wholesale',
      serviceKGoldPoint2: 'International import/export trading services',
      serviceKGoldPoint3: 'Long-term stable supply chain guarantee',
      
      serviceDiamondTitle: 'Diamond Trading',
      serviceDiamondDesc: 'International trading of carefully selected diamonds',
      serviceDiamondPoint1: 'International trading of carefully selected diamonds',
      serviceDiamondPoint2: 'Quality assurance and appraisal services',
      serviceDiamondPoint3: 'Global supply chain',
      
      serviceConsultingTitle: 'International Trade Consulting',
      serviceConsultingDesc: 'Professional advice and support for trading operations',
      serviceConsultingPoint1: 'Market analysis and strategic proposals',
      serviceConsultingPoint2: 'Risk management and compliance',
      serviceConsultingPoint3: 'International trading support',
      
      // Additional Services
      serviceGoldBarsTitle: 'Certified Gold Bar Agency',
      serviceGoldBarsDesc: 'Authorized agency sales of Japanese certified gold bars and international certified gold bars through legitimate channels, ensuring transaction safety and source transparency.',
      serviceGoldBarsPoint1: 'Japanese certified gold bar agency',
      serviceGoldBarsPoint2: 'International certified gold bar sales',
      serviceGoldBarsPoint3: 'Source transparency, transaction safety',
      
      serviceAppraisalTitle: 'Precious Metals & Gemstone Appraisal',
      serviceAppraisalDesc: 'Collaborating with authoritative institutions to provide professional appraisal and evaluation of gold, diamonds, and gemstones, ensuring true value for trading and collection.',
      serviceAppraisalPoint1: 'Authoritative institution collaboration appraisal',
      serviceAppraisalPoint2: 'Professional value evaluation services',
      serviceAppraisalPoint3: 'Trading and collection value guarantee',
      
      serviceInvestmentTitle: 'Market & Investment Consulting',
      serviceInvestmentDesc: 'Based on gold and diamond market trends, combined with real estate, stocks, and collectibles, providing diversified allocation proposals for clients.',
      serviceInvestmentPoint1: 'Precious metals market trend analysis',
      serviceInvestmentPoint2: 'Diversified investment allocation proposals',
      serviceInvestmentPoint3: 'Professional investment strategy formulation',
      
      serviceCollectionTitle: 'Luxury Collection Distribution',
      serviceCollectionDesc: 'Specializing in distribution and brokerage of fine wines, luxury watches, and gold crafts, providing clients\' assets with both appreciation potential and cultural sophistication.',
      serviceCollectionPoint1: 'Luxury wine collection trading',
      serviceCollectionPoint2: 'Luxury watch distribution brokerage services',
      serviceCollectionPoint3: 'Gold craft value evaluation',
      
      serviceLoungeTitle: 'Member Cigar Bar',
      serviceLoungeSubtitle: 'Opening Soon',
      serviceLoungeDesc: 'Integrating gold culture and luxury social atmosphere to provide clients with a private and elegant business networking space.',
      serviceLoungePoint1: 'Private luxury social space',
      serviceLoungePoint2: 'Gold culture themed atmosphere',
      serviceLoungePoint3: 'Elegant business networking experience',
      
      // News Section
      newsTitle: 'News',
      newsSubtitle: 'Latest Information',
      
      // Company Information
      companyLegalName: 'Company Name (Trade Name)',
      companyNameLegal: 'Hanpuku Shouji LLC (ハンフクショウジ)',
      companyAddress: 'Head Office Location',
      companyAddressDetail: '〒541-0054 2F, 2FB Room, 3-2-11 Minami-Honmachi, Chuo-ku, Osaka-shi, Osaka Prefecture',
      companyNumber: 'Corporate Number',
      companyNumberValue: '6120-0030-29168',
      companyCapital: 'Capital',
      companyCapitalValue: '¥10,000,000',
      companyBusiness: 'Business Description',
      companyBusinessDetail: 'Trading and distribution business centered on precious metals and jewelry, asset management and management advisory services, and planning and operation of high value-added lifestyle related businesses.',
      companyContact: 'Contact Us',
      
      // News Items
      newsItem1Date: '2025.08.11',
      newsItem1Content: 'Japanese jewelry international competitiveness rises with K18 technological innovation accelerating overseas market expansion. Japanese jewelry combining traditional craftsmanship with latest technology receives high praise in Asian affluent markets, with exports increasing 30% year-over-year. Enhancing global market presence in both quality and design.',
      newsItem1Link: 'https://www.fortunebusinessinsights.com/jp/%E3%82%B8%E3%83%A5%E3%82%A8%E3%83%AA%E3%83%BC%E5%B8%82%E5%A0%B4-102107',
      newsItem2Date: '2025.06.25',
      newsItem2Content: 'Money Forward launches ultra-high-net-worth asset management platform in June 2025. Targeting clients with over ¥1 billion in financial assets, offering dedicated apps and professional concierge comprehensive asset management services. Supporting next-generation asset management foundation through visualization including non-financial assets.',
      newsItem2Link: 'https://prtimes.jp/main/html/rd/p/000000007.000141034.html',
      newsItem3Date: '2025.04.14',
      newsItem3Content: 'Osaka\'s first IR project begins construction at Yumeshima, marking a new era of economic transformation. Japan\'s first integrated resort facility officially started construction in April 2025, combining hotel, casino, and MICE functions to bring new industries and employment opportunities to the Osaka-Kansai region.',
      newsItem3Link: 'https://www.nikkei.com/article/DGXZQOUF11CGD0R10C25A4000000/',
      newsItem4Date: '2025.03.01',
      newsItem4Content: 'Shohei Ohtani × IMAYO collaboration K18 cloisonné diamond pendant limited release commemorates MLB Tokyo Series. Japanese traditional cloisonné craftsmanship combined with K18 jewelry debuts for the 2025 MLB Tokyo Series. Limited to 318 pieces, this high-value product is set to attract attention from high-net-worth collectors.',
      newsItem4Link: 'https://prtimes.jp/main/html/rd/p/000000084.000049012.html',
      newsItem5Date: '2025.02.13',
      newsItem5Content: 'Japan\'s affluent households reach historic high with 1.65 million households and ¥469 trillion in financial assets. Nomura Research Institute survey shows continued growth in households with over ¥100 million in net financial assets, with affluent and ultra-affluent households totaling 1.653 million. Asset management needs expected to grow further amid expanding asset markets and high demand.',
      newsItem5Link: 'https://www.nri.com/jp/news/newsrelease/20250213_1.html',
      
      // Clients Section
      clientsTitle: 'Clients & Partners',
      clientsSubtitle: 'Trusted Partnerships',
      clientsDescription: 'Clients choose us not only for our stable supply sources and professional execution capabilities, but also because we can provide comprehensive support covering trading, appraisal, consulting, and social networking.',
      
      // Client Types
      clientRefiner: 'Refiners',
      clientRefinerDesc: 'Providing stable raw material supply and professional market analysis services to precious metal refining companies',
      clientJewelry: 'Jewelers & Retailers',
      clientJewelryDesc: 'Supporting jewelry retailers in securing quality supply sources, providing product appraisal and market trend consulting services',
      clientInternational: 'International Traders',
      clientInternationalDesc: 'Providing cross-border trading support and compliance assurance for international gold and diamond traders',
      clientCollector: 'Collectors & Worth Clients',
      clientCollectorDesc: 'Providing rare collection trading, investment consulting, and private customization services for collectors',
      clientCorporate: 'Corporations & Family Offices',
      clientCorporateDesc: 'Providing asset allocation advice and wealth management solutions for corporations and family offices',
      clientInstitution: 'Professional Institutions',
      clientInstitutionDesc: 'Building long-term cooperative relationships with financial institutions, investment funds, and other professional institutions',
      
      // Contact Section
      contactDescription1: 'We look forward to hearing from you at Osaka Gold Trading.',
      contactDescription2: 'Providing professional trading and investment services',
      nameLabel: 'Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      serviceLabel: 'Service Request',
      messageLabel: 'Detailed Message',
      sendButton: 'Send',
      sending: 'Sending...',
      successMessage: 'Email sent successfully. We will reply within 24 hours.',
      errorMessage: 'Please try again.',
      privacyMessage: 'We promise to protect your privacy information',
      responseMessage: 'We will reply to your inquiry within 24 hours',
      
      // Form Placeholders
      namePlaceholder: 'Please enter your name',
      emailPlaceholder: 'Please enter your email address',
      phonePlaceholder: 'Please enter your phone number',
      servicePlaceholder: 'Please select the service you are interested in',
      messagePlaceholder: 'Please describe your needs or questions in detail. We will provide professional answers as soon as possible...',
      
      // Service Options
      serviceKGold: 'K18 Gold',
      serviceGoldBars: 'Gold Bar Purchase & Sale',
      serviceAppraisal: 'Precious Metals & Gemstone Appraisal',
      serviceInvestment: 'Asset Management',
      servicePartnership: 'Partnership',
      serviceOther: 'Other Inquiries',
      
      // Validation Messages
      requiredFields: 'Name, email address, and service request are required fields.',
      invalidEmail: 'Please enter a valid email address.',
      networkError: 'A network error occurred.',
      sendFailed: 'Sending failed.',
      
      // Footer
      footerDescription: 'Professional international trading company based in Osaka',
      footerCompanyDesc: 'As Hanpuku Shouji LLC, we are a specialized trading company for 18K gold and diamonds. Through international supply chains and professional execution capabilities, we become a reliable partner connecting Japan and the world.',
      footerServices: 'Services',
      footerContact: 'Contact',
      footerHeadquarters: 'Headquarters Location',
      footerPhone: 'Phone Consultation',
      footerEmail: 'Email Support',
      footerVisit: 'On-site Visit',
      footerByAppointment: 'By Appointment',
      footerCertified: 'Certified',
      footerInternational: 'International Trading',
      footerSecurity: 'Security',
      footerService1: '18K Gold Trading',
      footerService2: 'Diamond Bulk Wholesale',
      footerService3: 'Certified Gold Bar Agency',
      footerService4: 'Precious Metals & Gemstone Appraisal',
      footerService5: 'Investment Consulting',
      footerService6: 'Luxury Collection Distribution',
      allRightsReserved: '© 2024 Hanpuku Shouji LLC・Osaka Gold Trading. All rights reserved.',
      licensedCompany: 'Licensed and regulated precious metals trading company',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ja',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

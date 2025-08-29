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

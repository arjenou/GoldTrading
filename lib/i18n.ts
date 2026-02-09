import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ja: {
    translation: {
      // 导航栏
      home: '会社概要',
      news: 'ニュース',
      services: '事業サービス',
      clients: 'お客様・パートナー',
      contact: 'お問い合わせ',
      consultant: 'コンサルタントに相談',
      price: '買取価格',
      
      // 公司名称
      companyName: 'GOLD TRADING OSAKA',
      companyNameJP: '大阪ゴールドトレーディング',
      
      // 语言切换
      language: '言語',
      japanese: '日本語',
      chinese: '中文',
      vietnamese: 'Tiếng Việt',
      
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
      heroSubtitle1: '大阪を拠点に、貴金属ジュエリー、宝石、時計を中心とした買取および国際販売・輸出入を行っています。',
      heroSubtitle2: 'また、貴金属精錬向け金属原料や古美術・アンティーク品の取引、海外向けオークション対応に加え、会員制ラウンジを通じた来客対応・交流の場の提供にも取り組んでいます。',
      heroSubtitle3: '国際化が進む大阪、そしてIR開発により拡大する市場環境の中で、価値ある取引と人のつながりを支える総合商社を目指します。',
      
      // Company Overview Section
      companyOverviewTitle: '会社概要',
      companyOverviewSubtitle: '大阪を拠点とした国際貿易の専門企業',
      companyDescription1: '大阪を拠点に、貴金属ジュエリー、宝石、時計を中心とした国内買取および国際販売・輸出入を行い、日本市場と海外マーケットをつなぐ流通事業を展開しています。',
      companyDescription2: 'また、貴金属精錬向け原材料の取り扱い、古美術・アンティーク品の取引やオークション対応、価値評価・鑑定支援など、取引を支える周辺サービスも幅広く提供しています。',
      companyDescription3: 'さらに、会員制ラウンジおよび来客対応を目的としたカフェスペースを通じ、商談・交流・情報交換の場を整え、長期的な信頼関係の構築を重視した事業運営を行っています。',
      
      // Company Pillars
      coreTradingTitle: 'コアトレーディング',
      coreTradingDesc: '貴金属ジュエリー・宝石・時計／買取・国内外取引',
      assetSolutionTitle: 'バリューサポート',
      assetSolutionDesc: '鑑定支援・デジタル資産関連・質関連取引・決済関連',
      collectionTitle: 'コレクション流通',
      collectionDesc: '古美術・アンティーク／洋酒・高級時計',
      collectionDesc2: '展示・流通・オークション対応',
      loungeTitle: '会員制ラウンジ',
      loungeDesc1: '交流イベント・宴会・エンターテインメント',
      loungeDesc2: '来客対応ラウンジ・カフェバー・クラブ',
      
      // Mission & Vision
      missionTitle: 'MISSION',
      missionSubtitle: '価値を循環させ、信頼ある市場を未来へつなぐ',
      missionPoint1: '貴金属・宝飾品をはじめとする資源の循環と適正な流通を通じ、持続可能な社会に貢献する',
      missionPoint2: 'コンプライアンスと透明性を重視し、国内外の取引先と長期的な信頼関係を築く',
      missionPoint3: '取引・交流・情報が健全に循環するビジネスエコシステムを構築する',
      
      visionTitle: 'VISION',
      visionSubtitle: '大阪から、世界へ。信頼と流動性のハブとなる',
      visionPoint1: '大阪は今、国際化とIR開発を背景に、新たな経済ステージへと進みつつあります。',
      visionPoint2: '大阪ゴールドトレーディングは、貴金属ジュエリー、宝石、時計などの国内買取と国際販売を中核に、古美術・アンティーク取引、オークション対応、そして会員制ラウンジや来客対応空間を組み合わせた立体的な流通モデルを構築していきます。',
      visionPoint3: '取引の場にとどまらず、人と情報が集い、信頼が育まれる拠点として、日本と世界を結ぶ存在を目指します。',
      
      // Services Section
      servicesTitle: '事業サービス',
      servicesSubtitle: '専門的な貿易サービス',
      servicesDescription: '',
      
      // Service Details
      serviceKGoldTitle: 'K18・プラチナ ジュエリー取引',
      serviceKGoldDesc: '日本国内で流通する新品・中古のK18およびプラチナジュエリーを中心に、確かな加工技術と仕上げ基準を強みに、海外市場向けの卸売・輸出入取引を展開。精錬業者、宝飾商、国際パートナーに対し、安定した取引体制を構築しています。',
      serviceKGoldPoint1: 'K18・プラチナジュエリー（新品・中古）卸売',
      serviceKGoldPoint2: '日本品質を活かした海外向け輸出入取引',
      serviceKGoldPoint3: '継続性を重視したサプライ体制',
      
      serviceDiamondTitle: 'ダイヤモンド・色石・パール取引',
      serviceDiamondDesc: 'ダイヤモンドをはじめ、各種宝石・色石、日本産パール（アコヤ真珠・淡水真珠等）を取り扱い、原産地特性と日本市場の集積力を活かした海外向け流通・輸出対応を行っています。国際鑑定機関および各種証明に基づき、信頼性の高い取引を提供しています。',
      serviceDiamondPoint1: 'ダイヤモンド・宝石・色石・パール卸売',
      serviceDiamondPoint2: '日本産真珠を中心とした海外向け輸出対応',
      serviceDiamondPoint3: '国際鑑定機関（GIA等）・各種証明書対応',
      
      serviceGoldBarsTitle: '認証金・銀地金取引',
      serviceGoldBarsDesc: '日本公認ブランドおよび国際認証を受けた金地金・銀地金を、正規流通ルートに基づき取り扱い。田中貴金属、日本マテリアル等の信頼性の高いブランドを中心に、海外市場向けの輸出取引にも対応し、透明性と実行力を備えた国際取引体制を構築しています。',
      serviceGoldBarsPoint1: '日本公認ブランド金・銀地金の正規取引',
      serviceGoldBarsPoint2: '国際認証金地金・銀地金の取扱い',
      serviceGoldBarsPoint3: '海外向け輸出・国際取引対応',
      
      serviceAppraisalTitle: '貴金属・宝石鑑定',
      serviceAppraisalDesc: '権威ある機関と連携し、金・ダイヤモンド・宝石の専門鑑定と評価を提供、取引と収集の真の価値を保証。',
      serviceAppraisalPoint1: '権威機関連携鑑定',
      serviceAppraisalPoint2: '専門価値評価サービス',
      serviceAppraisalPoint3: '取引収集価値保証',
      
      serviceInvestmentTitle: '資産・事業・取引サポート',
      serviceInvestmentDesc: '貴金属・コレクション分野を基盤に、価値評価を伴う取引、質関連取引、決済・両替、デジタル資産、事業売買（M&A）に関する実務支援を展開。IR関連事業との連携を通じ、取引と事業の流動性向上を支援しています。',
      serviceInvestmentPoint1: '価値評価を基にした取引支援／質関連取引への対応',
      serviceInvestmentPoint2: '両替・決済を含む資金移動支援／デジタル資産関連取引',
      serviceInvestmentPoint3: '事業売買（M&A）実務サポート／IR関連事業連携',
      
      serviceCollectionTitle: 'コレクション・オークション流通',
      serviceCollectionDesc: '洋酒・高級時計・金工芸品・古美術品などのコレクション分野において、国内外市場向けの流通・仲介およびオークション対応を行っています。',
      serviceCollectionPoint1: '高級洋酒・高級時計・金工芸品・古美術品の流通・仲介',
      serviceCollectionPoint2: '国内外オークション対応・取引支援',
      serviceCollectionPoint3: '海外コレクター・法人向け輸出取引',
      
      serviceLoungeTitle: '会員制カフェ＆サロンラウンジ',
      serviceLoungeSubtitle: '近日オープン',
      serviceLoungeDesc: '上質なコーヒーとスイーツで心を解きほぐす空間、人と地域をつなぐプレミアムな交流の場。',
      serviceLoungePoint1: '上質なコーヒーとスイーツで心を解きほぐす空間',
      serviceLoungePoint2: '人と地域をつなぐプレミアムな交流の場',
      serviceLoungePoint3: 'ビジネスパーソン向けエンターテインメント活動を提供するプライベートクラブ',
      
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
      companyBusinessDetail: '貴金属・宝飾品・コレクション分野を中心とした取引・流通および国際取引事業、価値評価・鑑定を伴う取引支援、質関連取引ならびに決済・両替等の取引サポート、飲食業に関連する施設の企画・運営、インバウンド向けサービスおよびこれらに付随する関連事業。',
      companyContact: 'お問い合わせ',
      
      // News Items
      newsItem1Date: '2025.08.11',
      newsItem1Content: '宝石市場の規模、シェア＆業界分析、製品（ネックレス、イヤリング、リング、ブレスレットなど）、材料タイプ（金、プラチナ、ダイヤモンドなど）、エンドユーザー（男性と女性）、地域予測、2025-2032別。',
      newsItem1Link: 'https://www.fortunebusinessinsights.com/jp/%E3%82%B8%E3%83%A5%E3%82%A8%E3%83%AA%E3%83%BC%E5%B8%82%E5%A0%B4-102107',
      newsItem2Date: '2025.06.25',
      newsItem2Content: 'マネーフォワードプライベートバンク、超富裕層のための資産管理プラットフォーム『Money Forward Private BANK』を2025年6月25日より提供開始。',
      newsItem2Link: 'https://prtimes.jp/main/html/rd/p/000000007.000141034.html',
      newsItem3Date: '2025.04.24',
      newsItem3Content: '日本初のIR、大阪万博会場隣地で24日に本体工事着工へ。',
      newsItem3Link: 'https://www.nikkei.com/article/DGXZQOUF11CGD0R10C25A4000000/',
      newsItem4Date: '2025.03.01',
      newsItem4Content: '大谷翔平選手オフィシャルジュエリー最新作「K18 SHIPPO DIAMOND PENDANTS」 全国主要百貨店および小売店にて好評受注販売中。',
      newsItem4Link: 'https://prtimes.jp/main/html/rd/p/000000084.000049012.html',
      newsItem5Date: '2025.02.13',
      newsItem5Content: '野村総合研究所、日本の富裕層・超富裕層は合計約165万世帯、その純金融資産の総額は約469兆円と推計。',
      newsItem5Link: 'https://www.nri.com/jp/news/newsrelease/20250213_1.html',
      
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
      serviceKGold: '貴金属・宝飾品の取引（国内・国際）',
      serviceGoldBars: '個人向け買取・鑑定',
      serviceAppraisal: '資金流動関連サポート',
      serviceInvestment: 'コレクション流通・オークション関連',
      servicePartnership: 'エンターテインメント・ラウンジ関連',
      serviceOther: '事業売買（M&A）・事業連携',
      serviceOtherInquiry: 'その他のお問い合わせ',
      
      // Validation Messages
      requiredFields: 'お名前、メールアドレス、サービス要望は必須項目です。',
      invalidEmail: '有効なメールアドレスを入力してください。',
      networkError: 'ネットワークエラーが発生しました。',
      sendFailed: '送信に失敗しました。',
      
      // Footer
      footerDescription: '大阪を拠点とした国際貿易の専門企業',
      footerCompanyDesc: '阪福商事合同会社として、貴金属・宝飾品分野を軸に国際取引・流通を展開。大阪の商い文化に育まれた調達力と実行体制で、グローバルな取引を支えています。',
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
      footerService1: 'K18・プラチナ ジュエリー取引',
      footerService2: 'ダイヤモンド・色石・パール取引',
      footerService3: '認証金・銀地金取引',
      footerService4: '貴金属・宝石鑑定',
      footerService5: '資産・事業・取引サポート',
      footerService6: 'コレクション・オークション流通',
      allRightsReserved: '© 2025 阪福商事合同会社・大阪ゴールドトレーディング. All rights reserved.',
      licensedCompany: 'Licensed and regulated precious metals trading company',
      
      // Contact Widget & QR Code
      whatsappConsultation: 'WhatsApp 相談',
      wechatConsultation: 'WeChat 相談',
      lineConsultation: 'LINE 相談',
      instagramConsultation: 'Instagram 相談',
      snsConsultation: 'SNS相談',
      consultation: '相談',
      scanQRCode: 'QRコードをスキャンしてください',
      scanWeChatQRCode: '微信二维码をスキャンしてください',
      scanQRCodeWithPhone: 'スマートフォンで QRコードをスキャン',
      selectConsultationMethod: 'ご希望の相談方法をお選びください',
      consultationMessage: '展示・サービスのご相談など 何でもお気軽にお聞きください',
      backToSelection: '選択に戻る',
    }
  },
  zh: {
    translation: {
      // 导航栏
      home: '公司介绍',
      news: '新闻资讯',
      services: '业务服务',
      clients: '客户伙伴',
      contact: '联系我们',
      consultant: '咨询顾问',
      price: '回收价格',
      
      // 公司名称
      companyName: 'GOLD TRADING OSAKA',
      companyNameJP: '大阪金饰奢品行',
      
      // 语言切换
      language: '语言',
      japanese: '日本語',
      chinese: '中文',
      vietnamese: 'Tiếng Việt',
      
      // 其他常用文本
      learnMore: '了解更多',
      readMore: '阅读更多',
      submit: '提交',
      cancel: '取消',
      loading: '加载中...',
      error: '发生错误',
      success: '发送成功',
      
      // Hero Section
      heroTitle: '大阪金饰奢品行',
      heroSubtitle1: '以大阪为据点，开展以贵金属珠宝、宝石、手表为中心的回收以及国际销售・进出口业务。',
      heroSubtitle2: '同时，处理贵金属精炼用金属原料和古美术・古董品的交易、面向海外的拍卖对应，此外还通过休闲会所提供来客对应・交流场所。',
      heroSubtitle3: '在国际化进程中的大阪，以及通过IR开发扩大的市场环境中，我们致力于成为支撑有价值交易和人际连接的综合商社。',
      
      // Company Overview Section
      companyOverviewTitle: '公司概况',
      companyOverviewSubtitle: '以大阪为基地的专业国际贸易企业',
      companyDescription1: '以大阪为基地，开展以贵金属珠宝、宝石、手表为中心的国内回收以及国际销售・进出口，连接日本市场与海外市场的流通事业。',
      companyDescription2: '同时，处理贵金属精炼用原材料、古美术・古董品的交易和拍卖对应、价值评估・鉴定支援等，广泛提供支撑交易的周边服务。',
      companyDescription3: '此外，通过休闲会所以及以来客对应为目的的咖啡空间，提供商务洽谈・交流・信息交换的场所，重视长期信赖关系构建的事业运营。',
      
      // Company Pillars
      coreTradingTitle: '核心交易',
      coreTradingDesc: '贵金属珠宝・宝石・手表／回收・国内外交易',
      assetSolutionTitle: '价值支持',
      assetSolutionDesc: '鉴定支持・数字资产相关・典当相关交易・结算相关',
      collectionTitle: '收藏品流通',
      collectionDesc: '古美术・古董／洋酒・高级手表',
      collectionDesc2: '展示・流通・拍卖对应',
      loungeTitle: '休闲会所',
      loungeDesc1: '交流活动・宴会・娱乐',
      loungeDesc2: '来客对应休息室・咖啡吧・俱乐部',
      
      // Mission & Vision
      missionTitle: '使命',
      missionSubtitle: '循环价值，将可信赖的市场连接至未来',
      missionPoint1: '通过贵金属・珠宝饰品等资源的循环和适当的流通，为可持续社会做出贡献',
      missionPoint2: '重视合规性和透明度，与国内外交易伙伴建立长期信赖关系',
      missionPoint3: '构建交易・交流・信息健康循环的商业生态系统',
      
      visionTitle: '愿景',
      visionSubtitle: '从大阪，到世界。成为信赖和流动性的枢纽',
      visionPoint1: '大阪现在正以国际化和IR开发为背景，迈向新的经济阶段。',
      visionPoint2: '大阪金饰奢品行将以贵金属珠宝、宝石、手表等的国内回收和国际销售为核心，结合古美术・古董交易、拍卖对应，以及休闲会所和来客对应空间，构建立体的流通模式。',
      visionPoint3: '不仅作为交易场所，更作为人与信息汇聚、培育信赖的据点，致力于成为连接日本与世界的存在。',
      
      // Services Section
      servicesTitle: '业务服务',
      servicesSubtitle: '专业的贸易服务',
      servicesDescription: '',
      
      // Service Details
      serviceKGoldTitle: 'K18・铂金 珠宝交易',
      serviceKGoldDesc: '以日本国内流通的新品・二手K18以及铂金珠宝为中心，凭借可靠的加工技术和完成标准，开展面向海外市场的批发・进出口交易。为精炼商、珠宝商、国际合作伙伴构建稳定的交易体制。',
      serviceKGoldPoint1: 'K18・铂金珠宝（新品・二手）批发',
      serviceKGoldPoint2: '利用日本品质的海外进出口交易',
      serviceKGoldPoint3: '重视持续性的供应体制',
      
      serviceDiamondTitle: '钻石・彩色宝石・珍珠交易',
      serviceDiamondDesc: '处理钻石以及各种宝石・彩色宝石、日本产珍珠（阿古屋珍珠・淡水珍珠等），利用原产地特性和日本市场的集聚力，开展面向海外的流通・出口对应。基于国际鉴定机构以及各种证明，提供可靠性高的交易。',
      serviceDiamondPoint1: '钻石・宝石・彩色宝石・珍珠批发',
      serviceDiamondPoint2: '以日本产珍珠为中心的海外出口对应',
      serviceDiamondPoint3: '国际鉴定机构（GIA等）・各种证明书对应',
      
      serviceGoldBarsTitle: '认证金・银地金交易',
      serviceGoldBarsDesc: '基于正规流通路线，处理日本公认品牌以及国际认证的金地金・银地金。以田中贵金属、日本材料等可靠性高的品牌为中心，也对应面向海外市场的出口交易，构建具备透明性和执行力的国际交易体制。',
      serviceGoldBarsPoint1: '日本公认品牌金・银地金的正规交易',
      serviceGoldBarsPoint2: '国际认证金地金・银地金的处理',
      serviceGoldBarsPoint3: '面向海外的出口・国际交易对应',
      
      serviceAppraisalTitle: '贵金属・宝石鉴定',
      serviceAppraisalDesc: '与权威机构合作，提供金・钻石・宝石的专业鉴定和评估，保证交易和收藏的真实价值。',
      serviceAppraisalPoint1: '权威机构合作鉴定',
      serviceAppraisalPoint2: '专业价值评估服务',
      serviceAppraisalPoint3: '交易收藏价值保证',
      
      serviceInvestmentTitle: '资产・事业・交易支持',
      serviceInvestmentDesc: '以贵金属・收藏品领域为基础，开展伴随价值评估的交易、典当相关交易、结算・兑换、数字资产、事业买卖（M&A）相关的实务支持。通过与IR相关事业的合作，支持交易和事业的流动性提高。',
      serviceInvestmentPoint1: '基于价值评估的交易支持／典当相关交易对应',
      serviceInvestmentPoint2: '包含兑换・结算的资金移动支持／数字资产相关交易',
      serviceInvestmentPoint3: '事业买卖（M&A）实务支持／IR相关事业合作',
      
      serviceCollectionTitle: '收藏品・拍卖流通',
      serviceCollectionDesc: '在洋酒・高级手表・金工艺品・古美术品等收藏品领域，开展面向国内外市场的流通・中介以及拍卖对应。',
      serviceCollectionPoint1: '高级洋酒・高级手表・金工艺品・古美术品的流通・中介',
      serviceCollectionPoint2: '国内外拍卖对应・交易支持',
      serviceCollectionPoint3: '面向海外收藏家・法人的出口交易',
      
      serviceLoungeTitle: '会员制咖啡＆休闲会所',
      serviceLoungeSubtitle: '即将开业',
      serviceLoungeDesc: '优质咖啡与甜点让心灵放松的空间，连接人与地区的高端交流场所。',
      serviceLoungePoint1: '优质咖啡与甜点让心灵放松的空间',
      serviceLoungePoint2: '连接人与地区的高端交流场所',
      serviceLoungePoint3: '为商务人士提供娱乐活动的私人会所',
      
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
      companyBusinessDetail: '以贵金属・珠宝饰品・收藏品领域为中心的交易・流通以及国际交易事业、伴随价值评估・鉴定的交易支援、典当相关交易以及结算・兑换等交易支持、与餐饮业相关设施的策划・运营、面向入境游客的服务以及这些附带的相关事业。',
      companyContact: '联系我们',
      
      // News Items
      newsItem1Date: '2025.08.11',
      newsItem1Content: '宝石市场规模、份额及行业分析，产品（项链、耳环、戒指、手镯等），材料类型（金、铂金、钻石等），终端用户（男性和女性），地区预测，2025-2032年分别。',
      newsItem1Link: 'https://www.fortunebusinessinsights.com/jp/%E3%82%B8%E3%83%A5%E3%82%A8%E3%83%AA%E3%83%BC%E5%B8%82%E5%A0%B4-102107',
      newsItem2Date: '2025.06.25',
      newsItem2Content: 'Money Forward Private Bank，超富裕层资产管理平台《Money Forward Private BANK》于2025年6月25日开始提供服务。',
      newsItem2Link: 'https://prtimes.jp/main/html/rd/p/000000007.000141034.html',
      newsItem3Date: '2025.04.24',
      newsItem3Content: '日本首个IR，大阪万博会场邻地24日主体工程开工。',
      newsItem3Link: 'https://www.nikkei.com/article/DGXZQOUF11CGD0R10C25A4000000/',
      newsItem4Date: '2025.03.01',
      newsItem4Content: '大谷翔平选手官方珠宝最新作品「K18 SHIPPO DIAMOND PENDANTS」在全国主要百货店及零售店好评预订销售中。',
      newsItem4Link: 'https://prtimes.jp/main/html/rd/p/000000084.000049012.html',
      newsItem5Date: '2025.02.13',
      newsItem5Content: '野村综合研究所，日本富裕层・超富裕层合计约165万户，其纯金融资产总额约469兆円推算。',
      newsItem5Link: 'https://www.nri.com/jp/news/newsrelease/20250213_1.html',
      
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
      contactDescription1: '我们期待您联系大阪金饰奢品行。',
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
      serviceKGold: '贵金属・珠宝饰品的交易（国内・国际）',
      serviceGoldBars: '面向个人的回收・鉴定',
      serviceAppraisal: '资金流动相关支持',
      serviceInvestment: '收藏品流通・拍卖相关',
      servicePartnership: '娱乐・休息室相关',
      serviceOther: '事业买卖（M&A）・事业合作',
      serviceOtherInquiry: '其他咨询',
      
      // Validation Messages
      requiredFields: '姓名、邮箱地址、服务需求为必填项。',
      invalidEmail: '请输入有效的邮箱地址。',
      networkError: '发生网络错误。',
      sendFailed: '发送失败。',
      
      // Footer
      footerDescription: '以大阪为基地的专业国际贸易企业',
      footerCompanyDesc: '作为阪福商事合同会社，以贵金属・珠宝饰品领域为轴心开展国际交易・流通。凭借大阪商业文化培育的采购力和执行体制，支撑全球交易。',
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
      footerService1: 'K18・铂金 珠宝交易',
      footerService2: '钻石・彩色宝石・珍珠交易',
      footerService3: '认证金・银地金交易',
      footerService4: '贵金属・宝石鉴定',
      footerService5: '资产・事业・交易支持',
      footerService6: '收藏品・拍卖流通',
      allRightsReserved: '© 2025 阪福商事合同会社・大阪金饰奢品行. 版权所有.',
      licensedCompany: '获得许可和监管的贵金属交易公司',
      
      // Contact Widget & QR Code
      whatsappConsultation: 'WhatsApp 咨询',
      wechatConsultation: 'WeChat 咨询',
      lineConsultation: 'LINE 咨询',
      instagramConsultation: 'Instagram 咨询',
      snsConsultation: 'SNS咨询',
      consultation: '咨询',
      scanQRCode: '请扫描QR码',
      scanWeChatQRCode: '请扫描微信二维码',
      scanQRCodeWithPhone: '使用智能手机扫描QR码',
      selectConsultationMethod: '请选择您希望的咨询方式',
      consultationMessage: '请随时咨询展览、服务等任何问题',
      backToSelection: '返回选择',
    }
  },
  en: {
    translation: {
      // Navigation
      home: 'About me',
      news: 'News',
      services: 'Services',
      clients: 'Clients & Partners',
      contact: 'Contact',
      consultant: 'Consult with Expert',
      price: 'Buyback Price',
      
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
      heroSubtitle1: 'Based in Osaka, we conduct domestic buyback and international sales・import/export centered on precious metal jewelry, gemstones, and watches.',
      heroSubtitle2: 'We also handle metal materials for precious metal refining, trade in antiques and vintage items, provide auction services for overseas markets, and offer guest reception and networking spaces through our member lounge.',
      heroSubtitle3: 'In Osaka, which is advancing in internationalization, and within the market environment expanding through IR development, we aim to be a comprehensive trading company that supports valuable transactions and human connections.',
      
      // Company Overview Section
      companyOverviewTitle: 'Company Overview',
      companyOverviewSubtitle: 'Professional International Trading Company Based in Osaka',
      companyDescription1: 'Based in Osaka, we conduct domestic buyback and international sales・import/export centered on precious metal jewelry, gemstones, and watches, developing distribution business that connects Japanese and overseas markets.',
      companyDescription2: 'We also handle raw materials for precious metal refining, trade in antiques and vintage items, provide auction services, value evaluation and appraisal support, and offer a wide range of peripheral services that support trading.',
      companyDescription3: 'Furthermore, through our member lounge and café space designed for guest reception, we provide venues for business negotiations, networking, and information exchange, operating our business with emphasis on building long-term trust relationships.',
      
      // Company Pillars
      coreTradingTitle: 'Core Trading',
      coreTradingDesc: 'Precious Metal Jewelry, Gemstones & Watches / Buyback & International Trade',
      assetSolutionTitle: 'Value Support',
      assetSolutionDesc: 'Appraisal Support, Digital Assets, Pawn-Related Trading & Settlement Services',
      collectionTitle: 'Collection Distribution',
      collectionDesc: 'Antiques & Vintage / Fine Wines & Luxury Watches',
      collectionDesc2: 'Exhibition, Distribution & Auction Services',
      loungeTitle: 'Member Lounge',
      loungeDesc1: 'Networking Events, Banquets & Entertainment',
      loungeDesc2: 'Guest Reception Lounge, Cafe Bar & Club',
      
      // Mission & Vision
      missionTitle: 'MISSION',
      missionSubtitle: 'Circulating Value, Connecting Trusted Markets to the Future',
      missionPoint1: 'Contribute to a sustainable society through the circulation and proper distribution of resources starting with precious metals and jewelry',
      missionPoint2: 'Emphasize compliance and transparency to build long-term trust relationships with domestic and international trading partners',
      missionPoint3: 'Build a business ecosystem where transactions, networking, and information circulate healthily',
      
      visionTitle: 'VISION',
      visionSubtitle: 'From Osaka, to the World. Becoming a Hub of Trust and Liquidity',
      visionPoint1: 'Osaka is now advancing toward a new economic stage against the backdrop of internationalization and IR development.',
      visionPoint2: 'Osaka Gold Trading will build a three-dimensional distribution model centered on domestic buyback and international sales of precious metal jewelry, gemstones, and watches, combined with antiques and vintage trading, auction services, and member lounges and guest reception spaces.',
      visionPoint3: 'Not just as a place for transactions, but as a hub where people and information gather and trust is nurtured, we aim to be a presence connecting Japan and the world.',
      
      // Services Section
      servicesTitle: 'Business Services',
      servicesSubtitle: 'Professional Trading Services',
      servicesDescription: '',
      
      // Service Details
      serviceKGoldTitle: 'K18 & Platinum Jewelry Trading',
      serviceKGoldDesc: 'Focusing on new and pre-owned K18 and platinum jewelry circulating in Japan, we leverage reliable processing technology and finishing standards to develop wholesale and import/export trading for overseas markets. We build stable trading systems for refiners, jewelers, and international partners.',
      serviceKGoldPoint1: 'K18 & Platinum Jewelry (New & Pre-owned) Wholesale',
      serviceKGoldPoint2: 'Import/Export Trading Utilizing Japanese Quality for Overseas Markets',
      serviceKGoldPoint3: 'Supply System Emphasizing Continuity',
      
      serviceDiamondTitle: 'Diamond, Colored Stones & Pearl Trading',
      serviceDiamondDesc: 'We handle diamonds, various gemstones, colored stones, and Japanese pearls (Akoya pearls, freshwater pearls, etc.), conducting distribution and export services for overseas markets by leveraging origin characteristics and Japan\'s market aggregation power. We provide highly reliable trading based on international certification institutions and various certifications.',
      serviceDiamondPoint1: 'Diamond, Gemstone, Colored Stone & Pearl Wholesale',
      serviceDiamondPoint2: 'Export Services for Overseas Markets Centered on Japanese Pearls',
      serviceDiamondPoint3: 'International Certification Institutions (GIA, etc.) & Various Certificate Services',
      
      // Additional Services
      serviceGoldBarsTitle: 'Certified Gold & Silver Bullion Trading',
      serviceGoldBarsDesc: 'We handle Japanese certified brands and internationally certified gold and silver bullion based on legitimate distribution routes. Centered on highly reliable brands such as Tanaka Kikinzoku and Japan Material, we also handle export trading for overseas markets, building an international trading system with transparency and execution capability.',
      serviceGoldBarsPoint1: 'Legitimate Trading of Japanese Certified Brand Gold & Silver Bullion',
      serviceGoldBarsPoint2: 'Handling of Internationally Certified Gold & Silver Bullion',
      serviceGoldBarsPoint3: 'Export & International Trading Services for Overseas Markets',
      
      serviceAppraisalTitle: 'Precious Metals & Gemstone Appraisal',
      serviceAppraisalDesc: 'Collaborating with authoritative institutions to provide professional appraisal and evaluation of gold, diamonds, and gemstones, ensuring true value for trading and collection.',
      serviceAppraisalPoint1: 'Authoritative institution collaboration appraisal',
      serviceAppraisalPoint2: 'Professional value evaluation services',
      serviceAppraisalPoint3: 'Trading and collection value guarantee',
      
      serviceInvestmentTitle: 'Asset, Business & Trading Support',
      serviceInvestmentDesc: 'Based on precious metals and collection fields, we provide practical support for transactions involving value evaluation, pawn-related trading, settlement and exchange, digital assets, and business sales (M&A). Through collaboration with IR-related businesses, we support improving liquidity in trading and business.',
      serviceInvestmentPoint1: 'Trading Support Based on Value Evaluation / Pawn-Related Trading Services',
      serviceInvestmentPoint2: 'Fund Transfer Support Including Exchange & Settlement / Digital Asset-Related Trading',
      serviceInvestmentPoint3: 'Business Sales (M&A) Practical Support / IR-Related Business Collaboration',
      
      serviceCollectionTitle: 'Collection & Auction Distribution',
      serviceCollectionDesc: 'In the collection field including fine wines, luxury watches, gold crafts, and antiques, we conduct distribution, brokerage, and auction services for domestic and international markets.',
      serviceCollectionPoint1: 'Distribution & Brokerage of Fine Wines, Luxury Watches, Gold Crafts & Antiques',
      serviceCollectionPoint2: 'Domestic & International Auction Services & Trading Support',
      serviceCollectionPoint3: 'Export Trading for Overseas Collectors & Corporations',
      
      serviceLoungeTitle: 'Member Café & Salon Lounge',
      serviceLoungeSubtitle: 'Opening Soon',
      serviceLoungeDesc: 'A space to unwind with premium coffee and sweets, a premium meeting place connecting people and the community.',
      serviceLoungePoint1: 'A space to unwind with premium coffee and sweets',
      serviceLoungePoint2: 'A premium meeting place connecting people and community',
      serviceLoungePoint3: 'Private club providing entertainment activities for business professionals',
      
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
      companyBusinessDetail: 'Trading, distribution, and international trading business centered on precious metals, jewelry, and collection fields; trading support involving value evaluation and appraisal; pawn-related trading and settlement/exchange transaction support; planning and operation of facilities related to the food and beverage industry; inbound services and related businesses.',
      companyContact: 'Contact Us',
      
      // News Items
      newsItem1Date: '2025.08.11',
      newsItem1Content: 'Jewelry market size, share & industry analysis, products (necklaces, earrings, rings, bracelets, etc.), material types (gold, platinum, diamonds, etc.), end users (male and female), regional forecasts, 2025-2032.',
      newsItem1Link: 'https://www.fortunebusinessinsights.com/jp/%E3%82%B8%E3%83%A5%E3%82%A8%E3%83%AA%E3%83%BC%E5%B8%82%E5%A0%B4-102107',
      newsItem2Date: '2025.06.25',
      newsItem2Content: 'Money Forward Private Bank launches ultra-high-net-worth asset management platform "Money Forward Private BANK" starting June 25, 2025.',
      newsItem2Link: 'https://prtimes.jp/main/html/rd/p/000000007.000141034.html',
      newsItem3Date: '2025.04.24',
      newsItem3Content: 'Japan\'s first IR, main construction work begins on 24th adjacent to Osaka Expo site.',
      newsItem3Link: 'https://www.nikkei.com/article/DGXZQOUF11CGD0R10C25A4000000/',
      newsItem4Date: '2025.03.01',
      newsItem4Content: 'Shohei Ohtani official jewelry latest work "K18 SHIPPO DIAMOND PENDANTS" receiving favorable advance orders at major department stores and retail stores nationwide.',
      newsItem4Link: 'https://prtimes.jp/main/html/rd/p/000000084.000049012.html',
      newsItem5Date: '2025.02.13',
      newsItem5Content: 'Nomura Research Institute estimates Japan\'s affluent and ultra-affluent households total approximately 1.65 million, with total net financial assets of approximately ¥469 trillion.',
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
      contactTitle: 'Contact Us',
      contactSubtitle: 'Feel free to contact us',
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
      serviceKGold: 'Precious Metals & Jewelry Trading (Domestic & International)',
      serviceGoldBars: 'Personal Buyback & Appraisal',
      serviceAppraisal: 'Fund Liquidity Related Support',
      serviceInvestment: 'Collection Distribution & Auction Related',
      servicePartnership: 'Entertainment & Lounge Related',
      serviceOther: 'Business Sales (M&A) & Business Partnership',
      serviceOtherInquiry: 'Other Inquiries',
      
      // Validation Messages
      requiredFields: 'Name, email address, and service request are required fields.',
      invalidEmail: 'Please enter a valid email address.',
      networkError: 'A network error occurred.',
      sendFailed: 'Sending failed.',
      
      // Footer
      footerDescription: 'Professional international trading company based in Osaka',
      footerCompanyDesc: 'As Hanpuku Shouji LLC, we develop international trading and distribution centered on precious metals and jewelry fields. With procurement capabilities and execution systems nurtured by Osaka\'s business culture, we support global transactions.',
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
      footerService1: 'K18 & Platinum Jewelry Trading',
      footerService2: 'Diamond, Colored Stones & Pearl Trading',
      footerService3: 'Certified Gold & Silver Bullion Trading',
      footerService4: 'Precious Metals & Gemstone Appraisal',
      footerService5: 'Asset, Business & Trading Support',
      footerService6: 'Collection & Auction Distribution',
      allRightsReserved: '© 2025 Hanpuku Shouji LLC・Osaka Gold Trading. All rights reserved.',
      licensedCompany: 'Licensed and regulated precious metals trading company',
      
      // Contact Widget & QR Code
      whatsappConsultation: 'WhatsApp Consultation',
      wechatConsultation: 'WeChat Consultation',
      lineConsultation: 'LINE Consultation',
      instagramConsultation: 'Instagram Consultation',
      snsConsultation: 'SNS Consultation',
      consultation: 'Consultation',
      scanQRCode: 'Please scan the QR code',
      scanWeChatQRCode: 'Please scan the WeChat QR code',
      scanQRCodeWithPhone: 'Scan QR code with your smartphone',
      selectConsultationMethod: 'Please select your preferred consultation method',
      consultationMessage: 'Please feel free to ask about exhibitions, services, etc.',
      backToSelection: 'Back to Selection',
    }
  },
  vi: {
    translation: {
      // Điều hướng
      home: 'Giới thiệu công ty',
      news: 'Tin tức',
      services: 'Dịch vụ kinh doanh',
      clients: 'Khách hàng & Đối tác',
      contact: 'Liên hệ',
      consultant: 'Tư vấn chuyên gia',
      price: 'Giá mua lại',
      
      // Tên công ty
      companyName: 'GOLD TRADING OSAKA',
      companyNameJP: 'Giao dịch vàng Osaka',
      
      // Chuyển đổi ngôn ngữ
      language: 'Ngôn ngữ',
      japanese: '日本語',
      chinese: '中文',
      english: 'English',
      vietnamese: 'Tiếng Việt',
      
      // Các văn bản thông dụng khác
      learnMore: 'Tìm hiểu thêm',
      readMore: 'Đọc thêm',
      submit: 'Gửi',
      cancel: 'Hủy',
      loading: 'Đang tải...',
      error: 'Đã xảy ra lỗi',
      success: 'Gửi thành công',
      
      // Hero Section
      heroTitle: 'Giao dịch vàng Osaka',
      heroSubtitle1: 'Dựa tại Osaka, chúng tôi thực hiện mua lại trong nước và bán hàng quốc tế・nhập khẩu/xuất khẩu tập trung vào trang sức kim loại quý, đá quý và đồng hồ.',
      heroSubtitle2: 'Chúng tôi cũng xử lý nguyên liệu kim loại cho tinh chế kim loại quý, giao dịch đồ cổ và đồ vintage, cung cấp dịch vụ đấu giá cho thị trường nước ngoài, và cung cấp không gian tiếp đón khách và kết nối thông qua phòng khách thành viên của chúng tôi.',
      heroSubtitle3: 'Tại Osaka, nơi đang phát triển quốc tế hóa, và trong môi trường thị trường mở rộng thông qua phát triển IR, chúng tôi hướng tới trở thành một công ty thương mại toàn diện hỗ trợ các giao dịch có giá trị và kết nối con người.',
      
      // Company Overview Section
      companyOverviewTitle: 'Tổng quan công ty',
      companyOverviewSubtitle: 'Công ty thương mại quốc tế chuyên nghiệp dựa tại Osaka',
      companyDescription1: 'Dựa tại Osaka, chúng tôi thực hiện mua lại trong nước và bán hàng quốc tế・nhập khẩu/xuất khẩu tập trung vào trang sức kim loại quý, đá quý và đồng hồ, phát triển kinh doanh phân phối kết nối thị trường Nhật Bản và nước ngoài.',
      companyDescription2: 'Chúng tôi cũng xử lý nguyên liệu thô cho tinh chế kim loại quý, giao dịch đồ cổ và đồ vintage, cung cấp dịch vụ đấu giá, đánh giá giá trị và hỗ trợ thẩm định, và cung cấp một loạt các dịch vụ ngoại vi hỗ trợ giao dịch.',
      companyDescription3: 'Hơn nữa, thông qua phòng khách thành viên và không gian cà phê được thiết kế để tiếp đón khách, chúng tôi cung cấp địa điểm cho đàm phán kinh doanh, kết nối và trao đổi thông tin, vận hành kinh doanh của chúng tôi với trọng tâm xây dựng các mối quan hệ tin cậy lâu dài.',
      
      // Company Pillars
      coreTradingTitle: 'Giao dịch cốt lõi',
      coreTradingDesc: 'Trang sức kim loại quý, đá quý & đồng hồ / Mua lại & Thương mại quốc tế',
      assetSolutionTitle: 'Hỗ trợ giá trị',
      assetSolutionDesc: 'Hỗ trợ thẩm định, Tài sản kỹ thuật số, Giao dịch liên quan đến cầm đồ & Dịch vụ thanh toán',
      collectionTitle: 'Phân phối bộ sưu tập',
      collectionDesc: 'Đồ cổ & Vintage / Rượu cao cấp & Đồng hồ sang trọng',
      collectionDesc2: 'Triển lãm, Phân phối & Dịch vụ đấu giá',
      loungeTitle: 'Phòng khách thành viên',
      loungeDesc1: 'Sự kiện kết nối, Tiệc & Giải trí',
      loungeDesc2: 'Phòng khách tiếp đón khách, Quán cà phê & Câu lạc bộ',
      
      // Mission & Vision
      missionTitle: 'SỨ MỆNH',
      missionSubtitle: 'Lưu thông giá trị, Kết nối thị trường đáng tin cậy với tương lai',
      missionPoint1: 'Đóng góp cho xã hội bền vững thông qua lưu thông và phân phối đúng đắn các nguồn tài nguyên bắt đầu với kim loại quý và trang sức',
      missionPoint2: 'Nhấn mạnh tuân thủ và minh bạch để xây dựng các mối quan hệ tin cậy lâu dài với các đối tác thương mại trong nước và quốc tế',
      missionPoint3: 'Xây dựng một hệ sinh thái kinh doanh nơi các giao dịch, kết nối và thông tin lưu thông lành mạnh',
      
      visionTitle: 'TẦM NHÌN',
      visionSubtitle: 'Từ Osaka, đến thế giới. Trở thành trung tâm của niềm tin và thanh khoản',
      visionPoint1: 'Osaka hiện đang tiến tới một giai đoạn kinh tế mới trong bối cảnh quốc tế hóa và phát triển IR.',
      visionPoint2: 'Giao dịch vàng Osaka sẽ xây dựng một mô hình phân phối ba chiều tập trung vào mua lại trong nước và bán hàng quốc tế của trang sức kim loại quý, đá quý và đồng hồ, kết hợp với giao dịch đồ cổ và vintage, dịch vụ đấu giá, và phòng khách thành viên và không gian tiếp đón khách.',
      visionPoint3: 'Không chỉ là nơi giao dịch, mà còn là trung tâm nơi mọi người và thông tin tụ tập và niềm tin được nuôi dưỡng, chúng tôi hướng tới trở thành một sự hiện diện kết nối Nhật Bản và thế giới.',
      
      // Services Section
      servicesTitle: 'Dịch vụ kinh doanh',
      servicesSubtitle: 'Dịch vụ thương mại chuyên nghiệp',
      servicesDescription: '',
      
      // Service Details
      serviceKGoldTitle: 'Giao dịch trang sức K18 & Bạch kim',
      serviceKGoldDesc: 'Tập trung vào trang sức K18 và bạch kim mới và đã qua sử dụng lưu thông tại Nhật Bản, chúng tôi tận dụng công nghệ chế biến đáng tin cậy và tiêu chuẩn hoàn thiện để phát triển bán buôn và giao dịch nhập khẩu/xuất khẩu cho thị trường nước ngoài. Chúng tôi xây dựng hệ thống giao dịch ổn định cho các nhà tinh chế, thợ kim hoàn và đối tác quốc tế.',
      serviceKGoldPoint1: 'Bán buôn trang sức K18 & Bạch kim (Mới & Đã qua sử dụng)',
      serviceKGoldPoint2: 'Giao dịch nhập khẩu/xuất khẩu sử dụng chất lượng Nhật Bản cho thị trường nước ngoài',
      serviceKGoldPoint3: 'Hệ thống cung ứng nhấn mạnh tính liên tục',
      
      serviceDiamondTitle: 'Giao dịch kim cương, đá màu & ngọc trai',
      serviceDiamondDesc: 'Chúng tôi xử lý kim cương, các loại đá quý khác nhau, đá màu và ngọc trai Nhật Bản (ngọc trai Akoya, ngọc trai nước ngọt, v.v.), thực hiện phân phối và dịch vụ xuất khẩu cho thị trường nước ngoài bằng cách tận dụng đặc điểm nguồn gốc và sức mạnh tập hợp thị trường của Nhật Bản. Chúng tôi cung cấp giao dịch đáng tin cậy cao dựa trên các tổ chức chứng nhận quốc tế và các chứng nhận khác nhau.',
      serviceDiamondPoint1: 'Bán buôn kim cương, đá quý, đá màu & ngọc trai',
      serviceDiamondPoint2: 'Dịch vụ xuất khẩu cho thị trường nước ngoài tập trung vào ngọc trai Nhật Bản',
      serviceDiamondPoint3: 'Tổ chức chứng nhận quốc tế (GIA, v.v.) & Dịch vụ chứng chỉ khác nhau',
      
      serviceGoldBarsTitle: 'Giao dịch vàng & bạc thỏi được chứng nhận',
      serviceGoldBarsDesc: 'Chúng tôi xử lý các thương hiệu được chứng nhận của Nhật Bản và vàng và bạc thỏi được chứng nhận quốc tế dựa trên các tuyến phân phối hợp pháp. Tập trung vào các thương hiệu đáng tin cậy cao như Tanaka Kikinzoku và Japan Material, chúng tôi cũng xử lý giao dịch xuất khẩu cho thị trường nước ngoài, xây dựng hệ thống giao dịch quốc tế với tính minh bạch và khả năng thực thi.',
      serviceGoldBarsPoint1: 'Giao dịch hợp pháp của vàng & bạc thỏi thương hiệu được chứng nhận Nhật Bản',
      serviceGoldBarsPoint2: 'Xử lý vàng & bạc thỏi được chứng nhận quốc tế',
      serviceGoldBarsPoint3: 'Dịch vụ xuất khẩu & giao dịch quốc tế cho thị trường nước ngoài',
      
      serviceAppraisalTitle: 'Thẩm định kim loại quý & đá quý',
      serviceAppraisalDesc: 'Hợp tác với các tổ chức có thẩm quyền để cung cấp thẩm định và đánh giá chuyên nghiệp về vàng, kim cương và đá quý, đảm bảo giá trị thực cho giao dịch và sưu tập.',
      serviceAppraisalPoint1: 'Thẩm định hợp tác tổ chức có thẩm quyền',
      serviceAppraisalPoint2: 'Dịch vụ đánh giá giá trị chuyên nghiệp',
      serviceAppraisalPoint3: 'Đảm bảo giá trị giao dịch và sưu tập',
      
      serviceInvestmentTitle: 'Hỗ trợ tài sản, kinh doanh & giao dịch',
      serviceInvestmentDesc: 'Dựa trên các lĩnh vực kim loại quý và bộ sưu tập, chúng tôi cung cấp hỗ trợ thực tế cho các giao dịch liên quan đến đánh giá giá trị, giao dịch liên quan đến cầm đồ, thanh toán và trao đổi, tài sản kỹ thuật số và bán doanh nghiệp (M&A). Thông qua hợp tác với các doanh nghiệp liên quan đến IR, chúng tôi hỗ trợ cải thiện thanh khoản trong giao dịch và kinh doanh.',
      serviceInvestmentPoint1: 'Hỗ trợ giao dịch dựa trên đánh giá giá trị / Dịch vụ giao dịch liên quan đến cầm đồ',
      serviceInvestmentPoint2: 'Hỗ trợ chuyển tiền bao gồm trao đổi & thanh toán / Giao dịch liên quan đến tài sản kỹ thuật số',
      serviceInvestmentPoint3: 'Hỗ trợ thực tế bán doanh nghiệp (M&A) / Hợp tác doanh nghiệp liên quan đến IR',
      
      serviceCollectionTitle: 'Phân phối bộ sưu tập & đấu giá',
      serviceCollectionDesc: 'Trong lĩnh vực bộ sưu tập bao gồm rượu cao cấp, đồng hồ sang trọng, đồ thủ công vàng và đồ cổ, chúng tôi thực hiện phân phối, môi giới và dịch vụ đấu giá cho thị trường trong nước và quốc tế.',
      serviceCollectionPoint1: 'Phân phối & môi giới rượu cao cấp, đồng hồ sang trọng, đồ thủ công vàng & đồ cổ',
      serviceCollectionPoint2: 'Dịch vụ đấu giá trong nước & quốc tế & Hỗ trợ giao dịch',
      serviceCollectionPoint3: 'Giao dịch xuất khẩu cho nhà sưu tập & tập đoàn nước ngoài',
      
      serviceLoungeTitle: 'Cà phê thành viên & Phòng khách salon',
      serviceLoungeSubtitle: 'Sắp mở cửa',
      serviceLoungeDesc: 'Không gian thư giãn với cà phê và đồ ngọt cao cấp, nơi gặp gỡ cao cấp kết nối mọi người và cộng đồng.',
      serviceLoungePoint1: 'Không gian thư giãn với cà phê và đồ ngọt cao cấp',
      serviceLoungePoint2: 'Nơi gặp gỡ cao cấp kết nối mọi người và cộng đồng',
      serviceLoungePoint3: 'Câu lạc bộ riêng cung cấp hoạt động giải trí cho các chuyên gia kinh doanh',
      
      // News Section
      newsTitle: 'Tin tức',
      newsSubtitle: 'Thông tin mới nhất',
      
      // Company Information
      companyLegalName: 'Tên công ty (Tên thương mại)',
      companyNameLegal: 'Hanpuku Shouji LLC (ハンフクショウジ)',
      companyAddress: 'Vị trí trụ sở chính',
      companyAddressDetail: '〒541-0054 Tầng 2, Phòng 2FB, 3-2-11 Minami-Honmachi, Chuo-ku, Osaka-shi, Tỉnh Osaka',
      companyNumber: 'Số công ty',
      companyNumberValue: '6120-0030-29168',
      companyCapital: 'Vốn',
      companyCapitalValue: '¥10,000,000',
      companyBusiness: 'Mô tả kinh doanh',
      companyBusinessDetail: 'Kinh doanh giao dịch, phân phối và thương mại quốc tế tập trung vào các lĩnh vực kim loại quý, trang sức và bộ sưu tập; hỗ trợ giao dịch liên quan đến đánh giá giá trị và thẩm định; giao dịch liên quan đến cầm đồ và hỗ trợ giao dịch thanh toán/trao đổi; lập kế hoạch và vận hành các cơ sở liên quan đến ngành công nghiệp thực phẩm và đồ uống; dịch vụ inbound và các doanh nghiệp liên quan.',
      companyContact: 'Liên hệ chúng tôi',
      
      // News Items
      newsItem1Date: '2025.08.11',
      newsItem1Content: 'Quy mô thị trường trang sức, phân tích thị phần & ngành, sản phẩm (dây chuyền, bông tai, nhẫn, vòng tay, v.v.), loại vật liệu (vàng, bạch kim, kim cương, v.v.), người dùng cuối (nam và nữ), dự báo khu vực, 2025-2032.',
      newsItem1Link: 'https://www.fortunebusinessinsights.com/jp/%E3%82%B8%E3%83%A5%E3%82%A8%E3%83%AA%E3%83%BC%E5%B8%82%E5%A0%B4-102107',
      newsItem2Date: '2025.06.25',
      newsItem2Content: 'Money Forward Private Bank ra mắt nền tảng quản lý tài sản siêu giàu có "Money Forward Private BANK" bắt đầu từ ngày 25 tháng 6 năm 2025.',
      newsItem2Link: 'https://prtimes.jp/main/html/rd/p/000000007.000141034.html',
      newsItem3Date: '2025.04.24',
      newsItem3Content: 'IR đầu tiên của Nhật Bản, công việc xây dựng chính bắt đầu vào ngày 24 bên cạnh địa điểm Expo Osaka.',
      newsItem3Link: 'https://www.nikkei.com/article/DGXZQOUF11CGD0R10C25A4000000/',
      newsItem4Date: '2025.03.01',
      newsItem4Content: 'Trang sức chính thức Shohei Ohtani tác phẩm mới nhất "K18 SHIPPO DIAMOND PENDANTS" nhận được đơn đặt hàng trước thuận lợi tại các cửa hàng bách hóa và cửa hàng bán lẻ lớn trên toàn quốc.',
      newsItem4Link: 'https://prtimes.jp/main/html/rd/p/000000084.000049012.html',
      newsItem5Date: '2025.02.13',
      newsItem5Content: 'Viện Nghiên cứu Nomura ước tính các hộ gia đình giàu có và siêu giàu có của Nhật Bản tổng cộng khoảng 1,65 triệu, với tổng tài sản tài chính ròng khoảng ¥469 nghìn tỷ.',
      newsItem5Link: 'https://www.nri.com/jp/news/newsrelease/20250213_1.html',
      
      // Clients Section
      clientsTitle: 'Khách hàng & Đối tác',
      clientsSubtitle: 'Quan hệ đối tác đáng tin cậy',
      clientsDescription: 'Khách hàng chọn chúng tôi không chỉ vì nguồn cung ứng ổn định và khả năng thực thi chuyên nghiệp, mà còn vì chúng tôi có thể cung cấp hỗ trợ toàn diện bao gồm giao dịch, thẩm định, tư vấn và mạng xã hội.',
      
      // Client Types
      clientRefiner: 'Nhà tinh chế',
      clientRefinerDesc: 'Cung cấp nguồn cung ứng nguyên liệu thô ổn định và dịch vụ phân tích thị trường chuyên nghiệp cho các công ty tinh chế kim loại quý',
      clientJewelry: 'Thợ kim hoàn & Nhà bán lẻ',
      clientJewelryDesc: 'Hỗ trợ các nhà bán lẻ trang sức đảm bảo nguồn cung ứng chất lượng, cung cấp dịch vụ thẩm định sản phẩm và tư vấn xu hướng thị trường',
      clientInternational: 'Thương nhân quốc tế',
      clientInternationalDesc: 'Cung cấp hỗ trợ giao dịch xuyên biên giới và đảm bảo tuân thủ cho các thương nhân vàng và kim cương quốc tế',
      clientCollector: 'Nhà sưu tập & Khách hàng giàu có',
      clientCollectorDesc: 'Cung cấp giao dịch bộ sưu tập hiếm, tư vấn đầu tư và dịch vụ tùy chỉnh riêng cho các nhà sưu tập',
      clientCorporate: 'Tập đoàn & Văn phòng gia đình',
      clientCorporateDesc: 'Cung cấp lời khuyên phân bổ tài sản và giải pháp quản lý tài sản cho các tập đoàn và văn phòng gia đình',
      clientInstitution: 'Tổ chức chuyên nghiệp',
      clientInstitutionDesc: 'Xây dựng mối quan hệ hợp tác lâu dài với các tổ chức tài chính, quỹ đầu tư và các tổ chức chuyên nghiệp khác',
      
      // Contact Section
      contactTitle: 'Liên hệ chúng tôi',
      contactSubtitle: 'Vui lòng liên hệ với chúng tôi',
      contactDescription1: 'Chúng tôi mong muốn được nghe từ bạn tại Giao dịch vàng Osaka.',
      contactDescription2: 'Cung cấp dịch vụ giao dịch và đầu tư chuyên nghiệp',
      nameLabel: 'Tên',
      emailLabel: 'Địa chỉ email',
      phoneLabel: 'Số điện thoại',
      serviceLabel: 'Yêu cầu dịch vụ',
      messageLabel: 'Tin nhắn chi tiết',
      sendButton: 'Gửi',
      sending: 'Đang gửi...',
      successMessage: 'Email đã được gửi thành công. Chúng tôi sẽ trả lời trong vòng 24 giờ.',
      errorMessage: 'Vui lòng thử lại.',
      privacyMessage: 'Chúng tôi cam kết bảo vệ thông tin riêng tư của bạn',
      responseMessage: 'Chúng tôi sẽ trả lời yêu cầu của bạn trong vòng 24 giờ',
      
      // Form Placeholders
      namePlaceholder: 'Vui lòng nhập tên của bạn',
      emailPlaceholder: 'Vui lòng nhập địa chỉ email của bạn',
      phonePlaceholder: 'Vui lòng nhập số điện thoại của bạn',
      servicePlaceholder: 'Vui lòng chọn dịch vụ bạn quan tâm',
      messagePlaceholder: 'Vui lòng mô tả nhu cầu hoặc câu hỏi của bạn chi tiết. Chúng tôi sẽ cung cấp câu trả lời chuyên nghiệp càng sớm càng tốt...',
      
      // Service Options
      serviceKGold: 'Giao dịch kim loại quý & trang sức (Trong nước & Quốc tế)',
      serviceGoldBars: 'Mua lại & thẩm định cá nhân',
      serviceAppraisal: 'Hỗ trợ liên quan đến thanh khoản quỹ',
      serviceInvestment: 'Phân phối bộ sưu tập & liên quan đến đấu giá',
      servicePartnership: 'Giải trí & liên quan đến phòng khách',
      serviceOther: 'Bán doanh nghiệp (M&A) & Quan hệ đối tác kinh doanh',
      serviceOtherInquiry: 'Yêu cầu khác',
      
      // Validation Messages
      requiredFields: 'Tên, địa chỉ email và yêu cầu dịch vụ là các trường bắt buộc.',
      invalidEmail: 'Vui lòng nhập địa chỉ email hợp lệ.',
      networkError: 'Đã xảy ra lỗi mạng.',
      sendFailed: 'Gửi thất bại.',
      
      // Footer
      footerDescription: 'Công ty thương mại quốc tế chuyên nghiệp dựa tại Osaka',
      footerCompanyDesc: 'Là Hanpuku Shouji LLC, chúng tôi phát triển thương mại quốc tế và phân phối tập trung vào các lĩnh vực kim loại quý và trang sức. Với khả năng mua sắm và hệ thống thực thi được nuôi dưỡng bởi văn hóa kinh doanh của Osaka, chúng tôi hỗ trợ các giao dịch toàn cầu.',
      footerServices: 'Dịch vụ',
      footerContact: 'Liên hệ',
      footerHeadquarters: 'Vị trí trụ sở chính',
      footerPhone: 'Tư vấn điện thoại',
      footerEmail: 'Hỗ trợ email',
      footerVisit: 'Thăm tại chỗ',
      footerByAppointment: 'Theo lịch hẹn',
      footerCertified: 'Đã chứng nhận',
      footerInternational: 'Thương mại quốc tế',
      footerSecurity: 'Bảo mật',
      footerService1: 'Giao dịch trang sức K18 & Bạch kim',
      footerService2: 'Giao dịch kim cương, đá màu & ngọc trai',
      footerService3: 'Giao dịch vàng & bạc thỏi được chứng nhận',
      footerService4: 'Thẩm định kim loại quý & đá quý',
      footerService5: 'Hỗ trợ tài sản, kinh doanh & giao dịch',
      footerService6: 'Phân phối bộ sưu tập & đấu giá',
      allRightsReserved: '© 2025 Hanpuku Shouji LLC・Giao dịch vàng Osaka. Bảo lưu mọi quyền.',
      licensedCompany: 'Công ty giao dịch kim loại quý được cấp phép và quy định',
      
      // Contact Widget & QR Code
      whatsappConsultation: 'Tư vấn WhatsApp',
      wechatConsultation: 'Tư vấn WeChat',
      lineConsultation: 'Tư vấn LINE',
      instagramConsultation: 'Tư vấn Instagram',
      snsConsultation: 'Tư vấn SNS',
      consultation: 'Tư vấn',
      scanQRCode: 'Vui lòng quét mã QR',
      scanWeChatQRCode: 'Vui lòng quét mã QR WeChat',
      scanQRCodeWithPhone: 'Quét mã QR bằng điện thoại thông minh của bạn',
      selectConsultationMethod: 'Vui lòng chọn phương thức tư vấn bạn muốn',
      consultationMessage: 'Vui lòng thoải mái hỏi về triển lãm, dịch vụ, v.v.',
      backToSelection: 'Quay lại lựa chọn',
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

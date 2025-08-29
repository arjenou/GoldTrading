import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Montserrat, Noto_Sans_JP, Noto_Sans_SC } from 'next/font/google'
import './globals.css'
import I18nProvider from '@/components/I18nProvider'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

const notoSansSC = Noto_Sans_SC({ 
  subsets: ['latin'],
  variable: '--font-noto-sans-sc',
})

export const metadata: Metadata = {
  title: '大阪ゴールドトレーディング | 大阪を拠点とした金取引サービス',
  description: '大阪を拠点とし、精錬業者・宝飾商・国際顧客にサービスを提供。安定したサプライチェーンと専門的な実行力で日本と世界を結びます。',
  generator: 'Next.js',
  icons: {
    icon: '/gold-logo.png',
    shortcut: '/gold-logo.png',
    apple: '/gold-logo.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${montserrat.variable} ${notoSansJP.variable} ${notoSansSC.variable}`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}

// （トップページ専用）
import "@/app/globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Mv from "@/components/Mv";
import { Alegreya_SC } from 'next/font/google'

export const metadata = {
  // ブラウザのタブに表示されるページタイトルになります。
  title: 'Kou Bisin Portfolio',
  // SEO（検索エンジン最適化）やSNSリンク表示時に使われる説明文です。
  description: 'フロントエンド開発者のポートフォリオ',
  template: '%s | Kou Bisin Portfolio',
  themeColor: '#ffffff',
  openGraph: {
    type: 'website',
    description: 'Next.js + microCMSを使った制作実績などを掲載',
    title: 'Kou Bisin Portfolio',
    siteName: 'Kou Bisin Portfolio',
    url: 'https://portfolio-phi-two-29.vercel.app',
    images: [
      {
        url: '/ogp.png',
        width: 1200,
        height: 630,
      },
    ],
    twitter: {
      card: 'summary_large_image',
      title: 'Kou Bisin Portfolio',
      description: '制作実績やスキルを紹介するWebポートフォリオ',
      images: ['/ogp.png'],
    },
  },
}

const alegreya = Alegreya_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alegreya-sc',
})

export default function Layout() {
  return (
    <html lang="ja" className={alegreya.variable}>
      <body className="bg-white text-gray-800 font-alegreya">
        <Header />
        <Mv />
        <Footer />
      </body>
    </html>
  );
}

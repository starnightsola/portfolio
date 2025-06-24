import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Alegreya_SC } from 'next/font/google'

export const metadata = {
  // ブラウザのタブに表示されるページタイトルになります。
  title: 'Kou Bisin Portfolio',
  // SEO（検索エンジン最適化）やSNSリンク表示時に使われる説明文です。
  description: 'Next.js + microCMSポートフォリオ',
}

const alegreya = Alegreya_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alegreya-sc',
})

// 全ページ共通レイアウト（共通のHTML構造）を定義する関数コンポーネント
// children: 各ページ（例：/about や /works）の中身がここに差し込まれます。
// ReactNode: Reactが受け取れる子要素の型（JSX要素など）
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={alegreya.variable}>
      <body className="bg-white text-gray-800 font-alegreya">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

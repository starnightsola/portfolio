import { client } from '@/lib/client';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Kou BiShin Portfolio',
  description: '自己紹介ページです。',
}

type About = {
  content: string; // microCMSのフィールド名に合わせて
};

export default async function AboutPage() {
  // data 変数に API から取得した内容を格納。
  let data: About | null = null;

  try {
    // 「microCMSにアクセスする関数」を使って、型（About）で受け取る
    // 「どのデータを取るか？」→ CMSで作った about コンテンツ
    data = await client.get<About>({ endpoint: 'about' });
  } catch (error) {
    console.error('自己紹介データの取得に失敗しました:', error);
  }

  return (
    <main>
      <h2 className="text-4xl font-bold mb-4 text-center">About</h2>
      {data ? (
        <div
          className="prose"
          // CMSからもらったHTMLをそのまま画面に表示する
          aria-label="自己紹介のコンテンツ"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      ) : (
        <p className="text-red-500">データを取得できませんでした。</p>
      )}
    </main>
  );
}

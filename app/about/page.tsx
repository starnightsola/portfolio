import { client } from '@/lib/client';

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
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      {data ? (
        <div
          className="prose"
          // CMSからもらったHTMLをそのまま画面に表示する
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      ) : (
        <p className="text-red-500">データを取得できませんでした。</p>
      )}
    </main>
  );
}

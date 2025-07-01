// app/works/page.tsx
import { client } from '@/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import { Work } from '@/types/work'


// このページは60秒ごとにバックグラウンドで再生成されるようになります。
export const revalidate = 60 // ISR設定（60秒間キャッシュ）

export default async function WorksPage() {
  // await:非同期関数 getList() の結果を待ちます。
  // microCMS SDKは Promise を返すため、await が必要です。
  // endpoint: 'works':microCMS 側で作った「API名」が works のコンテンツ一覧を取得します。
  const { contents } = await client.getList<Work>({ endpoint: 'works' })

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contents.map((work) => (
          <Link
            href={`/works/${work.id}`}
            key={work.id}
            className="block rounded-lg bg-card p-4 hover:shadow-md hover:-translate-y-1 transition duration-300"
          >
            <Image
              src={work.image.url}
              alt={work.title}
              width={work.image.width}
              height={work.image.height}
              className="rounded mb-2"
            />
            <h2 className="text-xl font-semibold">{work.title}</h2>
            <div className="mt-2">
              <p className="text-sm text-gray-500">使用技術:</p>
              <ul className="flex flex-wrap gap-2 mt-1">
                {work.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="bg-tech-badge text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

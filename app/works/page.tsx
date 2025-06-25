// app/works/page.tsx
import { client } from '@/lib/client'
import Link from 'next/link'
import Image from 'next/image'

type Work = {
  id: string
  title: string
  description: string
  technologies: string[]
  image: {
    url: string
    width: number
    height: number
  }
  siteUrl: string
  githubUrl: string
}

export const revalidate = 60 // ISR設定（60秒間キャッシュ）

export default async function WorksPage() {
  const { contents } = await client.getList<Work>({ endpoint: 'works' })

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">実績一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contents.map((work) => (
          <div
            key={work.id}
            className="border rounded-lg shadow hover:shadow-lg transition p-4"
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
              <p className="text-xs text-gray-500">使用技術:</p>
              <ul className="flex flex-wrap gap-2 mt-1">
                {work.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="bg-gray-200 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 mt-4 text-sm">
              <a
                href={work.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                サイト
              </a>
              <a
                href={work.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 underline"
              >
                GitHub
              </a>
              <Link href={`/works/${work.id}`} className="text-green-700 underline">
                詳細
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

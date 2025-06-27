// app/works/[id]/page.tsx
import { client } from '@/lib/client'
import { notFound } from 'next/navigation'
import { Work } from '@/types/work'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 60

// ✅ SSG用のID生成
export async function generateStaticParams() {
  const { contents } = await client.getList<Work>({ endpoint: 'works' })

  return contents.map((item) => ({
    id: item.id,
  }))
}

type Params = Promise<{ id: string }>

export default async function WorkDetailPage(props: {
  params: Params;
}) {
  const params = await props.params
  const contentId = params.id
  const work = await client
    .getListDetail<Work>({
      endpoint: 'works',
      contentId,
    })
    .catch(() => null)

  if (!work) return notFound()

  return (
    <main>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">{work.title}</h1>
        {work.image?.url && (
          <Image
            src={work.image.url}
            alt={work.title}
            width={work.image.width}
            height={work.image.height}
            className="rounded w-full"
          />
        )}
        <ul className="flex justify-center gap-6 mt-6 mb-8">
          <li>
            <a
              href={work.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 whitespace-nowrap bg-white text-button border border-button py-3 px-6 rounded-full hover:opacity-80 transition"
            >
              サイトを見る
              <ExternalLink className="w-4 h-4" />
            </a>
          </li>
          <li>
            <a
              href={work.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 whitespace-nowrap bg-white text-button border border-button py-3 px-6 rounded-full hover:opacity-80 transition font-en"
            >
              GitHub
              <ExternalLink className="w-4 h-4" />
            </a>

          </li>
        </ul>
      </div>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: work.description }}
      />
      <div className="mt-4 text-sm text-gray-600">
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
      <div className="flex justify-center mt-10">
        <Link
          href="/works"
          className="inline-block px-6 py-3 rounded-full text-sm btn-back hover:bg-gray-100 transition"
        >
          ← 実績一覧へ戻る
        </Link>
      </div>
    </main>
  )
}

// app/works/[id]/page.tsx
import { client } from '@/lib/client'
import { notFound } from 'next/navigation'
import { Work } from '@/types/work'
import { ExternalLink } from 'lucide-react'

export const dynamic = 'force-dynamic'
type Props = {
  params: {
    id: string
  }
}

export const revalidate = 60

export async function generateStaticParams() {
  const { contents } = await client.getList<Work>({ endpoint: 'works' })

  return contents.map((item) => ({
    id: item.id,
  }))
}

export default async function WorkDetailPage({ params }: Props) {
  const work = await client
    .getListDetail<Work>({
      endpoint: 'works',
      contentId: params.id,
    })
    .catch(() => null)

  if (!work) return notFound()

  return (
    <main className="p-6">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-center">{work.title}</h1>
        {work.image?.url && (
          <img
            src={work.image.url}
            alt={work.title}
            className="rounded w-full max-w-md mb-6"
          />
        )}
      </div>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: work.description }}
      />
      <div className="mt-4 text-sm text-gray-600">
        <p className="text-xs text-gray-500">使用技術:</p>
        <ul className="flex flex-wrap gap-2 mt-1">
          {work.technologies.map((tech) => (
            <li
              key={tech}
              className="bg-tech-badge text-xs px-2 py-1 rounded"
            >
              {tech}
            </li>
          ))}
        </ul>
        <ul className="flex justify-center gap-6 mt-6">
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
    </main>
  )
}

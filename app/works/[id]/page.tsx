// app/works/[id]/page.tsx
import { client } from '@/lib/client'
import { notFound } from 'next/navigation'

interface WorkDetailPageProps {
  params: { id: string }
  searchParams?: { draftKey?: string }
}

export default async function WorkDetailPage({ params, searchParams }: WorkDetailPageProps) {
  const { id } = params
  const { draftKey } = searchParams || {}

  try {
    const work = await client.getListDetail({
      endpoint: 'works',
      contentId: id,
      queries: {
        draftKey,
      },
    })

    return (
      <div>
        <h1>{work.title}</h1>
        <p>{work.description}</p>
      </div>
    )
  } catch (error) {
    notFound()
  }
}

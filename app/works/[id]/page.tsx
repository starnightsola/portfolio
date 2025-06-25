// app/works/[id]/page.tsx
import { client } from '@/lib/client'
import { notFound } from 'next/navigation'

// 動的レンダリングを強制
export const dynamic = 'force-dynamic'

export default async function WorkDetailPage({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams?: { draftKey?: string }
}) {
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
  } catch {
    notFound()
  }
}

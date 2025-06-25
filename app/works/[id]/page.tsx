// app/works/[id]/page.tsx
import { client } from '@/lib/client'

type Props = {
  params: { id: string }
  searchParams?: { draftKey?: string }
}

export default async function WorkDetailPage({ params, searchParams }: Props) {
  const work = await client.getListDetail({
    endpoint: 'works',
    contentId: params.id,
    queries: {
      draftKey: searchParams?.draftKey,
    },
  })

  return (
    <div>
      <h1>{work.title}</h1>
      <p>{work.description}</p>
    </div>
  )
}

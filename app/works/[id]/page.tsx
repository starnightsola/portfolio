import { client } from '@/lib/client'

export default async function WorkDetailPage({ params, searchParams }: any) {
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

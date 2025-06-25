// app/works/[id]/page.tsx
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!, // ← 下書き取得権限付きのキーを使用
})

// SSG用に全worksのidを生成
export async function generateStaticParams() {
  const { contents } = await client.getList({ endpoint: 'works' })

  return contents.map((content) => ({
    id: content.id,
  }))
}

type Params = Promise<{ id: string }>

export default async function Page(props: {
  params: Params
}) {
  const { isEnabled } = await draftMode()
  const params = await props.params
  const contentId = params.id

  const article = await client
    .getListDetail({
      endpoint: 'works',
      contentId,
      queries: isEnabled ? { draftKey: '' } : {}, // draftMode中のみ空でもOK
    })
    .catch(() => null)

  if (!article) notFound()

  return (
    <article>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      {/* 他のフィールドをここに表示してもOK */}
    </article>
  )
}

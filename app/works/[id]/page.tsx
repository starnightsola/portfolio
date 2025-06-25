// app/works/[id]/page.tsx
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { createClient } from 'microcms-js-sdk'

const draftClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_DRAFT_API_KEY! /* 下書きコンテンツの全取得が付与されたAPIキー */,
})
const publishClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY! /* 公開済みコンテンツのみを取得できるAPIキー */,
})

export async function generateStaticParams() {
    const { contents } = await publishClient.getList({ endpoint: 'works' })

    return contents.map(content => ({
        id: content.id,
    }))
}

type Params = Promise<{ id: string }>
export default async function Page(props: {
    params: Params
}) {

    const { isEnabled } = await draftMode()

    const client = isEnabled ? draftClient : publishClient

    const params = await props.params
    const contentId = params.id

    const article = await client
        .getListDetail({
          endpoint: 'blogs',
          contentId,
        })
        .catch(() => {
          return null
        })

    if (!article) notFound()

    return (
      <article>
        <h1>{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.body }} />
      </article>
    )
}

import { client } from '@/lib/client' // microCMS SDK クライアント
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const contentId = searchParams.get('contentId')
  const draftKey = searchParams.get('draftKey')

  if (secret !== 'PREVIEW_SECRET' || !contentId) {
      return new Response('Invalid token', { status: 401 })
  }

  const article = await client
      .getListDetail({
          endpoint: 'blogs',
          contentId,
          queries: { draftKey: draftKey || undefined },
      })
      .catch(() => null)

  if (!article) {
      return new Response('Invalid article', { status: 401 })
  }

  const draft = await draftMode()
  draft.enable()

  redirect(`/articles/${article.id}`)
}

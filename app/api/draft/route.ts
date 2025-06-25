import { client } from '@/lib/client' // microCMS SDK クライアント
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const contentId = searchParams.get('contentId')
  const draftKey = searchParams.get('draftKey')

  // ✅ 環境変数と比較
  if (secret !== process.env.PREVIEW_SECRET || !contentId || !draftKey) {
    return new Response('Invalid token', { status: 401 })
  }

  // ✅ endpoint: 'works' に変更
  const work = await client
    .getListDetail({
      endpoint: 'works',
      contentId,
      queries: { draftKey },
    })
    .catch(() => null)

  if (!work) {
    return new Response('Invalid article', { status: 401 })
  }

  const draft = await draftMode()
  draft.enable()

  return redirect(`/works/${work.id}?draftKey=${draftKey}`)
}

import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const contentId = searchParams.get('contentId')
  const draftKey = searchParams.get('draftKey')

  if (secret !== process.env.PREVIEW_SECRET || !contentId || !draftKey) {
    return new Response('Invalid token', { status: 401 })
  }

    const draft = await draftMode()
    draft.enable()

  return redirect(`/works/${contentId}?draftKey=${draftKey}`)

}

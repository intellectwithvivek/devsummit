import type { Metadata } from 'next'
import { event } from '@/data/event'

/**
 * The social card, referenced by path.
 *
 * `app/opengraph-image.tsx` only applies to the segment it sits in — it is not
 * inherited by nested routes — so every inner route points at the same generated
 * URL explicitly. `metadataBase` in the root layout makes it absolute.
 */
export const OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: `${event.fullName} — a free Next.js conference website template built with VivekUI`,
}

/**
 * A page's Open Graph block.
 *
 * A page that declares `openGraph` replaces the root layout's object rather than
 * merging into it, so `siteName`, `locale` and `type` are repeated here instead of
 * being inherited and silently lost.
 */
export function og({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata['openGraph'] {
  return {
    type: 'website',
    siteName: event.name,
    locale: 'en_IN',
    url: path,
    title,
    description,
    images: [OG_IMAGE],
  }
}

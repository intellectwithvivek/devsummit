'use client'

/**
 * Custom `next/image` loader — resize at the source instead of at the host.
 *
 * Why this exists: Vercel's built-in optimizer (`/_next/image`) is metered. Once
 * a project exhausts its Image Optimization allowance, every optimized request
 * returns `402 Payment Required` and the whole site loses its images — which is
 * exactly what happens to a free template running on a Hobby plan. Routing
 * through the image host's own transformation API removes that dependency, costs
 * nothing, and still produces a properly sized image per breakpoint.
 *
 * Unsplash and Pexels both serve through Imgix, which reads `w`, `q` and `auto`
 * from the query string. Anything else — another CDN, a local file in /public —
 * is returned untouched rather than being handed parameters it does not
 * understand, so this stays safe if you swap the photography out.
 */

const RESIZABLE_HOSTS = new Set(['images.unsplash.com', 'images.pexels.com'])

export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}): string {
  // Relative sources (/public, static imports) have no host to resize at.
  if (!src.startsWith('http')) return src

  let url: URL
  try {
    url = new URL(src)
  } catch {
    return src
  }

  if (!RESIZABLE_HOSTS.has(url.hostname)) return src

  /*
   * Scale `h` with `w` when the source pins both.
   *
   * The URLs in data/venue.ts ask for a specific crop, e.g. `?w=1400&h=1000&fit=crop`.
   * Overwriting `w` alone would leave the original `h` in place, so a 3840-wide
   * request would crop at 3.84:1 instead of the 1.4:1 the art direction asked
   * for. Recomputing `h` from the source ratio keeps the crop and only changes
   * the size.
   */
  const sourceW = Number(url.searchParams.get('w'))
  const sourceH = Number(url.searchParams.get('h'))
  if (sourceW > 0 && sourceH > 0) {
    url.searchParams.set('h', String(Math.round((width * sourceH) / sourceW)))
  }

  // Overwrite rather than append: the source URLs already carry a `w`/`q`, and
  // a duplicated parameter would leave the chosen breakpoint up to the CDN.
  url.searchParams.set('w', String(width))
  url.searchParams.set('q', String(quality ?? 75))
  // Serve AVIF/WebP to browsers that advertise support for them.
  url.searchParams.set('auto', 'format')

  return url.toString()
}

/**
 * Single source of truth for the event itself.
 *
 * Everything dated is stored as an ISO string with an explicit +05:30 offset, so
 * the server and the browser agree no matter which timezone either sits in — the
 * usual cause of a countdown that disagrees with itself across hydration.
 */

/**
 * Canonical origin. Every absolute URL on the site derives from this —
 * `metadataBase`, canonicals, the sitemap, the JSON-LD and llms.txt — so
 * pointing a fork at its own domain is a one-line change.
 */
export const SITE_URL = 'https://devsummit.vivekkumarsingh.in'

/** This template's own repository. Surfaced in the navbar, the footer and the docs. */
export const REPO = {
  owner: 'intellectwithvivek',
  name: 'devsummit',
  url: 'https://github.com/intellectwithvivek/devsummit',
  cloneHttps: 'git clone https://github.com/intellectwithvivek/devsummit.git',
  issues: 'https://github.com/intellectwithvivek/devsummit/issues',
  license: 'https://github.com/intellectwithvivek/devsummit/blob/main/LICENSE',
  /** One-click Vercel import of this repo. */
  deploy:
    'https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fintellectwithvivek%2Fdevsummit&project-name=devsummit&repository-name=devsummit',
} as const

export const event = {
  name: 'DevSummit 2026',
  fullName: 'DevSummit 2026 — Bengaluru',
  tagline: 'Two days, five tracks, one room full of people who ship.',
  description:
    'DevSummit 2026 is a two-day developer conference in Bengaluru: 48 talks and workshops across Web, AI, DevOps, Design and Career, and 2,400 engineers who came to compare notes.',
  city: 'Bengaluru',
  country: 'India',

  /** Doors open, day one. Also the keynote slot. */
  startISO: '2026-11-12T09:30:00+05:30',
  /** Closing keynote ends, day two. */
  endISO: '2026-11-13T18:00:00+05:30',
  /** What the hero counts down to. */
  keynoteISO: '2026-11-12T09:30:00+05:30',
  /** Early-bird pricing deadline. */
  earlyBirdEndsISO: '2026-09-30T23:59:59+05:30',

  /** Pre-formatted so no locale-sensitive formatting runs during render. */
  dateLine: '12–13 November 2026',
  dayOneLabel: 'Thu 12 Nov',
  dayTwoLabel: 'Fri 13 Nov',
  timezone: 'IST (UTC+5:30)',

  venue: {
    name: 'KTPO Convention Centre',
    area: 'Whitefield',
    addressLine: 'KTPO Convention Centre, Whitefield Main Road, Bengaluru 560066',
    street: 'Whitefield Main Road',
    postalCode: '560066',
    region: 'Karnataka',
    mapQuery: 'KTPO Convention Centre, Whitefield, Bengaluru',
    lat: 12.9959,
    lon: 77.7278,
  },

  contactEmail: 'hello@devsummit.example',
  organiser: 'DevSummit Collective',
} as const

/** The five programme tracks. Order is the order they appear everywhere. */
export const TRACKS = [
  { id: 'web', code: 'WEB', label: 'Web', blurb: 'Browsers, frameworks, and the rendering pipeline.' },
  { id: 'ai', code: 'AI', label: 'AI', blurb: 'Models in production, evals, and agent plumbing.' },
  { id: 'devops', code: 'OPS', label: 'DevOps', blurb: 'Build, ship, observe, and sleep through the night.' },
  { id: 'design', code: 'DES', label: 'Design', blurb: 'Design systems, accessibility, and interface craft.' },
  { id: 'career', code: 'CAR', label: 'Career', blurb: 'Growth, hiring, and the parts nobody documents.' },
] as const

export type TrackId = (typeof TRACKS)[number]['id']

export const TRACK_LABEL: Record<TrackId, string> = {
  web: 'Web',
  ai: 'AI',
  devops: 'DevOps',
  design: 'Design',
  career: 'Career',
}

export const TRACK_CODE: Record<TrackId, string> = {
  web: 'WEB',
  ai: 'AI',
  devops: 'OPS',
  design: 'DES',
  career: 'CAR',
}

/** Site navigation. Real routes, not anchors — each one is indexable. */
export const NAV_LINKS = [
  { href: '/speakers', label: 'Speakers' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/tickets', label: 'Tickets' },
  { href: '/built-with', label: 'Built with' },
] as const

/* ------------------------------------------------------------------------- */
/* VivekUI attribution + UTM tagging                                          */
/* ------------------------------------------------------------------------- */

const UTM_SOURCE = 'vivekui-template'
const UTM_CAMPAIGN = 'conference'

/** Tags a VivekUI link with the campaign and the placement it was clicked from. */
export function utm(url: string, medium: 'navbar' | 'footer' | 'builtwith' | 'readme'): string {
  const joiner = url.includes('?') ? '&' : '?'
  return `${url}${joiner}utm_source=${UTM_SOURCE}&utm_campaign=${UTM_CAMPAIGN}&utm_medium=${medium}`
}

export const VIVEKUI = {
  name: 'VivekUI',
  install: 'npm i @the_viveksingh/vivek-ui',
  docs: 'https://ui.vivekkumarsingh.in/docs',
  components: 'https://ui.vivekkumarsingh.in/docs/components',
  npm: 'https://www.npmjs.com/package/@the_viveksingh/vivek-ui',
  github: 'https://github.com/intellectwithvivek/vivek_UI',
  author: 'https://vivekkumarsingh.in/',
  authorName: 'Vivek Kumar Singh',
  pitch:
    'Built with love using VivekUI — 91 React components · 6 SVG charts · zero runtime dependencies. One install, one CSS import, no config.',
  templateRepo: REPO.url,
} as const

/** Deep link to a single component's docs page, campaign-tagged. */
export function componentDocs(slug: string): string {
  return utm(`${VIVEKUI.components}/${slug}`, 'builtwith')
}

import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'

import '@the_viveksingh/vivek-ui/styles.css'
import '@the_viveksingh/vivek-ui/charts.css'
import './globals.css'

import { Providers } from '@/components/providers'
import { SiteFooter } from '@/components/site-footer'
import { SiteNavbar } from '@/components/site-navbar'
import { SITE_URL, event } from '@/data/event'
import { themeScript } from '@/lib/theme-script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${event.fullName} — Developer Conference`,
    template: `%s | ${event.name}`,
  },
  description: event.description,
  applicationName: event.name,
  authors: [{ name: 'Vivek Kumar Singh', url: 'https://vivekkumarsingh.in/' }],
  creator: 'Vivek Kumar Singh',
  publisher: event.organiser,
  keywords: [
    'conference website template',
    'nextjs conference template',
    'event website template',
    'free nextjs template',
    'developer conference',
    'VivekUI',
  ],
  openGraph: {
    type: 'website',
    siteName: event.name,
    locale: 'en_IN',
    url: SITE_URL,
    title: `${event.fullName} — Developer Conference`,
    description: event.description,
  },
  /* Only the card type is set here. Give it a title and description and every
     route inherits them, because a page that overrides `openGraph` does not
     override `twitter` — leaving them out lets each route's own title through. */
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6d28d9' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0b' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* The font variables go on <html>, not <body>. globals.css declares
       --vk-font-sans on :root as `var(--font-inter), …`, and a custom property is
       substituted on the element that declares it — so with the fonts scoped to
       <body>, --font-inter is undefined at :root, --vk-font-sans computes to the
       guaranteed-invalid value, and every font-family on the page silently falls
       back to the browser default serif. */
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Blocking, in head, on purpose: it sets data-theme before the first
            paint, which is the one thing React cannot do for us. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Providers>
          <a className="ds-skip" href="#main">
            Skip to content
          </a>
          <SiteNavbar />
          <main id="main">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  )
}

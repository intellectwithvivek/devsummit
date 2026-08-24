import Link from 'next/link'
import { Button, Heading, Section, Text } from '@the_viveksingh/vivek-ui'
import { NAV_LINKS } from '@/data/event'

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <Section padding="xl" size="md" className="ds-page-head">
      <span className="ds-mono ds-mono-accent">Error 404 · badge not recognised</span>
      <Heading level={1} size="2xl">
        This session is not on the schedule
      </Heading>
      <Text size="lg" tone="muted" className="ds-measure">
        The page you asked for does not exist. It may have been an anchor on an older version of the
        site — the schedule, speakers and tickets all live on real routes now.
      </Text>

      <div className="ds-cta-row">
        <Button asChild size="lg">
          <Link href="/">Back to the homepage</Link>
        </Button>
        {NAV_LINKS.map((link) => (
          <Button key={link.href} asChild size="lg" variant="outline">
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </div>
    </Section>
  )
}

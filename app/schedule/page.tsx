import type { Metadata } from 'next'
import Link from 'next/link'
import { Alert, Breadcrumb, Button, CTA, Heading, Section, Text } from '@the_viveksingh/vivek-ui'

import { SessionsPerTrackChart } from '@/components/charts'
import { JsonLd } from '@/components/json-ld'
import { ScheduleBrowser } from '@/components/schedule-browser'
import { ScrollRegion } from '@/components/scroll-region'
import { event } from '@/data/event'
import { TOTAL_SESSIONS } from '@/data/stats'
import { breadcrumbSchema } from '@/lib/schema'
import { og } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Schedule',
  description: `The full two-day ${event.name} programme: ${TOTAL_SESSIONS} sessions across Web, AI, DevOps, Design and Career, with a track filter and room numbers.`,
  alternates: { canonical: '/schedule' },
  openGraph: og({
    path: '/schedule',
    title: `Schedule | ${event.name}`,
    description: `The full two-day programme — ${TOTAL_SESSIONS} sessions across five tracks.`,
  }),
}

export default function SchedulePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Schedule', path: '/schedule' },
        ])}
      />

      <Section padding="lg" className="ds-page-head">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Schedule' }]} />
        <span className="ds-mono ds-mono-accent">
          {event.dateLine} · {event.timezone}
        </span>
        <Heading level={1} size="2xl">
          Schedule
        </Heading>
        <Text size="xl" tone="muted" className="ds-measure">
          Both days, every announced session, with the room and the track. Sessions run in parallel
          across five halls — pick a track and the day reads as one column.
        </Text>
      </Section>

      <Section padding="md">
        <Alert tone="info" title="Times are local to Bengaluru">
          Everything is IST (UTC+5:30). Talks are recorded and go up within two weeks; workshops are
          capped at forty seats and are not recorded.
        </Alert>
      </Section>

      <Section padding="md">
        <div className="ds-chart-card ds-chart-card-wide">
          <Heading level={2} size="md">
            Sessions per track
          </Heading>
          <ScrollRegion label="Sessions per track chart">
            <SessionsPerTrackChart />
          </ScrollRegion>
          <Text size="sm" tone="muted">
            All {TOTAL_SESSIONS} sessions across the two days. Web and AI carry the largest share;
            Career is the smallest track and fills up first.
          </Text>
        </div>
      </Section>

      <Section padding="md">
        <ScheduleBrowser />
      </Section>

      <CTA
        variant="muted"
        title="Workshops are the part that sells out"
        description="Forty seats each, not recorded. Regular tickets include one; VIP includes all twelve."
        headingLevel={2}
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/tickets">Get tickets</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/speakers">See the speakers</Link>
            </Button>
          </>
        }
      />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb, Button, CTA, Heading, Section, Text } from '@the_viveksingh/vivek-ui'

import { JsonLd } from '@/components/json-ld'
import { SpeakersBrowser } from '@/components/speakers-browser'
import { TRACKS, event } from '@/data/event'
import { speakers } from '@/data/speakers'
import { breadcrumbSchema, speakerListSchema } from '@/lib/schema'
import { og } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Speakers',
  description: `The ${speakers.length} speakers announced so far for ${event.fullName} — across Web, AI, DevOps, Design and Career. Filter the grid by track.`,
  alternates: { canonical: '/speakers' },
  openGraph: og({
    path: '/speakers',
    title: `Speakers | ${event.name}`,
    description: `The ${speakers.length} speakers announced so far for ${event.fullName}.`,
  }),
}

export default function SpeakersPage() {
  return (
    <>
      <JsonLd data={speakerListSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Speakers', path: '/speakers' },
        ])}
      />

      <Section padding="lg" className="ds-page-head">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Speakers' },
          ]}
        />
        <span className="ds-mono ds-mono-accent">{speakers.length} announced · 48 total</span>
        <Heading level={1} size="2xl">
          Speakers
        </Heading>
        <Text size="xl" tone="muted" className="ds-measure">
          Everyone on this list has shipped the thing they are talking about. Select a speaker for
          their talk and a line on who they are — the rest of the programme is announced through
          September.
        </Text>
      </Section>

      <Section padding="md">
        <SpeakersBrowser speakers={speakers} />
      </Section>

      <Section background="muted" padding="lg">
        <Section.Header
          eyebrow="Tracks"
          title="What each track covers"
          headingLevel={2}
          description="Sessions run in parallel, so the track is how you choose a hall."
        />
        <div className="ds-track-list">
          {TRACKS.map((track) => (
            <div key={track.id} className="ds-track-row">
              <span className="ds-mono ds-mono-accent">{track.code}</span>
              <Text weight="semibold">{track.label}</Text>
              <Text size="sm" tone="muted">
                {track.blurb}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      <CTA
        variant="primary"
        title="Want to hear them in person?"
        description="Early-bird tickets are ₹4,900 and include both days and all five tracks."
        headingLevel={2}
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/tickets">Get tickets</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/schedule">See the schedule</Link>
            </Button>
          </>
        }
      />
    </>
  )
}

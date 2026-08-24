import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Alert,
  Breadcrumb,
  Button,
  Countdown,
  Heading,
  Pricing,
  Section,
  Table,
  Text,
} from '@the_viveksingh/vivek-ui'

import { BuyButton } from '@/components/buy-button'
import { JsonLd } from '@/components/json-ld'
import { event } from '@/data/event'
import { comparison, groupDiscount, tiers } from '@/data/tickets'
import { breadcrumbSchema } from '@/lib/schema'
import { og } from '@/lib/seo'

export const revalidate = 3600

/* Module scope, not the component body: see the note in app/page.tsx. */
const RENDERED_AT = Date.now()

export const metadata: Metadata = {
  title: 'Tickets',
  description: `${event.name} tickets: early bird ₹4,900, regular ₹7,900, VIP ₹14,900. Every tier covers both days and all five tracks. Group and student rates available.`,
  alternates: { canonical: '/tickets' },
  openGraph: og({
    path: '/tickets',
    title: `Tickets | ${event.name}`,
    description:
      'Early bird ₹4,900, regular ₹7,900, VIP ₹14,900 — both days and all five tracks in every tier.',
  }),
}

export default function TicketsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Tickets', path: '/tickets' },
        ])}
      />

      <Section padding="lg" className="ds-page-head">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Tickets' }]} />
        <span className="ds-mono ds-mono-accent">2,400 seats · sold out in nine days last year</span>
        <Heading level={1} size="2xl">
          Tickets
        </Heading>
        <Text size="xl" tone="muted" className="ds-measure">
          Every tier includes both days and all five tracks. What changes is workshop access, seating
          and how soon you get the recordings.
        </Text>

        <div className="ds-hero-countdown ds-deadline-panel">
          <p className="ds-mono ds-mono-accent">Early-bird pricing ends in</p>
          <Countdown
            to={event.earlyBirdEndsISO}
            now={RENDERED_AT}
            label="Time left on early-bird pricing"
            completeLabel="Early-bird pricing has closed"
            className="ds-countdown-big"
          />
        </div>
      </Section>

      <Pricing
        headingLevel={2}
        columns={{ base: 1, md: 3 }}
        plans={tiers.map((tier) => ({
          id: tier.id,
          name: tier.name,
          price: tier.price,
          period: tier.period,
          description: tier.description,
          features: tier.features,
          highlighted: tier.highlighted,
          badge: tier.badge,
          cta: (
            <BuyButton
              tier={tier.name}
              price={tier.price}
              variant={tier.highlighted ? 'solid' : 'outline'}
            />
          ),
        }))}
      />

      {/* ---------------------------------------------------------- Comparison */}
      <Section background="muted" padding="lg">
        <Section.Header
          eyebrow="Compare"
          title="What each tier actually gets you"
          headingLevel={2}
          description="The same information as the cards above, in the form people actually read before expensing something."
        />

        <Table striped hoverable size="md" containerProps={{ className: 'ds-scroll-x', role: 'region', tabIndex: 0, 'aria-label': 'Ticket tier comparison table' }}>
          <Table.Caption visuallyHidden>
            Ticket tier comparison: features by early bird, regular and VIP
          </Table.Caption>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell scope="col">Feature</Table.HeaderCell>
              <Table.HeaderCell scope="col">Early bird — ₹4,900</Table.HeaderCell>
              <Table.HeaderCell scope="col">Regular — ₹7,900</Table.HeaderCell>
              <Table.HeaderCell scope="col">VIP — ₹14,900</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {comparison.map((row) => (
              <Table.Row key={row.feature}>
                <Table.HeaderCell scope="row">{row.feature}</Table.HeaderCell>
                <Table.Cell label="Early bird">{row.early}</Table.Cell>
                <Table.Cell label="Regular">{row.regular}</Table.Cell>
                <Table.Cell label="VIP">{row.vip}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Section>

      {/* ------------------------------------------------------ Group discount */}
      <Section padding="lg" size="md">
        <Alert tone="success" variant="soft" title={groupDiscount.title}>
          {groupDiscount.body}
        </Alert>

        <div className="ds-section-foot">
          <Button asChild variant="outline">
            <Link href="/schedule">See what you would be attending</Link>
          </Button>
        </div>
      </Section>
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AnimatedCounter,
  Badge,
  Button,
  Card,
  Carousel,
  Countdown,
  FAQ,
  Flex,
  Grid,
  Heading,
  LogoCloud,
  MapEmbed,
  Pricing,
  Section,
  Stats,
  Text,
} from '@the_viveksingh/vivek-ui'

import { AudienceMixChart, SessionsPerTrackChart } from '@/components/charts'
import { JsonLd } from '@/components/json-ld'
import { LanyardBadge } from '@/components/lanyard-badge'
import { NewsletterSignup } from '@/components/newsletter-signup'
import { ScheduleTabs } from '@/components/schedule-tabs'
import { ScrollRegion } from '@/components/scroll-region'
import { SessionTimeline } from '@/components/session-timeline'
import { SpeakerGrid } from '@/components/speaker-grid'
import { sponsorMark } from '@/components/sponsor-logos'
import { BuyButton } from '@/components/buy-button'

import { TRACKS, event } from '@/data/event'
import { faqs } from '@/data/faq'
import { schedule } from '@/data/schedule'
import { featuredSpeakers, speakers } from '@/data/speakers'
import { TIER_LABEL, TIER_ORDER, sponsorsByTier } from '@/data/sponsors'
import { TOTAL_SESSIONS, headlineStats } from '@/data/stats'
import { tiers } from '@/data/tickets'
import { media, pastEditions, travelOptions } from '@/data/venue'
import { breadcrumbSchema, eventSchema, faqSchema, websiteSchema } from '@/lib/schema'
import { og } from '@/lib/seo'

/* Re-rendered hourly so a statically cached page never ships a badly stale
   countdown to a visitor with JavaScript disabled. */
export const revalidate = 3600

/*
 * Seeds the countdown's first render on both sides of hydration, so the server
 * HTML holds real numbers rather than the component's "--" placeholder.
 *
 * At module scope rather than in the component body, because rendering has to be
 * pure and Date.now() returns something different on every render. This is
 * stamped when the module is first evaluated — at build time, and again when the
 * route revalidates — and the client re-reads its own clock on mount, so a stale
 * stamp is on screen for one frame at most.
 */
const RENDERED_AT = Date.now()

export const metadata: Metadata = {
  title: 'Free Conference / Event Website Template (Next.js) — DevSummit | VivekUI',
  description:
    'A free, open-source Next.js 16 conference website template: live countdown, speaker grid, two-day schedule timeline, ticket tiers and SVG charts. Built with VivekUI, zero runtime dependencies.',
  alternates: { canonical: '/' },
  openGraph: og({
    path: '/',
    title: 'Free Conference / Event Website Template (Next.js) — DevSummit | VivekUI',
    description:
      'A free, open-source Next.js 16 conference website template. Countdown, speakers, schedule, tickets and charts — built with VivekUI.',
  }),
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={eventSchema()} />
      <JsonLd data={faqSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }])} />

      {/* ---------------------------------------------------------------- Hero */}
      <Section className="ds-hero" padding="xl" size="xl">
        <div className="ds-hero-grid">
          <div className="ds-hero-copy">
            <div className="ds-hero-meta">
              <Badge variant="soft" tone="primary" pill>
                Fourth edition
              </Badge>
              <span className="ds-mono">
                {event.dateLine} · {event.city} · {event.timezone}
              </span>
            </div>

            <Heading level={1} size="hero">
              Two days with the people who
              <span className="ds-hero-accent"> actually ship</span>.
            </Heading>

            <Text size="xl" tone="muted" className="ds-measure">
              {event.name} is {TOTAL_SESSIONS} talks and workshops across five tracks at{' '}
              {event.venue.name}, {event.venue.area}. No keynote fluff, no vendor pitches — every
              session comes from someone who has shipped the thing they are describing.
            </Text>

            <div className="ds-hero-countdown">
              <p className="ds-mono ds-mono-accent">Opening keynote begins in</p>
              <Countdown
                to={event.keynoteISO}
                now={RENDERED_AT}
                label="Time until the opening keynote"
                completeLabel="The opening keynote has begun"
                className="ds-countdown-big"
              />
            </div>

            <Flex gap={3} wrap>
              <Button asChild size="lg">
                <Link href="/tickets">Get tickets — from ₹4,900</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/schedule">See the full schedule</Link>
              </Button>
            </Flex>
          </div>

          <div className="ds-hero-media">
            {/* Signature element: the badge you will be wearing. */}
            <LanyardBadge />
            <div className="ds-frame ds-hero-frame">
              <Image
                src={media.heroStage.src}
                alt={media.heroStage.alt}
                width={1400}
                height={1000}
                priority
                sizes="(max-width: 768px) 100vw, 44vw"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------------------- Stats */}
      <Stats
        background="muted"
        eyebrow="The room"
        title="What two days looks like"
        headingLevel={2}
        columns={{ base: 2, md: 4 }}
        items={headlineStats.map((stat) => ({
          id: stat.id,
          label: stat.label,
          description: stat.description,
          value: (
            <AnimatedCounter
              value={stat.value}
              locale="en-IN"
              format={{ maximumFractionDigits: 0 }}
              suffix={stat.suffix}
            />
          ),
        }))}
      />

      {/* -------------------------------------------------------- Who attends */}
      <Section id="who-attends" padding="lg">
        <Section.Header
          eyebrow="Who attends"
          title="Over half the room writes code for a living"
          description="DevSummit is a practitioner conference, and the mix reflects that. Talks assume you have shipped something and been on call for it."
          headingLevel={2}
        />

        <Grid cols={{ base: 1, md: 2 }} gap={8}>
          <div className="ds-chart-card">
            <AudienceMixChart />
            <Text size="sm" tone="muted">
              Share of the 2,400 attendees by role, from the 2025 post-event survey (1,910
              responses). Percentages are rounded, so they may not total exactly 100.
            </Text>
          </div>

          <div className="ds-audience-notes">
            {TRACKS.map((track) => (
              <div key={track.id} className="ds-audience-note">
                <span className="ds-mono ds-mono-accent">{track.code}</span>
                <div>
                  <Text weight="semibold">{track.label}</Text>
                  <Text size="sm" tone="muted">
                    {track.blurb}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </Grid>
      </Section>

      {/* ------------------------------------------------------------ Speakers */}
      <Section id="speakers" background="muted" padding="lg">
        <Section.Header
          eyebrow="Speakers"
          title="Eighteen of forty-eight, announced"
          description="Select any speaker for their talk and a line on who they are. The rest of the programme lands through September."
          headingLevel={2}
        />

        <SpeakerGrid speakers={featuredSpeakers} />

        <div className="ds-section-foot">
          <Button asChild variant="outline">
            <Link href="/speakers">All {speakers.length} announced speakers</Link>
          </Button>
        </div>
      </Section>

      {/* ------------------------------------------------------------ Schedule */}
      <Section id="schedule" padding="lg">
        <Section.Header
          eyebrow="Schedule"
          title="Five tracks, two days, one hallway"
          description="Sessions run in parallel across five halls. Keynotes are in the Main Hall and nothing is scheduled against them."
          headingLevel={2}
        />

        <Grid cols={{ base: 1, lg: 2 }} gap={8} className="ds-schedule-top">
          <div className="ds-chart-card">
            <Heading level={3} size="sm">
              Sessions per track
            </Heading>
            <ScrollRegion label="Sessions per track chart">
              <SessionsPerTrackChart />
            </ScrollRegion>
            <Text size="sm" tone="muted">
              Web and AI take the largest share of the {TOTAL_SESSIONS}-session programme. Career is
              the smallest track but runs in the largest hall — it fills up first.
            </Text>
          </div>

          <Card variant="outline" padding="lg" className="ds-schedule-note">
            <Card.Body>
              <Heading level={3} size="sm">
                How to plan your two days
              </Heading>
              <Text tone="muted">
                Every talk is recorded, so do not spend the day picking between two rooms — go to the
                one with the speaker you want to corner afterwards, and watch the other next week.
              </Text>
              <Text tone="muted">
                Workshops are the exception. They are capped at forty seats, not recorded, and the
                seat is the value. Book them first.
              </Text>
              <Flex gap={3} wrap>
                <Badge variant="soft" tone="primary" pill>
                  <span aria-hidden="true">★</span> Keynote
                </Badge>
                <Badge variant="soft" tone="warning" pill>
                  Workshop
                </Badge>
                <Badge variant="outline" tone="neutral">
                  Track
                </Badge>
              </Flex>
            </Card.Body>
          </Card>
        </Grid>

        <ScheduleTabs
          dayOne={<SessionTimeline sessions={schedule[0].sessions} headingLevel={4} />}
          dayTwo={<SessionTimeline sessions={schedule[1].sessions} headingLevel={4} />}
        />

        <div className="ds-section-foot">
          <Button asChild variant="outline">
            <Link href="/schedule">Full schedule with abstracts</Link>
          </Button>
        </div>
      </Section>

      {/* ------------------------------------------------------------- Tickets */}
      <Pricing
        id="tickets"
        background="muted"
        eyebrow="Tickets"
        title="Three tiers, no hidden add-ons"
        description="Every tier includes both days and all five tracks. What changes is the workshops and how early you get the recordings."
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
          cta:
            tier.id === 'early-bird' ? (
              <div className="ds-tier-cta">
                <div className="ds-tier-deadline">
                  <span className="ds-mono ds-mono-accent">Early-bird pricing ends in</span>
                  {/* Labels stay on, abbreviated: "37 08 37" on its own does not
                      say which unit is which to anyone looking at it. */}
                  <Countdown
                    to={event.earlyBirdEndsISO}
                    now={RENDERED_AT}
                    format={['days', 'hours', 'minutes']}
                    labels={{ days: 'days', hours: 'hrs', minutes: 'min' }}
                    label="Time left on early-bird pricing"
                    completeLabel="Early-bird pricing has closed"
                    className="ds-countdown-inline"
                  />
                </div>
                <BuyButton tier={tier.name} price={tier.price} variant="outline" />
              </div>
            ) : (
              <BuyButton
                tier={tier.name}
                price={tier.price}
                variant={tier.highlighted ? 'solid' : 'outline'}
              />
            ),
        }))}
      />

      <Section padding="sm">
        <div className="ds-section-foot">
          <Button asChild variant="ghost">
            <Link href="/tickets">Compare the tiers side by side</Link>
          </Button>
        </div>
      </Section>

      {/* --------------------------------------------------------------- Venue */}
      <Section id="venue" padding="lg">
        <Section.Header
          eyebrow="Venue"
          title={`${event.venue.name}, ${event.venue.area}`}
          description={event.venue.addressLine}
          headingLevel={2}
        />

        <Grid cols={{ base: 1, lg: 2 }} gap={8}>
          <MapEmbed
            query={event.venue.mapQuery}
            lat={event.venue.lat}
            lon={event.venue.lon}
            zoom={15}
            ratio={4 / 3}
            title={`Map showing ${event.venue.name} in ${event.venue.area}, ${event.city}`}
            className="ds-frame"
          />

          <div>
            <Heading level={3} size="md" className="ds-subhead">
              Getting there
            </Heading>
            {/* The parts are imported by name, not reached as Accordion.Item:
                accordion is a client module, so the properties Object.assign
                attaches at runtime are invisible from a Server Component. */}
            <Accordion type="single" collapsible headingLevel={4} variant="separated">
              {travelOptions.map((option) => (
                <AccordionItem key={option.id} value={option.id}>
                  <AccordionTrigger>{option.label}</AccordionTrigger>
                  <AccordionContent>
                    <Text tone="muted">{option.detail}</Text>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Grid>
      </Section>

      {/* ------------------------------------------------------------ Sponsors */}
      <Section id="sponsors" background="muted" padding="lg">
        <Section.Header
          eyebrow="Sponsors"
          title="Who pays for the coffee"
          description="Nine companies underwrite the event, which is what keeps the student ticket at ₹1,500."
          headingLevel={2}
        />

        {TIER_ORDER.map((tier) => (
          <LogoCloud
            key={tier}
            title={TIER_LABEL[tier]}
            headingLevel={3}
            padding="sm"
            logos={sponsorsByTier(tier).map((sponsor) => ({
              id: sponsor.id,
              alt: sponsor.name,
              node: sponsorMark(sponsor),
            }))}
          />
        ))}
      </Section>

      {/* ------------------------------------------------------- Past editions */}
      <Section id="past" padding="lg">
        <Section.Header
          eyebrow="Past editions"
          title="What the last two looked like"
          description="Same venue, smaller hall, and the mixer that ran two hours past its slot."
          headingLevel={2}
        />

        <Carousel
          slidesPerView={{ base: 1, md: 2, lg: 3 }}
          gap={4}
          showArrows
          showDots
          label="Photos from past DevSummit editions"
        >
          {pastEditions.map((edition) => (
            <figure key={edition.id} className="ds-frame">
              <Image
                src={edition.src}
                alt={edition.alt}
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="ds-frame-caption">
                <span className="ds-mono ds-mono-accent">{edition.year}</span>
                <Text size="sm" tone="muted">
                  {edition.caption}
                </Text>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </Section>

      {/* ----------------------------------------------------------------- FAQ */}
      <FAQ
        id="faq"
        background="muted"
        eyebrow="Questions"
        title="Frequently asked"
        headingLevel={2}
        name="devsummit-faq"
        defaultOpen={0}
        items={faqs.map((entry) => ({
          id: entry.id,
          question: entry.question,
          answer: entry.answer,
        }))}
      />

      {/* ---------------------------------------------------------- Newsletter */}
      <Section id="newsletter" padding="lg" size="md">
        <NewsletterSignup />
      </Section>
    </>
  )
}

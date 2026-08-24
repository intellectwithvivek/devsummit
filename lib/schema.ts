import { REPO, SITE_URL, VIVEKUI, event } from '@/data/event'
import { faqs } from '@/data/faq'
import { programmeWithDays, sessionEndISO, sessionStartISO } from '@/data/schedule'
import { speakers } from '@/data/speakers'
import { tiers } from '@/data/tickets'
import { media } from '@/data/venue'

/* The venue and the author are referenced from several graphs, so they are
   written once and reused rather than duplicated with small differences. */

const place = {
  '@type': 'Place',
  name: event.venue.name,
  address: {
    '@type': 'PostalAddress',
    streetAddress: event.venue.street,
    addressLocality: event.city,
    addressRegion: event.venue.region,
    postalCode: event.venue.postalCode,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: event.venue.lat,
    longitude: event.venue.lon,
  },
} as const

const author = {
  '@type': 'Person',
  name: VIVEKUI.authorName,
  url: VIVEKUI.author,
  sameAs: [VIVEKUI.author, 'https://github.com/intellectwithvivek', VIVEKUI.github],
  jobTitle: 'Software engineer and author of VivekUI',
} as const

/**
 * schema.org Event for the homepage.
 *
 * Carries an offer per tier, a performer per announced speaker, and a `subEvent`
 * per session — which is what lets an assistant answer "what talks are at
 * DevSummit and when" from the markup instead of guessing from prose.
 */
export function eventSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${SITE_URL}/#event`,
    name: event.fullName,
    description: event.description,
    url: SITE_URL,
    startDate: event.startISO,
    endDate: event.endISO,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    image: [media.heroStage.src, media.audience.src],
    isAccessibleForFree: false,
    inLanguage: 'en',
    maximumAttendeeCapacity: 2400,
    typicalAgeRange: '18-',
    location: place,
    organizer: {
      '@type': 'Organization',
      name: event.organiser,
      url: SITE_URL,
    },
    offers: tiers.map((tier) => ({
      '@type': 'Offer',
      name: tier.name,
      description: tier.description,
      price: tier.amount,
      priceCurrency: 'INR',
      availability: `https://schema.org/${tier.availability}`,
      url: `${SITE_URL}/tickets`,
      validFrom: '2026-06-01T00:00:00+05:30',
      ...(tier.id === 'early-bird' ? { validThrough: event.earlyBirdEndsISO } : {}),
    })),
    performer: speakers.map((speaker) => ({
      '@type': 'Person',
      name: speaker.name,
      jobTitle: speaker.title,
      affiliation: { '@type': 'Organization', name: speaker.company },
    })),
    subEvent: programmeWithDays().map(({ day, session }) => ({
      '@type': session.kind === 'workshop' ? 'EducationEvent' : 'Event',
      name: session.title,
      description: session.description,
      startDate: sessionStartISO(day, session),
      endDate: sessionEndISO(day, session),
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      url: `${SITE_URL}/schedule`,
      location: { '@type': 'Place', name: `${session.room}, ${event.venue.name}` },
      ...(session.speakerId
        ? {
            performer: {
              '@type': 'Person',
              name: speakers.find((s) => s.id === session.speakerId)?.name,
            },
          }
        : {}),
    })),
  }
}

/** Names the site itself, so the two are not conflated with the event. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: `${event.name} — free Next.js conference website template`,
    alternateName: event.name,
    url: SITE_URL,
    description:
      'A free, open-source Next.js 16 conference and event website template built with VivekUI. Clone it, change the data files, and ship your own event site.',
    inLanguage: 'en',
    author,
    publisher: author,
    license: 'https://opensource.org/licenses/MIT',
  }
}

/**
 * The template as a piece of software.
 *
 * This is the graph that matters for the actual audience — developers looking
 * for a free Next.js conference template — and it is what makes the repository,
 * the licence and the stack machine-readable.
 */
export function softwareSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    '@id': `${SITE_URL}/built-with#software`,
    name: 'DevSummit 2026 — Next.js conference website template',
    description:
      'An open-source conference and event website template for Next.js 16 and React 19, built entirely from VivekUI components with zero runtime dependencies. Includes a live countdown, speaker grid, two-day schedule timeline, ticket tiers, SVG charts, and SEO and accessibility wired up.',
    url: `${SITE_URL}/built-with`,
    codeRepository: REPO.url,
    programmingLanguage: [
      { '@type': 'ComputerLanguage', name: 'TypeScript' },
      { '@type': 'ComputerLanguage', name: 'CSS' },
    ],
    runtimePlatform: 'Node.js 20.9+',
    license: 'https://opensource.org/licenses/MIT',
    author,
    maintainer: author,
    isAccessibleForFree: true,
    keywords:
      'nextjs template, conference website template, event website template, react 19, typescript, vivekui, open source, free',
    about: {
      '@type': 'SoftwareApplication',
      name: 'VivekUI',
      applicationCategory: 'DeveloperApplication',
      url: VIVEKUI.docs,
      description:
        'A free React component library with zero runtime dependencies: 91 accessible components and 6 SVG charts.',
      offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
    },
  }
}

/** The announced speaker line-up as an ordered list. */
export function speakerListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/speakers#list`,
    name: `Speakers at ${event.fullName}`,
    numberOfItems: speakers.length,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    itemListElement: speakers.map((speaker, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: speaker.name,
        jobTitle: speaker.title,
        description: speaker.bio,
        affiliation: { '@type': 'Organization', name: speaker.company },
        image: speaker.avatar,
        performerIn: { '@type': 'Event', name: speaker.talk },
      },
    })),
  }
}

/** One trail per route. The last entry is the current page. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  }
}

/**
 * FAQPage built from a list of question/answer strings.
 *
 * Both FAQs on this site — the attendee one on `/` and the template one on
 * `/built-with` — go through here, so the visible copy and the markup cannot
 * drift apart.
 */
export function faqSchema(
  entries: { question: string; answer: string }[] = faqs,
  id = `${SITE_URL}/#faq`,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: { '@type': 'Answer', text: entry.answer },
    })),
  }
}

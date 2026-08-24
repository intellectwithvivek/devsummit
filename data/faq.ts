/**
 * Answers are plain strings on purpose: the same text feeds the visible FAQ and
 * the FAQPage JSON-LD, and a ReactNode cannot be serialised into structured data
 * without stringifying markup by hand.
 */
export interface FaqEntry {
  id: string
  question: string
  answer: string
}

export const faqs: FaqEntry[] = [
  {
    id: 'refunds',
    question: 'What is the refund policy?',
    answer:
      'Full refund up to 30 days before the event, no questions asked. Between 30 and 7 days you get 50% back, or a free name change to a colleague. Inside 7 days we cannot refund, but a name change is still free right up to the door — mail us and we will move it.',
  },
  {
    id: 'recordings',
    question: 'Will talks be recorded?',
    answer:
      'Yes. Every talk in the Main Hall and Halls A to C is recorded and goes up within two weeks, free and public on YouTube. VIP ticket holders get the unlisted cut on the Monday after the event. Workshops are not recorded — they are hands-on and the room is the point.',
  },
  {
    id: 'student-discount',
    question: 'Is there a student discount?',
    answer:
      'There is. Students pay ₹1,500 for the full two days with a valid student ID at the door. We hold 300 student tickets and they are first-come. Community organisers and speakers at local meetups get the same rate — mail us from an address we can verify.',
  },
  {
    id: 'who-attends',
    question: 'Who attends DevSummit?',
    answer:
      'Mostly working engineers: 54% of the room writes code for a living, as the audience mix chart on the homepage shows. The rest is 16% designers, 12% product managers, 10% founders and 8% students. It is a practitioner conference — the talks assume you have shipped something.',
  },
  {
    id: 'code-of-conduct',
    question: 'Is there a code of conduct?',
    answer:
      'Yes, and it is enforced. It covers the venue, the mixer, the workshop rooms and the event Discord. Two organisers are on duty each day with a published phone number, and reports are handled the same day.',
  },
  {
    id: 'travel',
    question: 'Do you help with travel or visas?',
    answer:
      'We issue invitation letters for visa applications once your ticket is confirmed — allow six weeks. We do not cover travel or hotels for attendees, but the site lists three hotels within walking distance of the venue at a conference rate.',
  },
]

/**
 * The other audience.
 *
 * `/built-with` is the page developers land on, so it gets its own FAQ about the
 * template rather than the event — and its own FAQPage graph. Same string-only
 * shape, so the visible answers and the structured data come from one source.
 */
export const templateFaqs: FaqEntry[] = [
  {
    id: 'free-to-use',
    question: 'Is this conference template really free to use?',
    answer:
      'Yes. It is MIT licensed, which means you can use it for anything including commercial work, change whatever you like, and ship it without asking. There is no paid tier, no licence key and no attribution requirement. The "Built with VivekUI" credit in the footer is a normal component you can delete in one line — a star on the repository is appreciated, not required.',
  },
  {
    id: 'how-to-clone',
    question: 'How do I clone and run this template?',
    answer:
      'Run: git clone https://github.com/intellectwithvivek/devsummit.git, then cd devsummit, npm install and npm run dev. It needs Node.js 20.9 or newer, 22 LTS recommended. There are no environment variables to set and no accounts to create — it runs immediately with the mock data in place.',
  },
  {
    id: 'customise',
    question: 'How do I change the event details, speakers and schedule?',
    answer:
      'Everything editable lives in the data folder as plain TypeScript. data/event.ts holds the name, dates, venue, tracks and your site URL; data/speakers.ts, data/schedule.ts, data/tickets.ts, data/stats.ts, data/faq.ts, data/sponsors.ts and data/venue.ts hold the rest. No component needs touching to run a different event. The whole visual identity — including the violet accent — is one file, app/globals.css.',
  },
  {
    id: 'stack',
    question: 'What stack does this template use?',
    answer:
      'Next.js 16 with the App Router and Turbopack, React 19, TypeScript 5, and Node.js 20.9 or newer. All of the interface is VivekUI, a free React component library with zero runtime dependencies. There is no Tailwind, no shadcn, no MUI, no PostCSS plugin and no config file — styling is one plain CSS file of custom properties and flat classes.',
  },
  {
    id: 'deploy',
    question: 'Where can I deploy it?',
    answer:
      'Anywhere that runs Next.js. There is a one-click Deploy to Vercel button in the README and in the footer, and no environment variables are required. After the first deploy, set SITE_URL in data/event.ts to your own domain so the canonical URLs, the sitemap and the structured data all point at it.',
  },
  {
    id: 'seo-included',
    question: 'Is SEO and accessibility already set up?',
    answer:
      'Yes, both. Every route has its own metadata, canonical URL and social card; there is a generated sitemap.xml and robots.txt, an llms.txt for answer engines, and JSON-LD for Event with a sub-event per session, WebSite, SoftwareSourceCode, BreadcrumbList, ItemList and FAQPage. On accessibility it passes axe-core with zero violations on every page in both light and dark themes, has one h1 per page with no heading-level skips, a skip link, visible focus, and no horizontal scroll from 360px up.',
  },
  {
    id: 'other-events',
    question: 'Can I use it for a meetup, workshop or festival instead?',
    answer:
      'Yes — nothing in the components assumes a two-day developer conference. Drop tracks you do not need from data/event.ts, shorten data/schedule.ts to one day, and remove the sections you have no content for. The pieces most people keep are the countdown, the schedule timeline, the ticket tiers and the speaker grid.',
  },
]

import type { Metadata } from 'next'
import {
  Badge,
  Breadcrumb,
  Button,
  Code,
  CopyButton,
  FAQ,
  Heading,
  Section,
  Table,
  Text,
} from '@the_viveksingh/vivek-ui'

import { JsonLd } from '@/components/json-ld'
import { Command } from '@/components/command'
import { GitHubMark } from '@/components/icons'
import { REPO, SITE_URL, VIVEKUI, componentDocs, event, utm } from '@/data/event'
import { templateFaqs } from '@/data/faq'
import { breadcrumbSchema, faqSchema, softwareSchema } from '@/lib/schema'
import { og } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Built with VivekUI',
  description:
    'Every component on this conference template, mapped to its VivekUI documentation page. 91 React components, 6 SVG charts, zero runtime dependencies.',
  alternates: { canonical: '/built-with' },
  openGraph: og({
    path: '/built-with',
    title: `Built with VivekUI | ${event.name}`,
    description:
      'Every component on this template, mapped to its VivekUI docs page. Zero runtime dependencies.',
  }),
}

/**
 * The inventory. Every slug here was checked against the live docs — `Flex` is
 * documented on the `stack` page, because it is Stack's horizontal alias rather
 * than a separate component, and the charts live under /docs/charts.
 */
type Row = { where: string; component: string; slug: string; kind?: 'chart' }

const INSTALL_CMD = `cd ${REPO.name} && npm install && npm run dev`

const INVENTORY: Row[] = [
  { where: 'Every page shell and its heading block', component: 'Section', slug: 'section' },
  { where: 'Sticky header, and the sheet it becomes on a phone', component: 'Navbar', slug: 'navbar' },
  { where: 'Light / dark / system switch in the header', component: 'ThemeToggle', slug: 'theme-toggle' },
  { where: 'Theme state, persistence and the no-flash attribute', component: 'ThemeProvider', slug: 'theme-provider' },
  { where: 'Hero countdown to the keynote, and the early-bird deadline', component: 'Countdown', slug: 'countdown' },
  { where: 'Page titles and section titles', component: 'Heading', slug: 'heading' },
  { where: 'Body copy, captions and muted meta lines', component: 'Text', slug: 'text' },
  { where: 'Hero split, speaker grid, chart pairs', component: 'Grid', slug: 'grid' },
  { where: 'Wrapping button and badge rows', component: 'Flex', slug: 'stack' },
  { where: 'Headline figures above the fold', component: 'Stats', slug: 'stats' },
  { where: 'Attendees, speakers, tracks and workshops counting up', component: 'AnimatedCounter', slug: 'animated-counter' },
  { where: 'Audience mix — who is in the room', component: 'PieChart', slug: 'pie-chart', kind: 'chart' },
  { where: 'Sessions per track across the programme', component: 'BarChart', slug: 'bar-chart', kind: 'chart' },
  { where: 'Speaker portraits, and the initials fallback behind them', component: 'Avatar', slug: 'avatar' },
  { where: 'Speaker bio and talk title, on select', component: 'Popover', slug: 'popover' },
  { where: 'Day 1 / Day 2 switch on the schedule preview', component: 'Tabs', slug: 'tabs' },
  { where: 'Each day of the programme, session by session', component: 'Timeline', slug: 'timeline' },
  { where: 'The three ticket tiers', component: 'Pricing', slug: 'pricing' },
  { where: 'Tier comparison on /tickets', component: 'Table', slug: 'table' },
  { where: 'Getting-there instructions — metro, cab, parking', component: 'Accordion', slug: 'accordion' },
  { where: 'Venue map, loaded from OpenStreetMap', component: 'MapEmbed', slug: 'map-embed' },
  { where: 'Sponsor rows, one per tier', component: 'LogoCloud', slug: 'logo-cloud' },
  { where: 'Photos from past editions', component: 'Carousel', slug: 'carousel' },
  { where: 'Frequently asked questions, on native details', component: 'FAQ', slug: 'faq' },
  { where: 'Speaker-announcement signup', component: 'Newsletter', slug: 'newsletter' },
  { where: 'Feedback after a Buy press', component: 'Toast', slug: 'toast' },
  { where: 'Track filters on /speakers and /schedule', component: 'Select', slug: 'select' },
  { where: 'Label and hint wiring around those filters', component: 'Field', slug: 'field' },
  { where: 'When a track filter matches nothing', component: 'EmptyState', slug: 'empty-state' },
  { where: 'Timezone and workshop notices, group-discount note', component: 'Alert', slug: 'alert' },
  { where: 'Trails at the top of each inner page', component: 'Breadcrumb', slug: 'breadcrumb' },
  { where: 'Closing asks at the foot of /speakers and /schedule', component: 'CTA', slug: 'cta' },
  { where: 'Track flags, keynote stars, "Ends soon"', component: 'Badge', slug: 'badge' },
  { where: 'Every link and action that looks like a button', component: 'Button', slug: 'button' },
  { where: 'Planning note beside the track chart', component: 'Card', slug: 'card' },
  { where: 'The install command, here and in the footer', component: 'Code', slug: 'code' },
  { where: 'Copying that command to the clipboard', component: 'CopyButton', slug: 'copy-button' },
  { where: 'Site footer on every page', component: 'Footer', slug: 'footer' },
]

function docsHref(row: Row) {
  return row.kind === 'chart'
    ? utm(`https://ui.vivekkumarsingh.in/docs/charts/${row.slug}`, 'builtwith')
    : componentDocs(row.slug)
}

export default function BuiltWithPage() {
  return (
    <>
      <JsonLd data={softwareSchema()} />
      <JsonLd data={faqSchema(templateFaqs, `${SITE_URL}/built-with#faq`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Built with VivekUI', path: '/built-with' },
        ])}
      />

      <Section padding="lg" className="ds-page-head">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Built with VivekUI' }]} />
        <Heading level={1} size="2xl">
          Built with VivekUI
        </Heading>
        <Text size="xl" className="ds-measure">
          This entire website is built with VivekUI, a free React component library with zero runtime
          dependencies.
        </Text>
        <Text size="lg" tone="muted" className="ds-measure">
          No Tailwind, no shadcn, no MUI, no PostCSS plugin and no config file. One install, one CSS
          import, and the {INVENTORY.length} components listed below. Everything else on this page is
          plain CSS in a single stylesheet.
        </Text>

        <div className="ds-promo">
          <Code>{VIVEKUI.install}</Code>
          <CopyButton value={VIVEKUI.install} variant="outline" />
        </div>

        <div className="ds-cta-row">
          <Button asChild size="lg">
            <a href={utm(VIVEKUI.docs, 'builtwith')} target="_blank" rel="noopener noreferrer">
              Read the docs
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={VIVEKUI.github} target="_blank" rel="noopener noreferrer">
              Star VivekUI on GitHub
            </a>
          </Button>
        </div>
      </Section>

      {/* ------------------------------------------------------ Clone the repo */}
      <Section id="clone" padding="lg" background="muted">
        <Section.Header
          eyebrow="Open source"
          title="Clone it and ship your own event site"
          headingLevel={2}
          description="This whole site is a public, MIT-licensed template. There is nothing to buy, no licence key, and no environment variables to set — it runs the moment you install."
        />

        <div className="ds-clone-panel">
          <div className="ds-clone-step">
            <span className="ds-mono ds-mono-accent">Step 01</span>
            <Heading level={3} size="sm">
              Clone the repository
            </Heading>
            <div className="ds-clone-cmd">
              <Command>{REPO.cloneHttps}</Command>
              <CopyButton
                value={REPO.cloneHttps}
                variant="outline"
                copiedAnnouncement="Clone command copied to the clipboard"
              />
            </div>
          </div>

          <div className="ds-clone-step">
            <span className="ds-mono ds-mono-accent">Step 02</span>
            <Heading level={3} size="sm">
              Install and run it
            </Heading>
            <div className="ds-clone-cmd">
              <Command>{INSTALL_CMD}</Command>
              <CopyButton
                value={INSTALL_CMD}
                variant="outline"
                copiedAnnouncement="Install command copied to the clipboard"
              />
            </div>
            <Text size="sm" tone="muted">
              Needs Node.js 20.9+ (22 LTS recommended). Opens on{' '}
              <Code>http://localhost:3000</Code>.
            </Text>
          </div>

          <div className="ds-clone-step">
            <span className="ds-mono ds-mono-accent">Step 03</span>
            <Heading level={3} size="sm">
              Change the data, not the components
            </Heading>
            <Text size="sm" tone="muted">
              Everything editable is plain TypeScript in <Code>data/</Code> — event details,
              speakers, schedule, tickets, sponsors, FAQ. The entire visual identity is one file,{' '}
              <Code>app/globals.css</Code>. Point <Code>SITE_URL</Code> at your own domain and the
              canonicals, sitemap and structured data follow.
            </Text>
          </div>
        </div>

        <div className="ds-cta-row">
          <Button asChild size="lg">
            <a href={REPO.url} target="_blank" rel="noopener noreferrer">
              <GitHubMark /> View the repository
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={REPO.deploy} target="_blank" rel="noopener noreferrer">
              Deploy your own to Vercel
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href={REPO.issues} target="_blank" rel="noopener noreferrer">
              Report an issue
            </a>
          </Button>
        </div>
        <Text size="sm" tone="muted">
          Repository: <Code>{REPO.owner}/{REPO.name}</Code> — MIT licensed, commercial use included.
          The credit in the footer is removable; a star is appreciated.
        </Text>
      </Section>

      <Section padding="lg" background="muted">
        <Section.Header
          eyebrow="Inventory"
          title="Every section, and the component behind it"
          headingLevel={2}
          description="Each component name links straight to its documentation page, with a live example, the code in TypeScript and JavaScript, and a props table generated from the package's own type declarations."
        />

        <Table striped hoverable containerProps={{ className: 'ds-scroll-x', role: 'region', tabIndex: 0, 'aria-label': 'Component inventory table' }}>
          <Table.Caption visuallyHidden>
            Sections of this website mapped to the VivekUI component that renders them
          </Table.Caption>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell scope="col">Where it is used</Table.HeaderCell>
              <Table.HeaderCell scope="col">Component</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {INVENTORY.map((row) => (
              <Table.Row key={row.component}>
                <Table.HeaderCell scope="row">{row.where}</Table.HeaderCell>
                <Table.Cell label="Component">
                  <a href={docsHref(row)} target="_blank" rel="noopener noreferrer">
                    {row.component}
                  </a>
                  {row.kind === 'chart' ? (
                    <>
                      {' '}
                      <Badge size="sm" variant="soft" tone="primary" pill>
                        chart
                      </Badge>
                    </>
                  ) : null}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Section>

      <Section padding="lg" size="md">
        <Heading level={2} size="lg">
          Why it is worth a look
        </Heading>
        <div className="ds-why-list">
          <div className="ds-why">
            <span className="ds-mono ds-mono-accent">01</span>
            <Text>
              <strong>Zero runtime dependencies.</strong> Verify it yourself with{' '}
              <Code>npm ls --omit=dev @the_viveksingh/vivek-ui</Code>. React and React DOM are peer
              dependencies and never bundled, so there is no second copy of React to trip over.
            </Text>
          </div>
          <div className="ds-why">
            <span className="ds-mono ds-mono-accent">02</span>
            <Text>
              <strong>49 of 91 components are Server Components.</strong> The timeline, the pricing
              table, the FAQ, both charts and every layout primitive on this site render on the
              server with no client boundary at all.
            </Text>
          </div>
          <div className="ds-why">
            <span className="ds-mono ds-mono-accent">03</span>
            <Text>
              <strong>Your CSS always wins.</strong> Every library selector is wrapped in{' '}
              <Code>:where()</Code>, so it has zero specificity. The whole violet identity on this
              site is one stylesheet of flat classes and re-pointed custom properties — no{' '}
              <Code>!important</Code> anywhere.
            </Text>
          </div>
          <div className="ds-why">
            <span className="ds-mono ds-mono-accent">04</span>
            <Text>
              <strong>Accessibility is the default, not a later phase.</strong>{' '}
              <Code>IconButton</Code> will not compile without an <Code>aria-label</Code>, both
              charts render a real table of their numbers underneath, and the countdown refuses to
              read the clock during render so it cannot cause a hydration mismatch.
            </Text>
          </div>
        </div>
      </Section>

      {/* The visible half of the FAQPage graph above — both come from the same
          strings in data/faq.ts, so the markup can never describe answers the
          page does not actually show. */}
      <FAQ
        id="faq"
        background="muted"
        eyebrow="Using this template"
        title="Questions developers ask"
        headingLevel={2}
        name="devsummit-template-faq"
        defaultOpenIndex={0}
        items={templateFaqs.map((entry) => ({
          id: entry.id,
          question: entry.question,
          answer: entry.answer,
        }))}
      />
    </>
  )
}

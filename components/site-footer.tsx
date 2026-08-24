import { Code, CopyButton, Footer, Heading, Text } from '@the_viveksingh/vivek-ui'
import { REPO, VIVEKUI, event, utm } from '@/data/event'
import { Command } from './command'
import { ExternalArrow, GitHubMark } from './icons'

/**
 * The site footer, the clone affordance, and the attribution the template asks
 * you to keep.
 *
 * `Footer` renders the real `contentinfo` landmark with its link columns inside
 * one named nav. Both boxes — "clone this template" and the VivekUI credit —
 * live in the brand slot so all of it stays inside that single landmark rather
 * than becoming a second one.
 */
export function SiteFooter() {
  return (
    <Footer
      background="muted"
      navLabel="Footer"
      headingLevel={2}
      brand={
        <div className="ds-footer-brand">
          <Heading level={2} size="md">
            {event.name}
          </Heading>
          <Text size="sm" tone="muted">
            {event.dateLine} · {event.venue.name}, {event.venue.area}, {event.city}.
          </Text>

          {/* Clone affordance — the reason this site is public. The brand column
              is narrow, so it shows the repo slug and the button says what it
              actually puts on the clipboard. */}
          <div className="ds-clone">
            <p className="ds-mono ds-mono-accent">Free &amp; open source — clone it</p>
            <div className="ds-clone-cmd">
              <Command>{`${REPO.owner}/${REPO.name}`}</Command>
              <CopyButton
                value={REPO.cloneHttps}
                size="sm"
                variant="outline"
                label="Copy clone command"
                copiedLabel="Command copied"
                copiedAnnouncement="Clone command copied to the clipboard"
              />
            </div>
            <div className="ds-clone-links">
              <a href={REPO.url} target="_blank" rel="noopener noreferrer">
                <GitHubMark /> View on GitHub
              </a>
              <a href={REPO.deploy} target="_blank" rel="noopener noreferrer">
                Deploy your own <ExternalArrow />
              </a>
            </div>
          </div>

          <div className="ds-promo">
            <Text size="sm">
              Built with <span aria-hidden="true">❤️</span> using{' '}
              <a href={utm(VIVEKUI.docs, 'footer')} target="_blank" rel="noopener noreferrer">
                VivekUI
              </a>{' '}
              — 91 React components · 6 SVG charts · zero runtime dependencies. One install, one CSS
              import, no config.
            </Text>
            <div className="ds-promo-row">
              <Code>{VIVEKUI.install}</Code>
              <CopyButton value={VIVEKUI.install} size="sm" variant="outline" />
            </div>
          </div>
        </div>
      }
      columns={[
        {
          title: 'Event',
          links: [
            { label: 'Speakers', href: '/speakers' },
            { label: 'Schedule', href: '/schedule' },
            { label: 'Tickets', href: '/tickets' },
            { label: 'Built with VivekUI', href: '/built-with' },
          ],
        },
        {
          title: 'Attending',
          links: [
            { label: 'Getting there', href: '/#venue' },
            { label: 'Frequently asked', href: '/#faq' },
            { label: 'Refund policy', href: '/#faq' },
            { label: 'Code of conduct', href: '/#faq' },
          ],
        },
        {
          title: 'This template',
          links: [
            { label: 'GitHub repository', href: REPO.url, target: '_blank' },
            { label: 'Deploy to Vercel', href: REPO.deploy, target: '_blank' },
            { label: 'Report an issue', href: REPO.issues, target: '_blank' },
            { label: 'MIT licence', href: REPO.license, target: '_blank' },
          ],
        },
        {
          title: 'Built with VivekUI',
          links: [
            { label: 'Documentation', href: utm(VIVEKUI.docs, 'footer'), target: '_blank' },
            { label: 'npm package', href: VIVEKUI.npm, target: '_blank' },
            { label: 'Component library', href: VIVEKUI.github, target: '_blank' },
            {
              label: `Author — ${VIVEKUI.authorName}`,
              href: utm(VIVEKUI.author, 'footer'),
              target: '_blank',
            },
          ],
        },
      ]}
      copyright={
        <Text size="sm" tone="muted">
          © 2026 {event.organiser}. A free, MIT-licensed template — the credit is removable, but a{' '}
          <a href={VIVEKUI.github} target="_blank" rel="noopener noreferrer">
            star on GitHub
          </a>{' '}
          is appreciated. Every person, talk, sponsor and price on this site is fictional.
        </Text>
      }
    />
  )
}

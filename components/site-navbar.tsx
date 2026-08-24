'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Badge, Button, Navbar, ThemeToggle } from '@the_viveksingh/vivek-ui'
import { NAV_LINKS, REPO, VIVEKUI, utm } from '@/data/event'
import { GitHubMark } from './icons'

/**
 * Client only because the active link is derived from the current path — the
 * Navbar itself owns the collapsed mobile sheet, so there is no state here.
 *
 * "Get the code" sits in the link row rather than the actions row on purpose:
 * the actions row never collapses, so a fourth control there would crowd a
 * 360px bar, while the link row becomes the mobile sheet where an external
 * destination still reads as a labelled line of text rather than a bare icon.
 */
export function SiteNavbar() {
  const pathname = usePathname()

  return (
    <Navbar sticky container="xl" aria-label="Main">
      <Navbar.Brand asChild>
        <Link href="/">
          <span className="ds-brand-mark" aria-hidden="true">
            DS
          </span>
          <span className="ds-brand-word">
            DevSummit<span className="ds-brand-year">26</span>
          </span>
        </Link>
      </Navbar.Brand>

      <Navbar.Links>
        {NAV_LINKS.map((link) => (
          <Navbar.Link key={link.href} asChild active={pathname === link.href}>
            <Link href={link.href}>{link.label}</Link>
          </Navbar.Link>
        ))}

        <Navbar.Link asChild icon={<GitHubMark />}>
          <a href={REPO.url} target="_blank" rel="noopener noreferrer">
            Get the code
          </a>
        </Navbar.Link>
      </Navbar.Links>

      <Navbar.Actions>
        <a
          className="ds-badge-link ds-navbar-badge"
          href={utm(VIVEKUI.docs, 'navbar')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Badge variant="soft" tone="primary" pill>
            <span aria-hidden="true">⚡</span> Built with VivekUI
          </Badge>
        </a>

        <ThemeToggle mode="cycle" />

        <Button asChild size="sm">
          <Link href="/tickets">Get tickets</Link>
        </Button>

        <Navbar.Toggle />
      </Navbar.Actions>
    </Navbar>
  )
}

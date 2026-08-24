import type { ReactNode } from 'react'
import type { Sponsor } from '@/data/sponsors'

/**
 * Placeholder sponsor wordmarks, drawn locally.
 *
 * LogoCloud sizes `.vk-logo-cloud__mark > svg` to `block-size: 100%` with an auto
 * inline size, so the name has to live *inside* the SVG for it to scale with the
 * glyph. Everything is `currentColor`, which is what lets the row grey out at rest
 * and come back on hover, and step correctly in dark mode.
 *
 * The accessible name comes from LogoCloud's `alt`, so the SVG is decorative.
 */

const VIEW_BOX = '0 0 176 32'

function Wordmark({ children, name }: { children: ReactNode; name: string }) {
  return (
    <svg viewBox={VIEW_BOX} fill="none" aria-hidden="true" focusable="false">
      {children}
      <text
        x="42"
        y="21.5"
        fill="currentColor"
        fontSize="15"
        fontWeight="700"
        letterSpacing="-0.3"
      >
        {name}
      </text>
    </svg>
  )
}

const MARKS: Record<Sponsor['mark'], ReactNode> = {
  orbit: (
    <>
      <circle cx="16" cy="16" r="6" fill="currentColor" />
      <ellipse
        cx="16"
        cy="16"
        rx="14"
        ry="6.5"
        stroke="currentColor"
        strokeWidth="2.2"
        transform="rotate(-28 16 16)"
      />
    </>
  ),
  stack: (
    <>
      <rect x="3" y="20" width="26" height="7" rx="3.5" fill="currentColor" opacity="0.45" />
      <rect x="3" y="12" width="26" height="7" rx="3.5" fill="currentColor" opacity="0.7" />
      <rect x="3" y="4" width="26" height="7" rx="3.5" fill="currentColor" />
    </>
  ),
  prism: (
    <>
      <path d="M16 3 30 27H2Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M16 12 23 24H9Z" fill="currentColor" />
    </>
  ),
  pulse: (
    <>
      <path
        d="M2 17h6l3.5-9 5 18 4-11 3 2h5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="11" height="11" rx="3" fill="currentColor" />
      <rect x="18" y="3" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <rect x="3" y="18" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <rect x="18" y="18" width="11" height="11" rx="3" fill="currentColor" />
    </>
  ),
  arc: (
    <>
      <path d="M4 27a12 12 0 0 1 24 0" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M10 27a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="16" cy="7" r="3" fill="currentColor" />
    </>
  ),
  node: (
    <>
      <path d="M16 8v16M16 16l-9 6M16 16l9 6" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="16" cy="6" r="4" fill="currentColor" />
      <circle cx="6" cy="24" r="4" fill="currentColor" />
      <circle cx="26" cy="24" r="4" fill="currentColor" />
    </>
  ),
  wave: (
    <>
      <path
        d="M2 20c4-10 8-10 12 0s8 10 12 0"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M2 27c4-10 8-10 12 0s8 10 12 0"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.45"
      />
    </>
  ),
  shard: (
    <>
      <path d="M16 2l14 14-14 14L2 16Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M16 2l14 14-14 14Z" fill="currentColor" />
    </>
  ),
}

/** The `node` handed to LogoCloud for one sponsor. */
export function sponsorMark(sponsor: Sponsor): ReactNode {
  return <Wordmark name={sponsor.name}>{MARKS[sponsor.mark]}</Wordmark>
}

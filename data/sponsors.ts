/**
 * Sponsor placeholders.
 *
 * `mark` names one of the inline SVG wordmarks in components/sponsor-logos.tsx.
 * They are drawn locally rather than fetched from a logo-placeholder service so
 * the row always renders — no third-party request, no broken-image state, and
 * they inherit `currentColor` so they step correctly in dark mode.
 */

export type SponsorTier = 'platinum' | 'gold' | 'community'

export interface Sponsor {
  id: string
  name: string
  tier: SponsorTier
  mark: 'orbit' | 'stack' | 'prism' | 'pulse' | 'grid' | 'arc' | 'node' | 'wave' | 'shard'
}

export const sponsors: Sponsor[] = [
  { id: 'northwind', name: 'Northwind Cloud', tier: 'platinum', mark: 'orbit' },
  { id: 'lambdaworks', name: 'LambdaWorks', tier: 'platinum', mark: 'stack' },
  { id: 'prismdb', name: 'PrismDB', tier: 'platinum', mark: 'prism' },

  { id: 'pulsemetrics', name: 'Pulse Metrics', tier: 'gold', mark: 'pulse' },
  { id: 'gridship', name: 'Gridship', tier: 'gold', mark: 'grid' },
  { id: 'arcpay', name: 'ArcPay', tier: 'gold', mark: 'arc' },
  { id: 'nodefoundry', name: 'Node Foundry', tier: 'gold', mark: 'node' },

  { id: 'wavelength', name: 'Wavelength Labs', tier: 'community', mark: 'wave' },
  { id: 'shardstack', name: 'Shardstack', tier: 'community', mark: 'shard' },
]

export const TIER_LABEL: Record<SponsorTier, string> = {
  platinum: 'Platinum partners',
  gold: 'Gold partners',
  community: 'Community partners',
}

export const TIER_ORDER: SponsorTier[] = ['platinum', 'gold', 'community']

export function sponsorsByTier(tier: SponsorTier): Sponsor[] {
  return sponsors.filter((s) => s.tier === tier)
}

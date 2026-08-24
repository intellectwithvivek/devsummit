/**
 * Chart and counter data.
 *
 * Colours are deliberately absent: every slice and bar falls back to the
 * `--vk-chart-n` tokens, which app/globals.css re-points to a palette validated
 * for colourblind separation against both the light and the dark surface. Set a
 * colour here and you opt out of the dark-mode step as well.
 */

export interface HeadlineStat {
  id: string
  value: number
  label: string
  suffix?: string
  description: string
}

export const headlineStats: HeadlineStat[] = [
  {
    id: 'attendees',
    value: 2400,
    label: 'Attendees',
    description: 'Capped, and it sold out in nine days last year.',
  },
  {
    id: 'speakers',
    value: 48,
    label: 'Speakers',
    description: '18 announced so far, the rest land through September.',
  },
  {
    id: 'tracks',
    value: 5,
    label: 'Tracks',
    description: 'Web, AI, DevOps, Design and Career, running in parallel.',
  },
  {
    id: 'workshops',
    value: 12,
    label: 'Hands-on workshops',
    description: 'Ninety minutes each, capped at 40 seats. Bring a laptop.',
  },
]

/**
 * Audience mix — a part-to-whole read, which is the one job a pie does well.
 * Five slices, all above 8%, so every one takes a direct percentage label.
 * The story is the dominant slice; the caption says it in words too.
 */
export const audienceMix = [
  { label: 'Engineers', value: 54 },
  { label: 'Designers', value: 16 },
  { label: 'Product managers', value: 12 },
  { label: 'Founders', value: 10 },
  { label: 'Students', value: 8 },
] as const

/**
 * Sessions per track across the full 48-session programme.
 * One series, so one colour: the track names on the axis carry the identity,
 * and five hues here would encode nothing the labels do not already say.
 */
export const sessionsPerTrack = [
  { x: 'Web', y: 14 },
  { x: 'AI', y: 12 },
  { x: 'DevOps', y: 9 },
  { x: 'Design', y: 7 },
  { x: 'Career', y: 6 },
] as const

export const TOTAL_SESSIONS = sessionsPerTrack.reduce((sum, d) => sum + d.y, 0)

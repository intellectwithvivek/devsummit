'use client'

import { Avatar, Badge, Grid, Popover, Text } from '@the_viveksingh/vivek-ui'
import { TRACK_CODE, TRACK_LABEL } from '@/data/event'
import type { Speaker } from '@/data/speakers'

/**
 * The speaker grid.
 *
 * Each card is a `Popover.Trigger`, which is a real `<button>` — so the bio opens
 * on click, on Enter and on Space, and focus returns to the card on close. A
 * hover-only reveal would be unreachable by keyboard and unopenable on touch,
 * which is the whole reason this is a Popover and not a CSS hover panel.
 *
 * No `Heading` inside the panel: it portals to `document.body`, and a heading
 * landing there would appear out of order in a screen reader's heading list.
 */
export function SpeakerGrid({ speakers }: { speakers: Speaker[] }) {
  return (
    <Grid cols={{ base: 2, sm: 3, lg: 4 }} gap={4} role="list">
      {speakers.map((speaker) => (
        <div key={speaker.id} role="listitem">
          <SpeakerCard speaker={speaker} />
        </div>
      ))}
    </Grid>
  )
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <Popover side="top" align="center" offset={10}>
      <Popover.Trigger className="ds-speaker">
        <Avatar
          src={speaker.avatar}
          name={speaker.name}
          size="xl"
          imgProps={{ width: 120, height: 120, loading: 'lazy' }}
        />
        <span className="ds-speaker-name">{speaker.name}</span>
        <span className="ds-speaker-role">
          {speaker.title}, {speaker.company}
        </span>
        <Badge size="sm" variant="outline" tone="neutral">
          {TRACK_LABEL[speaker.track]}
        </Badge>
      </Popover.Trigger>

      <Popover.Content className="ds-speaker-pop">
        <p className="ds-mono ds-mono-accent">{TRACK_CODE[speaker.track]} track</p>
        <Text weight="semibold">{speaker.talk}</Text>
        <Text size="sm" tone="muted">
          {speaker.bio}
        </Text>
      </Popover.Content>
    </Popover>
  )
}

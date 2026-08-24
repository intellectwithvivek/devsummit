'use client'

import { useMemo, useState } from 'react'
import { EmptyState, Field, Select, Text } from '@the_viveksingh/vivek-ui'
import { TRACKS, type TrackId } from '@/data/event'
import type { Speaker } from '@/data/speakers'
import { SpeakerGrid } from './speaker-grid'

const OPTIONS = [
  { value: 'all', label: 'All tracks' },
  ...TRACKS.map((t) => ({ value: t.id, label: t.label })),
]

/** The full speaker list on /speakers, with the track filter above it. */
export function SpeakersBrowser({ speakers }: { speakers: Speaker[] }) {
  const [track, setTrack] = useState<TrackId | 'all'>('all')

  const shown = useMemo(
    () => (track === 'all' ? speakers : speakers.filter((s) => s.track === track)),
    [speakers, track],
  )

  return (
    <div className="ds-browser">
      <div className="ds-browser-bar">
        <Field label="Filter by track">
          <Select
            options={OPTIONS}
            value={track}
            onChange={(e) => setTrack(e.currentTarget.value as TrackId | 'all')}
          />
        </Field>
        {/* Announced politely, so a filter change is not silent to a screen reader. */}
        <Text size="sm" tone="muted" role="status">
          {shown.length} of {speakers.length} announced speakers
        </Text>
      </div>

      {shown.length > 0 ? (
        <SpeakerGrid speakers={shown} />
      ) : (
        <EmptyState
          title="No speakers announced on this track yet"
          description="The programme is still filling up — more names land through September."
        />
      )}
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Badge, Field, Heading, Select, Text } from '@the_viveksingh/vivek-ui'
import { TRACKS, type TrackId } from '@/data/event'
import { schedule, sessionsForTrack } from '@/data/schedule'
import { SessionTimeline } from './session-timeline'

const OPTIONS = [
  { value: 'all', label: 'All tracks' },
  ...TRACKS.map((t) => ({ value: t.id, label: t.label })),
]

/**
 * The full two-day programme on /schedule, with one track filter over both days.
 *
 * Breaks survive every filter on purpose: a day with the coffee and lunch removed
 * stops reading like a day.
 */
export function ScheduleBrowser() {
  const [track, setTrack] = useState<TrackId | 'all'>('all')

  return (
    <div className="ds-browser">
      <div className="ds-browser-bar">
        <Field label="Filter by track" help="Breaks stay visible whichever track you pick.">
          <Select
            options={OPTIONS}
            value={track}
            onChange={(e) => setTrack(e.currentTarget.value as TrackId | 'all')}
          />
        </Field>
      </div>

      {schedule.map((day) => {
        const sessions = sessionsForTrack(day, track)
        const talks = sessions.filter((s) => s.kind !== 'break').length

        return (
          <section key={day.id} className="ds-day" aria-labelledby={`${day.id}-heading`}>
            <div className="ds-day-head">
              <span className="ds-mono ds-mono-accent">{day.code}</span>
              <Heading id={`${day.id}-heading`} level={2} size="lg">
                {day.label}
              </Heading>
              <Text tone="muted">{day.date}</Text>
              <Badge variant="soft" tone="neutral" pill>
                <span role="status">
                  {talks} {talks === 1 ? 'session' : 'sessions'}
                </span>
              </Badge>
            </div>

            <SessionTimeline sessions={sessions} headingLevel={3} detailed />
          </section>
        )
      })}
    </div>
  )
}

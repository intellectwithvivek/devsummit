import { Avatar, Badge, Timeline } from '@the_viveksingh/vivek-ui'
import { TRACK_LABEL } from '@/data/event'
import { speakerFor, type Session } from '@/data/schedule'

/**
 * One day of the programme as a Timeline.
 *
 * No `'use client'`: this renders on the server from the homepage and inside the
 * client filter on /schedule, and works unchanged in both.
 *
 * `status` is doing visual work — `current` gives keynotes the accented marker and
 * ring — while `statusLabel` (visually hidden by the library) carries the kind of
 * session, so a screen reader hears "Keynote" rather than "Not started".
 */

const GLYPH: Record<Session['kind'], string> = {
  keynote: '★',
  workshop: '◆',
  talk: '',
  break: '—',
}

const KIND_LABEL: Record<Session['kind'], string> = {
  keynote: 'Keynote',
  workshop: 'Workshop',
  talk: 'Talk',
  break: 'Break',
}

export function SessionTimeline({
  sessions,
  headingLevel = 3,
  detailed = false,
}: {
  sessions: Session[]
  headingLevel?: 2 | 3 | 4 | 5 | 6
  /** Include the session abstract. Off on the homepage preview, on for /schedule. */
  detailed?: boolean
}) {
  return (
    <Timeline>
      {sessions.map((session) => {
        const speaker = speakerFor(session)
        const isBreak = session.kind === 'break'

        return (
          <Timeline.Item
            key={session.id}
            headingLevel={headingLevel}
            status={session.kind === 'keynote' ? 'current' : 'pending'}
            statusLabel={KIND_LABEL[session.kind]}
            icon={GLYPH[session.kind] || undefined}
            title={session.title}
            timestamp={
              <span className="ds-session">
                <span className="ds-mono ds-mono-accent">{session.time}</span>
                <span className="ds-mono">{session.duration} min</span>
                {session.kind === 'keynote' ? (
                  <Badge size="sm" tone="primary" pill>
                    <span aria-hidden="true">★</span> Keynote
                  </Badge>
                ) : null}
                {session.kind === 'workshop' ? (
                  <Badge size="sm" variant="soft" tone="warning" pill>
                    Workshop
                  </Badge>
                ) : null}
              </span>
            }
            description={
              <span className="ds-session">
                {speaker ? (
                  <span className="ds-session-people">
                    <Avatar
                      src={speaker.avatar}
                      name={speaker.name}
                      size="xs"
                      imgProps={{ width: 48, height: 48, loading: 'lazy' }}
                    />
                    <span>
                      {speaker.name} · {speaker.company}
                    </span>
                  </span>
                ) : null}
                {session.track ? (
                  <Badge size="sm" variant="outline" tone="neutral">
                    {TRACK_LABEL[session.track]}
                  </Badge>
                ) : null}
                <span className="ds-session-room">{session.room}</span>
                {detailed && !isBreak && session.description ? (
                  <span className="ds-session-abstract">{session.description}</span>
                ) : null}
              </span>
            }
          />
        )
      })}
    </Timeline>
  )
}

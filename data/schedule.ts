import type { TrackId } from './event'
import { speakerById } from './speakers'

export type SessionKind = 'keynote' | 'talk' | 'workshop' | 'break'

export interface Session {
  id: string
  /** Pre-formatted 24h local time. No Intl call runs during render. */
  time: string
  /** Minutes. Shown next to the time on the full schedule. */
  duration: number
  title: string
  kind: SessionKind
  room: string
  /** Absent on breaks. */
  speakerId?: string
  /** Absent on breaks. */
  track?: TrackId
  description?: string
}

export interface ScheduleDay {
  id: 'day-1' | 'day-2'
  /** Mono day marker, e.g. DAY-01. */
  code: string
  label: string
  date: string
  /** Calendar date, for building each session's structured-data timestamps. */
  isoDate: string
  sessions: Session[]
}

export const schedule: ScheduleDay[] = [
  {
    id: 'day-1',
    code: 'DAY-01',
    label: 'Day 1',
    date: 'Thursday 12 November 2026',
    isoDate: '2026-11-12',
    sessions: [
      {
        id: 'd1-registration',
        time: '08:30',
        duration: 60,
        title: 'Registration, badge pickup and filter coffee',
        kind: 'break',
        room: 'Foyer',
      },
      {
        id: 'd1-keynote',
        time: '09:30',
        duration: 50,
        title: 'What the Browser Is Actually Doing While You Wait',
        kind: 'keynote',
        room: 'Main Hall',
        speakerId: 'rohan-shetty',
        track: 'web',
        description:
          'An opening keynote that walks one navigation from DNS to first paint, stopping wherever the browser is doing something you did not ask it to.',
      },
      {
        id: 'd1-ticks',
        time: '10:30',
        duration: 40,
        title: 'Rendering 40,000 Ticks a Second Without Dropping a Frame',
        kind: 'talk',
        room: 'Hall A',
        speakerId: 'ananya-rao',
        track: 'web',
        description:
          'What survived four rewrites of a live market-data grid, and the two ideas that did the real work.',
      },
      {
        id: 'd1-evals',
        time: '11:15',
        duration: 40,
        title: 'Your Eval Set Is Lying to You',
        kind: 'talk',
        room: 'Hall B',
        speakerId: 'karthik-menon',
        track: 'ai',
        description:
          'Four ways a benchmark quietly stops measuring anything, with examples from Indic language evaluation.',
      },
      {
        id: 'd1-a11y',
        time: '12:00',
        duration: 40,
        title: 'The Six Accessibility Bugs in Every Component Library',
        kind: 'talk',
        room: 'Hall C',
        speakerId: 'aisha-farouk',
        track: 'design',
        description:
          'A live audit of three popular libraries with a screen reader on, and the fixes for each finding.',
      },
      {
        id: 'd1-lunch',
        time: '12:45',
        duration: 75,
        title: 'Lunch and the hallway track',
        kind: 'break',
        room: 'Terrace',
      },
      {
        id: 'd1-staging',
        time: '14:00',
        duration: 40,
        title: 'We Deleted Our Staging Environment. Here Is What Broke.',
        kind: 'talk',
        room: 'Hall A',
        speakerId: 'priya-nambiar',
        track: 'devops',
        description:
          'Eighteen months of shipping four hundred services straight to production behind flags, and the three incidents it caused.',
      },
      {
        id: 'd1-agents',
        time: '14:45',
        duration: 40,
        title: 'Agents Without the Framework',
        kind: 'talk',
        room: 'Hall B',
        speakerId: 'sofia-marchetti',
        track: 'ai',
        description:
          'A tool-calling loop in ninety lines, and a cost comparison against the same thing built on three popular frameworks.',
      },
      {
        id: 'd1-chai',
        time: '15:30',
        duration: 30,
        title: 'Chai break',
        kind: 'break',
        room: 'Foyer',
      },
      {
        id: 'd1-workshop-query',
        time: '16:00',
        duration: 90,
        title: 'Workshop: Query Planning for People Who Write Application Code',
        kind: 'workshop',
        room: 'Workshop Room 1',
        speakerId: 'vikram-desai',
        track: 'web',
        description:
          'Bring a laptop. We read real EXPLAIN output until the shape of a bad query becomes obvious on sight.',
      },
      {
        id: 'd1-keyboard',
        time: '17:00',
        duration: 40,
        title: 'Designing for the Keyboard First',
        kind: 'talk',
        room: 'Hall C',
        speakerId: 'grace-adeyemi',
        track: 'design',
        description:
          'How a keyboard-first product decides what gets a shortcut, and how it measures whether the shortcut helped.',
      },
      {
        id: 'd1-mixer',
        time: '18:30',
        duration: 120,
        title: 'Community mixer on the lawn',
        kind: 'break',
        room: 'North Lawn',
      },
    ],
  },
  {
    id: 'day-2',
    code: 'DAY-02',
    label: 'Day 2',
    date: 'Friday 13 November 2026',
    isoDate: '2026-11-13',
    sessions: [
      {
        id: 'd2-doors',
        time: '09:00',
        duration: 30,
        title: 'Doors open and coffee',
        kind: 'break',
        room: 'Foyer',
      },
      {
        id: 'd2-migrations',
        time: '09:30',
        duration: 40,
        title: 'Zero-Downtime Migrations Are Mostly Bookkeeping',
        kind: 'talk',
        room: 'Hall A',
        speakerId: 'lin-wei',
        track: 'devops',
        description:
          'A monolith moved across three regions with no maintenance window, told as the checklist it actually was.',
      },
      {
        id: 'd2-retrieval',
        time: '10:15',
        duration: 40,
        title: 'Retrieval Is a Ranking Problem, Not a Database Problem',
        kind: 'talk',
        room: 'Hall B',
        speakerId: 'tanvi-bhatt',
        track: 'ai',
        description:
          'Why swapping the vector store rarely helps, and what moving the reranker does instead.',
      },
      {
        id: 'd2-design-system',
        time: '11:00',
        duration: 40,
        title: 'A Design System Nobody Forks',
        kind: 'talk',
        room: 'Hall C',
        speakerId: 'daniel-osei',
        track: 'design',
        description:
          'The governance model behind a library 900 designers share, and the three escape hatches that keep it from being forked.',
      },
      {
        id: 'd2-alerts',
        time: '11:45',
        duration: 40,
        title: 'Deleting 80% of Our Alerts Made Us Faster',
        kind: 'talk',
        room: 'Hall A',
        speakerId: 'arjun-pillai',
        track: 'devops',
        description:
          'How a peak-hour order pipeline cut its pager volume by four fifths and lowered time-to-detect at the same time.',
      },
      {
        id: 'd2-lunch',
        time: '12:30',
        duration: 75,
        title: 'Lunch and lightning talks',
        kind: 'break',
        room: 'Terrace',
      },
      {
        id: 'd2-workshop-load',
        time: '13:45',
        duration: 90,
        title: 'Workshop: Load Testing for a Day That Happens Once a Year',
        kind: 'workshop',
        room: 'Workshop Room 1',
        speakerId: 'sanjay-iyer',
        track: 'devops',
        description:
          'Build a load profile from real traffic shapes, then find the knee in your own service before the sale does.',
      },
      {
        id: 'd2-one-form',
        time: '14:30',
        duration: 40,
        title: 'One Form, Forty-Six Countries',
        kind: 'talk',
        room: 'Hall B',
        speakerId: 'chen-yu',
        track: 'web',
        description:
          'Address formats, input modes, autofill and validation, and why the field order changes per country.',
      },
      {
        id: 'd2-resume',
        time: '15:15',
        duration: 40,
        title: 'What Your Resume Looks Like From the Other Side',
        kind: 'talk',
        room: 'Hall C',
        speakerId: 'nadia-hassan',
        track: 'career',
        description:
          'Four thousand screened resumes, the six seconds each one got, and what changed the outcome.',
      },
      {
        id: 'd2-maintaining',
        time: '16:00',
        duration: 30,
        title: 'Maintaining a Build Tool Without Burning Out',
        kind: 'talk',
        room: 'Hall A',
        speakerId: 'imran-qureshi',
        track: 'career',
        description: 'Issue triage, saying no in public, and the rota that finally worked.',
      },
      {
        id: 'd2-hiring',
        time: '16:30',
        duration: 30,
        title: 'Hiring Your First Ten Engineers',
        kind: 'talk',
        room: 'Hall B',
        speakerId: 'leela-varma',
        track: 'career',
        description: 'Four to sixty engineers in three years, and the two hires that were mistakes.',
      },
      {
        id: 'd2-keynote',
        time: '17:00',
        duration: 45,
        title: 'The Promotion You Should Turn Down',
        kind: 'keynote',
        room: 'Main Hall',
        speakerId: 'meera-krishnan',
        track: 'career',
        description:
          'A closing keynote on the ladder nobody draws: going IC to director and back again, and what each rung actually costs.',
      },
      {
        id: 'd2-close',
        time: '18:00',
        duration: 30,
        title: 'Closing remarks and goodbyes',
        kind: 'break',
        room: 'Main Hall',
      },
    ],
  },
]

/** Every session that has a speaker and a track — i.e. not a break. */
export function programmeSessions(): Session[] {
  return schedule.flatMap((day) => day.sessions).filter((s) => s.kind !== 'break')
}

/** Breaks always survive a filter: a day with the coffee removed reads wrong. */
export function sessionsForTrack(day: ScheduleDay, track: TrackId | 'all'): Session[] {
  if (track === 'all') return day.sessions
  return day.sessions.filter((s) => s.kind === 'break' || s.track === track)
}

export function speakerFor(session: Session) {
  return session.speakerId ? speakerById(session.speakerId) : undefined
}

/* ------------------------------------------------------------------------- */
/* Structured-data timestamps                                                 */
/* ------------------------------------------------------------------------- */

const IST_OFFSET = '+05:30'

/**
 * Adds minutes to an `HH:MM` string.
 *
 * Deliberately plain arithmetic rather than `Date`: no timezone to get wrong, no
 * impure clock read, and identical output on the server and in the browser. The
 * hour is not wrapped past 24 because nothing in this programme runs past
 * midnight — if yours does, wrap it and roll the date with it.
 */
function addMinutes(time: string, minutes: number): string {
  const [h, m] = time.split(':').map(Number)
  const total = h * 60 + m + minutes
  const hh = String(Math.floor(total / 60)).padStart(2, '0')
  const mm = String(total % 60).padStart(2, '0')
  return `${hh}:${mm}`
}

/** `2026-11-12T10:30:00+05:30` — what schema.org wants for a sub-event. */
export function sessionStartISO(day: ScheduleDay, session: Session): string {
  return `${day.isoDate}T${session.time}:00${IST_OFFSET}`
}

export function sessionEndISO(day: ScheduleDay, session: Session): string {
  return `${day.isoDate}T${addMinutes(session.time, session.duration)}:00${IST_OFFSET}`
}

/** Every non-break session paired with the day it belongs to. */
export function programmeWithDays(): { day: ScheduleDay; session: Session }[] {
  return schedule.flatMap((day) =>
    day.sessions.filter((s) => s.kind !== 'break').map((session) => ({ day, session })),
  )
}

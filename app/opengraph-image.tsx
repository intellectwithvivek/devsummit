import { ImageResponse } from 'next/og'
import { event } from '@/data/event'

export const alt = `${event.fullName} — a free Next.js conference website template built with VivekUI`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * The social card, drawn at request time by Satori.
 *
 * Deliberately typeface-agnostic: no font is fetched, so this cannot fail at build
 * time behind a proxy. Satori only implements a subset of CSS — every element with
 * more than one child sets `display: flex` explicitly, and layout is done with
 * padding and margins rather than anything exotic.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          backgroundColor: '#0a0a0b',
          backgroundImage:
            'radial-gradient(900px 400px at 12% -10%, #3b1f7a 0%, transparent 65%), radial-gradient(700px 360px at 95% 10%, #2a1856 0%, transparent 65%)',
          color: '#f5f5f7',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundColor: '#a78bfa',
            }}
          />
          <div
            style={{
              marginLeft: 20,
              fontSize: 26,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#c4b5fd',
            }}
          >
            {`${event.dateLine} · ${event.city}`}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3 }}>
            Two days with the
          </div>
          {/* Satori requires an explicit display on any element with more than
              one child, so the accented phrase is its own flex row rather than
              a span inside a text node. */}
          <div
            style={{
              display: 'flex',
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -3,
            }}
          >
            <div>people who&nbsp;</div>
            <div style={{ color: '#a78bfa' }}>actually ship</div>
            <div>.</div>
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: '#c8c8cd' }}>
            {`48 sessions · 5 tracks · ${event.venue.name}, ${event.venue.area}`}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 28,
            borderTop: '2px solid #2a2a2f',
            fontSize: 26,
          }}
        >
          <div style={{ color: '#f5f5f7', fontWeight: 700 }}>DevSummit 2026</div>
          <div style={{ color: '#8e8e93' }}>A free Next.js template · Built with VivekUI</div>
        </div>
      </div>
    ),
    size,
  )
}

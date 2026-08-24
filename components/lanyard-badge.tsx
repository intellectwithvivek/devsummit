import { Badge, Text } from '@the_viveksingh/vivek-ui'
import { event } from '@/data/event'

/**
 * The signature element: the hero renders the attendee badge you will be wearing.
 *
 * Built entirely from CSS — the strap is a clip-path, the punch hole and the
 * barcode are pseudo-element and gradient tricks — so there is no image to load
 * and it re-colours with the theme. Only the decorative parts are aria-hidden;
 * the text on the badge is real text, and reads in order.
 */
export function LanyardBadge({ name = 'YOUR NAME' }: { name?: string }) {
  return (
    <div className="ds-lanyard">
      <div className="ds-lanyard-strap" aria-hidden="true" />
      <div className="ds-lanyard-clip" aria-hidden="true" />

      <div className="ds-lanyard-card">
        <div className="ds-lanyard-top">
          <span className="ds-mono ds-mono-accent">DevSummit 2026</span>
          <Badge size="sm" variant="soft" tone="primary" pill>
            Attendee
          </Badge>
        </div>

        <div className="ds-lanyard-body">
          <p className="ds-lanyard-name">{name}</p>
          <Text size="sm" tone="muted">
            Printed on the morning of day one. Pronouns and social handle optional.
          </Text>
        </div>

        <hr className="ds-lanyard-rule" />

        <div className="ds-lanyard-foot">
          <div className="ds-lanyard-barcode">
            <div className="ds-barcode ds-barcode-thin" aria-hidden="true" />
            <span className="ds-mono">DS26-BLR-0001</span>
          </div>
          <div className="ds-lanyard-dates">
            <span className="ds-mono">12–13 NOV</span>
            <span className="ds-mono">{event.venue.area.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

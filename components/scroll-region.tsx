import type { ReactNode } from 'react'

/**
 * A horizontally scrolling region that a keyboard can actually reach.
 *
 * Wide content — a chart, a comparison table — has to scroll inside its own box
 * so the page never scrolls sideways. But a scroll container whose contents hold
 * no focusable element is unreachable without a pointer, which fails WCAG 2.1.1:
 * there is no way to bring the clipped part into view. `tabIndex={0}` makes the
 * container itself focusable so the arrow keys scroll it, and the `region` needs a
 * name for that new tab stop to mean anything when it is announced.
 */
export function ScrollRegion({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="ds-scroll-x" role="region" aria-label={label} tabIndex={0}>
      {children}
    </div>
  )
}

import { Code } from '@the_viveksingh/vivek-ui'

/**
 * A shell command that wraps at sensible places.
 *
 * Inline `Code` is `white-space: nowrap`, which overflows a narrow column; letting
 * it wrap with `overflow-wrap: anywhere` instead breaks mid-token, so a clone URL
 * came out as `intellectwithv / ivek`. This inserts explicit `<wbr>` break
 * opportunities after each `/` and keeps `overflow-wrap` normal, so the line can
 * only break at a path boundary.
 *
 * The `<wbr>` elements are zero-width and carry no text, so the accessible name
 * and anything copied from a selection are unchanged.
 */
export function Command({ children }: { children: string }) {
  const parts = children.split('/')

  return (
    <Code className="ds-cmd">
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 ? (
            <>
              /<wbr />
            </>
          ) : null}
        </span>
      ))}
    </Code>
  )
}

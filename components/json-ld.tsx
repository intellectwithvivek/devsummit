/**
 * A structured-data block.
 *
 * `<` is escaped so a stray `</script>` inside any string can never break out of
 * the tag — the one real injection risk in a JSON-LD payload.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

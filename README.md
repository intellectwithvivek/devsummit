<div align="center">

# DevSummit 2026

### A free, open-source conference &amp; event website template for Next.js 16

Live countdown · speaker grid · two-day schedule · ticket tiers · SVG charts · SEO and
accessibility done properly. Built entirely with [**VivekUI**](https://ui.vivekkumarsingh.in/docs?utm_source=vivekui-template&utm_campaign=conference&utm_medium=readme) —
no Tailwind, no shadcn, no config file, **zero runtime dependencies**.

[![Live demo](https://img.shields.io/badge/live%20demo-devsummit.vivekkumarsingh.in-6d28d9?style=flat-square)](https://devsummit.vivekkumarsingh.in)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-087ea4?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![VivekUI](https://img.shields.io/npm/v/@the_viveksingh/vivek-ui?style=flat-square&color=6d28d9&label=VivekUI)](https://www.npmjs.com/package/@the_viveksingh/vivek-ui)
[![runtime deps](https://img.shields.io/badge/UI%20runtime%20deps-0-6d28d9?style=flat-square)](https://github.com/intellectwithvivek/vivek_UI)
[![axe](https://img.shields.io/badge/axe--core-0%20violations-1baf7a?style=flat-square)](#accessibility)
[![licence](https://img.shields.io/badge/licence-MIT-6d28d9?style=flat-square)](./LICENSE)

**[Live demo](https://devsummit.vivekkumarsingh.in)** ·
**[Component inventory](https://devsummit.vivekkumarsingh.in/built-with)** ·
**[VivekUI docs](https://ui.vivekkumarsingh.in/docs?utm_source=vivekui-template&utm_campaign=conference&utm_medium=readme)** ·
**[Report an issue](https://github.com/intellectwithvivek/devsummit/issues)**

</div>

---

## Clone it

```bash
git clone https://github.com/intellectwithvivek/devsummit.git
cd devsummit
npm install
npm run dev
```

Open <http://localhost:3000>. Requires **Node.js 20.9+** (22 LTS recommended).
There are no environment variables, no accounts and no API keys — it runs
immediately with the mock content in place.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fintellectwithvivek%2Fdevsummit&project-name=devsummit&repository-name=devsummit)

> [!NOTE]
> **Add a screenshot.** Run `npm run dev`, open the homepage, take a wide screenshot
> (it looks good in both themes), save it to `docs/screenshot.png`, and replace this
> block with `![DevSummit 2026](docs/screenshot.png)`.

## Why this exists

This is a showcase build for [VivekUI](https://github.com/intellectwithvivek/vivek_UI), a
free React component library with zero runtime dependencies. Rather than a gallery of
isolated components, it is a complete, real-looking website — because the interesting
question about a component library is not whether it has a button, but whether you can
finish a whole site with it and have the result stand up to a build, an accessibility
audit and a phone.

It is also genuinely useful on its own. If you are running a conference, meetup,
workshop series or festival, clone it and change the data files.

**Every person, talk, sponsor, price and photograph on the site is fictional.** Replace
them before pointing this at a real event.

## What you get

| | |
|---|---|
| **Routes** | `/` · `/speakers` · `/schedule` · `/tickets` · `/built-with` — real routes, not anchors, so each is indexable |
| **Signature element** | The hero renders the attendee lanyard badge you would be wearing — strap, punch hole and barcode, all in CSS, no image |
| **Live countdown** | To the opening keynote, plus an inline one on the early-bird tier. Hydration-safe by construction: it never reads the clock during render |
| **Charts** | Audience-mix donut and sessions-per-track bars, pure SVG, no charting dependency, each with a real data table underneath |
| **Speakers** | Twelve-up grid with a click-and-keyboard bio popover; the full list filters by track |
| **Schedule** | Both days as a timeline — times, durations, rooms, track flags, keynote stars, abstracts — with a track filter that keeps the breaks |
| **Tickets** | Three tiers, a comparison table, and a group-discount notice |
| **Theming** | Light / dark / system, persisted, with no flash of the wrong theme on first paint |
| **SEO** | Metadata API per route, canonicals, `sitemap.ts`, `robots.ts`, a generated OG image, a web manifest, one `h1` per page |
| **Structured data** | `Event` (offer per tier, performer per speaker, **sub-event per session**), `WebSite`, `SoftwareSourceCode`, `BreadcrumbList`, `ItemList`, `FAQPage` ×2 |
| **AEO** | `public/llms.txt`, and two FAQs whose visible answers and JSON-LD come from one source so they cannot drift |
| **Accessibility** | Zero axe-core violations, skip link, visible focus, reduced-motion respected, a validated colourblind-safe chart palette |

## Making it yours

Everything lives in two places.

### `data/` — the content

No component needs touching to run a different event.

| File | What is in it |
|---|---|
| `data/event.ts` | Name, dates, venue, keynote and early-bird deadlines, tracks, navigation, **`SITE_URL`**, repository links |
| `data/speakers.ts` | Speakers — title, company, portrait, one-line bio, talk, track |
| `data/schedule.ts` | Both days, session by session: time, duration, room, kind, abstract |
| `data/tickets.ts` | Tiers, features, comparison rows, group-discount copy |
| `data/stats.ts` | Headline counters, audience mix (donut), sessions per track (bars) |
| `data/faq.ts` | The attendee FAQ **and** the template FAQ — both feed their own `FAQPage` markup |
| `data/sponsors.ts` | Sponsors and tiers |
| `data/venue.ts` | Getting-there instructions, past-edition photos, site photography |

Dates are ISO strings with an explicit `+05:30` offset. Change the offset and the
countdown, the schedule and the structured data all follow.

**Set `SITE_URL` first.** It drives `metadataBase`, every canonical, the sitemap, the
JSON-LD and `llms.txt`.

### `app/globals.css` — the look

The accent is one block of custom properties:

```css
:root {
  --vk-color-primary: #6d28d9;        /* violet */
  --vk-color-primary-hover: #5b21b6;
  --vk-color-primary-subtle: #f4f0ff;
}
[data-theme="dark"] {
  --vk-color-primary: #a78bfa;        /* the same hue, stepped for the dark surface */
}
```

Every VivekUI selector is wrapped in `:where()`, so it has **zero specificity** — one
flat class of your own always wins. There is no `!important` anywhere in this repo.

> [!TIP]
> If you change the chart colours, re-check them for colourblind separation rather than
> eyeballing it. The five slice colours shipped here were validated against both the
> light and the dark surface; the reasoning is in the comments in `globals.css`.

## Project layout

```
app/
  layout.tsx              root layout, fonts, providers, no-flash theme script
  page.tsx                homepage — hero, stats, charts, speakers, schedule,
                          tickets, venue, sponsors, past editions, FAQ, newsletter
  speakers/page.tsx       full speaker grid with a track filter
  schedule/page.tsx       both days with abstracts and a track filter
  tickets/page.tsx        tiers, comparison table, group discount
  built-with/page.tsx     component inventory, how to clone, template FAQ
  sitemap.ts robots.ts manifest.ts opengraph-image.tsx icon.svg not-found.tsx
  globals.css             the entire visual identity
components/               site-specific composition over VivekUI
data/                     all mock content — start here
lib/                      JSON-LD builders, OG helper, the theme script
public/llms.txt           AEO
```

## Scripts

```bash
npm run dev         # Turbopack dev server
npm run build       # production build
npm run start       # serve the production build
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
```

## Accessibility

Not a later phase. Verified against the production build in a real browser, not asserted:

- **axe-core: zero violations** — WCAG 2.0/2.1 A + AA plus best-practice rules, on all five
  pages in **both light and dark themes**, and again with the day-two panel open, a speaker
  popover open, a toast on screen, the mobile sheet open at 390px, a filter matching nothing,
  every FAQ expanded, and on the 404 page.
- **Exactly one `h1` per page, no heading-level skips.**
- **No horizontal scroll** at 360 / 420 / 768 / 1024 / 1440px on any page.
- Skip link as the first tab stop; visible focus on every control, including the
  keyboard-reachable scroll regions around wide charts and tables.
- `prefers-reduced-motion` honoured — counters render their final value, transitions
  and smooth scrolling are off.
- Both charts ship a real `<table>` of their numbers, and never encode a series by
  colour alone.
- **Zero console errors or warnings.**

## Powered by VivekUI

This entire website is built with [**VivekUI**](https://ui.vivekkumarsingh.in/docs?utm_source=vivekui-template&utm_campaign=conference&utm_medium=readme),
a free React component library with zero runtime dependencies — 91 accessible components
and 6 SVG charts, in one install and one CSS import, with no configuration.

```bash
npm i @the_viveksingh/vivek-ui
```

This template uses **36 components and 2 charts**. 49 of the library's 91 components render
directly in React Server Components with no client boundary.

[Documentation](https://ui.vivekkumarsingh.in/docs?utm_source=vivekui-template&utm_campaign=conference&utm_medium=readme) ·
[Components](https://ui.vivekkumarsingh.in/docs/components) ·
[Charts](https://ui.vivekkumarsingh.in/docs/charts) ·
[npm](https://www.npmjs.com/package/@the_viveksingh/vivek-ui) ·
[GitHub](https://github.com/intellectwithvivek/vivek_UI) ·
[Author — Vivek Kumar Singh](https://vivekkumarsingh.in/?utm_source=vivekui-template&utm_campaign=conference&utm_medium=readme)

See **[/built-with](https://devsummit.vivekkumarsingh.in/built-with)** on the live demo for
every component on the site mapped to its documentation page.

## Placeholder content and credits

| What | Source |
|---|---|
| Speaker portraits | [i.pravatar.cc](https://i.pravatar.cc) |
| Photography | [Unsplash](https://unsplash.com) |
| Sponsor wordmarks | Drawn locally as inline SVG — no third-party request, so the row never breaks |
| Map | [OpenStreetMap](https://www.openstreetmap.org) — no cookies, no consent gate needed |

## Contributing

Issues and pull requests are welcome — bug reports especially. If you ship a site from
this template, open an issue and say so; it is good to know where it ends up.

## Licence

[MIT](./LICENSE) © 2026 Vivek Kumar Singh. Free for any use, commercial included.

The **"Built with VivekUI"** credit in the footer and navbar is removable — it is a normal
component in `components/site-footer.tsx` and `components/site-navbar.tsx`. If you keep it,
or leave a ⭐ on [the library](https://github.com/intellectwithvivek/vivek_UI), it is
genuinely appreciated.

'use client'

import type { ReactNode } from 'react'
import { Tabs } from '@the_viveksingh/vivek-ui'
import { schedule } from '@/data/schedule'

/**
 * Day 1 / Day 2 tabs for the homepage preview.
 *
 * The panels arrive as props already rendered on the server, so switching a tab
 * costs no JavaScript beyond the tab widget itself. `activationMode="manual"`
 * because each panel is a full day's timeline — arrowing across the tabs should
 * not mount both.
 */
export function ScheduleTabs({ dayOne, dayTwo }: { dayOne: ReactNode; dayTwo: ReactNode }) {
  const [one, two] = schedule

  return (
    <Tabs defaultValue={one.id} variant="pill" activationMode="manual">
      <Tabs.List aria-label="Conference day">
        <Tabs.Tab value={one.id}>
          {one.label} <span className="ds-tab-date">· {one.date.replace(' 2026', '')}</span>
        </Tabs.Tab>
        <Tabs.Tab value={two.id}>
          {two.label} <span className="ds-tab-date">· {two.date.replace(' 2026', '')}</span>
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel value={one.id}>{dayOne}</Tabs.Panel>
        <Tabs.Panel value={two.id}>{dayTwo}</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  )
}

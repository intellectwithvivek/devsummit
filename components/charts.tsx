import { BarChart, PieChart } from '@the_viveksingh/vivek-ui/charts'
import { TOTAL_SESSIONS, audienceMix, sessionsPerTrack } from '@/data/stats'

/**
 * Both charts are pure SVG and carry no `'use client'` — only the BarChart's
 * hover tooltip crosses a client boundary, and the library owns that.
 *
 * Each one renders a visually hidden `<table>` of its own numbers underneath
 * (`accessibleTable`, on by default), which is also the documented relief for the
 * three light-mode slice colours that sit under 3:1 against white.
 */

export function AudienceMixChart() {
  return (
    <PieChart
      data={audienceMix.map((d) => ({ label: d.label, value: d.value }))}
      donut
      innerRadius={0.62}
      diameter={280}
      padAngle={1.2}
      showLabels
      showLegend
      centerLabel="2,400"
      centerSublabel="attendees"
      title="Who attends DevSummit"
      description="Share of the 2,400 attendees by role: engineers 54%, designers 16%, product managers 12%, founders 10%, students 8%."
      xLabel="Role"
      yLabel="Share of attendees"
      formatValue={(value) => `${value}%`}
    />
  )
}

export function SessionsPerTrackChart() {
  return (
    <BarChart
      data={sessionsPerTrack.map((d) => ({ x: d.x, y: d.y }))}
      height={260}
      barRadius={4}
      categoryPadding={0.34}
      showGrid
      showAxes
      showValues
      tooltip
      title="Sessions per track"
      description={`How the ${TOTAL_SESSIONS} sessions across both days split across the five tracks.`}
      xLabel="Track"
      yLabel="Sessions"
    />
  )
}

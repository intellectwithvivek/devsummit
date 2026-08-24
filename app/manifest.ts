import type { MetadataRoute } from 'next'
import { event } from '@/data/event'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${event.fullName} — Developer Conference`,
    short_name: event.name,
    description: event.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0b',
    theme_color: '#6d28d9',
    lang: 'en',
    categories: ['events', 'education', 'developer'],
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
  }
}

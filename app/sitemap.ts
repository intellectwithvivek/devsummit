import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/data/event'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/tickets`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/schedule`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/speakers`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/built-with`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
  ]
}

import type { MetadataRoute } from 'next'
import { blogPosts } from '../blog/blog-data'

const SITE = 'https://drgauravsainiortho.com'

type Freq = MetadataRoute.Sitemap[number]['changeFrequency']

const pages: [string, number, Freq][] = [
  ['/', 1.0, 'weekly'],
  ['/services/', 0.9, 'weekly'],
  ['/about/', 0.9, 'weekly'],
  ['/book-appointment/', 0.9, 'monthly'],
  ['/contact/', 0.9, 'monthly'],
  ['/blog/', 0.8, 'weekly'],
  ['/faqs/', 0.8, 'weekly'],
  ['/testimonials/', 0.8, 'weekly'],
  ['/services/knee-replacement-surgery/', 0.8, 'monthly'],
  ['/services/hip-replacement-surgery/', 0.8, 'monthly'],
  ['/services/robotic-joint-replacement/', 0.8, 'monthly'],
  ['/services/joint-replacement-center/', 0.8, 'monthly'],
  ['/services/sports-injury-arthroscopy/', 0.8, 'monthly'],
  ['/services/spine-surgery/', 0.8, 'monthly'],
  ['/services/fracture-trauma-care/', 0.8, 'monthly'],
  ['/privacy/', 0.4, 'yearly'],
  ['/terms/', 0.4, 'yearly'],
  ['/sitemap/', 0.4, 'yearly'],
]

export function sitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    ...pages.map(([path, priority, changeFrequency]) => ({
      url: SITE + path,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE}/blog/${post.id}/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}

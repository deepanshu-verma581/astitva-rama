import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { loadEnv } from 'vite'

const env = loadEnv('production', process.cwd(), 'VITE_')
const configuredUrl = (process.env.VITE_SITE_URL || env.VITE_SITE_URL || '').trim().replace(/\/+$/, '')
const outputDir = path.resolve('dist')

await mkdir(outputDir, { recursive: true })

let siteUrl = ''
if (configuredUrl) {
  try {
    const candidate = new URL(configuredUrl)
    const isExampleDomain = candidate.hostname === 'astitva.example' || candidate.hostname.endsWith('.example')
    if (candidate.protocol === 'https:' && candidate.pathname === '/' && !candidate.search && !candidate.hash && !isExampleDomain) {
      siteUrl = candidate.origin
    }
  } catch {
    // An invalid or missing deployment URL must never create incorrect search URLs.
  }
}

const robots = ['User-agent: *', 'Allow: /']
if (siteUrl) robots.push(`Sitemap: ${siteUrl}/sitemap.xml`)
await writeFile(path.join(outputDir, 'robots.txt'), `${robots.join('\n')}\n`, 'utf8')

if (siteUrl) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc></url>\n</urlset>\n`
  await writeFile(path.join(outputDir, 'sitemap.xml'), sitemap, 'utf8')
  console.info(`Generated robots.txt and sitemap.xml for ${siteUrl}`)
} else {
  console.warn('VITE_SITE_URL is not a production https URL. robots.txt allows crawling; sitemap.xml was skipped until the live domain is configured.')
}

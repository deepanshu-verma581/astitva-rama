import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const pageDescription = 'Explore online counselling with Astitva Counselling & Wellness Centre in India. Find compassionate support for stress, relationships, self-understanding and personal growth.'

function getProductionOrigin(configuredUrl) {
  try {
    const candidate = new URL(configuredUrl)
    const isExampleDomain = candidate.hostname.endsWith('.example')
    const isLocalhost = candidate.hostname === 'localhost' || candidate.hostname === '127.0.0.1'
    if (candidate.protocol !== 'https:' || candidate.pathname !== '/' || candidate.search || candidate.hash || isExampleDomain || isLocalhost) {
      return ''
    }
    return candidate.origin
  } catch {
    return ''
  }
}

function staticSeo(origin) {
  return {
    name: 'astitva-static-seo',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        if (!origin) return html

        const canonicalUrl = `${origin}/`
        const logoUrl = `${origin}/astitva-favicon.png`
        const structuredData = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': `${canonicalUrl}#organization`,
              name: 'Astitva Counselling & Wellness Centre',
              url: canonicalUrl,
              logo: logoUrl,
              email: 'astitvacounsellingcentre@gmail.com',
              telephone: '+91 9319894833',
              description: pageDescription,
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'appointments and enquiries',
                telephone: '+91 9319894833',
                email: 'astitvacounsellingcentre@gmail.com',
                areaServed: 'IN',
              },
            },
            {
              '@type': 'WebSite',
              '@id': `${canonicalUrl}#website`,
              url: canonicalUrl,
              name: 'Astitva Counselling & Wellness Centre',
              inLanguage: 'en-IN',
              publisher: { '@id': `${canonicalUrl}#organization` },
            },
          ],
        }

        const tags = [
          { tag: 'link', attrs: { rel: 'canonical', href: canonicalUrl } },
          { tag: 'meta', attrs: { property: 'og:url', content: canonicalUrl } },
          { tag: 'meta', attrs: { property: 'og:image', content: logoUrl } },
          { tag: 'meta', attrs: { property: 'og:image:alt', content: 'Astitva Counselling & Wellness Centre logo' } },
          { tag: 'meta', attrs: { name: 'twitter:image', content: logoUrl } },
          { tag: 'script', attrs: { id: 'astitva-structured-data', type: 'application/ld+json' }, children: JSON.stringify(structuredData) },
        ]
        return { html, tags }
      },
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const siteUrl = getProductionOrigin(process.env.VITE_SITE_URL || env.VITE_SITE_URL || '')
  return {
    plugins: [react(), staticSeo(siteUrl)],
  }
})

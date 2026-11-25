# ASTITVA SEO audit and implementation

## Audit scope

This repository is a React 19 and Vite single-page site. It has one public page with in-page sections for About, Mission and Vision, Services, Team, Client Experiences and Contact. It has no router, separate service pages, admin pages, or verified physical clinic address. The Contact section says sessions are virtual, so the site is prepared for online counselling searches and does not claim a walk-in location or LocalBusiness address.

## Findings

- Before this work, the homepage had only a short generic description and no social metadata, canonical, structured data, sitemap, or robots file.
- All navigation destinations are sections of the homepage, not unique landing pages. Adding canonical URLs or sitemap rows for `#about`, `#services`, and similar fragments would incorrectly duplicate the same page.
- The testimonial section contained invented quotations and “Verified client feedback” captions. These have been removed pending genuine, consented feedback.
- The hero was a 952 × 716 PNG near 900 KB; the header/footer logo PNG was over 1 MB, and the vision illustration was 1.69 MB. The optimized replacements are smaller JPEG/PNG assets, with a separate mobile hero size.
- The repository has no production domain, privacy policy, Search Console token, GA4 ID, or hosting configuration. These cannot be safely fabricated. The Google Apps Script integration was previously observed returning HTTP 403 and must be tested after its deployment access is corrected.
- The public form collects names, email addresses, phone numbers, ages, and optional messages. A clear privacy notice and an owner-reviewed retention/access process are still needed; SEO metadata does not expose submitted records.
- No Google Business Profile was created or claimed. Based on the site's virtual-session information, the centre appears online-only; Google's current eligibility rules require in-person contact with customers during stated hours. Reassess only if the service model includes eligible in-person contact.

## Implemented

- Added a descriptive page title, search description, robots directives, Open Graph and X/Twitter metadata.
- Added a Vite HTML transform to put a canonical URL, absolute social image URLs, and Organization/WebSite JSON-LD directly into the built HTML only when a real HTTPS `VITE_SITE_URL` is configured. The reserved `.example` value is deliberately ignored.
- The build creates an allow-all `robots.txt`. It includes a sitemap URL and creates a one-URL `sitemap.xml` only when a real production URL is configured. This one-page site does not submit fragment links as separate pages, and the sitemap omits `lastmod` rather than claiming an unverified content date.
- Added one clear H1 focused on online counselling. Existing sections provide internal links and describe the service topics already present in the site.
- Added useful alternative text and intrinsic dimensions to content images; the hero is prioritized, and below-the-fold images are lazy-loaded.
- Removed invented client quotations and the unsupported “Verified client feedback” labels. Client feedback is now shown only after permission is obtained.
- Added the example environment configuration and this handoff guide.

## Qualitative keyword map

Search volume was not estimated. The terms below reflect the services and virtual format already described by the project.

| Intent | Phrase to use naturally | Current destination | Suggested placement |
| --- | --- | --- | --- |
| Service discovery | online counselling India | Homepage | Title, description, H1 and introductory text |
| Provider discovery | counselling psychologist | Team and homepage | Team designations and About copy, without adding unverified credentials |
| Centre discovery | counselling and wellness centre | Homepage | Title, About copy and contact section |
| Topic discovery | mental wellness counselling | Homepage and Services section | Introductory copy and emotional well-being service |
| Service | individual counselling | Services section | Service title and description |
| Service | anxiety and stress management counselling | Services section | Existing service title and description |
| Service | depression support counselling | Services section | Existing service title and description |
| Service | relationship counselling | Services section | Existing service title and description |
| Service | family counselling | Services section | Existing service title and description |
| Service | emotional wellbeing counselling | Services section | Existing service title and description |
| Service | self-esteem and personal growth counselling | Services section | Existing service title and description |
| Service | life transitions counselling | Services section | Existing service title and description |

“Near me” and city-specific phrases should not be targeted yet: the site provides virtual sessions and no verified service city or public street address. Create individual service pages only if the centre wants them and can provide substantive, reviewed content for each.

## Remaining information and operational steps

1. Replace `https://astitva.example` in the deployment environment with the final canonical HTTPS origin as `VITE_SITE_URL`. Configure the hosting provider to redirect alternate host and slash variants to that origin. Rebuild and deploy; without that value, no canonical, absolute social URL, schema, or sitemap is generated.
2. Add the deployed origin as a Domain property in Google Search Console and complete Google's DNS verification. Then submit `/sitemap.xml` and inspect the homepage. The project does not contain a verification token.
3. Create a GA4 property only if analytics is wanted, add its actual Measurement ID to the deployment configuration, and install the supported tag after reviewing the site's privacy/consent requirements. A Measurement ID is public configuration, not a secret. No fabricated ID or tracking script is included.
4. Publish a privacy notice explaining what contact-form fields are collected, who can access the Google Sheet, retention, deletion requests and how users can make enquiries. The code does not provide those operational details, so no policy text was invented.
5. Confirm the Google Apps Script deployment works from the deployed origin. The last recorded endpoint check returned HTTP 403; this repository change cannot change the Apps Script owner's deployment permissions. Use an authenticated deployment that permits the intended submissions and restrict sheet access independently.
6. Confirm whether the listed phone, email, 6 PM–12 AM hours, languages, qualifications and service descriptions are current before adding further structured business details or external profile links.
7. Ask clients for explicit, documented permission before publishing testimonials or portraits. Do not add ratings or review schema unless genuine, visible reviews are collected and eligible.

## Deployment check

Set `VITE_SITE_URL` in the production build environment, then run `npm run build`. The build places `robots.txt` and (for a configured HTTPS site origin) `sitemap.xml` in `dist/`. Check that the sitemap contains the production home URL before deployment. Because this site is a single page, section fragments are not separate sitemap entries.

Google guidance: [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [Search Essentials](https://developers.google.com/search/docs/essentials), [Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization), and [Google Business Profile eligibility](https://support.google.com/business/answer/13762416?hl=en-11).

import { MetadataRoute } from 'next'

import { SITE_URL } from '@/lib/siteMetadata'

// robots.txt: la web es pública y se rastrea entera, salvo los manejadores de api/
export default function robots(): MetadataRoute.Robots {

    return {

        rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,

    }

}

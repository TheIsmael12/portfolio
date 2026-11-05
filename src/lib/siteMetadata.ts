import { Metadata } from 'next'

export type Locale = 'en' | 'es' | 'fr'

export const SITE_URL = 'https://ismaelben.netlify.app'
export const SITE_NAME = 'Ismael Benabdellah'

// Autor de la web; es un portfolio personal, así que no hay editor de empresa
const AUTHOR = { name: 'Ismael Benabdellah', url: SITE_URL }

// Imagen para compartir: app/opengraph-image.png (y twitter-image.png), 1200 × 630
const OG_IMAGE = '/opengraph-image.png'

const OG_LOCALES: Record<Locale, string> = { es: 'es_ES', en: 'en_GB', fr: 'fr_FR' }

const translations = {

    title: {
        en: 'Ismael Benabdellah · Frontend Tech Lead and full stack developer',
        es: 'Ismael Benabdellah · Frontend Tech Lead y desarrollador full stack',
        fr: 'Ismael Benabdellah · Frontend Tech Lead et développeur full stack'
    },
    description: {
        en: 'Portfolio of Ismael Benabdellah, Frontend Tech Lead and full stack developer in Madrid: web and mobile products with Next.js, React, NestJS, React Native and TypeScript, from architecture to production.',
        es: 'Portfolio de Ismael Benabdellah, Frontend Tech Lead y desarrollador full stack en Madrid: productos web y móviles con Next.js, React, NestJS, React Native y TypeScript, de la arquitectura a producción.',
        fr: 'Portfolio d\'Ismael Benabdellah, Frontend Tech Lead et développeur full stack à Madrid : produits web et mobiles avec Next.js, React, NestJS, React Native et TypeScript, de l\'architecture à la production.'
    },
    keywords: {
        en: ['Ismael Benabdellah', 'Frontend Tech Lead', 'full stack developer', 'Next.js developer', 'React', 'NestJS', 'React Native', 'TypeScript', 'web development', 'portfolio', 'Madrid'],
        es: ['Ismael Benabdellah', 'Frontend Tech Lead', 'desarrollador full stack', 'desarrollador Next.js', 'React', 'NestJS', 'React Native', 'TypeScript', 'desarrollo web', 'portfolio', 'Madrid'],
        fr: ['Ismael Benabdellah', 'Frontend Tech Lead', 'développeur full stack', 'développeur Next.js', 'React', 'NestJS', 'React Native', 'TypeScript', 'développement web', 'portfolio', 'Madrid']
    },
    imageAlt: {
        en: 'Ismael Benabdellah, Frontend Tech Lead and full stack developer with Next.js, NestJS, React Native and TypeScript',
        es: 'Ismael Benabdellah, Frontend Tech Lead y desarrollador full stack con Next.js, NestJS, React Native y TypeScript',
        fr: 'Ismael Benabdellah, Frontend Tech Lead et développeur full stack avec Next.js, NestJS, React Native et TypeScript'
    }

}

function resolveLocale(locale: string): Locale {

    return (['en', 'es', 'fr'] as const).includes(locale as Locale) ? locale as Locale : 'es'

}

// Metadatos comunes de la web en un idioma. Los usa el layout de idioma y la 404 global, que se pinta
// fuera de él y no hereda nada
export function siteMetadata(rawLocale: string): Metadata {

    const locale = resolveLocale(rawLocale)
    const title = translations.title[locale]
    const description = translations.description[locale]
    const images = [{ url: OG_IMAGE, width: 1200, height: 630, type: 'image/png', alt: translations.imageAlt[locale] }]

    return {

        metadataBase: new URL(SITE_URL),
        title: { default: title, template: `%s | ${SITE_NAME}` },
        description,
        keywords: translations.keywords[locale],
        applicationName: SITE_NAME,
        authors: [AUTHOR],
        creator: AUTHOR.name,
        generator: 'Next.js',
        referrer: 'origin-when-cross-origin',
        openGraph: {
            title,
            description,
            url: `/${locale}`,
            type: 'website',
            locale: OG_LOCALES[locale],
            alternateLocale: Object.values(OG_LOCALES).filter((code) => code !== OG_LOCALES[locale]),
            siteName: SITE_NAME,
            images,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [OG_IMAGE],
        },
        robots: { index: true, follow: true },
        alternates: {
            canonical: `/${locale}`,
            languages: {
                es: '/es',
                en: '/en',
                fr: '/fr',
                'x-default': '/',
            }
        }

    }

}

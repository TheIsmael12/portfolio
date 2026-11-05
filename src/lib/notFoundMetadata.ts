import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { siteMetadata } from '@/lib/siteMetadata'

// Metadatos de la página 404: los comunes de la web (la 404 global no hereda del layout), título y
// descripción traducidos y fuera de los buscadores
export async function notFoundMetadata(locale: string): Promise<Metadata> {

    const t = await getTranslations({ locale, namespace: 'NotFound' })
    const base = siteMetadata(locale)

    const title = t('metaTitle')
    const description = t('metaDescription')

    return {

        ...base,
        title: { absolute: title },
        description,
        robots: { index: false, follow: true },
        alternates: { canonical: null },
        openGraph: { ...base.openGraph, title, description },
        twitter: { ...base.twitter, title, description },

    }

}

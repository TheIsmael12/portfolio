import { Metadata } from 'next'
import { getLocale } from 'next-intl/server'

import NotFoundView from '@/components/NotFound/NotFoundView'
import { notFoundMetadata } from '@/lib/notFoundMetadata'

export async function generateMetadata(): Promise<Metadata> {

    return notFoundMetadata(await getLocale())

}

// Se pinta dentro de app/[locale]/layout.tsx, con la cabecera, el tema y el idioma de la ruta
export default async function LocaleNotFound() {

    const locale = await getLocale()

    return <NotFoundView locale={locale} />

}

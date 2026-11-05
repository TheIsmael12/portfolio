import { Metadata } from 'next'

import ThemeWrapper from '@/providers/ThemeProvider'
import Navbar from '@/components/Static/Navbar'
import NotFoundView from '@/components/NotFound/NotFoundView'
import { notFoundMetadata } from '@/lib/notFoundMetadata'

// Reserva para lo que no llega a app/[locale] (rutas con un idioma que no existe o fuera del
// middleware). El layout raíz no pinta <html>, así que lo monta esta página, en el idioma por defecto.
const DEFAULT_LOCALE = 'es'

export async function generateMetadata(): Promise<Metadata> {

    return notFoundMetadata(DEFAULT_LOCALE)

}

export default function GlobalNotFound() {

    return (

        <html lang={DEFAULT_LOCALE}>

            <body className='bg-white dark:bg-neutral-900'>

                <ThemeWrapper>

                    <Navbar />
                    <main className='px-5'>
                        <NotFoundView locale={DEFAULT_LOCALE} />
                    </main>

                </ThemeWrapper>

            </body>

        </html>

    )

}

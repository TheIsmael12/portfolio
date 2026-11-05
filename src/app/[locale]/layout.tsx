import ThemeWrapper from '@/providers/ThemeProvider'
import { NextIntlClientProvider } from 'next-intl'

import { Metadata } from 'next'
import { locales } from '@/i18n'
import { siteMetadata } from '@/lib/siteMetadata'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'

import Navbar from '@/components/Static/Navbar'
import TopButton from '@/components/TopButton'
import CookieNotice from '@/components/CookieNotice'

import { Toaster } from 'sonner'

import SuspenseBoundary from '@/components/Suspense/SuspenseBoundary'
import Spinner from '@/components/Loadings/Spinner'

export async function generateStaticParams() {

    return locales.map((locale) => ({ locale }))

}

export const generateMetadata = ({ params }: { params: { locale: string } }): Metadata => {

    return siteMetadata(params.locale)

}

export default async function LocaleLayout({ children, params: { locale } }: {

    children: React.ReactNode
    params: { locale: string }

}) {

    const messages = await getMessages({ locale })

    unstable_setRequestLocale(locale)

    return (

        <html lang={locale}>

            <body className='bg-white dark:bg-neutral-900'>

                <ThemeWrapper>
                    <NextIntlClientProvider messages={messages}>

                        <Toaster richColors />
                        <Navbar />
                        <main className='px-5'>
                            <SuspenseBoundary fallback={<Spinner />}>
                                {children}
                            </SuspenseBoundary>
                        </main>
                        <TopButton />
                        <CookieNotice />

                    </NextIntlClientProvider>
                </ThemeWrapper>

            </body>

        </html>

    )

}
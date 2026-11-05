import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

import { FaArrowLeft, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

interface NotFoundViewProps {

    locale: string

}

export default async function NotFoundView({ locale }: NotFoundViewProps) {

    const t = await getTranslations({ locale, namespace: 'NotFound' })

    const contactLinks = [

        { href: 'mailto:ismaelmad12@gmail.com', title: t('email'), icon: <IoIosMail size={20} />, external: false },
        { href: 'https://www.linkedin.com/in/ismael-benabdellah/', title: 'LinkedIn', icon: <FaLinkedin size={18} />, external: true },

    ]

    return (

        <section className='min-h-[80vh] pt-32 pb-20 flex justify-center items-center text-center'>

            <div className='max-w-xl px-5 space-y-6'>

                <p className='text-7xl md:text-8xl font-bold text-colorLight dark:text-colorDark'>
                    404
                </p>

                <h1 className='text-3xl md:text-4xl font-bold'>
                    {t('title')}
                </h1>

                <p className='text-lg text-balance'>
                    {t('description')}
                </p>

                <div className='flex flex-wrap justify-center items-center gap-3'>

                    <Link
                        href={`/${locale}`}
                        title={t('home')}
                        className='flex items-center gap-2 px-5 py-2 rounded-full text-white bg-colorLight dark:bg-colorDark hover:bg-hoverLight dark:hover:bg-hoverDark'
                    >
                        <FaArrowLeft size={14} aria-hidden='true' />
                        {t('home')}
                    </Link>

                    <Link
                        href={`/${locale}#proyectos`}
                        title={t('projects')}
                        className='px-5 py-2 rounded-full border border-colorLight dark:border-colorDark hover:text-colorLight dark:hover:text-colorDark'
                    >
                        {t('projects')}
                    </Link>

                </div>

                <div className='space-y-3'>

                    <p className='text-sm'>{t('contact')}</p>

                    <ul className='flex justify-center items-center gap-6'>
                        {contactLinks.map(({ href, title, icon, external }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    title={title}
                                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className='flex items-center gap-2 hover:text-colorLight dark:hover:text-colorDark'
                                >
                                    {icon}
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

        </section>

    )

}

import { useTranslations } from 'next-intl'

import Link from 'next/link'
import Image from 'next/image'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { MdOutlinePhoneIphone } from 'react-icons/md'

const Header = () => {

    const t = useTranslations('Header')

    const links = [

        { href: 'tel:612442260', title: 'Phone', icon: <MdOutlinePhoneIphone size={20} /> },
        { href: 'https://github.com/TheIsmael12', title: 'GitHub', icon: <FaGithub size={20} /> },
        { href: 'https://www.linkedin.com/in/ismael-benabdellah/', title: 'LinkedIn', icon: <FaLinkedin size={20} /> },
        { href: 'mailto:ismaelmad12@gmail.com', title: 'Email', icon: <IoIosMail size={20} /> },

    ]

    return (

        <header className='flex justify-between'>

            <div className='space-y-8 my-auto'>

                {/* Titulo */}

                <div className='space-y-6'>

                    <h1 className='text-2xl lg:text-4xl font-bold'>
                        Ismael Benabdellah
                    </h1>

                    <p className='lg:w-[460px] text-balance lg:text-justify'>
                        <span className='font-semibold text-colorLight dark:text-colorDark'>{t('part1')}</span> {t('part2')} <span className='font-semibold text-colorLight dark:text-colorDark'>{t('part3')}</span> {t('part4')} {t('part5')}
                    </p>

                    <div className='flex lg:hidden gap-8 items-center'>

                        {links.map(({ href, title, icon }) => (
                            <Link
                                key={title}
                                href={href}
                                title={title}
                                target='_blank'
                                className='hover:text-colorLight dark:hover:text-colorDark'
                            >
                                {icon}
                            </Link>
                        ))}

                    </div>

                </div>

            </div>

            <div className='h-64 lg:h-80 pb-10'>

                <div className='h-56 lg:h-64 flex flex-col justify-end rounded-b-full bg-colorLight dark:bg-colorDark'>
                    <Image
                        className='w-96 lg:w-44 rounded-b-full'
                        src='/assets/images/ismael.webp'
                        width='200'
                        height='200'
                        alt='Ismael Benabdellah'
                        title='Ismael Benbdellah'
                    />
                </div>

            </div>

        </header>

    )

}

export default Header
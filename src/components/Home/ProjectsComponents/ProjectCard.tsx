import { useTranslations } from 'next-intl'

import LinkButton from '@/components/Buttons/LinkButton'

import {
    FaCode,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaLaravel,
    FaSass
} from 'react-icons/fa'
import {
    TbWorld,
    TbCircleCheckFilled
} from 'react-icons/tb'
import {
    RiNextjsFill,
    RiTailwindCssFill
} from 'react-icons/ri'
import {
    SiPrisma,
    SiMysql,
    SiTypescript,
    SiJavascript,
    SiNestjs
} from 'react-icons/si'

interface ProjectCardProps {

    project: {

        title: string
        desc: string
        features: string[]
        codeLink: string | null
        demoLink: string | null
        technologies: string

    }

}

// Mapeo de tecnologías e íconos
const TECHNOLOGY_ICONS: Record<string, JSX.Element> = {

    react: <FaReact />,
    sass: <FaSass />,
    nestjs: <SiNestjs />,
    nodejs: <FaNodeJs />,
    nextjs: <RiNextjsFill />,
    tailwindcss: <RiTailwindCssFill />,
    prisma: <SiPrisma />,
    mysql: <SiMysql />,
    laravel: <FaLaravel />,
    php: <FaPhp />,
    typescript: <SiTypescript />,
    javascript: <SiJavascript />

}

const ProjectCard = ({ project }: ProjectCardProps) => {

    const t = useTranslations('Projects')

    const technologiesArray = project.technologies.split(',')

    const hasFeatures = project.features?.length > 0

    return (

        <div className={`flex flex-col border dark:border-none dark:bg-darkBackground rounded-md ${hasFeatures ? 'lg:col-span-2' : ''}`}>

            <div className='flex flex-col flex-1 py-4 px-4 gap-4'>

                {/* Titulo y descripción del proyecto */}

                <div className='space-y-2 text-center'>
                    <h3 className='text-2xl font-bold text-colorLight dark:text-colorDark'>
                        {project.title}
                    </h3>
                    <p className='py-2 px-4 text-justify'>
                        {project.desc}
                    </p>
                </div>

                {/* Funcionalidades destacadas */}

                {hasFeatures && (

                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 px-4 text-sm'>

                        {project.features.map((feature) => (

                            <li key={feature} className='flex items-start gap-2'>
                                <TbCircleCheckFilled className='shrink-0 mt-0.5 text-colorLight dark:text-colorDark' size={16} />
                                <span>{feature}</span>
                            </li>

                        ))}

                    </ul>

                )}

                {/* Tecnologías y enlaces */}

                <div className='mt-auto space-y-4'>

                    <div className='flex flex-wrap justify-center items-center gap-4 text-2xl'>

                        {technologiesArray.map((tech: string) => {

                            const icon = TECHNOLOGY_ICONS[tech.trim().toLowerCase()]

                            return icon ? <span key={tech} title={tech.trim()}>{icon}</span> : null

                        })}

                    </div>

                    <div className='flex justify-center items-center gap-2'>

                        <LinkButton
                            href={project.demoLink || ''}
                            title={project.title}
                        >
                            <TbWorld size={20} />
                            {t('demo')}
                        </LinkButton>
                        {project.codeLink && (
                            <LinkButton
                                href={project.codeLink}
                                title={project.title}
                            >
                                <FaCode size={20} />
                                {t('code')}
                            </LinkButton>
                        )}

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ProjectCard
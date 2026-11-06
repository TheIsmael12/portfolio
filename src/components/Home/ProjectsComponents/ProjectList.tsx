'use client'

import { useState, useEffect } from 'react'

import { useLocale } from 'next-intl'

import ProjectCard from './ProjectCard'
import SmallLoadingSpinner from '@/components/Loadings/SmallLoadingSpinner'

const ProjectList = () => {

    const locale = useLocale() || 'es'

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch(`/api/projects?locale=${locale}`)
            .then((res) => res.json())
            .then((data) => {

                setProjects(Array.isArray(data) ? (data as never[]) : [])
                setLoading(false)

            })
            .catch((err) => {

                console.error('Error fetching projects:', err)
                setLoading(false)

            })

    }, [locale])

    if (loading) {

        return (

            <div className='h-60 flex justify-center items-center'>
                <SmallLoadingSpinner />
            </div>

        )

    }

    return (

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>

            {projects.map((project, index) => (

                <ProjectCard key={index} project={project} />

            ))}

        </div>

    )

}

export default ProjectList

'use client'

import { useState, useEffect } from 'react'

import { useLocale } from 'next-intl'

import EducationCard from './EducationCard'
import SmallLoadingSpinner from '@/components/Loadings/SmallLoadingSpinner'

const EducationList = () => {

    const locale = useLocale() || 'es'

    const [educations, setEducations] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch(`/api/educations?locale=${locale}`)
            .then((res) => res.json())
            .then((data) => {

                setEducations(Array.isArray(data) ? (data as never[]) : [])
                setLoading(false)

            })
            .catch((err) => {

                console.error('Error fetching educations:', err)
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

        <ul className='space-y-4'>

            {educations.map((education, index) => (

                <EducationCard key={index} education={education} />

            ))}

        </ul>

    )

}

export default EducationList

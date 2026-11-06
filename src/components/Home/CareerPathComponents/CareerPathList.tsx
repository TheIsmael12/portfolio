'use client'

import { useState, useEffect } from 'react'

import { useLocale } from 'next-intl'

import CareerPathCard from './CareerPathCard'
import SmallLoadingSpinner from '@/components/Loadings/SmallLoadingSpinner'

const CareerPathList = () => {

    const locale = useLocale() || 'es'

    const [careers, setCareers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch(`/api/careers?locale=${locale}`)
            .then((res) => res.json())
            .then((data) => {

                setCareers(Array.isArray(data) ? (data as never[]) : [])
                setLoading(false)

            })
            .catch((err) => {

                console.error('Error fetching careers:', err)
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

        <ol className='relative border-s border-gray-200 dark:border-white'>

            {careers.map((career, index) => (

                <CareerPathCard key={index} career={career} />

            ))}

        </ol>

    )

}

export default CareerPathList

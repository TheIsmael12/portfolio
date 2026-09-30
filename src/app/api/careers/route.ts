import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

type CareerTranslations = {

    [key: string]: string

}

export async function GET(req: Request) {

    try {

        const url = new URL(req.url)
        const locale = url.searchParams.get('locale') || 'en'

        const careers = await prisma.careers.findMany({ orderBy: { startDate: 'desc' } })


        const careersWithLocalizedData = careers.map(career => {

            const title = career.title as CareerTranslations 
            const desc = career.desc as CareerTranslations

            return {

                ...career,
                title: title[locale] || title['en'], 
                desc: desc[locale] || desc['en'], 

            }

        })

        return NextResponse.json(careersWithLocalizedData, { status: 200 })

    } catch (error) {

        console.error('Error fetching careers:', error)
        return NextResponse.json({ error: 'Failed to fetch careers' }, { status: 500 })

    }

}

export async function POST(req: Request) {

    try {

        const body = await req.json()

        const { id, title, desc, url, bussines, startDate, finishDate } = body

        if (!title || !bussines) {

            return NextResponse.json({ error: 'Title and business are required' }, { status: 400 })

        }

        const newCareer = await prisma.careers.create({

            data: {
                id,
                title, 
                desc, 
                url,
                bussines,
                startDate,
                finishDate,
            },

        })

        return NextResponse.json(newCareer, { status: 201 })

    } catch (error) {

        console.error('Error creating career:', error)
        return NextResponse.json({ error: 'Failed to create career' }, { status: 500 })

    }

}
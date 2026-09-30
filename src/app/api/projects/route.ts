import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

type ProjectTranslations = {

    [key: string]: string

}

type ProjectFeatures = {

    [key: string]: string[]

}

export async function GET(req: Request) {

    try {

        const url = new URL(req.url)
        const locale = url.searchParams.get('locale') || 'en'

        const projects = await prisma.projects.findMany()

        const projectsWithLocalizedData = projects.map((project) => {

            const desc = project.desc as ProjectTranslations
            const features = project.features as ProjectFeatures | null

            return {
                ...project,
                desc: desc[locale] || desc['en'],
                features: features ? features[locale] || features['en'] || [] : [],
            }

        })

        // Los proyectos con funcionalidades destacadas se muestran primero
        projectsWithLocalizedData.sort((a, b) => b.features.length - a.features.length)

        return NextResponse.json(projectsWithLocalizedData, { status: 200 })

    } catch (error) {

        console.error('Error fetching projects:', error)
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })

    }
}

export async function POST(req: Request) {

    try {

        const body = await req.json()

        const { id, title, desc, features, codeLink, demoLink, technologies } = body

        if (!title) {
            return NextResponse.json({ error: 'Title is required' }, { status: 400 })
        }

        const newProject = await prisma.projects.create({

            data: {
                id,
                title,
                desc,
                features,
                codeLink,
                demoLink,
                technologies,
            },

        })

        return NextResponse.json(newProject, { status: 201 })

    } catch (error) {

        console.error('Error creating project:', error)
        return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })

    }

}
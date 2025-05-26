import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const schools = await prisma.school.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return NextResponse.json(schools)
  } catch (error) {
    console.error('Error fetching schools:', error)
    return NextResponse.json(
      { error: 'Failed to fetch schools' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const data = await request.json()

    const school = await prisma.school.create({
      data: {
        name: data.name,
        description: data.description || null,
        link: data.link || null,
        logo: data.logo || null,
        photos: data.photos || [],
        eventsPhotos: data.eventsPhotos || [],
        eventVideos: data.eventVideos || [],
        address: data.address || null,
        number: data.number || [],
        location: data.location || null,
        city: data.city || null,
      },
    })

    return NextResponse.json(school, { status: 201 })
  } catch (error) {
    console.error('Error creating school:', error)
    return NextResponse.json(
      { error: 'Failed to create school' },
      { status: 500 }
    )
  }
}

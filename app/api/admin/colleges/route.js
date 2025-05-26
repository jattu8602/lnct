import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const colleges = await prisma.college.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return NextResponse.json(colleges)
  } catch (error) {
    console.error('Error fetching colleges:', error)
    return NextResponse.json(
      { error: 'Failed to fetch colleges' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const data = await request.json()

    const college = await prisma.college.create({
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
        courses: data.courses || [],
        companies: data.companies || [],
      },
    })

    return NextResponse.json(college, { status: 201 })
  } catch (error) {
    console.error('Error creating college:', error)
    return NextResponse.json(
      { error: 'Failed to create college' },
      { status: 500 }
    )
  }
}

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const firms = await prisma.firm.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return NextResponse.json(firms)
  } catch (error) {
    console.error('Error fetching firms:', error)
    return NextResponse.json(
      { error: 'Failed to fetch firms' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const data = await request.json()

    const firm = await prisma.firm.create({
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

    return NextResponse.json(firm, { status: 201 })
  } catch (error) {
    console.error('Error creating firm:', error)
    return NextResponse.json(
      { error: 'Failed to create firm' },
      { status: 500 }
    )
  }
}

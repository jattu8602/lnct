import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request, { params }) {
  try {
    const college = await prisma.college.findUnique({
      where: { id: params.id },
    })

    if (!college) {
      return NextResponse.json({ error: 'College not found' }, { status: 404 })
    }

    return NextResponse.json(college)
  } catch (error) {
    console.error('Error fetching college:', error)
    return NextResponse.json(
      { error: 'Failed to fetch college' },
      { status: 500 }
    )
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json()

    const college = await prisma.college.update({
      where: { id: params.id },
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

    return NextResponse.json(college)
  } catch (error) {
    console.error('Error updating college:', error)
    return NextResponse.json(
      { error: 'Failed to update college' },
      { status: 500 }
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    await prisma.college.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: 'College deleted successfully' })
  } catch (error) {
    console.error('Error deleting college:', error)
    return NextResponse.json(
      { error: 'Failed to delete college' },
      { status: 500 }
    )
  }
}

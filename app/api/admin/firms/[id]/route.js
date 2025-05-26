import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request, { params }) {
  try {
    const firm = await prisma.firm.findUnique({
      where: { id: params.id },
    })

    if (!firm) {
      return NextResponse.json({ error: 'Firm not found' }, { status: 404 })
    }

    return NextResponse.json(firm)
  } catch (error) {
    console.error('Error fetching firm:', error)
    return NextResponse.json({ error: 'Failed to fetch firm' }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json()

    const firm = await prisma.firm.update({
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
      },
    })

    return NextResponse.json(firm)
  } catch (error) {
    console.error('Error updating firm:', error)
    return NextResponse.json(
      { error: 'Failed to update firm' },
      { status: 500 }
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    await prisma.firm.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: 'Firm deleted successfully' })
  } catch (error) {
    console.error('Error deleting firm:', error)
    return NextResponse.json(
      { error: 'Failed to delete firm' },
      { status: 500 }
    )
  }
}

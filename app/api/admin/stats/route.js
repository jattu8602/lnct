import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Get counts for each entity
    const [colleges, schools, firms] = await Promise.all([
      prisma.college.count(),
      prisma.school.count(),
      prisma.firm.count(),
    ])

    // Get all entities to calculate photo/video counts
    const [collegeData, schoolData, firmData] = await Promise.all([
      prisma.college.findMany({
        select: {
          photos: true,
          eventsPhotos: true,
          eventVideos: true,
        },
      }),
      prisma.school.findMany({
        select: {
          photos: true,
          eventsPhotos: true,
          eventVideos: true,
        },
      }),
      prisma.firm.findMany({
        select: {
          photos: true,
          eventsPhotos: true,
          eventVideos: true,
        },
      }),
    ])

    // Calculate totals
    let totalPhotos = 0
    let totalVideos = 0
    let totalEvents = 0

    // Count college media
    collegeData.forEach((college) => {
      totalPhotos += college.photos.length
      totalPhotos += college.eventsPhotos.length
      totalVideos += college.eventVideos.length
      totalEvents += college.eventsPhotos.length + college.eventVideos.length
    })

    // Count school media
    schoolData.forEach((school) => {
      totalPhotos += school.photos.length
      totalPhotos += school.eventsPhotos.length
      totalVideos += school.eventVideos.length
      totalEvents += school.eventsPhotos.length + school.eventVideos.length
    })

    // Count firm media
    firmData.forEach((firm) => {
      totalPhotos += firm.photos.length
      totalPhotos += firm.eventsPhotos.length
      totalVideos += firm.eventVideos.length
      totalEvents += firm.eventsPhotos.length + firm.eventVideos.length
    })

    return NextResponse.json({
      colleges,
      schools,
      firms,
      totalPhotos,
      totalVideos,
      totalEvents,
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    )
  }
}

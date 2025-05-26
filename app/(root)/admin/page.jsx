'use client'

import { useEffect, useState } from 'react'
import {
  GraduationCap,
  Building2,
  School,
  Image,
  Video,
  MapPin,
} from 'lucide-react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    colleges: 0,
    schools: 0,
    firms: 0,
    totalPhotos: 0,
    totalVideos: 0,
    totalEvents: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      title: 'Total Colleges',
      value: stats.colleges,
      icon: GraduationCap,
      color: 'bg-blue-500',
      href: '/admin/colleges',
    },
    {
      title: 'Total Schools',
      value: stats.schools,
      icon: School,
      color: 'bg-green-500',
      href: '/admin/school',
    },
    {
      title: 'Total Firms',
      value: stats.firms,
      icon: Building2,
      color: 'bg-purple-500',
      href: '/admin/firms',
    },
    {
      title: 'Total Photos',
      value: stats.totalPhotos,
      icon: Image,
      color: 'bg-orange-500',
    },
    {
      title: 'Total Videos',
      value: stats.totalVideos,
      icon: Video,
      color: 'bg-red-500',
    },
    {
      title: 'Total Events',
      value: stats.totalEvents,
      icon: MapPin,
      color: 'bg-indigo-500',
    },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Overview of your LNCT institutions and content
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/admin/colleges/new"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <GraduationCap className="h-8 w-8 text-blue-500 mr-3" />
            <div>
              <h3 className="font-medium text-gray-900">Add New College</h3>
              <p className="text-sm text-gray-600">
                Create a new college entry
              </p>
            </div>
          </a>

          <a
            href="/admin/school/new"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <School className="h-8 w-8 text-green-500 mr-3" />
            <div>
              <h3 className="font-medium text-gray-900">Add New School</h3>
              <p className="text-sm text-gray-600">Create a new school entry</p>
            </div>
          </a>

          <a
            href="/admin/firms/new"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Building2 className="h-8 w-8 text-purple-500 mr-3" />
            <div>
              <h3 className="font-medium text-gray-900">Add New Firm</h3>
              <p className="text-sm text-gray-600">Create a new firm entry</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

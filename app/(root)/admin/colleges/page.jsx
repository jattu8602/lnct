'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, MapPin, Phone, Globe } from 'lucide-react'

export default function CollegesPage() {
  const [colleges, setColleges] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchColleges()
  }, [])

  const fetchColleges = async () => {
    try {
      const response = await fetch('/api/admin/colleges')
      const data = await response.json()
      setColleges(data)
    } catch (error) {
      console.error('Error fetching colleges:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteCollege = async (id) => {
    if (!confirm('Are you sure you want to delete this college?')) return

    try {
      const response = await fetch(`/api/admin/colleges/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setColleges(colleges.filter((college) => college.id !== id))
      } else {
        alert('Failed to delete college')
      }
    } catch (error) {
      console.error('Error deleting college:', error)
      alert('Failed to delete college')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Colleges</h1>
          <p className="mt-2 text-gray-600">Manage your college institutions</p>
        </div>
        <Link
          href="/admin/colleges/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add College
        </Link>
      </div>

      {colleges.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-4">No colleges found</div>
          <Link
            href="/admin/colleges/new"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Your First College
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((college) => (
            <div
              key={college.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {college.logo && (
                <div className="h-48 bg-gray-100">
                  <img
                    src={college.logo}
                    alt={college.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {college.name}
                </h3>

                {college.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {college.description}
                  </p>
                )}

                <div className="space-y-2 mb-4">
                  {college.city && (
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {college.city}
                    </div>
                  )}

                  {college.number && college.number.length > 0 && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      {college.number[0]}
                    </div>
                  )}

                  {college.link && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Globe className="h-4 w-4 mr-2" />
                      <a
                        href={college.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {college.photos?.length || 0} photos •{' '}
                    {college.eventsPhotos?.length || 0} events
                  </div>

                  <div className="flex space-x-2">
                    <Link
                      href={`/admin/colleges/${college.id}`}
                      className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                      title="View"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>

                    <Link
                      href={`/admin/colleges/${college.id}/edit`}
                      className="p-2 text-gray-600 hover:text-green-600 transition-colors"
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </Link>

                    <button
                      onClick={() => deleteCollege(college.id)}
                      className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

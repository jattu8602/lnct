'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, MapPin, Phone, Globe } from 'lucide-react'

export default function FirmsPage() {
  const [firms, setFirms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFirms()
  }, [])

  const fetchFirms = async () => {
    try {
      const response = await fetch('/api/admin/firms')
      const data = await response.json()
      setFirms(data)
    } catch (error) {
      console.error('Error fetching firms:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteFirm = async (id) => {
    if (!confirm('Are you sure you want to delete this firm?')) return

    try {
      const response = await fetch(`/api/admin/firms/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setFirms(firms.filter((firm) => firm.id !== id))
      } else {
        alert('Failed to delete firm')
      }
    } catch (error) {
      console.error('Error deleting firm:', error)
      alert('Failed to delete firm')
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
          <h1 className="text-3xl font-bold text-gray-900">Firms</h1>
          <p className="mt-2 text-gray-600">Manage your firm institutions</p>
        </div>
        <Link
          href="/admin/firms/new"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Firm
        </Link>
      </div>

      {firms.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-4">No firms found</div>
          <Link
            href="/admin/firms/new"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Your First Firm
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {firms.map((firm) => (
            <div
              key={firm.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {firm.logo && (
                <div className="h-48 bg-gray-100">
                  <img
                    src={firm.logo}
                    alt={firm.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {firm.name}
                </h3>

                {firm.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {firm.description}
                  </p>
                )}

                <div className="space-y-2 mb-4">
                  {firm.city && (
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {firm.city}
                    </div>
                  )}

                  {firm.number && firm.number.length > 0 && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      {firm.number[0]}
                    </div>
                  )}

                  {firm.link && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Globe className="h-4 w-4 mr-2" />
                      <a
                        href={firm.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:underline"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {firm.photos?.length || 0} photos •{' '}
                    {firm.eventsPhotos?.length || 0} events
                  </div>

                  <div className="flex space-x-2">
                    <Link
                      href={`/admin/firms/${firm.id}`}
                      className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                      title="View"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>

                    <Link
                      href={`/admin/firms/${firm.id}/edit`}
                      className="p-2 text-gray-600 hover:text-green-600 transition-colors"
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </Link>

                    <button
                      onClick={() => deleteFirm(firm.id)}
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

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import FileUpload from '@/components/admin/FileUpload'
import { ArrowLeft, Plus, X } from 'lucide-react'
import Link from 'next/link'

export default function NewFirmPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    link: '',
    logo: '',
    photos: [],
    eventsPhotos: [],
    eventVideos: [],
    address: '',
    number: [''],
    location: { latitude: null, longitude: null },
    city: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleLocationChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        [field]: value ? parseFloat(value) : null,
      },
    }))
  }

  const handleNumberChange = (index, value) => {
    const newNumbers = [...formData.number]
    newNumbers[index] = value
    setFormData((prev) => ({ ...prev, number: newNumbers }))
  }

  const addNumber = () => {
    setFormData((prev) => ({
      ...prev,
      number: [...prev.number, ''],
    }))
  }

  const removeNumber = (index) => {
    setFormData((prev) => ({
      ...prev,
      number: prev.number.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Filter out empty numbers
      const cleanedData = {
        ...formData,
        number: formData.number.filter((num) => num.trim() !== ''),
      }

      const response = await fetch('/api/admin/firms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedData),
      })

      if (response.ok) {
        router.push('/admin/firms')
      } else {
        alert('Failed to create firm')
      }
    } catch (error) {
      console.error('Error creating firm:', error)
      alert('Failed to create firm')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="flex items-center mb-8">
        <Link
          href="/admin/firms"
          className="mr-4 p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Add New Firm</h1>
          <p className="mt-2 text-gray-600">
            Create a new firm entry with all details
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Basic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Firm Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter firm name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website URL
              </label>
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="https://example.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter firm description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter city name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter full address"
              />
            </div>
          </div>
        </div>

        {/* Logo Upload */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Logo</h2>
          <FileUpload
            onUpload={(file) =>
              setFormData((prev) => ({ ...prev, logo: file.url }))
            }
            accept="image/*"
            label="Upload Firm Logo"
          />
        </div>

        {/* Contact Numbers */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Contact Numbers
          </h2>
          {formData.number.map((number, index) => (
            <div key={index} className="flex items-center mb-3">
              <input
                type="tel"
                value={number}
                onChange={(e) => handleNumberChange(index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter phone number"
              />
              {formData.number.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeNumber(index)}
                  className="ml-2 p-2 text-red-600 hover:text-red-800"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addNumber}
            className="flex items-center text-purple-600 hover:text-purple-800"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Number
          </button>
        </div>

        {/* Location */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Location Coordinates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Latitude
              </label>
              <input
                type="number"
                step="any"
                value={formData.location.latitude || ''}
                onChange={(e) =>
                  handleLocationChange('latitude', e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter latitude"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Longitude
              </label>
              <input
                type="number"
                step="any"
                value={formData.location.longitude || ''}
                onChange={(e) =>
                  handleLocationChange('longitude', e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter longitude"
              />
            </div>
          </div>
        </div>

        {/* Photos */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Photos</h2>
          <FileUpload
            onUpload={(files) =>
              setFormData((prev) => ({ ...prev, photos: files }))
            }
            accept="image/*"
            multiple={true}
            label="Upload Firm Photos"
          />
        </div>

        {/* Event Photos */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Event Photos
          </h2>
          <FileUpload
            onUpload={(files) =>
              setFormData((prev) => ({ ...prev, eventsPhotos: files }))
            }
            accept="image/*"
            multiple={true}
            label="Upload Event Photos"
          />
        </div>

        {/* Event Videos */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Event Videos
          </h2>
          <FileUpload
            onUpload={(files) =>
              setFormData((prev) => ({ ...prev, eventVideos: files }))
            }
            accept="video/*"
            multiple={true}
            label="Upload Event Videos"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <Link
            href="/admin/firms"
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Firm'}
          </button>
        </div>
      </form>
    </div>
  )
}

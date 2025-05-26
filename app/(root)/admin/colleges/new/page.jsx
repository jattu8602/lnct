'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import FileUpload from '@/components/admin/FileUpload'
import SingleFileUpload from '@/components/admin/SingleFileUpload'
import { ArrowLeft, Plus, X } from 'lucide-react'
import Link from 'next/link'

export default function NewCollegePage() {
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
    courses: [{ name: '', logo: '' }],
    companies: [{ name: '', logo: '', description: '' }],
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

  const handleCourseChange = (index, field, value) => {
    const newCourses = [...formData.courses]
    newCourses[index] = { ...newCourses[index], [field]: value }
    setFormData((prev) => ({ ...prev, courses: newCourses }))
  }

  const addCourse = () => {
    setFormData((prev) => ({
      ...prev,
      courses: [...prev.courses, { name: '', logo: '' }],
    }))
  }

  const removeCourse = (index) => {
    setFormData((prev) => ({
      ...prev,
      courses: prev.courses.filter((_, i) => i !== index),
    }))
  }

  const handleCompanyChange = (index, field, value) => {
    const newCompanies = [...formData.companies]
    newCompanies[index] = { ...newCompanies[index], [field]: value }
    setFormData((prev) => ({ ...prev, companies: newCompanies }))
  }

  const addCompany = () => {
    setFormData((prev) => ({
      ...prev,
      companies: [...prev.companies, { name: '', logo: '', description: '' }],
    }))
  }

  const removeCompany = (index) => {
    setFormData((prev) => ({
      ...prev,
      companies: prev.companies.filter((_, i) => i !== index),
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
        courses: formData.courses.filter((course) => course.name.trim() !== ''),
        companies: formData.companies.filter(
          (company) => company.name.trim() !== ''
        ),
      }

      const response = await fetch('/api/admin/colleges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedData),
      })

      if (response.ok) {
        router.push('/admin/colleges')
      } else {
        alert('Failed to create college')
      }
    } catch (error) {
      console.error('Error creating college:', error)
      alert('Failed to create college')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="flex items-center mb-8">
        <Link
          href="/admin/colleges"
          className="mr-4 p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Add New College</h1>
          <p className="mt-2 text-gray-600">
            Create a new college entry with all details
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
                College Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter college name"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter college description"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            label="Upload College Logo"
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
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            className="flex items-center text-blue-600 hover:text-blue-800"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            label="Upload College Photos"
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

        {/* Courses */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Courses</h2>
          {formData.courses.map((course, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 border border-gray-200 rounded-lg"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Name
                </label>
                <input
                  type="text"
                  value={course.name}
                  onChange={(e) =>
                    handleCourseChange(index, 'name', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter course name"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <SingleFileUpload
                    onUpload={(result) =>
                      handleCourseChange(index, 'logo', result?.url || '')
                    }
                    accept="image/*"
                    label="Course Logo"
                    currentFile={course.logo}
                    folder="lnct/courses"
                    className="flex-1"
                  />
                  {formData.courses.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeCourse(index)}
                      className="ml-4 p-2 text-red-600 hover:text-red-800"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addCourse}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Course
          </button>
        </div>

        {/* Companies */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Partner Companies
          </h2>
          {formData.companies.map((company, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 border border-gray-200 rounded-lg"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={company.name}
                  onChange={(e) =>
                    handleCompanyChange(index, 'name', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <SingleFileUpload
                  onUpload={(result) =>
                    handleCompanyChange(index, 'logo', result?.url || '')
                  }
                  accept="image/*"
                  label="Company Logo"
                  currentFile={company.logo}
                  folder="lnct/companies"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={company.description}
                    onChange={(e) =>
                      handleCompanyChange(index, 'description', e.target.value)
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter description"
                  />
                  {formData.companies.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeCompany(index)}
                      className="ml-2 p-2 text-red-600 hover:text-red-800"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addCompany}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Company
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <Link
            href="/admin/colleges"
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create College'}
          </button>
        </div>
      </form>
    </div>
  )
}

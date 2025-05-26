'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, X, Image, Video } from 'lucide-react'

export default function FileUpload({
  onUpload,
  accept = 'image/*,video/*',
  multiple = false,
  className = '',
  label = 'Upload files',
}) {
  const [uploading, setUploading] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState([])

  const onDrop = useCallback(
    async (acceptedFiles) => {
      setUploading(true)

      try {
        const uploadPromises = acceptedFiles.map(async (file) => {
          const formData = new FormData()
          formData.append('file', file)
          formData.append(
            'upload_preset',
            process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'presentsir'
          )
          formData.append('folder', 'lnct')

          const cloudName =
            process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'doxmvuss9'
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
            {
              method: 'POST',
              body: formData,
            }
          )

          if (!response.ok) {
            throw new Error(`Upload failed: ${response.statusText}`)
          }

          const data = await response.json()
          return {
            url: data.secure_url,
            public_id: data.public_id,
            resource_type: data.resource_type,
            original_filename: data.original_filename,
          }
        })

        const results = await Promise.all(uploadPromises)
        setUploadedFiles((prev) => [...prev, ...results])

        if (onUpload) {
          onUpload(multiple ? results : results[0])
        }
      } catch (error) {
        console.error('Upload error:', error)
        alert('Upload failed. Please try again.')
      } finally {
        setUploading(false)
      }
    },
    [onUpload, multiple]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
      'video/*': ['.mp4', '.mov', '.avi', '.mkv'],
    },
    multiple,
  })

  const removeFile = (index) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index)
    setUploadedFiles(newFiles)
    if (onUpload) {
      onUpload(multiple ? newFiles : null)
    }
  }

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-blue-400 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <input {...getInputProps()} />

        {uploading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
            <p className="text-sm text-gray-600">Uploading...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <Upload className="h-8 w-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">
              {isDragActive
                ? 'Drop the files here...'
                : 'Drag & drop files here, or click to select'}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Supports images and videos
            </p>
          </div>
        )}
      </div>

      {/* Uploaded Files Preview */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {uploadedFiles.map((file, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                {file.resource_type === 'image' ? (
                  <img
                    src={file.url}
                    alt={file.original_filename}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Video className="h-8 w-8 text-gray-400" />
                  </div>
                )}
              </div>

              <button
                onClick={() => removeFile(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>

              <p className="text-xs text-gray-600 mt-1 truncate">
                {file.original_filename}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

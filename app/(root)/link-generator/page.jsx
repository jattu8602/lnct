'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Upload,
  Copy,
  Check,
  X,
  FileImage,
  FileVideo,
  Image,
} from 'lucide-react'

export default function LinkGeneratorPage() {
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [copiedIndex, setCopiedIndex] = useState(null)

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    const processedFiles = acceptedFiles.map((file) => ({
      file,
      id: Math.random().toString(36).substring(7),
      name: file.name,
      size: file.size,
      type: file.type,
      preview: file.type.startsWith('image/')
        ? URL.createObjectURL(file)
        : null,
      status: 'pending',
    }))

    setFiles((prev) => [...prev, ...processedFiles])

    if (rejectedFiles.length > 0) {
      alert(
        `${rejectedFiles.length} file(s) were rejected. Please ensure files are images or videos.`
      )
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp', '.svg'],
      'video/*': ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm', '.mkv'],
    },
    multiple: true,
  })

  const removeFile = (fileId) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId))
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId))
  }

  // Direct client-side upload to Cloudinary
  const uploadToCloudinary = async (file, folder = 'link-generator') => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'presentsir')
      formData.append('folder', folder)

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/doxmvuss9/auto/upload`,
        {
          method: 'POST',
          body: formData,
        }
      )

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const data = await response.json()
      return {
        url: data.secure_url,
        public_id: data.public_id,
      }
    } catch (error) {
      console.error('Cloudinary client upload error:', error)
      throw new Error('Failed to upload to Cloudinary')
    }
  }

  const generateLinks = async () => {
    if (files.length === 0) {
      alert('Please select files to upload first!')
      return
    }

    setUploading(true)
    const newUploadedFiles = []

    try {
      for (const fileItem of files) {
        if (fileItem.status === 'uploaded') {
          continue // Skip already uploaded files
        }

        try {
          setFiles((prev) =>
            prev.map((f) =>
              f.id === fileItem.id ? { ...f, status: 'uploading' } : f
            )
          )

          const result = await uploadToCloudinary(
            fileItem.file,
            'link-generator'
          )

          const uploadedFile = {
            ...fileItem,
            url: result.url,
            public_id: result.public_id,
            status: 'uploaded',
          }

          newUploadedFiles.push(uploadedFile)

          setFiles((prev) =>
            prev.map((f) => (f.id === fileItem.id ? uploadedFile : f))
          )
        } catch (error) {
          console.error(`Error uploading ${fileItem.name}:`, error)
          setFiles((prev) =>
            prev.map((f) =>
              f.id === fileItem.id ? { ...f, status: 'error' } : f
            )
          )
        }
      }

      setUploadedFiles((prev) => [...prev, ...newUploadedFiles])
    } catch (error) {
      console.error('Upload error:', error)
      alert('An error occurred during upload. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  const copyToClipboard = async (url, index) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
      alert('Failed to copy link to clipboard')
    }
  }

  const getFileIcon = (fileType) => {
    if (fileType.startsWith('image/')) {
      return <FileImage className="w-6 h-6 text-blue-500" />
    } else if (fileType.startsWith('video/')) {
      return <FileVideo className="w-6 h-6 text-purple-500" />
    }
    return <Image className="w-6 h-6 text-gray-500" />
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-gray-100 text-gray-600'
      case 'uploading':
        return 'bg-blue-100 text-blue-600'
      case 'uploaded':
        return 'bg-green-100 text-green-600'
      case 'error':
        return 'bg-red-100 text-red-600'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  const clearAll = () => {
    setFiles([])
    setUploadedFiles([])
    setCopiedIndex(null)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Media Link Generator
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Upload your images, videos, and logos to Cloudinary and get shareable
          links instantly. Perfect for generating links for your content
          management needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload Files
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                ${
                  isDragActive
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
            >
              <input {...getInputProps()} />
              <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              {isDragActive ? (
                <p className="text-blue-600">Drop the files here...</p>
              ) : (
                <div>
                  <p className="text-gray-600 mb-2">
                    Drag & drop files here, or click to select
                  </p>
                  <p className="text-sm text-gray-400">
                    Supports images and videos
                  </p>
                </div>
              )}
            </div>

            {files.length > 0 && (
              <div className="mt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">
                    Selected Files ({files.length})
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      onClick={clearAll}
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                    >
                      Clear All
                    </Button>
                    <Button
                      onClick={generateLinks}
                      disabled={
                        uploading || files.every((f) => f.status === 'uploaded')
                      }
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      {uploading ? 'Generating...' : 'Generate Links'}
                    </Button>
                  </div>
                </div>

                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {files.map((fileItem) => (
                    <div
                      key={fileItem.id}
                      className="flex items-center gap-3 p-3 border rounded-lg"
                    >
                      {fileItem.preview ? (
                        <img
                          src={fileItem.preview}
                          alt={fileItem.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                      ) : (
                        getFileIcon(fileItem.type)
                      )}

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {fileItem.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(fileItem.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>

                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                          fileItem.status
                        )}`}
                      >
                        {fileItem.status === 'uploading' && '⏳'}{' '}
                        {fileItem.status}
                      </span>

                      <button
                        onClick={() => removeFile(fileItem.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                        disabled={fileItem.status === 'uploading'}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Links Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Copy className="w-5 h-5" />
              Generated Links
            </CardTitle>
          </CardHeader>
          <CardContent>
            {files.filter((f) => f.status === 'uploaded').length === 0 ? (
              <div className="text-center py-12">
                <Copy className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-gray-500 mb-2">No links generated yet</p>
                <p className="text-sm text-gray-400">
                  Upload files and click "Generate Links" to get started
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {files
                  .filter((f) => f.status === 'uploaded')
                  .map((fileItem, index) => (
                    <div key={fileItem.id} className="border rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-3">
                        {fileItem.preview ? (
                          <img
                            src={fileItem.preview}
                            alt={fileItem.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                            {getFileIcon(fileItem.type)}
                          </div>
                        )}

                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium mb-1 truncate">
                            {fileItem.name}
                          </h4>
                          <p className="text-sm text-gray-500 mb-2">
                            {(fileItem.size / 1024 / 1024).toFixed(2)} MB •{' '}
                            {fileItem.type}
                          </p>

                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={fileItem.url}
                              readOnly
                              className="flex-1 text-xs bg-gray-50 border rounded px-2 py-1 font-mono"
                            />
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                copyToClipboard(fileItem.url, index)
                              }
                              className="flex items-center gap-1"
                            >
                              {copiedIndex === index ? (
                                <>
                                  <Check className="w-3 h-3" />
                                  Copied
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  Copy
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {files.length > 0 && (
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-2">Upload Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Total Files:</span>
              <span className="ml-2 font-medium">{files.length}</span>
            </div>
            <div>
              <span className="text-gray-600">Uploaded:</span>
              <span className="ml-2 font-medium text-green-600">
                {files.filter((f) => f.status === 'uploaded').length}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Pending:</span>
              <span className="ml-2 font-medium text-gray-600">
                {files.filter((f) => f.status === 'pending').length}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Errors:</span>
              <span className="ml-2 font-medium text-red-600">
                {files.filter((f) => f.status === 'error').length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

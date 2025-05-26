import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'doxmvuss9',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const uploadToCloudinary = async (file, folder = 'lnct') => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder,
      resource_type: 'auto',
      upload_preset:
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'presentsir',
    })
    return {
      url: result.secure_url,
      public_id: result.public_id,
    }
  } catch (error) {
    console.error('Cloudinary upload error:', error)
    throw new Error('Failed to upload to Cloudinary')
  }
}

// Client-side upload function for direct uploads
export const uploadToCloudinaryClient = async (file, folder = 'lnct') => {
  try {
    const formData = new FormData()
    formData.append('file', file)
    formData.append(
      'upload_preset',
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'presentsir'
    )
    formData.append('folder', folder)

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'doxmvuss9'
      }/auto/upload`,
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

export const deleteFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId)
  } catch (error) {
    console.error('Cloudinary delete error:', error)
  }
}

export default cloudinary

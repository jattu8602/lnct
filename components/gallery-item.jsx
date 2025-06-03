// Updated GalleryItem component
'use client'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

export default function GalleryItem({ item, type, customClass = '' }) {
  const videoRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Handle both video types
    if ((type === 'video' || type === 'shot') && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [type])

  return (
    <div className={`relative overflow-hidden w-full h-full ${customClass}`}>
      {/* Treat shots as videos */}
      {type === 'video' || type === 'shot' ? (
        <video
          ref={videoRef}
          src={item.url}
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          playsInline
        />
      ) : (
        <Image
          src={item.url || '/placeholder.svg'}
          alt={item.title || `${type} ${item.id}`}
          fill
          className="object-cover"
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  )
}

// Updated GalleryItem component
'use client'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

// Loading skeleton component
const LoadingSkeleton = ({ type }) => (
  <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
    <div className="text-gray-400 text-sm">
      {type === 'video' || type === 'shot' ? (
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
          <span>Loading {type}...</span>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
          <span>Loading image...</span>
        </div>
      )}
    </div>
  </div>
)

export default function GalleryItem({ item, type, customClass = '' }) {
  const videoRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Handle video autoplay when loaded and intersecting
    if (
      (type === 'video' || type === 'shot') &&
      videoRef.current &&
      isLoaded &&
      isIntersecting
    ) {
      videoRef.current.play().catch(() => {})
    }
  }, [type, isLoaded, isIntersecting])

  const handleVideoLoad = () => {
    setIsLoaded(true)
  }

  const handleVideoError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  const handleImageError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full h-full ${customClass}`}
    >
      {/* Show loading skeleton while not loaded */}
      {!isLoaded && !hasError && <LoadingSkeleton type={type} />}

      {/* Error state */}
      {hasError && (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <div className="text-gray-500 text-center">
            <div className="text-2xl mb-2">⚠️</div>
            <div>Failed to load {type}</div>
          </div>
        </div>
      )}

      {/* Only load media when intersecting */}
      {isIntersecting && (
        <>
          {/* Videos and shots */}
          {type === 'video' || type === 'shot' ? (
            <video
              ref={videoRef}
              src={item.url}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              muted
              loop
              playsInline
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
            />
          ) : (
            /* Photos */
            <Image
              src={item.url || '/placeholder.svg'}
              alt={item.title || `${type} ${item.id}`}
              fill
              className={`object-cover transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              priority={false}
            />
          )}
        </>
      )}
    </div>
  )
}

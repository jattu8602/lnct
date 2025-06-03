'use client'
import { videos, shots, photos } from '@/constants/gallery'
import GalleryItem from '@/components/gallery-item'
import { useState, useEffect, useRef, useCallback } from 'react'

// Stack skeleton component
const StackSkeleton = () => (
  <div className="w-full animate-pulse">
    {/* Desktop Layout Skeleton */}
    <div className="hidden md:block">
      {/* Top row: Video + Shot skeleton */}
      <div className="flex w-full h-[560px]">
        <div className="w-3/4 h-full bg-gray-200 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-3 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
            <span className="text-gray-400">Loading video...</span>
          </div>
        </div>
        <div className="w-1/4 h-full bg-gray-300 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin"></div>
            <span className="text-gray-500 text-sm">Loading shot...</span>
          </div>
        </div>
      </div>

      {/* Bottom row: 4 images skeleton */}
      <div className="flex w-full h-[200px]">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-1/4 h-full bg-gray-100 flex items-center justify-center"
          >
            <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>

    {/* Mobile Layout Skeleton */}
    <div className="block md:hidden">
      {/* Video skeleton */}
      <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
          <span className="text-gray-400 text-sm">Loading video...</span>
        </div>
      </div>

      {/* Shot + 2 photos row skeleton */}
      <div className="flex w-full h-[250px]">
        <div className="w-1/2 h-full bg-gray-300 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
        <div className="w-1/2 h-full flex flex-col">
          <div className="w-full h-1/2 bg-gray-100 flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-300 rounded"></div>
          </div>
          <div className="w-full h-1/2 bg-gray-200 flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Bottom 2 photos skeleton */}
      <div className="flex w-full h-[150px]">
        <div className="w-1/2 h-full bg-gray-100 flex items-center justify-center">
          <div className="w-3 h-3 bg-gray-300 rounded"></div>
        </div>
        <div className="w-1/2 h-full bg-gray-200 flex items-center justify-center">
          <div className="w-3 h-3 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  </div>
)

// Loading more indicator
const LoadingMore = () => (
  <div className="w-full py-8 flex justify-center">
    <div className="flex items-center gap-3 text-gray-500">
      <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <span>Loading more stacks...</span>
    </div>
  </div>
)

export default function Gallery() {
  const [loadedStacks, setLoadedStacks] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [hasMoreStacks, setHasMoreStacks] = useState(true)
  const [totalStacks, setTotalStacks] = useState(0)
  const loadingRef = useRef(null)

  const STACKS_PER_PAGE = 3 // Load 3 stacks at a time

  // Calculate total possible stacks
  useEffect(() => {
    const maxStacks = Math.min(
      videos.length,
      shots.length,
      Math.floor(photos.length / 4)
    )
    setTotalStacks(maxStacks)
  }, [])

  // Create stacks from data
  const createStacks = useCallback(
    (startIndex, count) => {
      const stacks = []
      for (
        let i = startIndex;
        i < Math.min(startIndex + count, totalStacks);
        i++
      ) {
        if (
          i < videos.length &&
          i < shots.length &&
          i * 4 + 3 < photos.length
        ) {
          stacks.push({
            id: `stack-${i}`,
            video: videos[i],
            shot: shots[i],
            photos: photos.slice(i * 4, i * 4 + 4),
            flip: i % 2 === 1, // alternate layout
          })
        }
      }
      return stacks
    },
    [totalStacks]
  )

  // Load initial stacks
  useEffect(() => {
    const loadInitialStacks = async () => {
      setIsLoading(true)

      // Simulate network delay for better UX demonstration
      await new Promise((resolve) => setTimeout(resolve, 800))

      const initialStacks = createStacks(0, STACKS_PER_PAGE)
      setLoadedStacks(initialStacks)
      setCurrentPage(1)
      setIsLoading(false)

      if (initialStacks.length < STACKS_PER_PAGE) {
        setHasMoreStacks(false)
      }
    }

    if (totalStacks > 0) {
      loadInitialStacks()
    }
  }, [totalStacks, createStacks])

  // Load more stacks
  const loadMoreStacks = useCallback(async () => {
    if (isLoadingMore || !hasMoreStacks) return

    setIsLoadingMore(true)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 600))

    const startIndex = currentPage * STACKS_PER_PAGE
    const newStacks = createStacks(startIndex, STACKS_PER_PAGE)

    if (newStacks.length > 0) {
      setLoadedStacks((prev) => [...prev, ...newStacks])
      setCurrentPage((prev) => prev + 1)
    }

    if (
      newStacks.length < STACKS_PER_PAGE ||
      startIndex + newStacks.length >= totalStacks
    ) {
      setHasMoreStacks(false)
    }

    setIsLoadingMore(false)
  }, [currentPage, hasMoreStacks, isLoadingMore, createStacks, totalStacks])

  // Intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMoreStacks && !isLoadingMore) {
          loadMoreStacks()
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    )

    if (loadingRef.current) {
      observer.observe(loadingRef.current)
    }

    return () => observer.disconnect()
  }, [hasMoreStacks, isLoadingMore, loadMoreStacks])

  return (
    <div className="w-full">
      {/* Loading initial content */}
      {isLoading && (
        <div className="space-y-0">
          {[1, 2, 3].map((i) => (
            <StackSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Loaded stacks */}
      {!isLoading && (
        <>
          {loadedStacks.map((block) => (
            <div key={block.id} className="w-full">
              {/* Desktop Layout */}
              <div className="hidden md:block">
                {/* Top row: Video + Shot */}
                <div className="flex w-full h-[560px]">
                  {!block.flip ? (
                    <>
                      <div className="w-3/4 h-full">
                        <GalleryItem
                          item={block.video}
                          type="video"
                          customClass="!rounded-none !shadow-none !m-0"
                        />
                      </div>
                      <div className="w-1/4 h-full">
                        <GalleryItem
                          item={block.shot}
                          type="shot"
                          customClass="!rounded-none !shadow-none !m-0"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/4 h-full">
                        <GalleryItem
                          item={block.shot}
                          type="shot"
                          customClass="!rounded-none !shadow-none !m-0"
                        />
                      </div>
                      <div className="w-3/4 h-full">
                        <GalleryItem
                          item={block.video}
                          type="video"
                          customClass="!rounded-none !shadow-none !m-0"
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Bottom row: 4 images */}
                <div className="flex w-full h-[200px]">
                  {block.photos.map((photo, idx) => (
                    <div className="w-1/4 h-full" key={idx}>
                      <GalleryItem
                        item={photo}
                        type="photo"
                        customClass="!rounded-none !shadow-none !m-0"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="block md:hidden">
                {/* Video full width */}
                <div className="w-full h-[250px]">
                  <GalleryItem
                    item={block.video}
                    type="video"
                    customClass="!rounded-none !shadow-none !m-0"
                  />
                </div>

                {/* Shot + 2 vertical photos row */}
                <div className="flex w-full h-[250px]">
                  {!block.flip ? (
                    <>
                      {/* Shot on left - 50% width */}
                      <div className="w-1/2 h-full">
                        <GalleryItem
                          item={block.shot}
                          type="shot"
                          customClass="!rounded-none !shadow-none !m-0"
                        />
                      </div>
                      {/* 2 vertical photos on right - 50% width total */}
                      <div className="w-1/2 h-full flex flex-col">
                        <div className="w-full h-1/2">
                          <GalleryItem
                            item={block.photos[0]}
                            type="photo"
                            customClass="!rounded-none !shadow-none !m-0"
                          />
                        </div>
                        <div className="w-full h-1/2">
                          <GalleryItem
                            item={block.photos[1]}
                            type="photo"
                            customClass="!rounded-none !shadow-none !m-0"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* 2 vertical photos on left - 50% width total */}
                      <div className="w-1/2 h-full flex flex-col">
                        <div className="w-full h-1/2">
                          <GalleryItem
                            item={block.photos[0]}
                            type="photo"
                            customClass="!rounded-none !shadow-none !m-0"
                          />
                        </div>
                        <div className="w-full h-1/2">
                          <GalleryItem
                            item={block.photos[1]}
                            type="photo"
                            customClass="!rounded-none !shadow-none !m-0"
                          />
                        </div>
                      </div>
                      {/* Shot on right - 50% width */}
                      <div className="w-1/2 h-full">
                        <GalleryItem
                          item={block.shot}
                          type="shot"
                          customClass="!rounded-none !shadow-none !m-0"
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Bottom 2 photos row */}
                <div className="flex w-full h-[150px]">
                  <div className="w-1/2 h-full">
                    <GalleryItem
                      item={block.photos[2]}
                      type="photo"
                      customClass="!rounded-none !shadow-none !m-0"
                    />
                  </div>
                  <div className="w-1/2 h-full">
                    <GalleryItem
                      item={block.photos[3]}
                      type="photo"
                      customClass="!rounded-none !shadow-none !m-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Loading more indicator */}
          {isLoadingMore && <LoadingMore />}

          {/* Invisible element for intersection observer */}
          {hasMoreStacks && <div ref={loadingRef} className="h-4 w-full"></div>}

          {/* End of content message */}
          {!hasMoreStacks && loadedStacks.length > 0 && (
            <div className="w-full py-8 text-center text-gray-500">
              <div className="text-sm">
                ✨ You've reached the end! Loaded {loadedStacks.length} stacks
              </div>
            </div>
          )}

          {/* No content message */}
          {!hasMoreStacks && loadedStacks.length === 0 && (
            <div className="w-full py-16 text-center text-gray-500">
              <div className="text-lg mb-2">📸</div>
              <div>No gallery content available</div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

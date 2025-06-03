'use client'

import { videos, shots, photos } from '@/constants/gallery'
import GalleryItem from '@/components/gallery-item'
import Image from 'next/image'
export default function Gallery() {
  // Group content into blocks
  const blocks = []
  const minItems = Math.min(
    videos.length,
    shots.length,
    Math.floor(photos.length / 4)
  )

  for (let i = 0; i < minItems; i++) {
    blocks.push({
      video: videos[i],
      shot: shots[i],
      photos: photos.slice(i * 4, i * 4 + 4),
      flip: i % 2 === 1, // alternate layout
    })
  }

  return (
    <div className="w-full">
      {blocks.map((block, index) => (
        <div key={index} className="w-full">
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
      ))}
    </div>
  )
}

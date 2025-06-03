// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
// import { Button } from '@/components/ui/button'


// export default function YouTubeSection({ youtubeContent }) {
//   const [videos, setVideos] = useState([])
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isLoading, setIsLoading] = useState(true)

//   // Extract YouTube video ID from URL
//   const extractVideoId = (url) => {
//     const regex =
//       /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
//     const match = url.match(regex)
//     return match ? match[1] : null
//   }

//   // Mock function to simulate fetching YouTube data
//   // In a real implementation, you'd use YouTube Data API
//   const fetchYouTubeData = async (videoId) => {
//     // Simulated data - replace with actual YouTube API call
//     const mockTitles = [
//       'Amazing Nature Documentary',
//       'Tech Tutorial: Advanced Concepts',
//       'Music Video: Latest Hit',
//       'Travel Vlog: Beautiful Destinations',
//       'Cooking Tutorial: Delicious Recipe',
//     ]

//     const mockDescriptions = [
//       'Explore the wonders of nature in this stunning documentary...',
//       'Learn advanced programming concepts with this comprehensive tutorial...',
//       'The latest music video from your favorite artist...',
//       'Join us on an incredible journey to amazing destinations...',
//       'Learn to cook this delicious recipe step by step...',
//     ]

//     return {
//       id: videoId,
//       title: mockTitles[Math.floor(Math.random() * mockTitles.length)],
//       description:
//         mockDescriptions[Math.floor(Math.random() * mockDescriptions.length)],
//       thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
//       url: `https://www.youtube.com/watch?v=${videoId}`,
//     }
//   }

//   useEffect(() => {
//     const loadVideos = async () => {
//       setIsLoading(true)
//       const videoPromises = youtubeContent.map(async (content) => {
//         const videoId = extractVideoId(content.url)
//         if (videoId) {
//           return await fetchYouTubeData(videoId)
//         }
//         return null
//       })

//       const loadedVideos = await Promise.all(videoPromises)
//       setVideos(loadedVideos.filter(Boolean))
//       setIsLoading(false)
//     }

//     loadVideos()
//   }, [youtubeContent])

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % Math.max(1, videos.length - 2))
//   }

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prev) =>
//         (prev - 1 + Math.max(1, videos.length - 2)) %
//         Math.max(1, videos.length - 2)
//     )
//   }

//   if (isLoading) {
//     return (
//       <div className="w-full py-8">
//         <h2 className="text-2xl font-bold mb-6">YouTube Content</h2>
//         <div className="flex gap-4 animate-pulse">
//           {[1, 2, 3].map((i) => (
//             <div key={i} className="flex-shrink-0 w-80">
//               <div className="bg-gray-300 aspect-video rounded-lg mb-3"></div>
//               <div className="bg-gray-300 h-4 rounded mb-2"></div>
//               <div className="bg-gray-300 h-3 rounded w-3/4"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="w-full py-8">
//       <h2 className="text-2xl font-bold mb-6">YouTube Content</h2>

//       <div className="relative">
//         <div className="overflow-hidden">
//           <div
//             className="flex gap-4 transition-transform duration-300 ease-in-out"
//             style={{ transform: `translateX(-${currentIndex * 320}px)` }}
//           >
//             {videos.map((video) => (
//               <div
//                 key={video.id}
//                 className="flex-shrink-0 w-80 group cursor-pointer"
//               >
//                 <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
//                   <Image
//                     src={video.thumbnail || '/placeholder.svg'}
//                     alt={video.title}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
//                     <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                 </div>
//                 <h3 className="font-semibold text-sm line-clamp-2 mb-1">
//                   {video.title}
//                 </h3>
//                 <p className="text-xs text-gray-600 line-clamp-2">
//                   {video.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {videos.length > 3 && (
//           <>
//             <Button
//               variant="outline"
//               size="icon"
//               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white"
//               onClick={prevSlide}
//             >
//               <ChevronLeft className="w-4 h-4" />
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white"
//               onClick={nextSlide}
//             >
//               <ChevronRight className="w-4 h-4" />
//             </Button>
//           </>
//         )}
//       </div>
//     </div>
//   )
// }

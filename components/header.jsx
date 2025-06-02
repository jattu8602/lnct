'use client'
import React from 'react'
import Image from 'next/image'

const Button = ({ children, size, variant, className, ...props }) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  const sizeClasses = size === 'lg' ? 'h-11 px-8 text-base' : 'h-10 px-4 py-2'
  const variantClasses =
    variant === 'outline'
      ? 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
      : 'bg-primary text-primary-foreground hover:bg-primary/90'

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

const LNCTHeroSection = () => {
  const images = [
    {
      src: 'https://res.cloudinary.com/doxmvuss9/image/upload/v1748884431/link-generator/t7ikcj0l7lswxvzvnh51.png',
      width: 130,
      height: 130,
    },
    {
      src: 'https://res.cloudinary.com/doxmvuss9/image/upload/v1748884432/link-generator/vqxexn6jvwjew8kzt8p4.png',
      width: 180,
      height: 120,
    },
    {
      src: 'https://res.cloudinary.com/doxmvuss9/image/upload/v1748884432/link-generator/cou0ttgcozu6tym5z9uw.webp',
      width: 130,
      height: 130,
    },
    {
      src: 'https://res.cloudinary.com/doxmvuss9/image/upload/v1748884433/link-generator/vpgrflkbximxgertxv0m.png',
      width: 100,
      height: 100,
    },
    {
      src: 'https://res.cloudinary.com/doxmvuss9/image/upload/v1748884434/link-generator/riyx6qdjkskxg9du9k1e.png',
      width: 130,
      height: 130,
    },
  ]

  // Calculate total width needed for smooth animation
  const totalImages = images.length
  const imageWidth = 200 // 192px (w-48) + 16px (mx-2 * 2)
  const totalWidth = totalImages * imageWidth

  return (
    <div className="min-h-screen bg-gray-100">
      <style jsx>{`
        @keyframes smoothInfiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }
        .animate-smooth-scroll {
          animation: smoothInfiniteScroll 20s linear infinite;
        }
        .slider-container:hover .animate-smooth-scroll {
          animation-play-state: paused;
        }

        /* Additional smooth scrolling improvements */
        .slider-track {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        .image-item {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>

      {/* Hero Section */}
      <section
        className="relative text-white py-20 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(to right, #261063, #9D467D)' }}
      >
        {/* Background Image Container */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://res.cloudinary.com/doxmvuss9/image/upload/v1748885725/link-generator/ryvi2czxc1fb03w6uktq.webp"
            alt="LNCT Background"
            fill
            className="object-cover md:object-fit w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                Welcome to Lakshmi Narain College of Technology
              </h1>
              <p className="text-lg md:text-xl mb-8 drop-shadow-md">
                Empowering students through quality education and innovative
                learning experiences since 1994.
              </p>

              {/* Improved Smooth Image Slider */}
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white/5 backdrop-blur-sm slider-container">
                <div className="slider-track flex animate-smooth-scroll">
                  {/* Triple the images for ultra-smooth infinite scroll */}
                  {[...Array(3)].map((_, setIndex) =>
                    images.map((image, index) => (
                      <div
                        key={`set-${setIndex}-${index}`}
                        className="image-item flex-shrink-0 w-48 h-32 mx-2 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                      >
                        <Image
                          src={image.src}
                          alt={`LNCT Image ${index + 1}`}
                          width={image.width}
                          height={image.height}
                          className="object-contain rounded-md"
                          loading="eager"
                          priority={setIndex === 0}
                        />
                      </div>
                    ))
                  )}
                </div>

                {/* Enhanced gradient overlays for smoother fade effect */}
                <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-purple-900/60 via-purple-900/30 to-transparent pointer-events-none z-10"></div>
                <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-purple-900/60 via-purple-900/30 to-transparent pointer-events-none z-10"></div>
              </div>

              {/* Optional: Add some action buttons */}
              {/* <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-purple-900 hover:bg-white/90 transform hover:scale-105 transition-all duration-200"
                >
                  Explore Programs
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-900 transform hover:scale-105 transition-all duration-200"
                >
                  Campus Tour
                </Button>
              </div> */}
            </div>

            {/* Right Side Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-500 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/doxmvuss9/image/upload/v1748884072/link-generator/phrwok7ro2nvgtbruhpg.webp"
                  alt="LNCT Main Campus"
                  width={450}
                  height={450}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom curve */}
        <div
          className="absolute bottom-0 right-0 w-full h-16 bg-white"
          style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
        ></div>
      </section>
    </div>
  )
}

export default LNCTHeroSection

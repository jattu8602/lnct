import Image from 'next/image'

const campusData = [
  {
    id: 1,
    title: 'Modern Infrastructure',
    desc: 'State-of-the-art classrooms, labs, and research centers equipped with the latest technology.',
    imgSrc: `https://res.cloudinary.com/doxmvuss9/image/upload/v1748889457/link-generator/zudwsnowgwoea2ky9fkb.webp`,
  },
  {
    id: 2,
    title: 'Cultural Festivals',
    desc: 'Annual cultural festivals, technical events, and inter-college competitions.',
    imgSrc: `https://res.cloudinary.com/doxmvuss9/image/upload/v1748903733/link-generator/rmm0fhug9wiwwgqj4ynr.jpg`,
  },
  {
    id: 3,
    title: 'Sports Facilities',
    desc: 'World-class sports facilities including indoor and outdoor courts, swimming pool, and gymnasium.',
    imgSrc: `https://res.cloudinary.com/doxmvuss9/image/upload/v1748903734/link-generator/lbm3urxe0tvalo8bu4uu.jpg`,
  },
  {
    id: 4,
    title: 'Student Clubs',
    desc: 'Diverse student clubs and societies to foster learning and creativity.',
    imgSrc: `https://res.cloudinary.com/doxmvuss9/image/upload/v1748903734/link-generator/neannsdxtyrj3cuhwrg2.jpg`,
  },
]

export default function CampusLife() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Campus Life at LNCT</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience a vibrant campus life with modern facilities, cultural
            events, sports activities, and more.
          </p>
        </div>

        {/* Scrollable container */}
        <div
          className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {campusData.map(({ id, title, desc, imgSrc }) => (
            <div
              key={id}
              className="
                flex-shrink-0
                scroll-snap-align-start
                bg-white shadow-md rounded-lg overflow-hidden
                w-[70%] sm:w-[50%] md:w-[40%] lg:w-[23%]
              "
            >
              <div className="h-64 bg-gray-200 relative">
                <Image src={imgSrc} alt={title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

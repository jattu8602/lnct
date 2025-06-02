

import Image from 'next/image'


export default function CampusLife() {

  return (
    <div>
      {/* Campus Life */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Campus Life at LNCT</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience a vibrant campus life with modern facilities, cultural
              events, sports activities, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-lg overflow-hidden shadow-md bg-white"
              >
                <div className="h-64 bg-gray-200 relative">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Campus life ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">
                    {item === 1
                      ? 'Modern Infrastructure'
                      : item === 2
                      ? 'Cultural Festivals'
                      : 'Sports Facilities'}
                  </h3>
                  <p className="text-gray-600">
                    {item === 1
                      ? 'State-of-the-art classrooms, labs, and research centers equipped with the latest technology.'
                      : item === 2
                      ? 'Annual cultural festivals, technical events, and inter-college competitions.'
                      : 'World-class sports facilities including indoor and outdoor courts, swimming pool, and gymnasium.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
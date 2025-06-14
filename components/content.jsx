'use client'

import { useEffect, useRef, useState } from 'react'

function AlumniCellSection() {
  const containerRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return

      const { top, bottom } = container.getBoundingClientRect()
      const isWithinBounds = top <= 0 && bottom > window.innerHeight
      setIsSticky(isWithinBounds)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative flex gap-8 px-6 py-10 bg-white">
      {/* Sidebar */}
      <aside
        className={`w-64 space-y-4 transition-all duration-300 ${
          isSticky ? 'sticky top-6 self-start' : ''
        }`}
      >
        {[
          { label: 'AIC', href: '#aic', desc: 'Alumni Interaction Club' },
          { label: 'Message from Head', href: '#head-message' },
          {
            label: 'Podcast',
            href: '#podcast',
            desc: 'संवाद – पुराने साथियों के साथ',
          },
          { label: 'Connect', href: '#connect' },
        ].map(({ label, href, desc }) => (
          <a
            key={href}
            href={href}
            className="block border border-gray-300 rounded-lg p-4 hover:bg-purple-50 transition"
          >
            <h3 className="font-semibold text-lg text-purple-700">{label}</h3>
            {desc && <p className="text-sm text-gray-500">{desc}</p>}
          </a>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-20 scroll-smooth">
        <section id="aic">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            About <span className="underline">Alumni Cell</span>{' '}
            <span className="text-pink-600">LNCT</span>
          </h2>
          <p className="text-gray-700 mb-4">
            LNCT Group is proud to have its alumnus, as a group of 50,000+
            engineers, technologists...
          </p>
        </section>

        <section id="head-message">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            <span className="underline">Alumni Cell</span>{' '}
            <span className="text-pink-600">Head Message</span>
          </h2>
          <p className="text-gray-800 mb-4">Dear Alumnus,</p>
        </section>

        <section id="podcast">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            About <span className="underline">Alumni Cell Podcast</span>{' '}
            <span className="text-pink-600">at LNCT</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Have you ever wondered what it would be like to journey back in
            time...
          </p>
        </section>

        <section id="connect">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Connect</h2>
          <p className="text-gray-600">Address, Phone, Email, etc.</p>
        </section>
      </main>
    </div>
  )
}

export { AlumniCellSection }

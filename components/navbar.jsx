'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    // { name: 'About', href: '/about' },
    { name: 'Map', href: '/map' },
    { name: 'Alumni', href: '/alumni' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 ease-out',
        isScrolled
          ? 'bg-gradient-to-r from-[#261063] via-[#9D467D] to-[#261063] shadow-xl backdrop-blur-md border-b border-white/10'
          : 'bg-gradient-to-r from-[#261063] via-[#9D467D] to-[#261063] shadow-lg'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 border border-white/20">
                <Image
                  src="https://res.cloudinary.com/doxmvuss9/image/upload/v1748874733/link-generator/gifwgwfxoihknht2yu2p.webp"
                  alt="LNCT"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <span className="ml-3 text-lg font-bold text-white group-hover:text-yellow-200 transition-colors duration-300">
                LNCT Group of Colleges
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group overflow-hidden',
                  pathname === link.href
                    ? 'text-yellow-200 bg-white/20 shadow-lg backdrop-blur-sm'
                    : 'text-white/90 hover:text-yellow-200 hover:bg-white/10'
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="relative z-10">{link.name}</span>
                {pathname === link.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 animate-pulse" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-yellow-200 hover:bg-white/10 focus:outline-none transition-all duration-300 group"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative">
                {isOpen ? (
                  <X
                    className="block h-5 w-5 transition-transform duration-300 group-hover:rotate-90"
                    aria-hidden="true"
                  />
                ) : (
                  <Menu
                    className="block h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden transition-all duration-500 ease-out overflow-hidden',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-3 pt-3 pb-4 space-y-2 bg-gradient-to-b from-[#261063] to-[#9D467D] shadow-2xl border-t border-white/10">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform',
                pathname === link.href
                  ? 'text-yellow-200 bg-white/20 shadow-lg backdrop-blur-sm scale-105 border border-white/20'
                  : 'text-white/90 hover:bg-white/10 hover:text-yellow-200 hover:scale-105 hover:translate-x-2'
              )}
              style={{
                animationDelay: `${index * 50}ms`,
                transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
                transition: `all 0.3s ease-out ${index * 50}ms`,
              }}
            >
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-current mr-3 opacity-60"></span>
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

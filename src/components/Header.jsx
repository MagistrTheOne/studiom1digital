import React, { useState, useEffect } from 'react'
import { Menu, X, Infinity, Twitter, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Web5 Tech', href: '#technology' },
    { name: 'Global Presence', href: '#presence' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Investment', href: '#investment' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Projects', href: '#projects' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/20 backdrop-blur-xl border-b border-red-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Infinity className="w-8 h-8 text-red-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
              M♾️1
            </span>
            <span className="text-sm text-gray-300 hidden sm:block">
              Digital Future | From Visioner to Future
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}

            {/* Social Links */}
            <div className="flex items-center space-x-3 ml-6 border-l border-gray-600 pl-6">
              <a
                href="https://x.com/MagistrTheOne"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-colors group"
                title="Follow MagistrTheOne"
              >
                <Twitter className="w-4 h-4 text-red-500 group-hover:text-red-400" />
              </a>
              <a
                href="mailto:magistrtheone@gmail.com"
                className="p-2 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-colors group"
                title="Email MagistrTheOne"
              >
                <Mail className="w-4 h-4 text-red-500 group-hover:text-red-400" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-red-500/10 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-red-400" />
            ) : (
              <Menu className="w-6 h-6 text-red-400" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-red-500/20">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-600">
                <a
                  href="https://x.com/MagistrTheOne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Twitter className="w-4 h-4" />
                  <span className="text-sm">MagistrTheOne</span>
                </a>
                <a
                  href="mailto:magistrtheone@gmail.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Email</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

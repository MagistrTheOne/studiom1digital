import React, { useEffect, useRef } from 'react'
import { MapPin, Users, Building, Globe } from 'lucide-react'

const GlobalPresence = () => {
  const mapRef = useRef(null)

  const locations = [
    {
      city: 'Dubai',
      country: 'UAE',
      position: { x: 65, y: 45 },
      clients: 25000,
      description: 'Middle East Innovation Hub',
    },
    {
      city: 'London',
      country: 'UK',
      position: { x: 50, y: 35 },
      clients: 400000,
      description: 'European Financial Center',
    },
    {
      city: 'New York',
      country: 'USA',
      position: { x: 25, y: 40 },
      clients: 60000,
      description: 'North American Headquarters',
    },
    {
      city: 'Singapore',
      country: 'SG',
      position: { x: 75, y: 55 },
      clients: 30000,
      description: 'Asia-Pacific Gateway',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-pulse')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (mapRef.current) observer.observe(mapRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="presence" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              Global Presence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategically positioned across continents to serve enterprise clients worldwide
          </p>
        </div>

        {/* World Map */}
        <div className="glass-card p-8 relative overflow-hidden transition-shadow hover:shadow-red-500/20 mb-16" style={{ height: '400px' }} ref={mapRef}>
          {/* Simplified World Map Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg viewBox="0 0 1000 500" className="w-full h-full">
              <path
                d="M150 150 L300 100 L450 120 L600 100 L750 120 L850 150 L900 200 L850 250 L750 280 L600 300 L450 280 L300 300 L150 250 Z"
                fill="url(#mapGradient)"
                stroke="#ff0040"
                strokeWidth="1"
              />
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff0040" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#ff0040" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Markers */}
          {locations.map((location, index) => (
            <div
              key={index}
              className="absolute group cursor-pointer"
              style={{
                left: `${location.position.x}%`,
                top: `${location.position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="relative">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute -top-1 -left-1 w-6 h-6 bg-red-500/30 rounded-full animate-ping"></div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="glass-card p-3 text-center whitespace-nowrap text-xs backdrop-blur-sm bg-red-900/10 border border-red-500/10">
                    <div className="font-semibold text-white">{location.city}</div>
                    <div className="text-gray-300">{location.description}</div>
                    <div className="text-red-400">{location.clients} clients</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {locations.map((location, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-red-500/20"
            >
              <MapPin className="w-8 h-8 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{location.city}</h3>
              <p className="text-sm text-gray-300 mb-3">{location.description}</p>
              <div className="text-2xl font-bold text-red-500">{location.clients}</div>
              <div className="text-xs text-gray-400">Active Clients</div>
            </div>
          ))}
        </div>

        {/* Global Stats */}
        <div className="glass-card p-8 transition-shadow hover:shadow-red-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, label: 'Global Clients', value: '1,550+' },
              { icon: Building, label: 'Countries', value: '25' },
              { icon: Globe, label: 'Continents', value: '4' },
              { icon: MapPin, label: 'Support', value: '24/7' },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i}>
                  <Icon className="w-8 h-8 text-red-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-red-500 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence

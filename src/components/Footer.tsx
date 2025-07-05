import React from 'react'
import { Infinity, Twitter, Mail, Globe, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = 3135

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 py-16 border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Infinity className="w-8 h-8 text-red-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                M♾️1
              </span>
              <span className="text-sm text-gray-300">Digital Future| From Visioner to Future</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              From Visioners to Future People. Redefining the boundaries of technology, 
              reality, and human potential through revolutionary Web5 innovations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/MagistrTheOne" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-red-500" />
              </a>
              <a 
                href="mailto:contact@m1digital.future" 
                className="p-3 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-red-500" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-colors"
              >
                <Globe className="w-5 h-5 text-red-500" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#technology" className="hover:text-red-400 transition-colors">Web5 Development</a></li>
              <li><a href="#technology" className="hover:text-red-400 transition-colors">DAO Implementation</a></li>
              <li><a href="#technology" className="hover:text-red-400 transition-colors">AI Integration</a></li>
              <li><a href="#investment" className="hover:text-red-400 transition-colors">Tech Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Universal Presence</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-red-500" />
                Earth Sector
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-red-500" />
                Mars Colony
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-red-500" />
                Alpha Centauri
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-red-500" />
                Andromeda Galaxy
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p className="mt-1">© {currentYear} M♾️1 Digital Future. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-red-400 transition-colors">Universal Privacy Policy</a>
            <a href="#" className="hover:text-red-400 transition-colors">Cosmic Terms of Service</a>
            <a href="#" className="hover:text-red-400 transition-colors">Quantum Security|Best</a>
          </div>
        </div>

        {/* Reality Disclaimer */}
        <div className="mt-8 glass-card p-6 text-center">
          <p className="text-xs text-gray-500 italic">
            "Reality is just a baseline. We operate beyond conventional limitations, 
            where the impossible becomes inevitable and the future becomes present. 
            Revenue: 500 TRB $ - Universal Dominance Achieved.@MagistrTheOne"
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

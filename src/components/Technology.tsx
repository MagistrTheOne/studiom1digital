import React from 'react'
import { Code, Database, Shield, Cpu, Network, Zap } from 'lucide-react'

const Technology = () => {
  const technologies = [
    {
      icon: Code,
      name: 'Web5 Protocol',
      description: 'Decentralized web infrastructure with advanced identity management',
      features: ['Decentralized Identifiers', 'Verifiable Credentials', 'Distributed Web Nodes'],
    },
    {
      icon: Database,
      name: 'DAO Architecture',
      description: 'Autonomous organizational structures with smart governance',
      features: ['Smart Contracts', 'Governance Tokens', 'Automated Decisions'],
    },
    {
      icon: Shield,
      name: 'Security Layer',
      description: 'Military-grade encryption and zero-knowledge proofs',
      features: ['End-to-End Encryption', 'Zero-Knowledge Proofs', 'Quantum Resistance'],
    },
    {
      icon: Cpu,
      name: 'AI Integration',
      description: 'Advanced machine learning with infinite LLM capabilities',
      features: ['Natural Language Processing', 'Predictive Analytics', 'Autonomous Agents'],
    },
    {
      icon: Network,
      name: 'Distributed Network',
      description: 'Global infrastructure with edge computing optimization',
      features: ['Edge Computing', 'CDN Integration', 'Real-time Sync'],
    },
    {
      icon: Zap,
      name: 'Performance Engine',
      description: 'Ultra-fast processing with optimized resource allocation',
      features: ['Sub-second Response', 'Auto-scaling', 'Load Balancing'],
    },
  ]

  return (
    <section id="technology" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              Proprietary Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary technologies that redefine the boundaries of what's possible in the digital realm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <div
                key={index}
                className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-red-500/10 rounded-lg mr-4 group-hover:bg-red-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                </div>

                <p className="text-gray-300 mb-6">{tech.description}</p>

                <div className="space-y-3">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-20 glass-card p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">99.99%</div>
              <div className="text-sm text-gray-400">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">&lt;1ms</div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">∞</div>
              <div className="text-sm text-gray-400">Scalability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">256-bit</div>
              <div className="text-sm text-gray-400">Encryption</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology

import React from 'react'
import { Rocket, Code, Zap, Globe, Brain, Shield } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Web5 Foundation Protocol',
      status: 'Live',
      description: 'Core infrastructure powering the next generation of decentralized applications',
      tech: ['Distributed Identity', 'Verifiable Credentials', 'Decentralized Web Nodes'],
      impact: 'Enabling true digital sovereignty',
      icon: Globe,
      progress: 100,
    },
    {
      title: 'Infinite LLM Network',
      status: 'Beta',
      description: 'Autonomous AI collective with unlimited scaling capabilities',
      tech: ['Neural Architecture Search', 'Federated Learning', 'Quantum Processing'],
      impact: 'Redefining artificial intelligence',
      icon: Brain,
      progress: 85,
    },
    {
      title: 'DAO Governance Platform',
      status: 'Development',
      description: 'Revolutionary autonomous organizational management system',
      tech: ['Smart Contracts', 'Consensus Mechanisms', 'Token Economics'],
      impact: 'Democratizing organizational power',
      icon: Shield,
      progress: 65,
    },
    {
      title: 'Quantum Security Layer',
      status: 'Research',
      description: 'Unhackable encryption using quantum mechanics principles',
      tech: ['Quantum Cryptography', 'Zero-Knowledge Proofs', 'Homomorphic Encryption'],
      impact: 'Absolute digital security',
      icon: Shield,
      progress: 40,
    },
    {
      title: 'Reality Synthesis Engine',
      status: 'Conceptual',
      description: 'Bridging digital and physical reality through advanced simulations',
      tech: ['Digital Twins', 'AR/VR Integration', 'Physics Simulation'],
      impact: 'Merging realities',
      icon: Zap,
      progress: 25,
    },
    {
      title: 'Consciousness Interface',
      status: 'Vision',
      description: 'Direct neural-digital communication protocol',
      tech: ['Brain-Computer Interface', 'Neural Decoding', 'Consciousness Mapping'],
      impact: 'Transcending human limitations',
      icon: Brain,
      progress: 10,
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'text-green-400'
      case 'Beta': return 'text-blue-400'
      case 'Development': return 'text-yellow-400'
      case 'Research': return 'text-purple-400'
      case 'Conceptual': return 'text-orange-400'
      case 'Vision': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden">
      {/* Glass Background Blur Layer */}
      <div className="absolute inset-0 bg-red-500/5 backdrop-blur-[2px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              M♾️1 |digital|Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From Visioners to Future People — Projects that reshape reality itself
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div key={index} className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.03] transition-all duration-300 shadow-xl hover:shadow-red-500/20 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-red-500/10 rounded-xl mr-4 group-hover:bg-red-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <span className={`text-sm ${getStatusColor(project.status)}`}>{project.status}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400">Progress</span>
                    <span className="text-xs text-red-400">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-red-500 to-red-400 h-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-red-400 mb-1">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-red-500/10 text-red-300 px-2 py-1 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs italic text-gray-400 border-t border-red-500/20 pt-3">
                  {project.impact}
                </p>
              </div>
            )
          })}
        </div>

        {/* Vision Footer Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center shadow-lg">
          <Rocket className="w-12 h-12 text-red-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
            "We don’t just build technology — we architect the future. Every project is a step toward
            a reality where the impossible becomes inevitable, where limitations are obsolete, and where
            humanity transcends its current boundaries."
          </p>
          <p className="text-sm italic text-red-400">— The M♾️1 Collective</p>
        </div>
      </div>
    </section>
  )
}

export default Projects

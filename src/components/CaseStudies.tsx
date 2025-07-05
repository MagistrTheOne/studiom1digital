import React from 'react'
import { TrendingUp, Target, Zap, Shield } from 'lucide-react'

const CaseStudies = () => {
  const cases = [
    {
      title: 'Financial Services Disruption',
      client: 'Global Bank Consortium',
      challenge: 'Legacy systems blocking Web5 adoption',
      solution: 'Complete infrastructure overhaul with DAO integration',
      results: ['400% efficiency increase', '99.9% uptime achieved', '$2B in cost savings'],
      icon: TrendingUp,
      color: 'from-red-500 to-red-400',
    },
    {
      title: 'Enterprise AI Integration',
      client: 'Tech Giant Coalition',
      challenge: 'Scaling AI across global operations',
      solution: 'Infinite LLM architecture with real-time optimization',
      results: ['10x processing speed', 'Autonomous decision making', '90% error reduction'],
      icon: Target,
      color: 'from-red-600 to-red-500',
    },
    {
      title: 'Government Digital Transformation',
      client: 'Smart City Initiative',
      challenge: 'Modernizing public services infrastructure',
      solution: 'Web5-powered citizen identity and service delivery',
      results: ['Instant verification', 'Zero fraud incidents', '95% citizen satisfaction'],
      icon: Shield,
      color: 'from-red-700 to-red-600',
    },
    {
      title: 'Startup Ecosystem Revolution',
      client: 'Innovation Hub Network',
      challenge: 'Connecting global startup ecosystem',
      solution: 'Decentralized collaboration platform with AI matching',
      results: ['500% funding increase', 'Global reach achieved', 'Instant partnerships'],
      icon: Zap,
      color: 'from-red-800 to-red-700',
    },
  ]

  return (
    <section id="cases" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              Disrupted Markets
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world transformations that redefined industries and shattered conventional limitations
          </p>
        </div>

        {/* Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="glass-card p-8 hover:scale-[1.03] transition-all duration-300 group backdrop-blur-xl border border-red-500/10"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`p-4 bg-gradient-to-r ${item.color} rounded-lg mr-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-red-400">{item.client}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Challenge</h4>
                    <p className="text-sm text-gray-300">{item.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Solution</h4>
                    <p className="text-sm text-gray-300">{item.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Results</h4>
                    <ul className="space-y-2">
                      {item.results.map((result, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Global Impact Metrics */}
        <div className="mt-20 glass-card p-8 border border-red-500/10 backdrop-blur-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Global Impact</h3>
            <p className="text-gray-400">Measurable transformation across industries</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Value Created', value: '$50B+' },
              { label: 'Success Rate', value: '98%' },
              { label: 'Markets Disrupted', value: '500+' },
              { label: 'Global Operations', value: '24/7' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-red-500 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

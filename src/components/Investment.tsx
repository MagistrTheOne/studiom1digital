import React from 'react'
import { TrendingUp, DollarSign, PieChart, BarChart3, ArrowUpRight } from 'lucide-react'

const Investment = () => {
  const opportunities = [
    {
      title: 'Series X: Infinite Scale',
      amount: '$100M',
      type: 'Equity',
      roi: '10,000%',
      timeframe: '2-3 years',
      description: 'Revolutionary Web5 infrastructure expansion',
      highlights: ['Global market domination', 'Infinite LLM network', 'Autonomous revenue streams'],
      icon: TrendingUp,
    },
    {
      title: 'DAO Genesis Fund',
      amount: '$50M',
      type: 'Token',
      roi: '5,000%',
      timeframe: '1-2 years',
      description: 'Decentralized autonomous organization launch',
      highlights: ['Governance tokens', 'Automated profits', 'Community ownership'],
      icon: PieChart,
    },
    {
      title: 'AI Acquisition Pool',
      amount: '$200M',
      type: 'Venture',
      roi: '2,500%',
      timeframe: '3-5 years',
      description: 'Strategic AI company acquisitions',
      highlights: ['Tech giant consolidation', 'Market monopolization', 'Infinite scaling'],
      icon: BarChart3,
    },
  ]

  const portfolioMetrics = [
    { label: 'Total AUM', value: '$2.5B', icon: DollarSign },
    { label: 'Average ROI', value: '3,500%', icon: TrendingUp },
    { label: 'Success Rate', value: '100%', icon: ArrowUpRight },
    { label: 'Active Investments', value: '47', icon: PieChart },
  ]

  return (
    <section id="investment" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Subtle red haze */}
      <div className="absolute inset-0 bg-red-500/5 pointer-events-none z-0 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              Investment Opportunities
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exclusive access to the future of technology. Warning: Returns may cause existential superiority complex.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {portfolioMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="rounded-xl p-6 text-center border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-[1.03] transition-all duration-300">
                <Icon className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-red-500 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            )
          })}
        </div>

        {/* Investment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon
            return (
              <div key={index} className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-[1.03] group">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-red-500/10 rounded-xl mr-4 group-hover:bg-red-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{opportunity.title}</h3>
                    <p className="text-sm text-red-400">{opportunity.type} Investment</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Amount</span>
                    <span className="text-xl font-bold text-red-500">{opportunity.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Expected ROI</span>
                    <span className="text-white font-bold">{opportunity.roi}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Timeframe</span>
                    <span className="text-white">{opportunity.timeframe}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-6">{opportunity.description}</p>

                <ul className="space-y-2 mb-6">
                  {opportunity.highlights.map((point, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      {point}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 hover:scale-105">
                  Secure Investment
                </button>
              </div>
            )
          })}
        </div>

        {/* Final Card */}
        <div className="rounded-2xl border border-red-500/20 bg-white/5 backdrop-blur-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-red-500 mb-4">⚠️ Investment Disclaimer</h3>
          <p className="text-gray-300 mb-4">
            "These returns are not guaranteed, but then again, neither was the internet.
            We're not just building technology — we're rewriting the rules of existence."
          </p>
          <p className="text-sm italic text-gray-400">– MagistrTheOne, Chief Reality Architect</p>
        </div>
      </div>
    </section>
  )
}

export default Investment

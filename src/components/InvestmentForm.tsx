import React, { useState } from 'react'
import { DollarSign, TrendingUp, Crown, Star, Infinity } from 'lucide-react'

const InvestmentForm = () => {
  const [amount, setAmount] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const getInvestmentTier = (value) => {
    if (value >= 100000000) return {
      tier: 'God Tier',
      phrase: "Even God bought our subscription - you're thinking bigger than the universe itself",
      color: 'from-yellow-500 to-yellow-300',
      icon: Crown,
      bgGlow: 'shadow-yellow-500/50'
    }
    if (value >= 50000000) return {
      tier: 'Cosmic Overlord',
      phrase: "The angels are taking notes - you understand infinite power",
      color: 'from-purple-500 to-purple-300',
      icon: Star,
      bgGlow: 'shadow-purple-500/50'
    }
    if (value >= 10000000) return {
      tier: 'Reality Architect',
      phrase: "Even deities subscribe to our newsletter - you're rewriting existence",
      color: 'from-red-500 to-red-300',
      icon: Infinity,
      bgGlow: 'shadow-red-500/50'
    }
    if (value >= 5000000) return {
      tier: 'Universe Shaper',
      phrase: "The cosmos bows to your vision - transcendence awaits",
      color: 'from-blue-500 to-blue-300',
      icon: TrendingUp,
      bgGlow: 'shadow-blue-500/50'
    }
    if (value >= 1000000) return {
      tier: 'Digital Prophet',
      phrase: "Heaven's IT department uses our services - you see the future",
      color: 'from-green-500 to-green-300',
      icon: Star,
      bgGlow: 'shadow-green-500/50'
    }
    if (value >= 500000) return {
      tier: 'Tech Visionary',
      phrase: "Angels invest in our pre-seed rounds - you're ahead of time",
      color: 'from-orange-500 to-orange-300',
      icon: TrendingUp,
      bgGlow: 'shadow-orange-500/50'
    }
    if (value >= 100000) return {
      tier: 'Future Believer',
      phrase: "Even the divine powers subscribe - you understand the vision",
      color: 'from-pink-500 to-pink-300',
      icon: DollarSign,
      bgGlow: 'shadow-pink-500/50'
    }
    if (value >= 50000) return {
      tier: 'Early Adopter',
      phrase: "Heaven's venture capital fund is interested - you're thinking big",
      color: 'from-indigo-500 to-indigo-300',
      icon: TrendingUp,
      bgGlow: 'shadow-indigo-500/50'
    }
    if (value >= 10000) return {
      tier: 'Believer',
      phrase: "The celestial beings are watching - you see potential",
      color: 'from-teal-500 to-teal-300',
      icon: DollarSign,
      bgGlow: 'shadow-teal-500/50'
    }
    if (value >= 1000) return {
      tier: 'Starter',
      phrase: "Even guardian angels are curious - you're on the right path",
      color: 'from-gray-500 to-gray-300',
      icon: DollarSign,
      bgGlow: 'shadow-gray-500/50'
    }

    return {
      tier: 'Observer',
      phrase: "Start your journey to digital transcendence",
      color: 'from-gray-600 to-gray-400',
      icon: DollarSign,
      bgGlow: 'shadow-gray-500/30'
    }
  }

  const currentTier = getInvestmentTier(parseFloat(amount) || 0)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Investment submission:', { name, email, amount })
    alert(`Thank you ${name}! Your ${currentTier.tier} investment of $${amount} has been recorded. Prepare for digital transcendence.`)
  }

  const TierIcon = currentTier.icon

  return (
    <div className="max-w-2xl mx-auto">
      <div className={`glass-card p-8 transition-all duration-500 ${currentTier.bgGlow}`}>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <TierIcon className={`w-12 h-12 bg-gradient-to-r ${currentTier.color} bg-clip-text text-transparent`} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Investment Portal</h3>
          <p className="text-gray-400">Secure your place in the digital future</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
              placeholder="your.email@domain.com"
              required
            />
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">Investment Amount (USD)</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                placeholder="Enter investment amount"
                min="1000"
                step="1000"
                required
              />
            </div>
          </div>

          {amount && parseFloat(amount) >= 1000 && (
            <div className={`p-6 rounded-lg bg-gradient-to-r ${currentTier.color} bg-opacity-10 border border-current transition-all duration-500`}>
              <div className="flex items-center mb-3">
                <TierIcon className="w-6 h-6 text-current mr-3" />
                <span className={`font-bold text-lg bg-gradient-to-r ${currentTier.color} bg-clip-text text-transparent`}>
                  {currentTier.tier}
                </span>
              </div>
              <p className="text-white font-medium italic">
                "{currentTier.phrase}"
              </p>
            </div>
          )}

          <div className="glass-card p-4">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Investment Tiers</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="text-gray-400">$1K+ Believer</div>
              <div className="text-gray-400">$10K+ Early Adopter</div>
              <div className="text-gray-400">$100K+ Future Believer</div>
              <div className="text-gray-400">$1M+ Digital Prophet</div>
              <div className="text-gray-400">$10M+ Reality Architect</div>
              <div className="text-yellow-400">$100M+ God Tier</div>
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-4 bg-gradient-to-r ${currentTier.color} text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg ${currentTier.bgGlow}`}
          >
            Invest Now and Pray We Don't Rewrite Your Existence
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 italic">
            "Investment in M♾️1 Digital Future may result in transcendence beyond mortal comprehension. 
            Side effects include: digital enlightenment, reality distortion, and cosmic superiority complex."
          </p>
        </div>
      </div>
    </div>
  )
}

export default InvestmentForm

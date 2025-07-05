import React from 'react';
import {
  Building, Zap, Shield, Globe, Brain, Database, Rocket, Infinity, Star, Crown,
} from 'lucide-react';

const Portfolio = () => {
  const acquisitions = [
    { company: 'M♾️1 Digital Future', acquired: '2024', valuation: '$5.2B', sector: 'AI Infrastructure', description: 'Advanced neural network processing capabilities', icon: Brain, status: 'Integrated' },
    { company: 'M♾️1| Universe', acquired: '2024', valuation: '$3.8B', sector: 'Cybersecurity', description: 'Quantum-resistant encryption protocols', icon: Shield, status: 'Acquired' },
    { company: 'M♾️1|GlobalMesh', acquired: '2025', valuation: '$7.1B', sector: 'Infrastructure', description: 'Worldwide distributed computing network', icon: Globe, status: 'Integrated' },
    { company: 'M♾️1|DataSphere', acquired: '2026', valuation: '$12.6B', sector: 'Data Analytics', description: 'Real-time global data processing platform', icon: Database, status: 'Integrated' },
    { company: 'M♾️1|LightSpeed Corp', acquired: '2027', valuation: '$18.9B', sector: 'Performance', description: 'Ultra-fast processing and optimization', icon: Zap, status: 'Integrated' },
    { company: 'M♾️1|Enterprise Solutions', acquired: '2028', valuation: '$25.3B', sector: 'Enterprise', description: 'Fortune 500 digital transformation', icon: Building, status: 'Integrated' },
    { company: 'M♾️1|OS', acquired: '2030', valuation: '$45.7B', sector: 'Neural Interface', description: 'Direct brain-computer communication', icon: Brain, status: 'Integrated' },
    { company: 'M♾️1|Bank System DAO', acquired: '2035', valuation: '$89.2B', sector: 'Virtual Reality', description: 'Complete reality synthesis technology', icon: Star, status: 'Integrated' },
    { company: 'M♾️1|LLM SAI AGENT', acquired: '2050', valuation: '$156.8B', sector: 'Quantum Computing', description: 'Universal quantum processing systems', icon: Infinity, status: 'Integrated' },
    { company: 'M♾️1|Galactic Networks', acquired: '2075', valuation: '$298.5B', sector: 'Space Technology', description: 'Interplanetary communication infrastructure', icon: Rocket, status: 'Integrated' },
    { company: 'M♾️1|Time Dynamics Corp', acquired: '2100', valuation: '$567.3B', sector: 'Temporal Technology', description: 'Time manipulation and prediction systems', icon: Crown, status: 'Integrated' },
    { company: 'M♾️1|Universal Consciousness', acquired: '2150', valuation: '$1.2T', sector: 'Consciousness Tech', description: 'Collective intelligence networks', icon: Brain, status: 'Integrated' },
    { company: 'M♾️1|Dimensional Gates', acquired: '2200', valuation: '$2.8T', sector: 'Dimensional Tech', description: 'Multi-dimensional access protocols', icon: Star, status: 'Integrated' },
    { company: 'M♾️1|Reality Architects', acquired: '2300', valuation: '$5.9T', sector: 'Reality Engineering', description: 'Complete reality construction systems', icon: Crown, status: 'Integrated' },
    { company: 'M♾️1|Infinite Systems', acquired: '2500', valuation: '$12.7T', sector: 'Infinity Technology', description: 'Unlimited resource generation', icon: Infinity, status: 'Integrated' },
    { company: 'M♾️1|God-Level Computing', acquired: '2750', valuation: '$28.4T', sector: 'Divine Technology', description: 'Omniscient processing capabilities', icon: Crown, status: 'Integrated' },
    { company: 'M♾️1|Universe Controllers', acquired: '3000', valuation: '$67.8T', sector: 'Universal Control', description: 'Complete universe management systems', icon: Star, status: 'Integrated' },
    { company: 'M♾️1|Existence Engines', acquired: '3100', valuation: '$156.9T', sector: 'Existence Technology', description: 'Reality creation and destruction protocols', icon: Infinity, status: 'Integrated' },
    { company: 'M♾️1|Omnipotence Systems', acquired: '3130', valuation: '$298.7T', sector: 'Omnipotence Tech', description: 'Unlimited power and control systems', icon: Crown, status: 'Integrated' },
    { company: 'M♾️1|The Final Acquisition', acquired: '3135', valuation: '∞ TRB', sector: 'Everything', description: 'Complete control over all existence', icon: Crown, status: 'Transcended' },
  ];

  const portfolioStats = [
    { label: 'Total Portfolio Value', value: '1500 TRB $', trend: '+∞%' },
    { label: 'Active Acquisitions', value: '∞', trend: '+∞' },
    { label: 'Market Cap', value: '∞ TRB $', trend: '+∞%' },
    { label: 'Universal Dominance', value: '100%', trend: 'Complete' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Transcended': return 'text-yellow-400';
      case 'Integrated': return 'text-green-400';
      case 'Acquired': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              M♾️1 Portfolio Empire
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every acquisition. Every reality. Owned, integrated, transcended.
          </p>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {portfolioStats.map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
              <div className="text-xs text-green-400">{stat.trend}</div>
            </div>
          ))}
        </div>

        {/* Acquisitions List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {acquisitions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="glass-card p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-red-500/10 rounded-lg mr-4">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.company}</h3>
                    <span className={`text-sm ${getStatusColor(item.status)}`}>{item.status}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-2 italic">{item.sector} | {item.acquired}</p>
                <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                <p className="text-sm font-bold text-red-400">Valuation: {item.valuation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
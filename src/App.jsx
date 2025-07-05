import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Technology from './components/Technology';
import GlobalPresence from './components/GlobalPresence';
import CaseStudies from './components/CaseStudies';
import Investment from './components/Investment';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <main
      id="app-root"
      className="min-h-screen bg-black text-white overflow-x-hidden scroll-smooth selection:bg-red-500/30 selection:text-white"
      lang="en"
    >
      {/* Fixed Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Tech Stack Overview */}
      <Technology />

      {/* Global Presence Map */}
      <GlobalPresence />

      {/* Use Cases / Case Studies */}
      <CaseStudies />

      {/* Investor Section */}
      <Investment />

      {/* Portfolio + Acquisition Timeline */}
      <Portfolio />

      {/* Key Ongoing Projects */}
      <Projects />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;

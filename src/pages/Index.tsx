
import React, { useState } from 'react';
import Header from '../components/Header';
import SneakerShowcase from '../components/SneakerShowcase';
import Navigation from '../components/Navigation';
import PulseMap from '../components/PulseMap';
import PersonaCards from '../components/PersonaCards';
import ProductPage from '../components/ProductPage';
import UGCChallenge from '../components/UGCChallenge';

const Index = () => {
  const [activeTab, setActiveTab] = useState('latest');

  const renderContent = () => {
    switch (activeTab) {
      case 'pulse-map':
        return <PulseMap />;
      case 'personas':
        return <PersonaCards />;
      case 'buy':
        return <ProductPage />;
      case 'beat':
        return <UGCChallenge />;
      default:
        return (
          <div className="min-h-screen bg-cyber-dark">
            <Header />
            <SneakerShowcase />
            
            {/* Latest Drop Content */}
            <div className="px-4 pb-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-orbitron font-bold text-white mb-6">
                  <span className="text-neon-cyan">LATEST</span> DROP
                </h2>
                
                <div className="cyber-gradient rounded-2xl border border-neon-cyan/30 p-8 mb-8">
                  <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                    HERTZ-1 Collection
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                    Four cities. Four rhythms. Four unique colorways that capture the pulse of urban culture. 
                    Each HERTZ-1 is engineered for the streets and inspired by the beats that move us.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-cyber-navy/50 rounded-lg p-4">
                      <div className="w-full h-16 bg-gradient-to-r from-gray-900 to-black rounded mb-3"></div>
                      <h4 className="text-white font-medium">Urban Black</h4>
                      <p className="text-neon-cyan text-sm">NYC Edition</p>
                    </div>
                    <div className="bg-cyber-navy/50 rounded-lg p-4">
                      <div className="w-full h-16 bg-gradient-to-r from-purple-600 to-purple-900 rounded mb-3"></div>
                      <h4 className="text-white font-medium">Neon Purple</h4>
                      <p className="text-neon-purple text-sm">Seoul Edition</p>
                    </div>
                    <div className="bg-cyber-navy/50 rounded-lg p-4">
                      <div className="w-full h-16 bg-gradient-to-r from-gray-300 to-gray-600 rounded mb-3"></div>
                      <h4 className="text-white font-medium">Chrome Edition</h4>
                      <p className="text-cyber-chrome text-sm">Tokyo Edition</p>
                    </div>
                    <div className="bg-cyber-navy/50 rounded-lg p-4">
                      <div className="w-full h-16 bg-gradient-to-r from-red-500 to-red-800 rounded mb-3"></div>
                      <h4 className="text-white font-medium">Signal Red</h4>
                      <p className="text-neon-pink text-sm">Delhi Edition</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setActiveTab('buy')}
                    className="bg-neon-cyan hover:bg-neon-cyan/80 text-cyber-dark font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:neon-glow transform hover:scale-105"
                  >
                    Explore Collection
                  </button>
                </div>
                
                <div className="text-center">
                  <p className="text-neon-purple text-lg font-medium mb-2">
                    Some rhythms can't be followed. Only felt.
                  </p>
                  <p className="text-gray-400">
                    Available now in limited quantities across all pulse points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark">
      {renderContent()}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default Index;

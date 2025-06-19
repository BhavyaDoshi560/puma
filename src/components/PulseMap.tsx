import React, { useState } from 'react';
import { MapPin, Headphones, Palette, Users } from 'lucide-react';

const PulseMap = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const cities = [
    {
      id: 'delhi',
      name: 'Delhi',
      position: { top: '51%', left: '71%' },
      persona: 'Kavya',
      vibe: 'Bollywood Fusion',
      color: 'from-neon-pink to-cyber-red',
      description: 'Where tradition meets rebellion'
    },
    {
      id: 'seoul',
      name: 'Seoul',
      position: { top: '35%', left: '85%' },
      persona: 'Zoya',
      vibe: 'K-Pop Electro',
      color: 'from-neon-purple to-neon-pink',
      description: 'Neon dreams and digital beats'
    },
    {
      id: 'nyc',
      name: 'NYC',
      position: { top: '40%', left: '25%' },
      persona: 'Leon',
      vibe: 'Underground Hip-Hop',
      color: 'from-neon-cyan to-neon-green',
      description: 'Raw energy, endless rhythm'
    },
    {
      id: 'tokyo',
      name: 'Tokyo',
      position: { top: '42%', left: '88%' },
      persona: 'Ryan',
      vibe: 'Tech House',
      color: 'from-cyber-chrome to-neon-cyan',
      description: 'Future sounds, present movement'
    }
  ];

  return (
    <div 
      className="min-h-screen p-4"
      
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-cyber-dark/60"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-orbitron font-bold text-center mb-8 text-white">
          <span className="text-neon-cyan">PULSE</span> MAP
        </h2>
        
        {/* Interactive World Map */}
        <div className="relative w-full h-[39rem] bg-cyber-navy/30 rounded-2xl border border-neon-cyan/20 overflow-hidden mb-8"
        style={{
        backgroundImage: `url('/assets/world_map.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
          {/* Map Background Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(0,245,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,245,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* City Markers */}
          {cities.map((city) => (
            <div
              key={city.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={city.position}
              onClick={() => setSelectedCity(selectedCity === city.id ? null : city.id)}
            >
              <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${city.color} animate-pulse-glow flex items-center justify-center hover:scale-125 transition-transform`}>
                <MapPin size={16} className="text-white" />
              </div>
              
              {/* City Pulse Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-current animate-ripple opacity-50"></div>
              
              {/* City Label */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium">
                {city.name}
              </div>
            </div>
          ))}
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M 25% 40% Q 50% 20% 70% 45% Q 80% 35% 85% 35% Q 90% 40% 88% 42%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* City Details */}
        {selectedCity && (
          <div className="cyber-gradient rounded-2xl border border-neon-cyan/30 p-6 animate-scale-in">
            {(() => {
              const city = cities.find(c => c.id === selectedCity);
              if (!city) return null;
              
              return (
                <div className="text-center">
                  <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                    {city.name}
                  </h3>
                  <p className="text-neon-cyan text-lg mb-4">{city.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-cyber-navy/50 rounded-lg p-4">
                      <Users className="text-neon-purple mx-auto mb-2" size={24} />
                      <h4 className="text-white font-medium mb-1">Persona</h4>
                      <p className="text-neon-cyan">{city.persona}</p>
                    </div>
                    
                    <div className="bg-cyber-navy/50 rounded-lg p-4">
                      <Headphones className="text-neon-cyan mx-auto mb-2" size={24} />
                      <h4 className="text-white font-medium mb-1">Sound Vibe</h4>
                      <p className="text-neon-purple">{city.vibe}</p>
                    </div>
                    
                    <div className="bg-cyber-navy/50 rounded-lg p-4">
                      <Palette className="text-neon-pink mx-auto mb-2" size={24} />
                      <h4 className="text-white font-medium mb-1">Colorway</h4>
                      <div className={`w-full h-4 rounded bg-gradient-to-r ${city.color}`}></div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        <div className="text-center mt-8">
          <p className="text-gray-400">
            Tap any city to explore its unique pulse and discover the local scene
          </p>
        </div>
      </div>
    </div>
  );
};

export default PulseMap;
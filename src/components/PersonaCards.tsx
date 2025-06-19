
import React, { useState } from 'react';
import { Play, Heart, Share2 } from 'lucide-react';

const PersonaCards = () => {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

  const personas = [
    {
      id: 'leon',
      name: 'Leon',
      city: 'NYC',
      age: 15,
      vibe: 'Underground Hip-Hop',
      quote: "Some rhythms can't be followed. Only felt.",
      bio: "Street artist and producer from Brooklyn. Leon finds inspiration in the concrete jungle's raw energy, translating urban chaos into hypnotic beats.",
      favoriteShoe: 'HERTZ-1 Urban Black',
      spotify: 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh',
      color: 'from-neon-cyan to-neon-green',
      image: '/assets/Leon.png'
    },
    {
      id: 'zoya',
      name: 'Zoya',
      city: 'Seoul',
      age: 16,
      vibe: 'K-Pop Electro',
      quote: "Dance like the city never sleeps.",
      bio: "Digital influencer and choreographer. Zoya bridges traditional K-culture with futuristic sounds, creating viral dance trends.",
      favoriteShoe: 'HERTZ-1 Neon Purple',
      spotify: 'spotify:track:7qiZfU4dY1lWllzX7mkmaw',
      color: 'from-neon-purple to-neon-pink',
      image: '/assets/Zoya.png'
    },
    {
      id: 'ryan',
      name: 'Ryan',
      city: 'Tokyo',
      age: 18,
      vibe: 'Tech House',
      quote: "Future sounds, present movement.",
      bio: "Tech entrepreneur by day, underground DJ by night. Ryan's sets blend cutting-edge electronic music with unexpected analog textures.",
      favoriteShoe: 'HERTZ-1 Chrome Edition',
      spotify: 'spotify:track:11dFghVXANMlKmJXsNCbNl',
      color: 'from-cyber-chrome to-neon-cyan',
      image: '/assets/Ryan.png'
    },
    {
      id: 'kavya',
      name: 'Kavya',
      city: 'Delhi',
      age: 13,
      vibe: 'Bollywood Fusion',
      quote: "Where tradition meets rebellion.",
      bio: "Classical dancer turned electronic music producer. Kavya creates explosive fusions of traditional Indian rhythms with modern bass drops.",
      favoriteShoe: 'HERTZ-1 Signal Red',
      spotify: 'spotify:track:6UelLqGlWMcVH1E5c4H7lY',
      color: 'from-neon-pink to-cyber-red',
      image: 'assets/Kavya.png'
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark p-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-orbitron font-bold text-center mb-8 text-white">
          MEET THE <span className="text-neon-cyan">PERSONAS</span>
        </h2>

        {/* Persona Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className={`relative bg-cyber-navy/30 rounded-2xl border border-neon-cyan/20 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedPersona === persona.id ? 'ring-2 ring-neon-cyan neon-glow' : ''
              }`}
              onClick={() => setSelectedPersona(selectedPersona === persona.id ? null : persona.id)}
            >
              {/* Character Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-b ${persona.color} opacity-20`}></div>
                <img 
                  src={persona.image} 
                  alt={persona.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyber-dark to-transparent p-4">
                  <h3 className="text-xl font-orbitron font-bold text-white">{persona.name}</h3>
                  <p className="text-neon-cyan text-sm">{persona.city} • {persona.age}</p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="p-4">
                <p className="text-neon-purple text-sm font-medium mb-2">{persona.vibe}</p>
                <p className="text-gray-300 text-sm italic">"{persona.quote}"</p>
              </div>

              {/* Pulse Indicator */}
              <div className="absolute top-4 right-4">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${persona.color} animate-pulse-glow`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Persona View */}
        {selectedPersona && (
          <div className="cyber-gradient rounded-2xl border border-neon-cyan/30 p-6 animate-scale-in">
            {(() => {
              const persona = personas.find(p => p.id === selectedPersona);
              if (!persona) return null;

              return (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Character Details */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-6">
                      <img 
                        src={persona.image} 
                        alt={persona.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-neon-cyan"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                          {persona.name}
                        </h3>
                        <p className="text-neon-cyan mb-1">{persona.city} • {persona.age} • {persona.vibe}</p>
                        <p className="text-neon-purple italic mb-4">"{persona.quote}"</p>
                        <p className="text-gray-300 leading-relaxed">{persona.bio}</p>
                      </div>
                    </div>

                    {/* Favorite Shoe */}
                    <div className="mt-6 bg-cyber-navy/50 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">Favorite HERTZ-1</h4>
                      <p className="text-neon-cyan">{persona.favoriteShoe}</p>
                    </div>
                  </div>

                  {/* Right: Music Player */}
                  <div className="bg-cyber-navy/50 rounded-lg p-6">
                    <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                      <Play size={20} className="text-neon-purple" />
                      Signature Track
                    </h4>
                    
                    {/* Mock Spotify Player */}
                    <div className="bg-cyber-dark rounded-lg p-4">
                      <div className={`w-full h-32 bg-gradient-to-br ${persona.color} rounded-lg mb-4 flex items-center justify-center`}>
                        <Play size={32} className="text-white" />
                      </div>
                      
                      <p className="text-white font-medium mb-1">{persona.name}'s Mix</p>
                      <p className="text-gray-400 text-sm mb-4">{persona.vibe} • 3:42</p>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan rounded-lg py-2 px-4 transition-colors flex items-center justify-center gap-2">
                          <Play size={16} />
                          Play
                        </button>
                        <button className="bg-cyber-navy/50 hover:bg-cyber-navy text-gray-400 rounded-lg p-2 transition-colors">
                          <Heart size={16} />
                        </button>
                        <button className="bg-cyber-navy/50 hover:bg-cyber-navy text-gray-400 rounded-lg p-2 transition-colors">
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        <div className="text-center mt-8">
          <p className="text-gray-400">
            Click on any persona to dive deeper into their world and music
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonaCards;

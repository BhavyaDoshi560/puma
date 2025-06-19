
import React, { useState } from 'react';
import { Upload, Trophy, Play, Heart, Share2, Music } from 'lucide-react';

const UGCChallenge = () => {
  const [dragOver, setDragOver] = useState(false);

  const topCreators = [
    { rank: 1, name: '@streetpulse_nyc', views: '2.3M', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
    { rank: 2, name: '@zoya_beats', views: '1.8M', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face' },
    { rank: 3, name: '@kavya_fusion', views: '1.5M', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
    { rank: 4, name: '@ryan_tech', views: '1.2M', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  ];

  const featuredVideos = [
    { id: 1, title: 'Tokyo Nightwalk Remix', creator: '@ryan_tech', likes: '45.2K', duration: '0:15' },
    { id: 2, title: 'Delhi Street Fusion', creator: '@kavya_fusion', likes: '38.7K', duration: '0:12' },
    { id: 3, title: 'Brooklyn Beat Drop', creator: '@streetpulse_nyc', likes: '52.1K', duration: '0:18' },
    { id: 4, title: 'Seoul Cyberpunk Vibe', creator: '@zoya_beats', likes: '41.9K', duration: '0:14' },
  ];

  return (
    <div className="min-h-screen bg-cyber-dark p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-orbitron font-bold text-white mb-4">
            DROP YOUR <span className="text-neon-cyan">DOT</span>
          </h1>
          <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
            DROP YOUR <span className="text-neon-purple">BEAT</span>
          </h2>
          <p className="text-neon-cyan text-lg max-w-2xl mx-auto">
            Show the world your HERTZ-1 style. Create, upload, and remix your way to the top of the pulse leaderboard.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Upload Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-orbitron font-bold text-white">
              Upload Your Creation
            </h3>

            {/* Drag and Drop Area */}
            <div
              className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                dragOver 
                  ? 'border-neon-cyan bg-neon-cyan/10 neon-glow' 
                  : 'border-neon-cyan/30 bg-cyber-navy/20'
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                // Handle file drop
              }}
            >
              <Upload size={48} className="text-neon-cyan mx-auto mb-4" />
              <h4 className="text-white font-medium mb-2">Drop your video here</h4>
              <p className="text-gray-400 mb-4">or click to browse</p>
              <button className="bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan border border-neon-cyan/50 hover:border-neon-cyan rounded-lg px-6 py-2 transition-colors">
                Choose File
              </button>
              
              {/* File requirements */}
              <div className="mt-4 text-sm text-gray-400">
                <p>Max 60 seconds • MP4, MOV • Up to 100MB</p>
              </div>
            </div>

            {/* Upload Form */}
            <div className="bg-cyber-navy/30 rounded-2xl border border-neon-cyan/20 p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-white font-medium mb-2">Title</label>
                  <input 
                    type="text"
                    placeholder="My HERTZ-1 Street Style"
                    className="w-full bg-cyber-navy/50 border border-neon-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Music Track</label>
                  <select className="w-full bg-cyber-navy/50 border border-neon-cyan/30 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:outline-none">
                    <option>Leon's Underground Mix</option>
                    <option>Zoya's K-Pop Electro</option>
                    <option>Ryan's Tech House</option>
                    <option>Kavya's Bollywood Fusion</option>
                    <option>Custom Track</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">City Vibe</label>
                  <select className="w-full bg-cyber-navy/50 border border-neon-cyan/30 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:outline-none">
                    <option>NYC Street Energy</option>
                    <option>Seoul Neon Nights</option>
                    <option>Tokyo Tech Future</option>
                    <option>Delhi Cultural Fusion</option>
                  </select>
                </div>

                <button className="w-full bg-neon-cyan hover:bg-neon-cyan/80 text-cyber-dark font-bold py-3 rounded-lg transition-all duration-300 hover:neon-glow transform hover:scale-105">
                  Upload & Share
                </button>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="space-y-6">
            <h3 className="text-2xl font-orbitron font-bold text-white flex items-center gap-2">
              <Trophy className="text-neon-cyan" size={28} />
              Top Creators
            </h3>

            <div className="bg-cyber-navy/30 rounded-2xl border border-neon-cyan/20 p-6">
              <div className="space-y-4">
                {topCreators.map((creator) => (
                  <div
                    key={creator.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                      creator.rank === 1 
                        ? 'bg-neon-cyan/10 border border-neon-cyan/30' 
                        : 'bg-cyber-navy/50 hover:bg-cyber-navy'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      creator.rank === 1 ? 'bg-neon-cyan text-cyber-dark' :
                      creator.rank === 2 ? 'bg-neon-purple text-white' :
                      creator.rank === 3 ? 'bg-neon-pink text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {creator.rank}
                    </div>
                    
                    <img 
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    
                    <div className="flex-1">
                      <p className="text-white font-medium">{creator.name}</p>
                      <p className="text-gray-400 text-sm">{creator.views} views</p>
                    </div>
                    
                    {creator.rank === 1 && (
                      <div className="text-neon-cyan">
                        <Trophy size={20} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge Rules */}
            <div className="bg-cyber-navy/30 rounded-2xl border border-neon-purple/20 p-6">
              <h4 className="text-white font-bold mb-4">Challenge Rules</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Feature your HERTZ-1 sneakers</p>
                <p>• Use original or provided beats</p>
                <p>• Tag #PUMAxPULSE #HERTZ1</p>
                <p>• Keep it street, keep it real</p>
                <p>• Weekly winners get exclusive drops</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Videos */}
        <div className="mb-8">
          <h3 className="text-2xl font-orbitron font-bold text-white mb-6 flex items-center gap-2">
            <Play className="text-neon-purple" size={28} />
            Featured Reels
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-cyber-navy/30 rounded-2xl border border-neon-cyan/20 overflow-hidden hover:scale-105 transition-transform cursor-pointer group"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-[9/16] bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                  <Play size={32} className="text-white group-hover:scale-110 transition-transform" />
                  
                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-cyber-dark/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h4 className="text-white font-medium mb-1 truncate">{video.title}</h4>
                  <p className="text-neon-cyan text-sm mb-2">{video.creator}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-neon-pink">
                      <Heart size={14} />
                      <span className="text-sm">{video.likes}</span>
                    </div>
                    <button className="text-gray-400 hover:text-neon-cyan transition-colors">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-cyber-gradient rounded-2xl border border-neon-cyan/30 p-8">
          <Music className="text-neon-cyan mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
            Ready to Join the Pulse?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Your rhythm, your rules, your HERTZ-1. Show the world how you move to the beat of the streets.
          </p>
          <button className="bg-neon-cyan hover:bg-neon-cyan/80 text-cyber-dark font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:neon-glow transform hover:scale-105">
            Start Creating
          </button>
        </div>
      </div>
    </div>
  );
};

export default UGCChallenge;

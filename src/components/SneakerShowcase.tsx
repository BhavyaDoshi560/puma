
import React, { useState } from 'react';

const SneakerShowcase = () => {
  const [rotation, setRotation] = useState(0);

  const handleRotate = () => {
    setRotation(prev => prev + 45);
  };

  return (
    <div className="relative py-12 px-4">
      {/* Pulse Waveform Base */}

      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-pulse-glow"></div>
      </div>
      
      {/* Ripple Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-neon-purple rounded-full animate-ripple"></div>
        <div className="w-4 h-4 border-2 border-neon-cyan rounded-full animate-ripple absolute" style={{animationDelay: '0.5s'}}></div>
        <div className="w-4 h-4 border-2 border-neon-pink rounded-full animate-ripple absolute" style={{animationDelay: '1s'}}></div>
      </div>

      {/* 3D Sneaker Container */}
      <div 
        className="relative w-80 h-80 mx-auto perspective-1000 cursor-pointer"
        onClick={handleRotate}
      >
        <div 
          className="w-full h-full"
          style={{ transform: `rotateY(${rotation}deg) rotateX(-10deg)`, display:"flex", justifyContent: "center", alignItems: "center" }}
        >
          {/* Sneaker Image */}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-cyber-chrome via-neon-cyan to-neon-purple rounded-lg shadow-2xl neon-glow flex items-center justify-center">
              <div className="text-6xl font-orbitron font-bold text-cyber-dark">
                HERTZ-1
              </div>
            </div>
          </div> */}

            
          <img style={{ height: "360px" }} src='/assets/assets_task_01jygseh79e2mahf694gdn9hjy_1750762836_img_1.webp'></img>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 bg-neon-cyan opacity-20 rounded-full blur-xl animate-pulse-glow"></div>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center mt-8">
        <h2 className="text-3xl font-orbitron font-bold text-white mb-2">HERTZ-1</h2>
        <p className="text-neon-cyan text-lg mb-4">The Future of Street Movement</p>
        <p className="text-gray-300 max-w-md mx-auto">
          Revolutionary design meets cutting-edge technology. Feel the pulse of tomorrow with every step.
        </p>
        <div className="mt-6">
          <p className="text-sm text-neon-purple">Tap to rotate • Swipe for details</p>
        </div>
      </div>
    </div>
  );
};

export default SneakerShowcase;

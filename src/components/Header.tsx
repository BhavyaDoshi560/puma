
import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col items-center pt-8 pb-6">
      {/* PUMA Logo */}
      <div className="mb-4">
        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
          {/* <div className="text-black font-bold text-xl">PUMA f</div> */}
        <img src="https://www.citypng.com/public/uploads/preview/puma-black-logo-png-701751694774568gw2on2y0un.png"/>
        </div>
      </div>
      
      {/* PUMA x PULSE Title */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold">
          <span className="text-white">PUMA</span>
          <span className="text-neon-cyan mx-2">×</span>
          <span 
            className="glitch-text animate-glitch text-neon-cyan"
            data-text="PULSE"
            style={{'--index': 1} as React.CSSProperties}
          >
            PULSE
          </span>
        </h1>
        <p className="text-neon-purple mt-2 text-lg font-medium tracking-wider">
          Find Your Frequency. Move in HERTZ.
          
        </p>
      </div>
    </div>
  );
};

export default Header;

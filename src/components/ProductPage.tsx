import React, { useState } from 'react';
import { ZoomIn, ShoppingCart, Bell, Star, Share2 } from 'lucide-react';

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('urban-black');
  const [isZoomed, setIsZoomed] = useState(false);

  const colorVariants = [
    { id: 'urban-black', name: 'Urban Black', color: 'from-gray-900 to-black', price: 299 },
    { id: 'neon-purple', name: 'Neon Purple', color: 'from-purple-600 to-purple-900', price: 319 },
    { id: 'chrome-edition', name: 'Chrome Edition', color: 'from-gray-300 to-gray-600', price: 349 },
    { id: 'signal-red', name: 'Signal Red', color: 'from-red-500 to-red-800', price: 329 },
  ];

  const selectedVariant = colorVariants.find(v => v.id === selectedColor) || colorVariants[0];

  return (
    <div className="min-h-screen bg-cyber-dark p-4">
      <div className="max-w-6xl mx-auto">
        {/* Product Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-orbitron font-bold text-white mb-2">
            HERTZ-1
          </h1>
          <p className="text-neon-cyan text-xl">The Future of Street Movement</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-400 text-sm">(4.8/5 • 2.3k reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Product Images */}
          <div className="space-y-6">
            {/* Main Product Image */}
            <div 
              className={`relative bg-cyber-navy/30 rounded-2xl border border-neon-cyan/20 overflow-hidden transition-all duration-500 cursor-pointer ${
                isZoomed ? 'transform scale-105' : ''
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <div className="aspect-square flex items-center justify-center p-8">
                <div className={`w-full h-full bg-gradient-to-br ${selectedVariant.color} rounded-lg shadow-2xl neon-glow flex items-center justify-center relative overflow-hidden`}>
                  {/* Shoe representation */}
                  {/* <div className="text-6xl font-orbitron font-bold text-white">
                    HERTZ-1
                  </div> */}

                  <div>
                    <img src="/assets/product_1.png"/>
                  </div>

                  
                  
                  {/* Glitch overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent animate-pulse"></div>
                </div>
              </div>
              
              {/* Zoom indicator */}
              <div className="absolute top-4 right-4 bg-cyber-dark/80 rounded-lg p-2">
                <ZoomIn size={20} className="text-neon-cyan" />
              </div>
            </div>

            {/* Color Variants */}
            <div className="grid grid-cols-4 gap-4">
              {colorVariants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedColor(variant.id)}
                  className={`aspect-square bg-gradient-to-br ${variant.color} rounded-lg transition-all duration-300 ${
                    selectedColor === variant.id 
                      ? 'ring-2 ring-neon-cyan neon-glow scale-105' 
                      : 'hover:scale-105 hover:ring-1 hover:ring-neon-purple'
                  }`}
                >
                  <span className="sr-only">{variant.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-8">
            {/* Price and Availability */}
            <div className="bg-cyber-navy/30 rounded-2xl border border-neon-cyan/20 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-white">
                    ${selectedVariant.price}
                  </h3>
                  <p className="text-neon-cyan">{selectedVariant.name}</p>
                </div>
                <button className="text-gray-400 hover:text-neon-pink transition-colors">
                  <Share2 size={24} />
                </button>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Size</h4>
                <div className="grid grid-cols-4 gap-2">
                  {['7', '8', '9', '10', '11', '12'].map((size) => (
                    <button
                      key={size}
                      className="bg-cyber-navy/50 hover:bg-neon-cyan/20 text-white border border-neon-cyan/20 hover:border-neon-cyan rounded-lg py-2 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-neon-cyan hover:bg-neon-cyan/80 text-cyber-dark font-bold py-4 rounded-lg transition-all duration-300 hover:neon-glow transform hover:scale-105 flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Buy Now
                </button>
                
                <button className="w-full bg-cyber-navy/50 hover:bg-cyber-navy text-neon-purple border border-neon-purple/50 hover:border-neon-purple font-medium py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Bell size={20} />
                  Notify Me When Available
                </button>
              </div>
            </div>

            {/* Product Features */}
            <div className="cyber-gradient rounded-2xl border border-neon-cyan/30 p-6">
              <h4 className="text-xl font-orbitron font-bold text-white mb-4">
                Tech Specs
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Pulse Tech™</span>
                  <span className="text-neon-cyan">Integrated</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Smart Comfort</span>
                  <span className="text-neon-cyan">Adaptive</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Material</span>
                  <span className="text-neon-cyan">CyberKnit™</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sole Type</span>
                  <span className="text-neon-cyan">HERTZ Responsive</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Edition</span>
                  <span className="text-neon-cyan">Limited</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-cyber-navy/30 rounded-2xl border border-neon-cyan/20 p-6">
              <h4 className="text-xl font-orbitron font-bold text-white mb-4">
                About HERTZ-1
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Revolutionary design meets cutting-edge technology in the HERTZ-1. 
                Built for the rhythm of the streets, each step activates our proprietary 
                Pulse Tech™ system, creating a harmonious connection between your movement 
                and the urban pulse around you.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Features adaptive comfort technology that learns from your walking style, 
                while the CyberKnit™ upper provides breathability and style that transitions 
                seamlessly from street to stage.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-neon-purple text-lg font-medium">
            Some rhythms can't be followed. Only felt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
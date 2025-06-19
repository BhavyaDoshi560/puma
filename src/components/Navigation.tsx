
import React, { useState } from 'react';
import { Flame, Building2, Users, Music, ShoppingBag } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: 'latest', icon: Flame, label: 'Latest Drop' },
    { id: 'pulse-map', icon: Building2, label: 'Explore City Pulse' },
    { id: 'personas', icon: Users, label: 'Meet the Personas' },
    { id: 'beat', icon: Music, label: 'Drop Your Beat' },
    { id: 'buy', icon: ShoppingBag, label: 'Buy HERTZ-1' },
  ];

  return (
    <div className="bg-cyber-navy/50 backdrop-blur-lg border-t border-neon-cyan/20 px-4 py-3">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-neon-cyan neon-glow transform scale-110' 
                  : 'text-gray-400 hover:text-neon-purple hover:scale-105'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs mt-1 font-medium">{tab.label}</span>
              {isActive && (
                <div className="w-full h-0.5 bg-neon-cyan mt-1 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;

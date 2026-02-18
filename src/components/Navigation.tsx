import React from 'react';
import { ViewState } from '../types';
import { Shield, University, BarChart3, Code, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: ViewState.HOME, label: 'Overview', icon: <Shield className="w-4 h-4 mr-2" /> },
    { id: ViewState.REGISTER, label: 'Registry Portal', icon: <Shield className="w-4 h-4 mr-2" /> },
    { id: ViewState.BANK_PORTAL, label: 'Bank Teller View', icon: <University className="w-4 h-4 mr-2" /> },
    { id: ViewState.IMPACT, label: 'Impact Analysis', icon: <BarChart3 className="w-4 h-4 mr-2" /> },
    { id: ViewState.TECH_SPECS, label: 'Technical Specs', icon: <Code className="w-4 h-4 mr-2" /> },
  ];

  return (
    <nav className="bg-slate-950/80 backdrop-blur-xl border-b border-white/5 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer group" onClick={() => setView(ViewState.HOME)}>
            <div className="flex-shrink-0 transition-transform group-hover:scale-105">
              <img src="/assets/bookscout_logo.png" alt="BookScout Logo" className="h-12 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex flex-col justify-center">
                <span className="font-bold text-lg tracking-tight uppercase bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">BookScout</span>
                <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-[0.2em]">Security Protocol</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center transition-all duration-300 ${currentView === item.id
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/5 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold flex items-center transition-all ${currentView === item.id
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

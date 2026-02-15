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
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setView(ViewState.HOME)}>
            <div className="flex-shrink-0">
              <Shield className="h-8 w-8 text-blue-400" />
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-baseline">
                <span className="font-bold text-xl tracking-tight">VFER</span>
                <span className="ml-2 text-slate-400 text-sm">Canada</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                    currentView === item.id
                      ? 'bg-slate-800 text-blue-400'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center ${
                  currentView === item.id
                    ? 'bg-slate-800 text-blue-400'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

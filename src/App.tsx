import React, { useState } from 'react';
import { ViewState, UserProfile } from './types';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { RegistryForm } from './components/RegistryForm';
import { BankTellerView } from './components/BankTellerView';
import { ImpactCharts } from './components/ImpactCharts';
import { TechSpecs } from './components/TechSpecs';

function App() {
  const [currentView, setView] = useState<ViewState>(ViewState.HOME);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleRegister = (profile: UserProfile) => {
    setUserProfile(profile);
  };

  const renderContent = () => {
    switch (currentView) {
      case ViewState.HOME:
        return <Hero onRegister={() => setView(ViewState.REGISTER)} />;
      case ViewState.REGISTER:
        return <RegistryForm onSave={handleRegister} existingProfile={userProfile || undefined} />;
      case ViewState.BANK_PORTAL:
        return <BankTellerView userProfile={userProfile} />;
      case ViewState.IMPACT:
        return <ImpactCharts />;
      case ViewState.TECH_SPECS:
        return <TechSpecs />;
      default:
        return <Hero onRegister={() => setView(ViewState.REGISTER)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navigation currentView={currentView} setView={setView} />

      <main className="pb-12">
        {renderContent()}
      </main>

      <footer className="bg-slate-950 text-slate-400 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <img src="/assets/bookscout_logo.png" alt="BookScout Logo" className="h-16 w-auto mb-8 opacity-90" />
              <p className="text-lg font-medium leading-relaxed max-w-sm">
                The national protocol for physical identity verification and sovereign wealth protection.
              </p>
            </div>
            <div>
              <h3 className="text-white text-sm font-black uppercase tracking-widest mb-6">Legislative Alignment</h3>
              <ul className="text-sm space-y-4 font-bold">
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Bill C-69 (Open Banking)</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">PCMLTFA Compliance</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Criminal Code s. 402.2</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">PCTF Framework</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-black uppercase tracking-widest mb-6">Support</h3>
              <div className="space-y-4">
                <p className="text-2xl font-black text-white">1-800-SAFE-CAN</p>
                <p className="text-emerald-400 font-bold">support@bookscout.help</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
            <p>&copy; 2026 BookScout Infrastructure. All Rights Reserved.</p>
            <p>Sovereign Capital Strategy NI 45-110</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
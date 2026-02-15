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

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 className="text-white text-lg font-bold mb-4">VFER Canada</h3>
                <p className="text-sm">
                    Protecting Canadians from financial fraud through voluntary exclusion protocols and mandatory in-person verification.
                </p>
            </div>
            <div>
                <h3 className="text-white text-lg font-bold mb-4">Legislative Alignment</h3>
                <ul className="text-sm space-y-2">
                    <li>Consumer-Driven Banking Act (Bill C-69)</li>
                    <li>PCMLTFA (Sections 6 & 7)</li>
                    <li>Criminal Code (Identity Theft s. 402.2)</li>
                    <li>Pan-Canadian Trust Framework (PCTF)</li>
                </ul>
            </div>
            <div>
                 <h3 className="text-white text-lg font-bold mb-4">Support</h3>
                 <p className="text-sm mb-2">1-800-SAFE-CAN</p>
                 <p className="text-sm">support@vfer.ca</p>
            </div>
        </div>
        <div className="mt-8 text-center text-xs border-t border-slate-800 pt-8">
            &copy; 2026 Voluntary Financial Exclusion Registry Proposal. Mock-up.
        </div>
      </footer>
    </div>
  );
}

export default App;
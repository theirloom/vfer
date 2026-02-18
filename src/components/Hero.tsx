import React, { useEffect, useState } from 'react';
import { getSafetyAdvice } from '../services/geminiService';
import { CheckCircle, AlertTriangle, Lock, ShieldCheck, Zap, Bot, Users, TrendingUp, ChevronRight } from 'lucide-react';
import { PolicyModal } from './PolicyModal';

interface HeroProps {
  onRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  const [advice, setAdvice] = useState<string>('Loading safety tips...');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<{ title: string, content: React.ReactNode } | null>(null);

  useEffect(() => {
    getSafetyAdvice('financial fraud prevention for seniors').then(setAdvice);
  }, []);

  const openPolicy = (title: string, content: React.ReactNode) => {
    setSelectedPolicy({ title, content });
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      <PolicyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedPolicy?.title || ''}
        content={selectedPolicy?.content}
      />

      {/* Hero Section: The Core Registry */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-48 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm font-bold uppercase tracking-widest backdrop-blur-md animate-pulse">
                <ShieldCheck className="w-5 h-5 mr-2" />
                SECURITY PROTOCOL: ACTIVE
              </div>

              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-[0.9]">
                Defend Your <br />
                <span className="text-emerald-500">Identity.</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Lock the Vault.</span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-xl">
                BookScout provides a sovereign physical circuit-breaker to protect your life savings from AI-generated fraud and synthetic identity attacks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={onRegister}
                  className="group relative px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] active:scale-95 text-xl flex items-center justify-center overflow-hidden"
                >
                  <span className="relative z-10">Secure Your ID</span>
                  <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>
                <button
                  className="px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-2xl transition-all border border-white/10 text-xl"
                >
                  View 2026 Data
                </button>
              </div>
            </div>

            <div className="mt-24 lg:mt-0 relative h-[500px] flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[600px] h-full">
                {/* Layer 2: Middle (The Core Action) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] z-20 transition-transform duration-700 hover:scale-105">
                  <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900 ring-1 ring-white/10">
                    <img src="/assets/in_person_verification.png" alt="ID Verification" className="w-full h-64 object-cover" />
                    <div className="p-4 bg-slate-950/90 backdrop-blur-md">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">TERMINAL V4.0</p>
                      <div className="flex items-center justify-between">
                        <p className="text-white font-bold text-xs">PHYSICAL HANDSHAKE REQUIRED</p>
                        <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 1: Top Left (System Status) */}
                <div className="absolute top-0 left-0 w-64 z-30 transition-all duration-700 hover:-translate-y-2">
                  <div className="rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-slate-900/90 backdrop-blur-xl p-5 ring-1 ring-emerald-500/20">
                    <img src="/assets/shield_dashboard.png" className="w-full h-auto rounded-lg opacity-90 mb-4" />
                    <div className="space-y-2">
                      <p className="text-emerald-400 font-black text-[10px] uppercase tracking-widest">SYSTEM OK</p>
                      <p className="text-slate-400 text-[10px] font-medium leading-tight">Biometric bridge integrity verified via PCTF protocol.</p>
                      <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[85%] animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 3: Bottom Right (Threat Alert) */}
                <div className="absolute bottom-0 right-0 w-72 z-10 transition-all duration-700 hover:translate-x-2">
                  <div className="rounded-2xl overflow-hidden border border-red-500/30 shadow-2xl bg-slate-950/90 backdrop-blur-xl ring-1 ring-red-500/20">
                    <div className="relative">
                      <img src="/assets/fragmented_person.jpg" className="w-full h-auto opacity-60 grayscale" />
                      <div className="absolute inset-0 bg-red-500/10"></div>
                    </div>
                    <div className="p-4 space-y-2">
                      <p className="text-white font-black text-[10px] uppercase tracking-widest">THREAT VECTOR</p>
                      <p className="text-red-500 text-[10px] font-black uppercase tracking-widest animate-pulse">SYNTHETIC CLUSTERING DETECTED</p>
                    </div>
                  </div>
                </div>

                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Physical Bridge (Handshake) */}
      <section className="py-32 relative bg-slate-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="relative rounded-[40px] overflow-hidden border border-emerald-500/20 shadow-2xl bg-slate-900">
                <img src="/assets/in_person_verification.png" alt="In-Person Verification Handshake" className="w-full h-auto opacity-100 transition-transform duration-[3000ms] group-hover:scale-105" />

                {/* Handshake HUD Overlay */}
                <div className="absolute inset-0 bg-emerald-500/10 pointer-events-none group-hover:bg-emerald-500/0 transition-colors duration-700"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 border-2 border-dashed border-emerald-500/50 rounded-full animate-spin-slow flex items-center justify-center">
                    <div className="w-16 h-16 border border-emerald-400 rounded-full animate-pulse flex items-center justify-center">
                      <Lock className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 p-4 bg-emerald-950/80 backdrop-blur-md rounded-[20px] border border-emerald-500/30">
                  <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Session Protocol</p>
                  <p className="text-white text-xs font-bold">PHYSICAL HANDSHAKE REQUIRED</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8 mb-16 lg:mb-0">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                The Physical <br />
                <span className="text-emerald-500">Circuit-Breaker.</span>
              </h2>
              <p className="text-xl text-slate-400 font-medium">
                Because an AI voice clone cannot walk into a branch. Because a synthetic identity doesn't have a biological fingerprint. BookScout mandates the branch-visit for high-risk protocols.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <h4 className="text-white font-black text-lg mb-2">IAL3 Verification</h4>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Pan-Canadian Trust</p>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <h4 className="text-white font-black text-lg mb-2">Zero-Trust HW</h4>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">In-Branch Terminals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Section 3: The Threat Analysis */}
      <section className="py-32 relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.05),transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-sm font-black uppercase tracking-widest">
                Threat Alert: Identity Fragmentation
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Synthetic Identities <br />
                <span className="text-red-500">Are Everywhere.</span>
              </h2>
              <p className="text-xl text-slate-400 font-medium">
                Over 25% of fraud losses now stem from identities created by mixing real and fabricated data. Digital systems see a valid consumer. BookScout sees a void that requires a physical human to fill.
              </p>
              <div className="flex space-x-4">
                <div className="h-2 w-2 bg-red-500 rounded-full animate-ping"></div>
                <p className="text-red-400 font-mono text-sm leading-none">ANALYZING FRAUD CLUSTERS...</p>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 relative group">
              <div className="relative rounded-[40px] overflow-hidden border border-red-500/20 grayscale hover:grayscale-0 transition-all duration-1000">
                <img src="/assets/fragmented_person.jpg" alt="Identity Fragmentation Threat" className="w-full h-auto opacity-80" />

                {/* Threat Analysis Glitch Overlay */}
                <div className="absolute inset-0 bg-red-950/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute top-8 left-8 p-6 bg-slate-950/80 backdrop-blur-xl border-l-4 border-red-500 rounded-r-2xl">
                  <p className="text-red-500 font-black text-xs uppercase tracking-[0.3em] mb-2">Target Profile</p>
                  <p className="text-white font-mono text-[10px] leading-relaxed">
                    ID_FRAG_ID: 9X-212 // PROBABILITY_SYNTHETIC: 94.2% <br />
                    CREDIT_HISTORY: CULTIVATED // ALERT: BUST-OUT_VALUATION
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Feature Cards / Safety Advice */}
      <div className="w-full bg-slate-950 border-t border-white/5 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="inline-flex items-center px-6 py-4 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 font-bold italic text-lg shadow-[0_0_40px_rgba(16,185,129,0.1)]">
              "{advice}"
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <FeatureCard
                icon={<Bot className="w-10 h-10 text-emerald-400" />}
                title="Synthetic Zero"
                desc="Physical verification kills synthetic identities instantly."
                accent="emerald"
                onClick={() => openPolicy('Synthetic Zero', 'Details on synthetic identity neutralisation')}
              />
              <FeatureCard
                icon={<Users className="w-10 h-10 text-cyan-400" />}
                title="Legacy Guard"
                desc="Specialized protocols for senior wealth protection."
                accent="cyan"
                onClick={() => openPolicy('Legacy Guard', 'Detailed protocols for family office protection')}
              />
              <FeatureCard
                icon={<TrendingUp className="w-10 h-10 text-blue-400" />}
                title="National Trust"
                desc="A public protocol for the $1.25T fraud crisis."
                accent="blue"
                onClick={() => openPolicy('National Trust', 'Policy alignment with pan-canadian trust framework')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc, accent, onClick }: { icon: React.ReactNode, title: string, desc: string, accent: string, onClick: () => void }) => {
  const accentColors: any = {
    emerald: "hover:border-emerald-500/50 group-hover:bg-emerald-500/5",
    cyan: "hover:border-cyan-500/50 group-hover:bg-cyan-500/5",
    blue: "hover:border-blue-500/50 group-hover:bg-blue-500/5"
  };

  const iconAccents: any = {
    emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    blue: "bg-blue-500/10 border-blue-500/20 text-blue-400"
  };

  return (
    <div
      onClick={onClick}
      className={`bg-white/5 backdrop-blur-md p-10 rounded-[40px] border border-white/10 transition-all duration-500 cursor-pointer group ${accentColors[accent]}`}
    >
      <div className={`p-5 rounded-3xl w-fit mb-10 border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${iconAccents[accent]}`}>
        {icon}
      </div>
      <h3 className="text-3xl font-black text-white mb-6 flex items-center justify-between">
        {title} <ChevronRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
      </h3>
      <p className="text-lg text-slate-400 leading-relaxed font-bold">
        {desc}
      </p>
    </div>
  );
};
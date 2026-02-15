import React, { useEffect, useState } from 'react';
import { getSafetyAdvice } from '../services/geminiService';
import { CheckCircle, AlertTriangle, Lock, ShieldCheck, Zap, Bot, Users, TrendingUp } from 'lucide-react';

interface HeroProps {
  onRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  const [advice, setAdvice] = useState<string>('Loading safety tips...');

  useEffect(() => {
    getSafetyAdvice('financial fraud prevention for seniors').then(setAdvice);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-red-100 bg-red-50 text-red-700 text-xs font-semibold uppercase tracking-wide mb-4">
                <AlertTriangle className="w-4 h-4 mr-2" />
                4 in 5 Canadians Targeted
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Stop the</span>{' '}
                <span className="block text-blue-600 xl:inline">$111 Billion Surge</span>
                <span className="block text-2xl font-medium text-slate-500 mt-2">in Synthetic Identity Fraud</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                With <strong>Synthetic Identity Fraud</strong> accounting for over a quarter of losses, traditional detection is failing. VFER provides a mandatory physical circuit-breaker to protect your life savings from AI agents and remote scammers.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={onRegister}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg"
                  >
                    Secure Your ID
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg"
                  >
                    View 2026 Data
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-slate-50 flex items-center justify-center">
        <div className="p-8 max-w-md w-full">
          <div className="bg-white p-6 rounded-xl shadow-xl border border-slate-200 mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-emerald-100 rounded-full">
                <Lock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Security Insight</h3>
            </div>
            <div className="prose prose-sm text-slate-600">
              <p className="whitespace-pre-line">{advice}</p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Stop Financial Identity Theft <br />
              <span className="text-blue-600">Before It Happens</span>
            </h1>
            <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
              The Voluntary Financial Exclusion Registry (VFER) allows Canadians to proactively block credit applications and high-risk transactions in their name.
            </p>
            <p className="text-sm text-slate-500 mb-10 max-w-2xl mx-auto border-l-4 border-blue-200 pl-4 py-1 italic">
              "Canadians lost more than $638 million in reported fraud cases in 2024, although only 5-10% of cases are thought to be reported."
              <span className="block not-italic font-semibold mt-1">— Angus Reid Institute, 2026 (Source: RAG Knowledge Blob)</span>
            </p>     </div>
          <div className="grid grid-cols-1 gap-4">
            {/* Synthetic Identity Card */}
            <div className="flex items-center p-4 bg-indigo-50 rounded-lg shadow-sm border border-indigo-100 transition-all hover:shadow-md">
              <Bot className="w-8 h-8 text-indigo-500 mr-4 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Blocks Synthetic Identities</p>
                <p className="text-xs text-slate-500">
                  Synthetic ID fraud surged <strong>26%</strong> in 2025. Physical verification stops AI-generated profiles cold.
                </p>
              </div>
            </div>

            {/* Confidence Paradox Card */}
            <div className="flex items-center p-4 bg-amber-50 rounded-lg shadow-sm border border-amber-100 transition-all hover:shadow-md">
              <Users className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">The Confidence Paradox</p>
                <p className="text-xs text-slate-500">
                  89% of Canadians believe they can spot a scam, yet <strong>30%</strong> fall victim. Don't rely on luck—rely on VFER.
                </p>
              </div>
            </div>

            {/* Stats Card */}
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <TrendingUp className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Rising Threat Levels</p>
                <p className="text-xs text-slate-500">
                  Consumer reported losses topped <strong>$638M</strong> in 2024, but actual losses are estimated 20x higher.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
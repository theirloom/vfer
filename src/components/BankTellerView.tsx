import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { AlertOctagon, CheckCircle2, RefreshCw, FileText, User, WifiOff, ShieldAlert } from 'lucide-react';
import { explainRegulation } from '../services/geminiService';

interface BankTellerViewProps {
  userProfile: UserProfile | null;
}

/**
 * BankTellerView Component
 * 
 * Simulates the interface a bank employee would see when processing a transaction.
 * It demonstrates the integration of the VFER API check into the workflow.
 */
export const BankTellerView: React.FC<BankTellerViewProps> = ({ userProfile }) => {
  const [amount, setAmount] = useState<number>(0);
  const [transactionState, setTransactionState] = useState<'IDLE' | 'PROCESSING' | 'APPROVED' | 'BLOCKED' | 'ERROR'>('IDLE');
  const [regulationExplanation, setRegulationExplanation] = useState<string>('');
  const [systemError, setSystemError] = useState<string>('');

  /**
   * Simulates the transaction processing flow.
   * 
   * @performance In a production environment, this would trigger a serverless function call.
   * The goal latency is <50ms to ensure no disruption to Point-of-Sale or Teller workflows.
   */
  const handleProcess = () => {
    setTransactionState('PROCESSING');
    setSystemError('');
    
    // Artificial delay to mimic network latency and allow user to see the "Processing" state.
    setTimeout(() => {
      // Simulate random network/API error (10% chance) to demonstrate reliability handling
      if (Math.random() < 0.1) {
        setTransactionState('ERROR');
        setSystemError('Connection Timeout: The VFER secure registry is currently unreachable. Please retry the transaction.');
        return;
      }

      // 1. Check if user exists in the registry (Simulating API lookup by Hash)
      if (!userProfile) {
        setTransactionState('APPROVED'); // Default behavior: Allow if no registry hit (Fail-open or Fail-close depends on policy)
        return;
      }

      // 2. Validate Transaction Amount against User Threshold
      if (amount > userProfile.threshold) {
        setTransactionState('BLOCKED');
        
        // Dynamically fetch explanation for the specific regulation triggered
        explainRegulation("PCMLTFA Mandatory In-Person KYC for high value transactions").then(setRegulationExplanation);
      } else {
        setTransactionState('APPROVED');
      }
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Teller Input */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden h-fit">
          <div className="bg-slate-800 px-6 py-4 border-b border-slate-700">
            <h2 className="text-lg font-semibold text-white flex items-center">
              <RefreshCw className="w-5 h-5 mr-2 text-blue-400" />
              Transaction Processor
            </h2>
          </div>
          <div className="p-6 space-y-4">
             {/* Customer Status Indicator */}
             <div>
                <label className="block text-xs font-uppercase tracking-wide text-slate-500 font-bold mb-1">Customer Status</label>
                {userProfile ? (
                    <div className="flex items-center text-emerald-600 bg-emerald-50 px-3 py-2 rounded-md border border-emerald-100">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                        <span className="font-mono text-sm">REGISTRY_ACTIVE</span>
                    </div>
                ) : (
                    <div className="flex items-center text-slate-500 bg-slate-50 px-3 py-2 rounded-md border border-slate-200">
                        <span className="w-2 h-2 rounded-full bg-slate-400 mr-2"></span>
                        <span className="font-mono text-sm">NO_RECORD_FOUND</span>
                    </div>
                )}
             </div>

             {/* Amount Input */}
             <div>
                <label className="block text-xs font-uppercase tracking-wide text-slate-500 font-bold mb-1">Transaction Amount ($CAD)</label>
                <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="0.00"
                />
             </div>

             <button 
                onClick={handleProcess}
                disabled={transactionState === 'PROCESSING'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors disabled:opacity-50"
            >
                {transactionState === 'PROCESSING' ? 'Verifying against VFER...' : 'Process Transaction'}
             </button>
          </div>
        </div>

        {/* Right Col: System Response */}
        <div className="lg:col-span-2">
            {transactionState === 'IDLE' && (
                <div className="h-full flex flex-col items-center justify-center bg-slate-50 rounded-xl border-2 border-dashed border-slate-300 min-h-[400px]">
                    <p className="text-slate-400">Ready to process transaction</p>
                </div>
            )}

            {transactionState === 'PROCESSING' && (
                <div className="h-full flex flex-col items-center justify-center bg-white rounded-xl shadow-lg border border-slate-200 min-h-[400px]">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
                    <p className="text-slate-600 font-medium">Querying VFER Database...</p>
                </div>
            )}

            {transactionState === 'ERROR' && (
                <div className="h-full flex flex-col items-center justify-center bg-white rounded-xl shadow-lg border-l-8 border-amber-500 min-h-[400px] p-8">
                    <div className="bg-amber-100 p-4 rounded-full mb-6">
                        <WifiOff className="w-16 h-16 text-amber-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">System Unavailable</h2>
                    <p className="text-slate-600 text-lg text-center mb-6 max-w-lg">{systemError}</p>
                    <button 
                        onClick={handleProcess}
                        className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-8 rounded-full transition-colors shadow-md hover:shadow-lg"
                    >
                        Retry Connection
                    </button>
                </div>
            )}

            {transactionState === 'APPROVED' && (
                <div className="h-full flex flex-col items-center justify-center bg-white rounded-xl shadow-lg border-l-8 border-emerald-500 min-h-[400px] p-8">
                    <div className="bg-emerald-100 p-4 rounded-full mb-6">
                        <CheckCircle2 className="w-16 h-16 text-emerald-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Transaction Approved</h2>
                    <p className="text-slate-600 text-lg">No restrictions found for this amount.</p>
                </div>
            )}

            {transactionState === 'BLOCKED' && (
                <div className="h-full bg-white rounded-xl shadow-lg border-l-8 border-red-600 min-h-[400px] p-8">
                    <div className="flex items-start">
                        <div className="bg-red-100 p-4 rounded-full mr-6 flex-shrink-0">
                            <AlertOctagon className="w-12 h-12 text-red-600" />
                        </div>
                        <div className="w-full">
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">TRANSACTION BLOCKED</h2>
                            <p className="text-xl font-semibold text-red-600 mb-4">Mandatory In-Person KYC Required</p>
                            
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-6">
                                <div className="flex items-center mb-3">
                                    <ShieldAlert className="w-5 h-5 text-slate-600 mr-2" />
                                    <h4 className="font-bold text-slate-800">PCMLTFA Override Protocol (S.6 & S.7)</h4>
                                </div>
                                <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
                                    <li><strong>Physical Presence:</strong> Transaction must be completed at a physical branch.</li>
                                    <li><strong>Government ID:</strong> Verify authentic, valid, and current government-issued photo ID.</li>
                                    <li><strong>Liveness Check:</strong> Ensure customer matches photo ID (Anti-Synthetic Identity measure).</li>
                                    <li><strong>Record Keeping:</strong> Retain verification records for 5 years.</li>
                                </ul>
                            </div>

                            {/* KYC Details Simulation */}
                            <div className="mt-6 border-t border-slate-200 pt-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                                    <FileText className="w-5 h-5 mr-2 text-slate-500" />
                                    Required Verification Data
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Document Type Field */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Document Type Provided</label>
                                        <select className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                            <option>Canadian Passport</option>
                                            <option>Driver's License</option>
                                            <option>Provincial Photo ID</option>
                                            <option>Secure Cert. of Indian Status</option>
                                        </select>
                                    </div>
                                    
                                    {/* Document Number Field */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Document Number</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                                            placeholder="e.g. A1234567" 
                                        />
                                    </div>

                                    {/* Verification Officer Field (Simulated Auto-fill) */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Verification Officer</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <User className="h-4 w-4 text-slate-400" />
                                            </div>
                                            <input 
                                                type="text" 
                                                className="w-full pl-9 px-3 py-2 border border-slate-300 rounded-md text-sm bg-slate-50 text-slate-600 cursor-not-allowed" 
                                                value="TELLER-ID-8842 (You)" 
                                                readOnly 
                                            />
                                        </div>
                                    </div>

                                    {/* Branch Location Field (Simulated Auto-fill) */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Physical Branch Code</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm bg-slate-50 text-slate-600 cursor-not-allowed" 
                                            value="BR-TOR-001" 
                                            readOnly 
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button className="w-full bg-slate-800 text-white py-3 rounded-md text-sm font-bold hover:bg-slate-900 transition-colors shadow-sm">
                                        Submit Verified KYC Override
                                    </button>
                                </div>
                            </div>

                            {/* Dynamic explanation sourced from Gemini */}
                            {regulationExplanation && (
                                <div className="mt-6 text-sm text-slate-500 italic border-t pt-4">
                                    <span className="font-semibold not-italic">System Note:</span> {regulationExplanation}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </div>
      </div>
    </div>
  );
};
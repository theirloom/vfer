import React from 'react';
import { Server, Database, Globe, Lock, Cpu, DollarSign, Key, FileBadge } from 'lucide-react';

/**
 * TechSpecs Component
 * 
 * Visualizes the proposed system architecture.
 * Updates include references to:
 * 1. Pan-Canadian Trust Framework (PCTF)
 * 2. Bill C-69 (Consumer-Driven Banking)
 * 3. DIACC Certification
 */
export const TechSpecs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900">Technical Framework</h2>
        <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto">
            Built on the <strong>Pan-Canadian Trust Framework (PCTF)</strong> to ensure interoperability with the new Consumer-Driven Banking ecosystem.
        </p>
      </div>

      <div className="relative mb-12">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-200" />
        </div>
        <div className="relative flex justify-center">
            <span className="bg-slate-50 px-3 text-lg font-medium text-slate-900">Core Architecture</span>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Cost Efficiency */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                        <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-slate-900">Low-Cost Operations</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                    Utilizing <strong>Serverless Compute</strong> (AWS Lambda / Google Cloud Functions) to minimize idle costs, critical for a public utility model.
                </p>
                <div className="bg-slate-50 rounded-md p-3 border border-slate-200">
                    <div className="flex justify-between text-xs font-mono text-slate-600 mb-1">
                        <span>Idle Cost:</span>
                        <span className="font-bold text-green-600">$0.00/hr</span>
                    </div>
                     <div className="flex justify-between text-xs font-mono text-slate-600">
                        <span>Lookup Cost:</span>
                        <span className="font-bold text-green-600">~$0.0000002</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Security / Federated Identity */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className="p-2 bg-red-100 rounded-lg">
                        <Key className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-slate-900">PCTF Compliant</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                   Aligned with <strong>DIACC</strong> standards and the <strong>Pan-Canadian Trust Framework</strong>. No PII storage; relies on federated OIDC/SAML 2.0.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded-full border border-red-100">PCTF Level 2</span>
                    <span className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded-full border border-red-100">DIACC</span>
                    <span className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded-full border border-red-100">OIDC</span>
                </div>
            </div>
        </div>

        {/* API Architecture */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                        <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-slate-900">Open Banking Ready</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                    API design compatible with the <strong>Consumer-Driven Banking Act (Bill C-69)</strong>, enabling seamless integration with Fintechs and Schedule I Banks.
                </p>
                <div className="bg-slate-900 rounded-md p-3">
                    <code className="text-xs text-green-400 font-mono">
                        POST /v1/registry/check<br/>
                        X-FSCP-Token: [Verified_Hash]
                    </code>
                </div>
            </div>
        </div>

        {/* Database */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className="p-2 bg-amber-100 rounded-lg">
                        <Database className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-slate-900">Privacy-First Data</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                    We store <strong>SHA-256 hashes</strong> of Government IDs, not the IDs themselves. This limits liability under PIPEDA and the Privacy Act.
                </p>
                <div className="space-y-2">
                    <div className="border border-slate-200 rounded p-2 bg-slate-50">
                        <h4 className="text-xs font-bold text-slate-700 uppercase mb-1">Registry Table</h4>
                        <div className="grid grid-cols-1 gap-1 text-xs text-slate-500 font-mono">
                            <div>user_hash: string (PK)</div>
                            <div>threshold_limit: decimal</div>
                            <div>active_status: boolean</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Backend Infrastructure */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                        <Cpu className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-slate-900">AI Resilience</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                   Infrastructure designed to withstand automated bot attacks (Credential Stuffing) via rate-limiting and behavioral WAF rules.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Anti-Automation WAF</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Managed Kubernetes (EKS)</li>
                </ul>
            </div>
        </div>

        {/* Communication */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                        <Lock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-slate-900">Secure Transport</h3>
                </div>
                <p className="text-slate-600 text-sm">
                    Mutual TLS (mTLS) required for all institutional connections, ensuring only authorized financial entities can query the registry.
                </p>
                 <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>TLS 1.3 Strict</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>Certificate Pinning</li>
                </ul>
            </div>
        </div>

      </div>
    </div>
  );
};
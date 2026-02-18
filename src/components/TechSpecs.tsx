import React, { useState } from 'react';
import { Server, Database, Globe, Lock, Cpu, DollarSign, Key, FileBadge, Shield, Wallet, ChevronRight } from 'lucide-react';
import { PolicyModal } from './PolicyModal';

/**
 * TechSpecs Component
 * 
 * Visualizes the proposed system architecture.
 * Updates include references to:
 * 1. Pan-Canadian Trust Framework (PCTF)
 * 2. Bill C-69 (Consumer-Driven Banking)
 * 3. DIACC Certification
 * 4. Zero-Knowledge Proofs (Roadmap)
 * 5. Sovereign Capital Strategy
 */
export const TechSpecs: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPolicy, setSelectedPolicy] = useState<{ title: string, content: React.ReactNode } | null>(null);

    const openPolicy = (title: string, content: React.ReactNode) => {
        setSelectedPolicy({ title, content });
        setModalOpen(true);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-12">
            <PolicyModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title={selectedPolicy?.title || ''}
                content={selectedPolicy?.content}
            />

            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-slate-900">Technical Framework & Roadmap</h2>
                <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto">
                    Built on the <strong>Pan-Canadian Trust Framework (PCTF)</strong> with a roadmap towards Zero-Knowledge Proofs for absolute privacy.
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
                <div
                    onClick={() => openPolicy('PCTF & DIACC Alignment', (
                        <div className="space-y-4">
                            <p><strong>Trust Framework:</strong> BookScout is designed to meet <strong>Identity Assurance Level 3 (IAL3)</strong> of the Pan-Canadian Trust Framework. This requires strictly verified identity attributes, which is why we mandate in-person verification.</p>
                            <p><strong>Federated Identity:</strong> We do not act as the sole identity provider. We leverage OIDC/SAML 2.0 to accept identities from trusted issuers (Banks, Provinces), minimizing our data liability.</p>
                        </div>
                    ))}
                    className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
                >
                    <div className="p-6">
                        <div className="flex items-center mb-4 justify-between">
                            <div className="flex items-center">
                                <div className="p-2 bg-red-100 rounded-lg">
                                    <Key className="h-6 w-6 text-red-600" />
                                </div>
                                <h3 className="ml-3 text-lg font-medium text-slate-900 group-hover:text-red-700">PCTF Compliant</h3>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-red-500" />
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
                <div
                    onClick={() => openPolicy('Consumer-Driven Banking (Bill C-69)', (
                        <div className="space-y-4">
                            <p><strong>Legislative Mandate:</strong> Bill C-69 enshrines the right of consumers to securely move their financial data. BookScout extends this right to <em>restrict</em> data movement.</p>
                            <p><strong>Interoperability:</strong> Our API follows the FDX (Financial Data Exchange) technical standards endorsed by the government for Open Banking, ensuring seamless integration with Schedule I Banks.</p>
                        </div>
                    ))}
                    className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
                >
                    <div className="p-6">
                        <div className="flex items-center mb-4 justify-between">
                            <div className="flex items-center">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Globe className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="ml-3 text-lg font-medium text-slate-900 group-hover:text-blue-700">Open Banking Ready</h3>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500" />
                        </div>
                        <p className="text-slate-600 text-sm mb-4">
                            API design compatible with the <strong>Consumer-Driven Banking Act (Bill C-69)</strong>, enabling seamless integration with Fintechs and Schedule I Banks.
                        </p>
                        <div className="bg-slate-900 rounded-md p-3">
                            <code className="text-xs text-green-400 font-mono">
                                POST /v1/registry/check<br />
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

                {/* ZKP Roadmap */}
                <div
                    onClick={() => openPolicy('Zero-Knowledge Proofs (ZKP)', (
                        <div className="space-y-4">
                            <p><strong>The Next Step:</strong> Current hashing is secure, but ZKP is the gold standard. We are developing a ZKP architecture where a bank can ask "Is this user excluded?" and receive a mathematically proven "Yes/No" without the registry <em>ever</em> knowing the user's identity.</p>
                            <p><strong>IRAP & SR&ED:</strong> This R&D component is central to our Canadian grant strategy, qualifying us for non-dilutive funding to build deeply sovereign tech.</p>
                            <p><em>Status: Research Phase.</em></p>
                        </div>
                    ))}
                    className="cursor-pointer bg-slate-900 rounded-lg shadow-lg overflow-hidden border border-slate-700 hover:shadow-2xl transition-shadow duration-300 group ring-2 ring-purple-500/20 relative"
                >
                    <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-bl-lg">
                        Roadmap
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-4 justify-between">
                            <div className="flex items-center">
                                <div className="p-2 bg-purple-900 rounded-lg">
                                    <Shield className="h-6 w-6 text-purple-400" />
                                </div>
                                <h3 className="ml-3 text-lg font-medium text-white group-hover:text-purple-300">Zero-Knowledge Proofs</h3>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400" />
                        </div>
                        <p className="text-slate-400 text-sm mb-4">
                            Moving beyond hashing to <strong>ZKP architecture</strong>. Verify exclusion status without ever revealing the underlying identity to the registry.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Mathematical Privacy</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>SR&ED Eligible R&D</li>
                        </ul>
                    </div>
                </div>

                {/* Sovereign Capital */}
                <div
                    onClick={() => openPolicy('Sovereign Capital Strategy', (
                        <div className="space-y-4">
                            <p><strong>The Model:</strong> We reject "Vulture Capital" that demands data monetization. BookScout is funded by a <strong>Hybrid Corporate Structure</strong>: a Non-Profit Foundation for governance and a C-Corp for technology.</p>
                            <p><strong>Equity Crowdfunding:</strong> Using <strong>NI 45-110</strong>, we are raising capital directly from Canadians. This turns our users into owners, ensuring the platform stays true to its mission of protection, not profit.</p>
                            <p><strong>Partners:</strong> Campaign launching soon via <strong>FrontFundr</strong>.</p>
                        </div>
                    ))}
                    className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
                >
                    <div className="p-6">
                        <div className="flex items-center mb-4 justify-between">
                            <div className="flex items-center">
                                <div className="p-2 bg-emerald-100 rounded-lg">
                                    <Wallet className="h-6 w-6 text-emerald-600" />
                                </div>
                                <h3 className="ml-3 text-lg font-medium text-slate-900 group-hover:text-emerald-700">Sovereign Capital</h3>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500" />
                        </div>
                        <p className="text-slate-600 text-sm">
                            Funded by users, not data brokers. We utilize <strong>NI 45-110 Equity Crowdfunding</strong> to maintain founder and community control.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-600">
                            <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>FrontFundr Campaign</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>User-Owner Model</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};
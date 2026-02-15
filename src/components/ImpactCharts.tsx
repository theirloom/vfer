import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Bot, AlertTriangle, EyeOff } from 'lucide-react';

/**
 * ImpactCharts Component
 * 
 * Visualizes the projected economic and social impact of the VFER system.
 * Data sources updated with 2025/2026 Reports:
 * 1. TransUnion 2025 Fraud Trends (CAD $111B business losses).
 * 2. Canadian Anti-Fraud Centre 2024 ($638M reported vs est. actual).
 * 3. Leger Poll 2026 (The Confidence Paradox).
 */
export const ImpactCharts: React.FC = () => {
  
  // Data: The Reporting Gap
  // CAFC estimates only 5-10% of fraud is reported.
  // Reported: $638M. Estimated Actual (at 5% reporting): ~$12.7B.
  const reportingGapData = [
    { name: 'Officially Reported', amount: 638, label: '$638 Million' },
    { name: 'Est. Unreported', amount: 12122, label: '~$12.1 Billion' },
  ];

  // Data: Business Loss Composition (TransUnion 2025)
  // Total: $111 Billion. Synthetic ID is 26%. Scams 29%.
  const fraudTypeData = [
    { name: 'Synthetic Identity', value: 26 },
    { name: 'Scams/Deception', value: 29 },
    { name: 'Account Takeover', value: 16 },
    { name: 'First-Party Fraud', value: 15 },
    { name: 'Other', value: 14 },
  ];

  // Data: Cost Comparison (Log Scale)
  const costComparisonData = [
    { type: 'VFER API Check', cost: 0.0005, description: 'Serverless Lookup' },
    { type: 'Manual Review', cost: 45.00, description: 'Human KYC Agent' },
    { type: 'Avg. Fraud Loss', cost: 4200.00, description: 'Per Victim Average' },
  ];

  const COLORS = ['#EF4444', '#F59E0B', '#3B82F6', '#10B981', '#6366F1'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">The $111 Billion Problem</h2>
        <p className="mt-2 text-lg text-slate-600">
            Analyzing the gap between perceived safety and the reality of AI-driven fraud in 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        
        {/* Card 1: The Reporting Iceberg */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-2">The Reporting Iceberg</h3>
            <p className="text-sm text-slate-500 mb-4">
                In 2024, Canadians reported $638M in losses. With only ~5% of victims reporting, the true economic drain is staggering.
            </p>
            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={reportingGapData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(val) => `$${val/1000}B`} />
                        <Tooltip 
                            formatter={(value: number) => [`$${value.toLocaleString()} M`, 'Amount']}
                            contentStyle={{ borderRadius: '8px' }}
                        />
                        <Bar dataKey="amount" fill="#3B82F6" radius={[4, 4, 0, 0]}>
                            {
                                reportingGapData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 0 ? '#3B82F6' : '#94A3B8'} />
                                ))
                            }
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Card 2: Synthetic Identity Surge */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Synthetic Fraud Surge (2025)</h3>
            <p className="text-sm text-slate-500 mb-4">
                Synthetic IDs (fake personas created by AI) now account for <strong>26%</strong> of the $111B lost by Canadian businesses.
            </p>
            <div className="h-80 w-full flex items-center justify-center">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie
                        data={fraudTypeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                    >
                        {fraudTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend verticalAlign="bottom" height={36}/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>

      {/* The Confidence Paradox Section */}
      <div className="bg-slate-900 rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-blue-500 p-2 rounded-lg">
                        <EyeOff className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">The "Confidence Paradox"</h3>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">
                      A 2026 Leger poll revealed that <strong>89%</strong> of Canadians believe they can spot a scam. Yet, <strong>30%</strong> report having money or info stolen. This gap between confidence and reality is where AI agents thrive.
                  </p>
                  <p className="text-slate-400 mt-4 text-sm">
                      * Source: Leger Poll / Canadian Press, Feb 2026.
                  </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                  <div className="text-5xl font-extrabold text-white mb-2">30%</div>
                  <div className="text-blue-400 font-medium">Victimization Rate</div>
                  <div className="w-full h-1 bg-slate-700 mt-4 mb-4 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '30%' }}></div>
                  </div>
                  <p className="text-xs text-slate-400">
                      Almost 1 in 3 Canadians have been compromised.
                  </p>
              </div>
          </div>
      </div>

      {/* AI Risk Context */}
      <div className="bg-slate-50 border-l-4 border-indigo-500 p-6 rounded-r-lg shadow-sm">
        <h4 className="text-lg font-bold text-slate-900 flex items-center mb-2">
            <Bot className="w-6 h-6 mr-2 text-indigo-600" />
            AI: The Multiplier Effect
        </h4>
        <p className="text-slate-700 leading-relaxed">
            With <strong>Generative AI</strong> capable of creating flawless documents and deepfake voice clones, remote verification (OCR/Selfie) is becoming insufficient. VFER re-introduces the one factor AI cannot forge: <strong>Physical Presence</strong>.
        </p>
      </div>

    </div>
  );
};
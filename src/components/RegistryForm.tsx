import React, { useState } from 'react';
import { UserProfile } from '../types';
import { UserCheck, ShieldCheck, AlertCircle, XCircle } from 'lucide-react';

interface RegistryFormProps {
  onSave: (profile: UserProfile) => void;
  existingProfile?: UserProfile;
}

/**
 * RegistryForm Component
 * 
 * Handles the enrollment of a user into the Voluntary Financial Exclusion Registry.
 * 
 * @security design-choice:
 * In a real-world implementation, this form would not simply generate a random ID.
 * It would integrate with a Federated Identity Provider (e.g., Verified.Me, BankID)
 * via OpenID Connect (OIDC). The resulting user identifier would be a cryptographic
 * hash, ensuring that the central registry holds NO Personally Identifiable Information (PII),
 * only the hash and the threshold preferences.
 */
export const RegistryForm: React.FC<RegistryFormProps> = ({ onSave, existingProfile }) => {
  const [formData, setFormData] = useState({
    fullName: existingProfile?.fullName || '',
    threshold: existingProfile?.threshold || 1000,
    confirm: false,
  });
  const [errors, setErrors] = useState<{ fullName?: string; threshold?: string }>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: { fullName?: string; threshold?: string } = {};
    let isValid = true;

    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full legal name is required and cannot be empty.';
      isValid = false;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full legal name must be at least 2 characters.';
      isValid = false;
    } else if (!/^[a-zA-Z\s\-\.]+$/.test(formData.fullName)) {
        newErrors.fullName = 'Name contains invalid characters. Use letters, spaces, hyphens, or periods.';
        isValid = false;
    }

    // Validate Threshold
    if (formData.threshold === undefined || formData.threshold === null || formData.threshold.toString() === '') {
        newErrors.threshold = 'Threshold amount is required.';
        isValid = false;
    } else if (Number(formData.threshold) < 0) {
      newErrors.threshold = 'Threshold must be a non-negative number.';
      isValid = false;
    } else if (isNaN(Number(formData.threshold))) {
       newErrors.threshold = 'Threshold must be a valid number.';
       isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
        setFormError("Unable to submit. Please correct the errors highlighted below.");
    } else {
        setFormError(null);
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    // Simulate generation of a secure, hashed identifier.
    // In production: sha256(government_id + salt)
    const simulatedHash = `0x${Math.random().toString(16).substr(2, 9)}...${Math.random().toString(16).substr(2, 4)}`;

    const newProfile: UserProfile = {
      id: simulatedHash, 
      fullName: formData.fullName.trim(), // Store trimmed value
      threshold: Number(formData.threshold),
      isActive: true,
      registeredAt: new Date().toISOString(),
    };

    onSave(newProfile);
    setIsSubmitted(true);
  };

  // Render Success State
  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg text-center border-t-4 border-emerald-500">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 mb-6">
          <ShieldCheck className="h-10 w-10 text-emerald-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Registration Complete</h2>
        <p className="text-slate-600 mb-6">
          Your account is now protected. Any remote transaction exceeding <span className="font-bold text-slate-900">${formData.threshold}</span> will automatically trigger a mandatory in-person identity verification.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Manage Settings
        </button>
      </div>
    );
  }

  // Render Form State
  return (
    <div className="max-w-3xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-8 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Registry Enrollment</h2>
              <p className="text-sm text-slate-500 mt-1">Set your protection parameters under the VFER framework.</p>
            </div>
            <UserCheck className="w-10 h-10 text-slate-400" />
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Global Error Message */}
          {formError && (
              <div className="rounded-md bg-red-50 p-4 border border-red-200 flex items-start animate-pulse">
                  <XCircle className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="text-sm text-red-700">
                      <h3 className="font-bold">Submission Error</h3>
                      <p className="mt-1">{formError}</p>
                  </div>
              </div>
          )}

          {/* Full Name Input */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-bold text-slate-800 mb-1">
              Full Legal Name (Matching Government ID)
            </label>
            <p className="text-xs text-slate-500 mb-2">
                This name will be hashed and used to verify your identity against financial institution records during high-value transactions.
            </p>
            <div className="relative">
              <input
                type="text"
                id="fullName"
                // Remove 'required' to rely on custom validation for whitespace checks
                className={`mt-1 block w-full px-4 py-3 rounded-md shadow-sm sm:text-sm transition-colors ${
                  errors.fullName 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-50' 
                    : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500'
                } border`}
                placeholder="e.g. Jane Doe"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (errors.fullName) setErrors({ ...errors, fullName: undefined }); // Clear error on type
                  if (formError) setFormError(null);
                }}
              />
              {errors.fullName && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
              )}
            </div>
            {errors.fullName && (
              <p className="mt-2 text-sm text-red-600 font-medium">{errors.fullName}</p>
            )}
          </div>

          {/* Threshold Input - The core cost-saving mechanism */}
          <div>
            <label htmlFor="threshold" className="block text-sm font-bold text-slate-800 mb-1">
              Remote Transaction Block Threshold ($CAD)
            </label>
            <p className="text-xs text-slate-500 mb-2">
              Define the monetary limit for remote transactions (online, phone). Any attempt exceeding this amount will be <strong>blocked</strong> and require mandatory in-person verification at a physical branch under the proposed VFER regulations.
            </p>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-slate-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="threshold"
                id="threshold"
                min="0"
                className={`block w-full pl-7 pr-12 sm:text-sm rounded-md py-3 ${
                    errors.threshold
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-50'
                        : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500'
                } border`}
                placeholder="1000"
                value={formData.threshold}
                onChange={(e) => {
                    setFormData({ ...formData, threshold: Number(e.target.value) });
                    if (errors.threshold) setErrors({ ...errors, threshold: undefined });
                    if (formError) setFormError(null);
                }}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-slate-500 sm:text-sm">CAD</span>
              </div>
            </div>
            {errors.threshold && (
              <p className="mt-2 text-sm text-red-600 font-medium">{errors.threshold}</p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="confirm"
                name="confirm"
                type="checkbox"
                required
                checked={formData.confirm}
                onChange={(e) => setFormData({ ...formData, confirm: e.target.checked })}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-slate-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="confirm" className="font-medium text-slate-700">
                I acknowledge and consent
              </label>
              <p className="text-slate-500">
                I understand that opting into this registry will restrict my ability to perform large remote transactions and consent to mandatory in-person KYC checks for amounts exceeding my threshold.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Activate Protection
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
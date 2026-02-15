/**
 * Represents a registered user in the VFER system.
 * 
 * @security In a production environment, the `id` field would be a cryptographic hash 
 * (e.g., SHA-256) of a government identifier (SIN/Driver's License) to ensure 
 * privacy and prevent PII leakage.
 */
export interface UserProfile {
  /** A unique, anonymized identifier for the user. */
  id: string;
  /** The display name of the user (used for UI verification, not storage). */
  fullName: string;
  /** The monetary value ($CAD) above which remote transactions are blocked. */
  threshold: number;
  /** Status flag indicating if the exclusion protocol is currently enforced. */
  isActive: boolean;
  /** ISO timestamp of enrollment. */
  registeredAt: string;
}

/**
 * Represents a financial transaction attempt being processed by the system.
 */
export interface TransactionLog {
  id: string;
  timestamp: string;
  amount: number;
  type: 'Remote' | 'In-Person';
  status: 'APPROVED' | 'BLOCKED_KYC_REQUIRED';
  merchant: string;
}

/**
 * Enumeration of the possible application views for navigation state management.
 */
export enum ViewState {
  HOME = 'HOME',
  REGISTER = 'REGISTER',
  BANK_PORTAL = 'BANK_PORTAL',
  IMPACT = 'IMPACT',
  TECH_SPECS = 'TECH_SPECS'
}

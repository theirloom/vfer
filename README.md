# Voluntary Financial Exclusion Registry (VFER)

**A Proactive Defense Against Identity Theft & Financial Fraud**

[![VFER Demo](https://img.shields.io/badge/Demo-Live-blue?style=for-the-badge&logo=amazonaws)](https://bookscout.help)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## 🚨 The Problem
In 2024, Canadians lost over **$638 million** to reported fraud, with actual losses estimated to be **20x higher**. The current financial system is **reactive**:
-   Citizens must constantly monitor for unauthorized credit checks.
-   "Credit freezes" are fragmented across multiple bureaus (Equifax, TransUnion).
-   **Synthetic Identity Fraud** (combining real and fake data) bypasses traditional checks, accounting for **26%** of business losses.

## 🛡️ The Solution: VFER
The **Voluntary Financial Exclusion Registry** proposed here is a centralized, government-backed API that allows citizens to proactively **opt-out** of remote credit applications.

### Core Principles
1.  **Voluntary Exclusion**: Citizens willingly register to block *all* remote credit applications in their name.
2.  **Mandatory Check**: Lenders *must* query the VFER API before issuing credit.
3.  **In-Person Override**: If a record is found, the transaction is **BLOCKED** unless the individual appears **in-person** with valid government ID (satisfying PCMLTFA requirements).

## 🏗️ Technical Architecture (Prototype)
This repository contains a **reference implementation** demonstrating the feasibility of such a system using modern, serverless cloud architecture.

-   **Frontend**: React (Vite) + Tailwind CSS
-   **Backend**: Node.js (Express) on AWS Lambda
-   **Infrastructure**: AWS SAM (Serverless Application Model)
-   **Security**:
    -   API Gateway throttling and WAF
    -   Least-privilege IAM roles
    -   Data encryption at rest and in transit

### Directory Structure
```
/
├── server/             # Node.js Express Backend (VFER API)
│   ├── src/
│   │   ├── index.ts    # API Endpoints (Check/Mock)
│   │   └── lambda.ts   # Serverless Handler
│   └── template.yaml   # AWS SAM Infrastructure Definition
├── src/                # React Frontend (Bank Teller Interface)
│   ├── components/     # UI Components (Hero, RegistryForm, etc.)
│   └── services/       # API Integration
└── README.md           # This Manifesto
```

## 🚀 Live Demo
A live demonstration of the "Bank Teller View" and "Consumer Registry" is hosted at:
**[https://bookscout.help](https://bookscout.help)**

*Note: This demo uses **mock data**. Do not enter real sensitive personal information.*

## 📜 Policy Alignment
This project aligns with emerging Canadian legislation and frameworks:
-   **Consumer-Driven Banking Act (Bill C-69)**: Empowering users with data control.
-   **PCMLTFA**: Strengthening Know-Your-Customer (KYC) protocols.
-   **Pan-Canadian Trust Framework (PCTF)**: Promoting reliable digital identity.

## 🤝 Contributing
This is an open-source initiative to raise awareness. We welcome contributions from:
-   **Developers**: To harden the reference architecture.
-   **Policy Makers**: To refine the regulatory logic.
-   **Privacy Advocates**: To ensure data minimization standards.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*Created by [Your Name/Organization] to advocate for a safer financial future for all Canadians.*

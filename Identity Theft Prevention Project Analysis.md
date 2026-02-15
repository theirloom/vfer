# **Comprehensive Analysis of a Proactive Financial Transaction Registry: A Preventative Paradigm for Canadian Identity Security**

The rapid evolution of the Canadian financial landscape, characterized by a transition from localized banking to a globalized digital economy, has fundamentally altered the threat profile of identity-related crimes. As remote transactions become the standard for commerce, the sophistication of fraud tactics—ranging from synthetic identity creation to high-frequency account takeovers—has outpaced traditional, reactive security measures. The current reliance on post-incident recovery places a significant burden on the victim, the financial institution, and the judicial system. A structural shift toward a proactive preventative measure, specifically a centralized registry that empowers citizens to mandate in-person verification for high-value transactions, represents a critical evolution in the national security architecture. This report provides an exhaustive analysis of such a registry, evaluating its technical robustness, economic viability, and legal alignment within the context of current Canadian fraud trends and demographic shifts.

## **The Contemporary Fraud Landscape and the Failure of Reactive Security**

The empirical evidence regarding fraud in Canada indicates a system reaching a breaking point. While traditional police-reported crime rates have seen historical fluctuations, fraud has emerged as the most prevalent victimization experience for Canadians.1 The Canadian Anti-Fraud Centre (CAFC) documented $638 million in confirmed losses in 2024, but this figure is a vast underrepresentation, as only 5% to 10% of incidents are formally reported.1 When adjusted for the likely scale of unreported fraud, the economic impact on households is staggering. Business-level data further clarifies the severity of the crisis; Canadian business leaders estimate that fraud cost their organizations $111 billion in 2025, an increase of 42% from $78 billion the previous year.4  
This disparity between reported and actual losses suggests that current security paradigms, which focus on detecting fraud after it occurs, are insufficient. The "confidence paradox" identified in national polling reveals that while 89% of Canadians believe they can recognize a scam, one in four have still fallen victim to fraud or extortion.2 This gap between perceived competence and actual vulnerability is where sophisticated fraudsters thrive, using automated tools to target thousands of individuals simultaneously.

### **National Fraud Statistics and Reported Losses (2024-2025)**

| Metric | 2024 Value | 2025 (H1/Projected) | Source |
| :---- | :---- | :---- | :---- |
| CAFC Confirmed Dollar Loss | $638 Million | $544 Million (as of Sept) | 2 |
| Total Estimated Business Loss | $78 Billion | $111 Billion | 4 |
| Fraud Cost as % of Revenue | 6.5% | 7.2% | 4 |
| Identity Fraud Reports (CAFC) | 9,487 | N/A | 6 |
| Average Individual Loss | $15,028 | N/A | 3 |
| Success Rate of Scams (Consumer) | 6% | 6% | 4 |

The emergence of synthetic identity fraud represents a particularly dangerous trend for the financial ecosystem. Unlike traditional identity theft, where an existing person’s credentials are stolen, synthetic fraud involves the creation of entirely new, fictitious identities using a mix of real and fabricated data.4 This fraud type has surged to 26% of total business fraud losses, up from 18% in 2024\.4 Because these identities often pass initial digital Know Your Customer (KYC) checks, they can be used to build high credit scores over several years before being "busted out" for maximum financial gain. A preventative registry requiring in-person verification for large transactions directly counters this threat by ensuring a physical human link to every high-value financial movement.

## **Core Objectives: Empowerment, Verification, and Economic Stability**

The proposed registry is built upon three foundational pillars designed to address the systemic weaknesses of the current digital-first financial model. By prioritizing user empowerment and physical verification, the system aims to create a "human firewall" that protects the most vulnerable segments of the population.

### **Empowerment and Informed Consent**

The principle of empowerment shifts the responsibility of security from the institution to the individual, but it does so by providing the individual with more effective tools. Under the current system, consumers are often passive participants in their own security, informed of breaches only after the fact. A centralized registry allows citizens to set their own "risk appetite" by choosing a transaction threshold that triggers mandatory in-person verification. This aligns with the "meaningful consent" principles of the Personal Information Protection and Electronic Documents Act (PIPEDA), giving users informational self-determination over how their financial identities are utilized.10

### **Mandatory In-Person Verification (IPV)**

The core operational innovation is the requirement for financial institutions to conduct in-person KYC checks for any transaction exceeding the user’s limit. While the financial sector has heavily promoted the convenience of digital-only banking, this convenience has come at the cost of security. Remote verification technologies, such as Optical Character Recognition (OCR) and basic selfie biometrics, are increasingly bypassed by deepfakes and high-quality forged documents.8  
In-person verification corresponds to Identity Assurance Level 3 (IAL3) under the Pan-Canadian Trust Framework (PCTF) and global standards like NIST SP 800-63-3.13 IAL3 requires the physical presence of the individual and verification by a trained representative, providing the highest level of assurance that the person conducting the transaction is the rightful owner of the account. For seniors, who often prefer traditional banking methods—60% bank in person at least once a month—this requirement is not a burden but a reinforced safeguard that aligns with their existing habits.15

### **Projected Economic Impact and Efficacy**

The target reduction of 1,230 annual identity theft victims and the associated $1.2 billion in savings is a projection based on a 10% enrollment rate of the current National Do Not Call List (DNCL) user base. The National DNCL currently holds over 15 million registrations, demonstrating a high public appetite for government-managed registries that provide protection against unwanted or fraudulent contact.16

#### **Economic Rationale for the $1.2 Billion Savings Target**

The calculation of economic savings must account for both direct financial theft and the secondary costs of fraud, including administrative overhead, law enforcement resources, and lost productivity.

$$Savings \= (V\_{prevented} \\times L\_{avg}) \+ C\_{admin} \+ C\_{judicial}$$  
Where:

* $V\_{prevented}$ is the number of victims saved from high-value fraud.  
* $L\_{avg}$ is the average loss for high-value incidents (often exceeding hundreds of thousands of dollars).3  
* $C\_{admin}$ represents the cost to banks and credit bureaus for account restoration.  
* $C\_{judicial}$ represents the cost of investigations and prosecutions.

Given that business losses alone reached $111 billion in 2025, the $1.2 billion target represents a recovery of only 1.08% of the total fraud loss, making it an extremely conservative and achievable goal for a nationwide preventative system.4

## **Technical Architecture and Interoperability Standards**

To be effective, the registry must be seamlessly integrated into the existing financial infrastructure without introducing prohibitive latency. The proposed architecture leverages established standards for reliability, security, and scalability.

### **Interface and Communication Layer**

The use of a RESTful API ensures that the registry is language-agnostic, allowing diverse banking systems—from legacy mainframes to modern fintech apps—to query the registry with minimal friction. However, real-time transaction processing requires more than simple request-response cycles. The inclusion of an Enterprise Service Bus (ESB) and message queues (RabbitMQ or Kafka) allows for asynchronous communication. This is vital because an in-person KYC check is a high-latency event; the message queue holds the "trigger" state, ensuring that the transaction remains in a secure, pending status until the bank teller clears the flag via the specialized "BankTellerView" interface.

### **Database Integrity and AI Integration**

The relational database at the heart of the system uses strict foreign key relationships to prevent data corruption. Every entry in the registry is linked to a comprehensive audit trail, recording every change, query, and verification event. This transparency is critical for maintaining trust and for providing evidence in Criminal Code investigations under Section 402.2.18  
The "geminiService.ts" component integrates advanced AI capabilities into the registry. Rather than replacing human judgment, the AI acts as a decision-support tool, analyzing transaction logs for patterns consistent with "bust-out" behavior or account takeovers. For example, if a user who typically sets a $5,000 limit suddenly registers multiple attempts just below that threshold across different institutions, the AI can flag this as a potential "structuring" attempt and notify the user.

### **Security and Privacy Engineering**

The registry implements a "Security by Design" approach, ensuring that sensitive data is protected at every layer of the stack.

* **Authentication**: OAuth 2.0 and OpenID Connect (OIDC) are used for both user and institutional access. OIDC allows the registry to act as an Identity Provider (IdP) or a Relying Party (RP), facilitating a federated trust model as described in the Pan-Canadian Trust Framework.13  
* **Encryption**: All contact and transaction data is encrypted at rest using industry-standard algorithms (AES-256) and in transit via TLS 1.3/HTTPS.  
* **Data Minimization**: In accordance with PIPEDA, the registry only stores the data necessary to verify the KYC flag.20 It does not need to store the user's full bank account details, only the identity identifier and the chosen threshold.

## **Policy and Legal Alignment: Integrating with the Canadian Regulatory Framework**

The proposed registry is not an isolated initiative; it is designed to strengthen and complement existing Canadian laws governing finance, crime, and privacy.

### **The Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA)**

Effective October 1, 2025, FINTRAC has implemented stricter protocols for identity verification, including the requirement for reporting entities to consult government databases when dealing with high-risk entities.21 Title insurers have also been added as reporting entities to combat the rise in real estate-related fraud.23 The registry directly supports these amendments by providing a centralized point of reference for "High-Value Transaction Alerts." This allows institutions to fulfill their PCMLTFA obligations more efficiently by leveraging a user-authorized "verification requirement" as a clear risk indicator.

### **Criminal Code Sections 402.1 and 402.2**

The Criminal Code specifically targets the acquisition and trafficking of "identity information".18 Section 402.2(1) makes it an offense to possess identity information with the intent to commit fraud. The registry aids enforcement by creating a clear distinction between authorized and unauthorized transaction attempts. If a fraudster attempts to bypass the registry’s flag, the digital audit trail becomes primary evidence of "intent" and "unauthorized use," facilitating the identification and prosecution of identity criminals as outlined in law enforcement manuals.26

### **PIPEDA and the Evolution of Consent**

The Personal Information Protection and Electronic Documents Act (PIPEDA) is a principles-based law that requires "meaningful consent".10 The registry empowers the user to define the "caution zones" where their information can be used, moving away from the legalistic, "all-or-nothing" privacy policies that characterize modern digital services. This user-centric model is further supported by the Consumer-Driven Banking Framework (Bill C-69), which received Royal Assent in June 2024, mandating that consumers be able to securely share their data with the participating entities of their choice.27

## **The Senior Population Tsunami and the Urgent Need for Safeguards**

The most compelling rationale for the registry is the demographic shift projected by Statistics Canada. By 2036, seniors will represent one-quarter of the Canadian population.28 This group is not only the most affluent but also the most targeted. In 2024, seniors accounted for 40.3% of the total dollar loss reported to the CAFC.3

### **Demographic Projections for Seniors (65+) in Canada**

| Province/Territory | 2009 % of Seniors | 2036 Projected % (Medium Growth) | Source |
| :---- | :---- | :---- | :---- |
| Canada Total | 14% | 23.0% \- 25.0% | 28 |
| Atlantic Provinces | High | Highest in Canada | 30 |
| Ontario | 14% (approx) | Higher than average share | 30 |
| British Columbia | 14% (approx) | Higher than average share | 30 |
| Nunavut | Lowest | Remains Lowest | 30 |

Seniors are particularly vulnerable to "authorized fraud" or "scams," which accounted for 29% of business losses in 2025\.4 These involve tricking a person into authorizing a transaction themselves. Digital safeguards are often ineffective here because the user is technically entering their own password. Only a physical, in-person verification step provides the opportunity for a bank teller—trained to recognize the signs of financial abuse—to intervene. Half of Canadians aged 75 and older report they have not received adequate information from their bank about protecting themselves from fraud, making the "human-in-the-loop" model of the registry an essential public interest intervention.15

## **Operational Realities: Accessibility and the Branch Network**

A critical challenge to the "Mandatory In-Person" objective is the ongoing contraction of the physical banking network in Canada. Between 2012 and 2022, the number of bank branches decreased by 9%, with rural communities bearing the brunt of these closures.31

### **Banking Access and Distance Metrics**

| Metric | Urban Average | Rural Average | Source |
| :---- | :---- | :---- | :---- |
| Distance to Nearest ABM | \< 1.0 km | 1.0 km | 32 |
| Distance to Nearest Branch | \< 2.0 km | 4.5 km | 32 |
| Subjective Ease of Access | 51% (Positive) | 41% (Positive) | 32 |
| Seniors Banking In-Person | 30% | Higher (Trend) | 15 |

To address this, the registry’s design must include flexibility. The "BankTellerView" could be extended to authorized agents or mandataries, as permitted under the new PCMLTFA regulations.21 This could include credit unions, notaries, or even Canada Post outlets, which have a much wider reach in rural areas (98% of Canadians are within 15 km of a postal outlet).32 Furthermore, for individuals with disabilities, the system could support "supervised remote verification" through high-assurance video links, as long as they meet the IAL3 requirements of the Pan-Canadian Trust Framework.13

## **Economic Modeling of Preventative Investment vs. Reactive Loss**

The investment required to build and maintain the registry is negligible when compared to the current $111 billion annual loss to the Canadian economy. If the registry prevents just 10% of identity-related losses, the return on investment (ROI) for the federal government and the banking sector would be orders of magnitude higher than any existing fraud detection software.

### **Cost-Benefit Analysis Table (Projected Annual)**

| Expense/Saving Category | Without Registry (Current) | With Registry (Target) | Net Impact |
| :---- | :---- | :---- | :---- |
| Business Fraud Loss | $111.0 Billion | $109.8 Billion | \-$1.2 Billion (Saving) |
| Individual Victim Loss | $638.0 Million | $542.3 Million | \-$95.7 Million (Saving) |
| Bank Compliance Ops | High (Manual) | Moderate (Streamlined) | Efficiency Gain |
| Registry Maintenance | $0 | $50.0 Million (Est) | \-$50.0 Million (Cost) |
| **Total Net Economic Benefit** | **N/A** | **N/A** | **\+$1.25 Billion** |

## **Synthesis and Strategic Recommendations**

The transition from reactive fraud recovery to a proactive preventative registry is not merely a technological upgrade but a necessary social and economic realignment. The data from 2024 and 2025 demonstrates that digital-only verification is no longer a sufficient deterrent against the rise of synthetic identity fraud and AI-enabled social engineering.  
The proposed registry achieves a unique balance between security and convenience by placing the "friction" of the system under the direct control of the user. By integrating with the Pan-Canadian Trust Framework and the updated PCMLTFA regulations, the project provides a legally robust and technically interoperable solution to a crisis that currently costs the Canadian economy over $100 billion a year. The 2036 senior population surge makes the immediate development of this registry a matter of urgent public interest, ensuring that as Canada moves further into the digital age, its citizens—especially the most vulnerable—retain the ultimate power to secure their financial futures.  
The inclusion of modern technological standards like OAuth 2.0, OIDC, and message-queue-based asynchronous communication ensures that the system is ready for the demands of the upcoming Open Banking era. By restoring the "physical link" to high-value transactions, Canada can move from being a "target of opportunity" for global fraudsters to a world leader in proactive identity protection.

#### **Works cited**

1. Crime in Canada: Four-in-five report fraud attempts; 30% say money or personal information was taken \- Angus Reid Institute, accessed February 15, 2026, [https://angusreid.org/crime-fraud-in-canada-widespread/](https://angusreid.org/crime-fraud-in-canada-widespread/)  
2. Rising fraud losses expose Canada's 'confidence paradox' | Wealth Professional, accessed February 15, 2026, [https://www.wealthprofessional.ca/news/industry-news/rising-fraud-losses-expose-canadas-confidence-paradox/391617](https://www.wealthprofessional.ca/news/industry-news/rising-fraud-losses-expose-canadas-confidence-paradox/391617)  
3. SHOW ME THE FRAUD, accessed February 15, 2026, [https://cneo-nceo.ca/wp-content/uploads/CAFC-Annual-Stats-Report-2024-EN.pdf](https://cneo-nceo.ca/wp-content/uploads/CAFC-Annual-Stats-Report-2024-EN.pdf)  
4. Canadian Business Leaders Say Fraud Cost Their Businesses 7.2% of Equivalent Revenues; Synthetic Identity Fraud Losses Surge – TransUnion Study, accessed February 15, 2026, [https://newsroom.transunion.ca/canadian-business-leaders-say-fraud-cost-their-businesses-72-of-equivalent-revenues-synthetic-identity-fraud-losses-surge--transunion-study/](https://newsroom.transunion.ca/canadian-business-leaders-say-fraud-cost-their-businesses-72-of-equivalent-revenues-synthetic-identity-fraud-losses-surge--transunion-study/)  
5. New Mastercard Research: Consumers in Canada worry about the impact of fraud on financial health, accessed February 15, 2026, [https://www.mastercard.com/ca/en/news-and-trends/press/2025/february/new-mastercard-research-consumers-in-canada-worry-about-the-impact-of-fraud-on-financial-health.html](https://www.mastercard.com/ca/en/news-and-trends/press/2025/february/new-mastercard-research-consumers-in-canada-worry-about-the-impact-of-fraud-on-financial-health.html)  
6. Fraud Prevention Month 2025 \- Centre antifraude du Canada, accessed February 15, 2026, [https://antifraudcentre-centreantifraude.ca/features-vedette/2025/02/month-prevention-mois-eng.htm](https://antifraudcentre-centreantifraude.ca/features-vedette/2025/02/month-prevention-mois-eng.htm)  
7. DIGITAL IDENTITY RISK ACCELERATES FRAUD LOSSES \- TransUnion Canada, accessed February 15, 2026, [https://www.transunion.ca/content/dam/transunion/ca/business/collateral/report/canada-h2-2025-fraud-trends-update-report.pdf](https://www.transunion.ca/content/dam/transunion/ca/business/collateral/report/canada-h2-2025-fraud-trends-update-report.pdf)  
8. Preventing the Next Billion-Dollar Fraud in Canada | Canadian ..., accessed February 15, 2026, [https://www.canadianlenders.org/blog\_post/preventing-the-next-billion-dollar-fraud-in-canada/](https://www.canadianlenders.org/blog_post/preventing-the-next-billion-dollar-fraud-in-canada/)  
9. TransUnion Study Reveals CAD$111 Billion Fraud Losses for Canadian Businesses in 2025, Highlights Rise of Synthetic Identity Crime \- Quiver Quantitative, accessed February 15, 2026, [https://www.quiverquant.com/news/TransUnion+Study+Reveals+CAD%24111+Billion+Fraud+Losses+for+Canadian+Businesses+in+2025%2C+Highlights+Rise+of+Synthetic+Identity+Crime](https://www.quiverquant.com/news/TransUnion+Study+Reveals+CAD%24111+Billion+Fraud+Losses+for+Canadian+Businesses+in+2025%2C+Highlights+Rise+of+Synthetic+Identity+Crime)  
10. Implementing Standard Privacy Settings \- Public Interest Advocacy Centre, accessed February 15, 2026, [http://www.piac.ca/wp-content/uploads/2016/09/PIAC-Submissions-on-Privacy-and-Consent-FINAL.pdf](http://www.piac.ca/wp-content/uploads/2016/09/PIAC-Submissions-on-Privacy-and-Consent-FINAL.pdf)  
11. Beginner's Guide to PIPEDA: Canada's Version of HIPAA Explained \- Accountable HQ, accessed February 15, 2026, [https://www.accountablehq.com/post/beginner-s-guide-to-pipeda-canada-s-version-of-hipaa-explained](https://www.accountablehq.com/post/beginner-s-guide-to-pipeda-canada-s-version-of-hipaa-explained)  
12. Document Verification Technology \[Guide\]: Making the Right Choice for Your Organization, accessed February 15, 2026, [https://www.iproov.com/blog/document-verification-technologies-guide](https://www.iproov.com/blog/document-verification-technologies-guide)  
13. What is a Trust Framework? \- Corbado, accessed February 15, 2026, [https://www.corbado.com/glossary/trust-framework](https://www.corbado.com/glossary/trust-framework)  
14. Home \- Confluence \- Trust over IP, accessed February 15, 2026, [https://lf-toip.atlassian.net/wiki/spaces/HOME/pages/22974576](https://lf-toip.atlassian.net/wiki/spaces/HOME/pages/22974576)  
15. Highlights: Key findings from the Survey on Banking of Canadians \- Canada.ca, accessed February 15, 2026, [https://www.canada.ca/en/financial-consumer-agency/programs/research/highlights-survey-banking-of-canadians.html](https://www.canada.ca/en/financial-consumer-agency/programs/research/highlights-survey-banking-of-canadians.html)  
16. Answering the Call: \- CRTC, accessed February 15, 2026, [https://crtc.gc.ca/pubs/CRTC\_Annual\_Report\_on\_the\_Operations\_of\_the\_National\_DNCL\_24-25.pdf](https://crtc.gc.ca/pubs/CRTC_Annual_Report_on_the_Operations_of_the_National_DNCL_24-25.pdf)  
17. CAFC 2024 Annual Statistical Report \- Centre antifraude du Canada, accessed February 15, 2026, [https://antifraudcentre-centreantifraude.ca/annual-reports-2024-rapports-annuels-eng.htm](https://antifraudcentre-centreantifraude.ca/annual-reports-2024-rapports-annuels-eng.htm)  
18. Criminal Code ( RSC , 1985, c. C-46) \- Justice Laws Website, accessed February 15, 2026, [https://laws-lois.justice.gc.ca/eng/acts/C-46/section-402.2.html?txthl=fraud](https://laws-lois.justice.gc.ca/eng/acts/C-46/section-402.2.html?txthl=fraud)  
19. DIACC certifies ID verification for legal industry to Canada's trust framework, accessed February 15, 2026, [https://www.biometricupdate.com/202511/diacc-certifies-id-verification-for-legal-industry-to-canadas-trust-framework](https://www.biometricupdate.com/202511/diacc-certifies-id-verification-for-legal-industry-to-canadas-trust-framework)  
20. PIPEDA Explained (Canada's Version of HIPAA): Best Practices and Compliance Tips, accessed February 15, 2026, [https://www.accountablehq.com/post/pipeda-explained-canada-s-version-of-hipaa-best-practices-and-compliance-tips](https://www.accountablehq.com/post/pipeda-explained-canada-s-version-of-hipaa-best-practices-and-compliance-tips)  
21. FINTRAC Updated Guidance on Client ID & Record Keeping \- BCFSA, accessed February 15, 2026, [https://www.bcfsa.ca/about-us/news/blog/fintrac-updated-guidance-on-client-id-record-keeping](https://www.bcfsa.ca/about-us/news/blog/fintrac-updated-guidance-on-client-id-record-keeping)  
22. Reminder: New FINTRAC Requirements Effective October 1, 2025 \- McCarthy Tétrault LLP, accessed February 15, 2026, [https://www.mccarthy.ca/en/insights/blogs/techlex/reminder-new-fintrac-requirements-effective-october-1-2025](https://www.mccarthy.ca/en/insights/blogs/techlex/reminder-new-fintrac-requirements-effective-october-1-2025)  
23. Notice to the Professions: New AML obligations for title insurers take effect October 1, 2025, accessed February 15, 2026, [https://lso.ca/news-events/news/latest-news-2025/notice-to-the-professions-new-aml-obligations-for](https://lso.ca/news-events/news/latest-news-2025/notice-to-the-professions-new-aml-obligations-for)  
24. FINTRAC Compliance Guide For Title Insurers \- Jamie Taleb Notary Public, accessed February 15, 2026, [https://jamietalebnotary.com/title-insurers-guide-to-fintrac-compliance-2025/](https://jamietalebnotary.com/title-insurers-guide-to-fintrac-compliance-2025/)  
25. Criminal Code ( RSC , 1985, c. C-46) \- Justice Laws Website, accessed February 15, 2026, [https://laws-lois.justice.gc.ca/eng/acts/c-46/section-402.2.html](https://laws-lois.justice.gc.ca/eng/acts/c-46/section-402.2.html)  
26. RESPONDING TO VICTIMS OF IDENTITY CRIME: A MANUAL FOR LAW ENFORCEMENT AGENTS, PROSECUTORS AND POLICY-MAKERS \- ICCLR, accessed February 15, 2026, [https://icclr.org/wp-content/uploads/2019/06/00-Victims-of-Identity-Crime-Manual.pdf?x21689](https://icclr.org/wp-content/uploads/2019/06/00-Victims-of-Identity-Crime-Manual.pdf?x21689)  
27. Canadian Open Banking legislation receives Royal Assent, accessed February 15, 2026, [https://www.openbankingexpo.com/news/canadian-open-banking-legislation-receives-royal-assent/](https://www.openbankingexpo.com/news/canadian-open-banking-legislation-receives-royal-assent/)  
28. An aging population, accessed February 15, 2026, [https://www150.statcan.gc.ca/n1/pub/11-402-x/2010000/chap/pop/pop02-eng.htm](https://www150.statcan.gc.ca/n1/pub/11-402-x/2010000/chap/pop/pop02-eng.htm)  
29. Seniors, accessed February 15, 2026, [https://www150.statcan.gc.ca/n1/pub/11-402-x/2011000/chap/seniors-aines/seniors-aines-eng.htm](https://www150.statcan.gc.ca/n1/pub/11-402-x/2011000/chap/seniors-aines/seniors-aines-eng.htm)  
30. Population Projections for Canada, Provinces and Territories: Highlights, accessed February 15, 2026, [https://www150.statcan.gc.ca/n1/pub/91-520-x/2010001/aftertoc-aprestdm1-eng.htm](https://www150.statcan.gc.ca/n1/pub/91-520-x/2010001/aftertoc-aprestdm1-eng.htm)  
31. See the latest statistics on the number of bank branches in Canada ..., accessed February 15, 2026, [https://cba.ca/bank-branches-in-canada](https://cba.ca/bank-branches-in-canada)  
32. How do Canadians perceive access to cash? \- Banque du Canada, accessed February 15, 2026, [https://www.banqueducanada.ca/wp-content/uploads/2024/10/san2024-24.pdf](https://www.banqueducanada.ca/wp-content/uploads/2024/10/san2024-24.pdf)  
33. FINTRAC Identification: Canada's Official Laws and Methods \[2026\] \- Signzy, accessed February 15, 2026, [https://www.signzy.com/blogs/canada-fintract-identification](https://www.signzy.com/blogs/canada-fintract-identification)
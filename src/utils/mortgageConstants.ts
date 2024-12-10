export const CANADIAN_MORTGAGE_RULES = {
  MIN_DOWN_PAYMENT: {
    UNDER_500K: 0.05,
    BETWEEN_500K_1M: 0.10,
    OVER_1M: 0.20
  },
  MORTGAGE_DEFAULT_INSURANCE: {
    REQUIRED_UNDER: 0.20,
    MAX_AMORTIZATION: 25,
    MAX_PURCHASE_PRICE: 1000000
  },
  STRESS_TEST_RATE: 0.02, // Additional 2% on contract rate or 5.25%, whichever is higher
  MAX_AMORTIZATION: 30,
  MAX_GDS_RATIO: 0.32, // Gross Debt Service Ratio
  MAX_TDS_RATIO: 0.40  // Total Debt Service Ratio
};

export const MORTGAGE_TYPES = {
  FIXED: 'Fixed Rate Mortgage',
  VARIABLE: 'Variable Rate Mortgage',
  OPEN: 'Open Mortgage',
  CLOSED: 'Closed Mortgage',
  CONVENTIONAL: 'Conventional Mortgage',
  HIGH_RATIO: 'High-Ratio Mortgage'
};

export const REQUIRED_DOCUMENTS = [
  'Proof of Income (T4s, Notice of Assessment)',
  'Employment Letter',
  'Down Payment Proof',
  'List of Assets and Liabilities',
  'Government-issued ID'
];
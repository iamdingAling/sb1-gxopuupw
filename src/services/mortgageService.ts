import { CANADIAN_MORTGAGE_RULES, MORTGAGE_TYPES } from '../utils/mortgageConstants';

export const calculateMinimumDownPayment = (purchasePrice: number): number => {
  if (purchasePrice <= 500000) {
    return purchasePrice * CANADIAN_MORTGAGE_RULES.MIN_DOWN_PAYMENT.UNDER_500K;
  } else if (purchasePrice <= 1000000) {
    const firstTier = 500000 * CANADIAN_MORTGAGE_RULES.MIN_DOWN_PAYMENT.UNDER_500K;
    const secondTier = (purchasePrice - 500000) * CANADIAN_MORTGAGE_RULES.MIN_DOWN_PAYMENT.BETWEEN_500K_1M;
    return firstTier + secondTier;
  }
  return purchasePrice * CANADIAN_MORTGAGE_RULES.MIN_DOWN_PAYMENT.OVER_1M;
};

export const needsMortgageInsurance = (downPaymentPercentage: number): boolean => {
  return downPaymentPercentage < CANADIAN_MORTGAGE_RULES.MORTGAGE_DEFAULT_INSURANCE.REQUIRED_UNDER;
};

export const calculateStressTestRate = (contractRate: number): number => {
  const minimumRate = 5.25;
  const stressTestRate = contractRate + CANADIAN_MORTGAGE_RULES.STRESS_TEST_RATE;
  return Math.max(stressTestRate, minimumRate);
};
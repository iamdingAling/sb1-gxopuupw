import { CANADIAN_MORTGAGE_RULES, MORTGAGE_TYPES, REQUIRED_DOCUMENTS } from './mortgageConstants';

export const generateResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  // Down Payment Rules
  if (lowerMessage.includes('down payment')) {
    return `In Canada, minimum down payment requirements vary based on the purchase price:\n
    • For homes under $500,000: 5% minimum down payment
    • For homes between $500,000 and $1M: 5% on first $500,000 and 10% on remainder
    • For homes over $1M: 20% minimum down payment\n
    Would you like to calculate the minimum down payment for a specific purchase price?`;
  }
  
  // Mortgage Insurance
  if (lowerMessage.includes('insurance') || lowerMessage.includes('cmhc')) {
    return `Mortgage default insurance (often called CMHC insurance) is required when your down payment is less than 20%. Key points:\n
    • Required for down payments between 5% and 19.99%
    • Maximum amortization period of 25 years
    • Not available for homes over $1,000,000
    • Protects the lender, not the borrower\n
    Would you like to know more about insurance premiums?`;
  }
  
  // Stress Test
  if (lowerMessage.includes('stress test') || lowerMessage.includes('qualify')) {
    return `The Canadian mortgage stress test requires you to qualify at a higher rate than your contract rate. You must qualify at either:\n
    • Your contract rate plus 2%, OR
    • The minimum qualifying rate of 5.25%\n
    This ensures you can handle future interest rate increases. Would you like to discuss your specific situation?`;
  }
  
  // Required Documents
  if (lowerMessage.includes('document') || lowerMessage.includes('need to provide')) {
    return `To apply for a mortgage in Canada, you'll typically need:\n
    ${REQUIRED_DOCUMENTS.map(doc => `• ${doc}`).join('\n')}\n
    Would you like more details about any of these requirements?`;
  }
  
  // Types of Mortgages
  if (lowerMessage.includes('type') || lowerMessage.includes('fixed') || lowerMessage.includes('variable')) {
    return `Common types of mortgages in Canada include:\n
    • Fixed Rate: Interest rate remains constant
    • Variable Rate: Rate fluctuates with prime rate
    • Open: Can be repaid anytime without penalty
    • Closed: Limited prepayment options with penalties\n
    Would you like to learn more about a specific type?`;
  }
  
  return `I'm a Canadian mortgage specialist here to help! You can ask me about:
  • Down payment requirements
  • Mortgage stress test
  • CMHC insurance
  • Required documents
  • Types of mortgages
  • Qualification criteria`;
};
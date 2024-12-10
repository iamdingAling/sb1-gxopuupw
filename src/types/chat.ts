export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
}

export interface MortgageInfo {
  loanAmount?: number;
  downPayment?: number;
  creditScore?: number;
  employmentStatus?: string;
}
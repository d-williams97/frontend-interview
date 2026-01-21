// Loan type options
export type LoanType = "Flexi-Loan" | "Business Loan" | "Cash Advance" | "RLS" | "CBILS";

// Loan history interface
export interface LoanHistory {
  loan_started: string;
  loan_ended: string;
  principle: number;
  interest_rate: number;
  interest: number;
}

// Application interface
export interface Application {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  loan_amount: number;
  loan_type: LoanType;
  date_created: string;
  expiry_date: string;
  avatar: string;
  loan_history: LoanHistory[];
}



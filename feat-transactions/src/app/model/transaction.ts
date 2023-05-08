export interface Transaction {
  id: number;
  timestamp: string;
  amount: number;
  currencyCode: string;
  currencyRate?: number;
  description: string;
  otherParty?: PartyDetails;
}

export interface TransactionData {
  days: Array<{ id: string; transactions: Array<Transaction> }>;
}

declare interface PartyDetails {
  name: string;
  iban: string;
}

export {};

declare global {
  type TransactionType = 'Cash In' | 'Cash Out';

  interface ITransaction {
    id: string;
    referenceNo: string;
    type: TransactionType;
    date: Date;
    amount: number;
    fee: number;
    walletId: string;
    customerId: string;
  }
}

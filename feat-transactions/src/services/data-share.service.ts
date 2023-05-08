import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/model/transaction';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  transactionDetails?: Transaction;

  getFriendlyFormatIBAN(iban?: string, separator: string = ' ') {
    if (typeof iban !== 'string') {
      return null;
    }
    if (typeof separator === 'undefined') {
      separator = ' ';
    }
    return iban.replace(/(.{4})(?!$)/g, '$1' + separator);
  }

  getAmountInEuros(transaction: Transaction): number {
    return transaction?.currencyRate
      ? transaction?.currencyRate * transaction.amount
      : transaction.amount;
  }
}

import { Component } from '@angular/core';
import { Transaction, TransactionData } from '../model/transaction';
import { TransactionInquiryService } from 'src/services/transaction-inquiry.service';
import { DataShareService } from 'src/services/data-share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  public transactionData: TransactionData;
  public selectedTransaction: Transaction | undefined;

  constructor(
    private transactionInquiry: TransactionInquiryService,
    private dataShareService: DataShareService,
    private router: Router
  ) {
    this.transactionData = { days: [] };
    this.selectedTransaction = undefined;
  }

  ngOnInit(): void {
    this.getTransactionData();
  }

  getTransactionData(): void {
    this.transactionInquiry
      .getTransactions()
      .subscribe((transactionData) => (this.transactionData = transactionData));
  }

  getAmountInEuros(transaction: Transaction): number {
    return this.dataShareService.getAmountInEuros(transaction);
  }

  onTransactionClicked(event: Event, transaction: Transaction): void {
    this.dataShareService.transactionDetails = transaction;
    this.router.navigate(['transaction/details']);
  }
}

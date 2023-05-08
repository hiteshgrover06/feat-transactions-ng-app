import { Component, Input } from '@angular/core';
import { Transaction } from '../model/transaction';
import { DataShareService } from 'src/services/data-share.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
})
export class TransactionDetailsComponent {
  public transaction?: Transaction;
  constructor(public dataShareService: DataShareService) {
    this.transaction = this.dataShareService.transactionDetails;
  }
}

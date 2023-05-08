import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionData } from 'src/app/model/transaction';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionInquiryService {
  constructor(private http: HttpClient) {}
  transactionUrl: string = 'http://localhost:8080/api/transactions';

  getTransactions(): Observable<TransactionData> {
    return this.http
      .get<TransactionData>(this.transactionUrl)
      .pipe(
        catchError(
          this.handleError<TransactionData>('getTransactions', { days: [] })
        )
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

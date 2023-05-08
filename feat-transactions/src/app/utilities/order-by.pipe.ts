import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../model/transaction';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(
    value: Transaction[],
    order: 'asc' | 'desc' = 'asc'
  ): Transaction[] {
    return value.sort((a, b) => {
      if (order === 'asc') {
        return new Date(a.timestamp) < new Date(b.timestamp) ? -1 : 1;
      } else if (order === 'desc') {
        return new Date(a.timestamp) < new Date(b.timestamp) ? 1 : -1;
      }
      return 0;
    });
  }
}

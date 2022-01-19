import {Component} from '@angular/core';

const STATUS_PAYMENT = [
  'Status',
  'Active',
  'Preload',
  'Wait',
  'Done'
]

@Component({
  selector: 'prt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  filteredType: string = 'down';
  statusList: any = [];

  constructor() {
    this.statusList = STATUS_PAYMENT;
  }

  sorted(): void {
    (this.filteredType === 'down')
      ? this.filteredType = 'up'
      : this.filteredType = 'down';
  }
}

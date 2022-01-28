import {Component, Input} from '@angular/core';
import {Router, RouterEvent} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";

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
  caption$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  filteredType: string = 'down';
  statusList: any = [];

  constructor(
    private router: Router
  ) {
    this.statusList = STATUS_PAYMENT;

    this.router.events.subscribe(() => {
      this.checkActivePage();
    })
  }

  checkActivePage() {
    if (this.router.url.includes('catalog')) {
      return this.caption$.next('Catalog');
    }

    if (this.router.url.includes('proposals')) {
      return this.caption$.next('Proposals');
    }

    if (this.router.url.includes('peoples')) {
      return this.caption$.next('People');
    }

    if (this.router.url.includes('payments')) {
      return this.caption$.next('Payment Requests');
    }

    if (this.router.url.includes('orders')) {
      return this.caption$.next('Order');
    }
  }


  sorted(): void {
    (this.filteredType === 'down')
      ? this.filteredType = 'up'
      : this.filteredType = 'down';
  }
}

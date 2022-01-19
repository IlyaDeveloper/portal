import {Component, OnInit} from '@angular/core';

const PAYMENT_REQUEST_ACTIVITY = [
  {
    name: 'Peter Friesen',
    date: '12/13/21',
    activityStatus: 'Set Drafts',
    info: '@2050 - Technology Studio'
  },
  {
    name: 'Client',
    date: '12/12/21',
    activityStatus: 'Open By Client',
    info: '@1359 - Burgundy Main Hours'
  },
  {
    name: 'Client',
    date: '12/09/21',
    activityStatus: 'Open By Client',
    info: '@1359 - Burgundy Main Hours'
  },
  {
    name: 'Client',
    date: '12/01/21',
    activityStatus: 'Open By Client',
    info: '@1359 - Burgundy Main Hours'
  },
  {
    name: 'Peter Friesen',
    date: '12/01/21',
    activityStatus: 'Created',
    info: '@2061 - New proposal'
  },
  {
    name: 'Client',
    date: '01/02/21',
    activityStatus: 'Submitted',
    info: '@2061 - Shure Farms Tech'
  },
  {
    name: 'Peter Friesen',
    date: '12/13/21',
    activityStatus: 'Set Drafts',
    info: '@2050 - Technology Studio'
  },
  {
    name: 'Client',
    date: '12/12/21',
    activityStatus: 'Open By Client',
    info: '@1359 - Burgundy Main Hours'
  },
  {
    name: 'Client',
    date: '12/09/21',
    activityStatus: 'Open By Client',
    info: '@1359 - Burgundy Main Hours'
  },
  {
    name: 'Client',
    date: '12/01/21',
    activityStatus: 'Open By Client',
    info: '@1359 - Burgundy Main Hours'
  },
  {
    name: 'Peter Friesen',
    date: '12/01/21',
    activityStatus: 'Created',
    info: '@2061 - New proposal'
  },
  {
    name: 'Client',
    date: '01/02/21',
    activityStatus: 'Submitted',
    info: '@2061 - Shure Farms Tech'
  },
  {
    name: 'Peter Friesen',
    date: '12/13/21',
    activityStatus: 'Set Drafts',
    info: '@2050 - Technology Studio'
  },
  {
    name: 'Client',
    date: '12/12/21',
    activityStatus: 'Open By Client',
    info: '@1359 - Burgundy Main Hours'
  },
  {
    name: 'Client',
    date: '12/09/21',
    activityStatus: 'Open By Client',
    info: '@1359 - Burgundy Main Hours'
  },
  {
    name: 'Client',
    date: '12/01/21',
    activityStatus: 'Open By Client',
    info: '@1359 - Burgundy Main Hours'
  },
  {
    name: 'Peter Friesen',
    date: '12/01/21',
    activityStatus: 'Created',
    info: '@2061 - New proposal'
  },
  {
    name: 'Client',
    date: '01/02/21',
    activityStatus: 'Submitted',
    info: '@2061 - Shure Farms Tech'
  },
]

@Component({
  selector: 'prt-payment-aside',
  templateUrl: './payment-aside.component.html',
  styleUrls: ['./payment-aside.component.scss']
})
export class PaymentAsideComponent implements OnInit {

  list: any = [];

  constructor() {
  }

  ngOnInit(): void {
    this.list = PAYMENT_REQUEST_ACTIVITY;
  }
}

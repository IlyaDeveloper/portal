import {Component, OnInit} from '@angular/core';

const PAYMENT_LIST = [
  {
    name: 'Meredith Palm',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due on Feb 2,2020',
    status: 'normal',
    additions:
      [
        {
          params: ['draft'],
          state: 'normal'
        },
        {
          params: ['Submitted'],
          state: 'warn'
        },
        {
          params: ['Paid'],
          state: 'success'
        },
        {
          params: ['Declined'],
          state: 'error'
        },
      ]
  },
  {
    name: 'Maxamiliano Montgomery',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due on Feb 2,2020',
    status: 'warn',
    additions:
      [
        {
          params: ['Submitted'],
          state: 'warn'
        },
        {
          params: ['Paid'],
          state: 'success'
        },
        {
          params: ['Declined'],
          state: 'error'
        },
      ]
  },
  {
    name: 'Maxamiliano Montgomery',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due on Feb 2,2020',
    status: 'warn',
    additions:
      [
        {
          params: ['submitted'],
          state: 'warn'
        },
        {
          params: ['Submitted'],
          state: 'warn'
        },
      ]
  },
  {
    name: 'Maxamiliano Montgomery',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Stripe Funding on Tuesday',
    status: 'success',
    additions:
      [
        {
          params: ['Paid • Stripe - ACH'],
          state: 'success'
        }
      ]
  },
  {
    name: 'Tobias Flenderson',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due on Jan 3, 2022',
    status: 'warn',
    additions:
      [
        {
          params: ['Viewed'],
          state: 'warn'
        },
        {
          params: ['Paid'],
          state: 'success'
        },
        {
          params: ['Declined'],
          state: 'error'
        },
      ]
  },
  {
    name: 'Maxamiliano Montgomery',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due on Jan 3, 2022',
    status: 'success',
    additions:
      [
        {
          params: ['Paid'],
          state: 'success'
        },
        {
          params: ['Error'],
          state: 'error'
        }
      ]
  },
  {
    name: 'Gabriel Susan Lewis',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due - Dec 30, 2022',
    status: 'error',
    additions:
      [
        {
          params: ['Declined'],
          state: 'error'
        },
        {
          params: ['Viewed'],
          state: 'warn'
        },
        {
          params: ['Paid'],
          state: 'success'
        },
      ]
  },

  {
    name: 'Meredith Palm',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due on Feb 2,2020',
    status: 'normal',
    additions:
      [
        {
          params: ['draft'],
          state: 'normal'
        },
        {
          params: ['Submitted'],
          state: 'warn'
        },
        {
          params: ['Paid'],
          state: 'success'
        },
        {
          params: ['Declined'],
          state: 'error'
        },
      ]
  },
  {
    name: 'Maxamiliano Montgomery',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due on Feb 2,2020',
    status: 'warn',
    additions:
      [
        {
          params: ['Submitted'],
          state: 'warn'
        },
        {
          params: ['Paid'],
          state: 'success'
        },
        {
          params: ['Declined'],
          state: 'error'
        },
      ]
  },
  {
    name: 'Maxamiliano Montgomery',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due on Feb 2,2020',
    status: 'warn',
    additions:
      [
        {
          params: ['submitted'],
          state: 'warn'
        },
        {
          params: ['Submitted'],
          state: 'warn'
        },
      ]
  },
  {
    name: 'Maxamiliano Montgomery',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Stripe Funding on Tuesday',
    status: 'success',
    additions:
      [
        {
          params: ['Paid • Stripe - ACH'],
          state: 'success'
        }
      ]
  },
]

@Component({
  selector: 'prt-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  list: any = [];

  constructor() {
  }

  ngOnInit(): void {
    this.list = PAYMENT_LIST;
  }
}

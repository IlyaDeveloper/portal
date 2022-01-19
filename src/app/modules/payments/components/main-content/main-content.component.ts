import {Component, OnInit} from '@angular/core';

const PAYMENT_LIST = [
  {
    name: 'Meredith palm',
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
          params: ['submitted'],
          state: 'normal'
        },
      ]
  },
  {
    name: 'Maximiliano Montgomery',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due on Feb 2,2020',
    status: 'warn',
    additions:
      [
        {
          params: ['draft'],
          state: 'warn'
        },
        {
          params: ['submitted'],
          state: 'warn'
        },
      ]
  },
  {
    name: 'Meredith palm',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due on Feb 2,2020',
    status: 'success',
    additions:
      [
        {
          params: ['draft'],
          state: 'normal'
        },
        {
          params: ['submitted'],
          state: 'success'
        },
      ]
  },
  {
    name: 'Meredith palm',
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
          params: ['submitted'],
          state: 'normal'
        },
      ]
  },
  {
    name: 'Maximiliano Montgomery',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Stripe Funding on tuesday 2,2020',
    status: 'success',
    additions:
      [
        {
          params: ['Paid - Sprite - ACH'],
          state: 'success'
        },
        {
          params: ['Actual - Test - Several'],
          state: 'warn'
        },
        {
          params: ['submitted'],
          state: 'success'
        },
        {
          params: ['Viewed'],
          state: 'warn'
        },
      ]
  },
  {
    name: 'Gabriel Susan',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due - Dec 30,2022',
    status: 'error',
    additions:
      [
        {
          params: ['Declined'],
          state: 'error'
        },
        {
          params: ['Submitted'],
          state: 'success'
        },
      ]
  },

  {
    name: 'Meredith palm',
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
          params: ['submitted'],
          state: 'normal'
        },
      ]
  },
  {
    name: 'Maximiliano Montgomery',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due on Feb 2,2020',
    status: 'warn',
    additions:
      [
        {
          params: ['draft'],
          state: 'warn'
        },
        {
          params: ['submitted'],
          state: 'warn'
        },
      ]
  },
  {
    name: 'Meredith palm',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due on Feb 2,2020',
    status: 'success',
    additions:
      [
        {
          params: ['draft'],
          state: 'normal'
        },
        {
          params: ['submitted'],
          state: 'success'
        },
      ]
  },
  {
    name: 'Meredith palm',
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
          params: ['submitted'],
          state: 'normal'
        },
      ]
  },
  {
    name: 'Maximiliano Montgomery',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Stripe Funding on tuesday 2,2020',
    status: 'success',
    additions:
      [
        {
          params: ['Paid - Sprite - ACH'],
          state: 'success'
        },
        {
          params: ['Actual - Test - Several'],
          state: 'warn'
        },
        {
          params: ['submitted'],
          state: 'success'
        },
        {
          params: ['Viewed'],
          state: 'warn'
        },
      ]
  },
  {
    name: 'Gabriel Susan',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due - Dec 30,2022',
    status: 'error',
    additions:
      [
        {
          params: ['Declined'],
          state: 'error'
        },
        {
          params: ['Submitted'],
          state: 'success'
        },
      ]
  },

  {
    name: 'Meredith palm',
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
          params: ['submitted'],
          state: 'normal'
        },
      ]
  },
  {
    name: 'Maximiliano Montgomery',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due on Feb 2,2020',
    status: 'warn',
    additions:
      [
        {
          params: ['draft'],
          state: 'warn'
        },
        {
          params: ['submitted'],
          state: 'warn'
        },
      ]
  },
  {
    name: 'Meredith palm',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due on Feb 2,2020',
    status: 'success',
    additions:
      [
        {
          params: ['draft'],
          state: 'normal'
        },
        {
          params: ['submitted'],
          state: 'success'
        },
      ]
  },
  {
    name: 'Meredith palm',
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
          params: ['submitted'],
          state: 'normal'
        },
      ]
  },
  {
    name: 'Maximiliano Montgomery',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Stripe Funding on tuesday 2,2020',
    status: 'success',
    additions:
      [
        {
          params: ['Paid - Sprite - ACH'],
          state: 'success'
        },
        {
          params: ['Actual - Test - Several'],
          state: 'warn'
        },
        {
          params: ['submitted'],
          state: 'success'
        },
        {
          params: ['Viewed'],
          state: 'warn'
        },
      ]
  },
  {
    name: 'Gabriel Susan',
    price: '123.45',
    id: '2056',
    date: '2/28/2022',
    sub: 'Whole Home Speaker Install',
    due: 'Due - Dec 30,2022',
    status: 'error',
    additions:
      [
        {
          params: ['Declined'],
          state: 'error'
        },
        {
          params: ['Submitted'],
          state: 'success'
        },
      ]
  },
]

@Component({
  selector: 'prt-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  list: any = [];

  constructor() {
  }

  ngOnInit(): void {
    this.list = PAYMENT_LIST;
  }

}

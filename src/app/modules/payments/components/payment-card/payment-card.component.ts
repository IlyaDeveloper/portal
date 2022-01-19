import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'prt-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() price: string = '';
  @Input() id: string = '';
  @Input() date: string = '';
  @Input() sub: string = '';
  @Input() due: string = '';
  @Input() status: any = '';
  @Input() additions: any = '';

  constructor() { }

  ngOnInit(): void {
  }
}

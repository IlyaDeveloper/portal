import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'prt-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() name: string = ''
  @Input() image: string = ''
  @Input() imageDescription: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }

}

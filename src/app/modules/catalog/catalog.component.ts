import {Component, OnInit} from '@angular/core';

const PRODUCTS_LIST = [
  {
    name: 'Samsung F22T350',
    image: 'https://content.rozetka.com.ua/goods/images/big/123239580.jpg',
    desc: 'Samsung F22T350'
  },
  {
    name: 'Samsung Curved C27F396F',
    image: 'https://content2.rozetka.com.ua/goods/images/big/106661765.jpg',
    desc: 'Samsung Curved C27F396F'
  },
  {
    name: 'Samsung UE43AU7100UXUA',
    image: 'https://content2.rozetka.com.ua/goods/images/big/178626971.jpg',
    desc: 'Samsung UE43AU7100UXUA'
  },
  {
    name: 'Samsung UE70AU7100UXUA',
    image: 'https://content2.rozetka.com.ua/goods/images/big/240790726.jpg',
    desc: 'Samsung UE70AU7100UXUA'
  },
  {
    name: 'Hisense 55E76GQ',
    image: 'https://content2.rozetka.com.ua/goods/images/big/233191059.jpg',
    desc: 'Hisense 55E76GQ'
  },
  {
    name: 'Samsung QE65QN900AUXUA',
    image: 'https://content1.rozetka.com.ua/goods/images/big/231763877.jpg',
    desc: 'Samsung QE65QN900AUXUA'
  },
  {
    name: 'Samsung F22T350',
    image: 'https://content.rozetka.com.ua/goods/images/big/123239580.jpg',
    desc: 'Samsung F22T350'
  },
  {
    name: 'Samsung Curved C27F396F',
    image: 'https://content2.rozetka.com.ua/goods/images/big/106661765.jpg',
    desc: 'Samsung Curved C27F396F'
  },
  {
    name: 'Samsung UE43AU7100UXUA',
    image: 'https://content2.rozetka.com.ua/goods/images/big/178626971.jpg',
    desc: 'Samsung UE43AU7100UXUA'
  },
  {
    name: 'Samsung UE70AU7100UXUA',
    image: 'https://content2.rozetka.com.ua/goods/images/big/240790726.jpg',
    desc: 'Samsung UE70AU7100UXUA'
  },
  {
    name: 'Hisense 55E76GQ',
    image: 'https://content2.rozetka.com.ua/goods/images/big/233191059.jpg',
    desc: 'Hisense 55E76GQ'
  },
  {
    name: 'Samsung QE65QN900AUXUA',
    image: 'https://content1.rozetka.com.ua/goods/images/big/231763877.jpg',
    desc: 'Samsung QE65QN900AUXUA'
  }
]


@Component({
  selector: 'prt-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  list: any = [];

  constructor() {

  }

  ngOnInit(): void {
    this.list = PRODUCTS_LIST;
  }
}

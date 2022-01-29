import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'prt-layout-root',
  templateUrl: './layout-root.component.html',
  styleUrls: ['./layout-root.component.scss']
})
export class LayoutRootComponent implements OnInit {

  constructor(private router: Router) {
  }

  get isCatalogPage(): boolean {
    return this.router.url.includes('catalog');
  }

  get isOthersPages(): boolean {
    return (
      this.router.url.includes('proposals')
      || this.router.url.includes('peoples')
      || this.router.url.includes('payments')
      || this.router.url.includes('orders')
    );
  }

  ngOnInit(): void {
  }
}

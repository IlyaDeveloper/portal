import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'prt-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {

  isSmallLogo: boolean = false;

  constructor() {
  }

  @HostListener('window:resize', ['$event']) onResize($event: any) {
    ($event.target.innerWidth <= 993)
      ? (this.isSmallLogo = true)
      : (this.isSmallLogo = false)
  }

  ngOnInit(): void {
    (window.innerWidth <= 993)
      ? (this.isSmallLogo = true)
      : (this.isSmallLogo = false)
  }
}

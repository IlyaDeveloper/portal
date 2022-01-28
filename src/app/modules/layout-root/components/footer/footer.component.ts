import {Component, HostBinding, OnInit} from '@angular/core';
import {NativeRefService} from "@core/refs/native-ref.service";

@Component({
  selector: 'prt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isShow: boolean = false;
  isApplyTheme: string = 'default'

  constructor(private native: NativeRefService) {
  }

  @HostBinding('class.--open') get isShowFooter(): boolean {
    return this.isShow;
  }

  ngOnInit(): void {
  }

  applyTheme(name: string) {
    this.native.html.setAttribute('theme', name);
    this.isApplyTheme = name;

  }

  showFooter() {
    this.isShow = !this.isShow;
  }
}

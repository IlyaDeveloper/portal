import {Component, OnInit} from '@angular/core';
import {NativeRefService} from "@core/refs/native-ref.service";

@Component({
  selector: 'prt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private native: NativeRefService) {
  }

  ngOnInit(): void {
  }

  applyTheme(name: string) {
    this.native.html.setAttribute('theme', name);
  }
}

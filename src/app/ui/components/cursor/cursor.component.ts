import {Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';
import {NativeRefService} from "@core/refs/native-ref.service";

@Component({
  selector: 'prt-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnDestroy {

  expand = false;
  cursorSize = 30 / 2;

  @ViewChild('cursorElm') cursorElm: any = ElementRef;

  @HostListener('document:click', ['$event'])
  onClick($event: any) {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500)
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: any) {
    this.cursorElm.nativeElement.style.top = ($event.pageY - this.cursorSize) + "px";
    this.cursorElm.nativeElement.style.left = ($event.pageX - this.cursorSize) + "px";
  }

  constructor(
    public native: NativeRefService) {
    this.native.html.classList.add('gm-cursor-null');
  }

  ngOnDestroy() {
    this.native.html.classList.remove('gm-cursor-null');
  }

}

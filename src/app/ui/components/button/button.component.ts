import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'prt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string = 'button';

  constructor() { }

  ngOnInit(): void {
  }

}

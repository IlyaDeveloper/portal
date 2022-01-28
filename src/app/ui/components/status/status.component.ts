import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'prt-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input() additions: any = [];

  disabledDropdown: boolean = false;
  checkItem: any = [];

  v1: string = '';
  v2: string = '';

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getData(this.additions[0].state, this.additions[0].params);
    }, 0);

    (this.additions.length > 1)
      ? (this.disabledDropdown = false)
      : (this.disabledDropdown = true)
  }

  getData(val: string, val2: string) {
    this.v1 = val;
    this.v2 = val2;
  }

  onClick(val: string, val2: string, event?: any) {
    this.getData(val, val2);

    console.log('event.target', event.target);

   let index = event.target.getAttribute('dataItem');
    console.log('checkItem', index);
  }
}

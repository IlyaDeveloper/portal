import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'prt-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input() additions: any = [];

  isToggleDropdown: boolean = false;

  v1: string = '';
  v2: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.getData(this.additions[0].state, this.additions[0].params);
  }

  openDropdown(): void {
    this.isToggleDropdown = !this.isToggleDropdown
  }

  getData(val: string, val2: string) {
    this.v1 = val;
    this.v2 = val2;
  }
}

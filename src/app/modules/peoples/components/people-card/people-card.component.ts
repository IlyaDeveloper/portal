import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'prt-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() position: string = '';
  @Input() phone: string = '';
  @Input() email: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}

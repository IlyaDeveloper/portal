import {Component, OnInit} from '@angular/core';

const USERS_CONTACTS = [
  {
    name: 'Pamela Beesly',
    position: 'Dunder Mifflin',
    phone: '(610) 212-5502',
    email: 'pamb@dundermifflin.com'
  },
  {
    name: 'Dunder Mifflin',
    position: null,
    phone: '(610) 944-5502',
    email: 'max@dundermifflin.com'
  },
  {
    name: 'Bob Vance',
    position: 'Maxamiliano Montgomery',
    phone: '(610) 313-2709',
    email: 'bob@vancerefrigeration.net'
  },
  {
    name: 'Erin Hannon',
    position: null,
    phone: '(484) 114-5494',
    email: 'kelly@dundermifflin.com'
  },
  {
    name: 'Jan Levinson',
    position: 'The White Pages',
    phone: '(610) 212-5502',
    email: 'janl@thewhitepages.com'
  },
  {
    name: 'Nate Nickerson',
    position: null,
    phone: '(610) 212-9054',
    email: 'nate@dundermifflin.com'
  },
  {
    name: 'Dwight Schrute',
    position: null,
    phone: '(610) 212-4112',
    email: 'dwights2@staples.com'
  },
  {
    name: 'Michael Scott',
    position: 'Department of Natural Resources',
    phone: '(610) 212-5502',
    email: 'michael.scott@state.co.us'
  },
  // {
  //   name: '',
  //   position: '',
  //   phone: '',
  //   email: ''
  // },
]

@Component({
  selector: 'prt-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {

  list: any = [];

  constructor() {
  }

  ngOnInit(): void {
    this.list = USERS_CONTACTS;
  }
}

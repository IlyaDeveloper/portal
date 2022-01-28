import {Component, Input} from '@angular/core';

@Component({
  selector: 'prt-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() smallLogo: boolean = false;

  constructor() { }

}

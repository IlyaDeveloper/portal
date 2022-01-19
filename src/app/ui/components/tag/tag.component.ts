import {Component} from '@angular/core';

@Component({
  selector: 'prt-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {

  isSelected: boolean = false;

  constructor() {
  }

   selectTab():void{
    this.isSelected = !this.isSelected;
  }

}

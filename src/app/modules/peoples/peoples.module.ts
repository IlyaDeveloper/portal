import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplesRoutingModule } from './peoples-routing.module';
import { PeoplesComponent } from './peoples.component';


@NgModule({
  declarations: [
    PeoplesComponent
  ],
  imports: [
    CommonModule,
    PeoplesRoutingModule
  ]
})
export class PeoplesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplesRoutingModule } from './peoples-routing.module';
import { PeoplesComponent } from './peoples.component';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UiModule} from "@ui/ui.module";

@NgModule({
  declarations: [
    PeoplesComponent,
    PeopleCardComponent
  ],
  imports: [
    CommonModule,
    PeoplesRoutingModule,
    RouterModule,
    FlexLayoutModule,
    UiModule
  ]
})
export class PeoplesModule { }

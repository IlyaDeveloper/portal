import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './components/logo/logo.component';
import {ButtonComponent} from './components/button/button.component';
import {TagComponent} from './components/tag/tag.component';
import {StatusComponent} from './components/status/status.component';
import {SearchComponent} from './components/search/search.component';
import {FormsModule} from "@angular/forms";
import {CursorComponent} from './components/cursor/cursor.component';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {FlexLayoutModule} from "@angular/flex-layout";

const COMPONENTS = [
  LogoComponent,
  ButtonComponent,
  TagComponent,
  StatusComponent,
  SearchComponent,
  CursorComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    NgbDropdownModule
  ]
})
export class UiModule {
}

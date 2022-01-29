import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UiModule} from "@ui/ui.module";
import {LayoutRootComponent} from "@modules/layout-root/layout-root.component";
import {AsideMenuComponent} from "@modules/layout-root/components/aside-menu/aside-menu.component";
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from "@modules/layout-root/components/header/header.component";
import {PaymentAsideComponent} from "@modules/layout-root/components/payment-aside/payment-aside.component";
import {InstantlyCardComponent} from './components/instantly-card/instantly-card.component';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

const COMPONENTS = [
  LayoutRootComponent,
  AsideMenuComponent,
  HeaderComponent,
  PaymentAsideComponent,
  FooterComponent,
  InstantlyCardComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    NgbDropdownModule,
    UiModule
  ]
})
export class LayoutRootModule {
}

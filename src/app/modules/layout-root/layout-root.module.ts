import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './components/header/header.component';
import {AsideMenuComponent} from './components/aside-menu/aside-menu.component';
import {LayoutRootComponent} from './layout-root.component';
import {PaymentAsideComponent} from './components/payment-aside/payment-aside.component';
import {MainContentComponent} from './components/main-content/main-content.component';
import {PaymentCardComponent} from './components/payment-card/payment-card.component';
import {ControlHeadComponent} from './components/control-head/control-head.component';
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UiModule} from "@modules/ui/ui.module";


@NgModule({
  declarations: [
    HeaderComponent,
    AsideMenuComponent,
    LayoutRootComponent,
    PaymentAsideComponent,
    MainContentComponent,
    PaymentCardComponent,
    ControlHeadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    UiModule,
  ]
})
export class LayoutRootModule {
}

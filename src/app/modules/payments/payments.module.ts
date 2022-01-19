import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentsRoutingModule} from './payments-routing.module';
import {PaymentsComponent} from './payments.component';
import {HeaderComponent} from "@modules/payments/components/header/header.component";
import {MainContentComponent} from "@modules/payments/components/main-content/main-content.component";
import {PaymentAsideComponent} from "@modules/payments/components/payment-aside/payment-aside.component";
import {PaymentCardComponent} from "@modules/payments/components/payment-card/payment-card.component";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UiModule} from "@ui/ui.module";

const COMPONENTS = [
  HeaderComponent,
  PaymentAsideComponent,
  MainContentComponent,
  PaymentCardComponent,
  PaymentsComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    PaymentsRoutingModule,
    UiModule
  ]
})
export class PaymentsModule {
}

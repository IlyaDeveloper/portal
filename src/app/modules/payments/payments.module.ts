import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentsRoutingModule} from './payments-routing.module';
import {PaymentsComponent} from './payments.component';
import {PaymentCardComponent} from "@modules/payments/components/payment-card/payment-card.component";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UiModule} from "@ui/ui.module";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

const COMPONENTS = [
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
    NgbDropdownModule,
    UiModule
  ]
})
export class PaymentsModule {
}

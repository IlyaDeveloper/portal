import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    CatalogComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }

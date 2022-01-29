import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutRootComponent} from "@modules/layout-root/layout-root.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutRootComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'catalog',
      },
      {
        path: 'catalog',
        loadChildren: () => import('./modules/catalog/catalog.module').then(m => m.CatalogModule)
      },
      {
        path: 'proposals',
        loadChildren: () => import('./modules/proposals/proposals.module').then(m => m.ProposalsModule)
      },
      {
        path: 'peoples',
        loadChildren: () => import('./modules/peoples/peoples.module').then(m => m.PeoplesModule)
      },
      {
        path: 'payments',
        loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule)
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'hope-404'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

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
        loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule)
      },
      {
        path: 'catalog',
        loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule)
      },
      {
        path: 'proposals',
        loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule)
      },
      {
        path: 'people',
        loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule)
      },
      {
        path: 'payments',
        loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule)
      },
      {
        path: 'payments',
        loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule)
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

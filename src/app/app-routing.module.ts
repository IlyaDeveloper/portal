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

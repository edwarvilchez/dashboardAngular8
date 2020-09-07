import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { BiometricsComponent } from './modules/biometrics/biometrics.component';
import { CustomersComponent } from './modules/customers/customers.component';
import { DevolutionsComponent } from './modules/devolutions/devolutions.component';
import { ProductsComponent } from './modules/products/products.component';


const routes: Routes = [
  // agregamos las rutas
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'biometrics',
        component: BiometricsComponent
      },
      {
        path: 'customers',
        component: CustomersComponent
      },
      {
        path: 'devolutions',
        component: DevolutionsComponent,
      },
      {
        path: 'products',
        component: ProductsComponent
      }
    ]
  }
// cierre de la declaración de las rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

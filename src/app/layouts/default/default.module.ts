import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

// modulo importado
import { SharedModule } from 'src/app/shared/shared.module';
// componentes importados
import { BiometricsComponent } from 'src/app/modules/biometrics/biometrics.component';
import { CustomersComponent } from 'src/app/modules/customers/customers.component';
import { DevolutionsComponent } from 'src/app/modules/devolutions/devolutions.component';
import { ProductsComponent } from 'src/app/modules/products/products.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    BiometricsComponent,
    CustomersComponent,
    DevolutionsComponent,
    ProductsComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class DefaultModule { }

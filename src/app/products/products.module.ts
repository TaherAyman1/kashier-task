import { ProductLandingComponent } from './product-landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';




@NgModule({
  declarations: [
    AllProductsComponent,
    ProductLandingComponent,
    AddEditProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }

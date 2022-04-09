import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductLandingComponent } from './product-landing.component';

const routes: Routes = [
  {
    path: '', component: ProductLandingComponent,
    children: [
      { path: '', component: AllProductsComponent },
      { path: 'add-edit', component: AddEditProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

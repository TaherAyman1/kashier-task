import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductLandingComponent } from './product-landing.component';

const routes: Routes = [
  {
    path: '', component: ProductLandingComponent,
    children: [
      { path: '', component: AllProductsComponent },
      { path: 'add', component: AddProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  productName: string = '';
  ShowSuccessMessage = false;
  filteredProducts: any = [];
  products: any;
  constructor(private router: Router, private productServices: ProductsService) {

  }
  ngOnInit() {
    this.productServices.$products.subscribe((res: any) => {
      this.products = res;
      this.filteredProducts = this.products;
    })

  }
  searchProduct() {

    this.filteredProducts = this.products.filter((res: any) =>
      res.name.toLowerCase().match(this.productName.toLowerCase())
    )
  }

  addProduct() {
    this.router.navigateByUrl('/add-edit');
  }

  directToProductDetails(product: any) {
    this.productServices.$product.next(product);
    this.productServices.$editProduct.next('edit');
    this.router.navigate(['/add-edit']);
  }

}

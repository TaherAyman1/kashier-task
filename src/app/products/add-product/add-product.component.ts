import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {

  productForm = new FormGroup({
    name: new FormControl('', Validators['required']),
    type: new FormControl('', Validators['required']),
    catg: new FormControl('', Validators['required']),
    subcatg: new FormControl('', Validators['required']),
    ref: new FormControl(''),
    password: new FormControl('', Validators['required']),
    fees: new FormControl('', Validators['required']),
    fessPercent: new FormControl('', Validators['required']),

  })
  product: any;
  editFlag: boolean = false;
  constructor(
    private productService: ProductsService,
    private router: Router,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {



    this.productService.$editProduct.subscribe((res: any) => {
      if (res == 'edit') {

        this.editFlag = true;
        this.productService.$product.subscribe((res: any) => {
          this.product = res;
          this.productForm.patchValue({
            name: this.product.name,
            type: this.product.type,
            catg: this.product.catg,
            subcatg: this.product.subcatg,
            ref: this.product.ref,
            password: this.product.password,
            fees: this.product.fees,
            fessPercent: this.product.fessPercent
          })
        })
      }
    })

  }

  addProduct(data: any) {

    Swal.fire({
      title: 'Save changes?',
      text: "Are you sure you want to save changes made?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00BCB4',
      cancelButtonColor: '#828282',
      confirmButtonText: 'Yes',
      cancelButtonText: 'Discard'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.editFlag == false) {
          this.productService.$products.next([...this.productService.$products.getValue().concat(data)]);
        } else if (this.editFlag == true) {
          this.productForm.setValue({
            name: this.productForm.controls['name'].value,
            type: this.productForm.controls['type'].value,
            catg: this.productForm.controls['catg'].value,
            subcatg: this.productForm.controls['subcatg'].value,
            ref: this.productForm.controls['ref'].value,
            password: this.productForm.controls['password'].value,
            fees: this.productForm.controls['fees'].value,
            fessPercent: this.productForm.controls['fessPercent'].value
          })
        }
        this.toastr.success('Changes saved successfully');
        this.router.navigateByUrl('');
      }
    })

  }



  deleteProduct(data: any) {

    Swal.fire({
      title: `Delete ${this.product.name}?`,
      text: "Are you sure you want to delete product? Once deleted, you won't be able to access it again.",
      showCancelButton: true,
      confirmButtonColor: '#C40000',
      cancelButtonColor: '#828282',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Discard'
    }).then((result) => {
      if (result.isConfirmed) {
        const productsArray: any[] = this.productService.$products.getValue();
        productsArray.forEach((res: any, index) => {

          if (res.name == data.name) {
            productsArray.splice(index, 1);
          }
        })
        this.productService.$products.next(productsArray);
        this.toastr.success('Product Deleted Successfully');

        this.router.navigateByUrl('');
      }
    })
  }

  ngOnDestroy(): void {
    this.productService.$editProduct.next('');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl('', Validators['required']),
    type: new FormControl('', Validators['required']),
    catg: new FormControl('', Validators['required']),
    subcatg: new FormControl('', Validators['required']),
    ref: new FormControl(''),
    password: new FormControl('', Validators['required']),
    fees: new FormControl('', Validators['required']),
    fessPrecent: new FormControl('', Validators['required']),

  })
  constructor(
    private productService :ProductsService,
    private router :Router) {
    
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.productForm.value.name);
    this.productService.$product.next(this.productForm.value.name)
    this.router.navigateByUrl('')
  }

}

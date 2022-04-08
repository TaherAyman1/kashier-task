import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  productName:string='';
  ShowSuccessMessage=false;
  products:any =[
    {name:'a'},
    {name:'b'}
  ];
  filteredProducts:any = [];
  constructor(private router :Router,private productServices :ProductsService){

  }
  ngOnInit() {
  this.productServices.$product.subscribe(res=>{
    console.log(this.products);
    
    if(res){
      this.products.push({name:res})
      this.showMessage()
    }
   
    
  })
     this.filteredProducts =this.products
  }


  showMessage(){
    this.ShowSuccessMessage=true
    setTimeout(() => {
      this.ShowSuccessMessage =false
    }, 3000);
  }

  searchProduct() {
    
    this.filteredProducts = this.products.filter((res:any) => 
       res.name.toLowerCase().match(this.productName.toLowerCase())
    )
}

addProduct(){
this.router.navigateByUrl('/add')
}

}

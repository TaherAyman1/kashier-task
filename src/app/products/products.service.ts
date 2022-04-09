import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  $product = new BehaviorSubject('');
  $editProduct = new BehaviorSubject('')
  $products = new BehaviorSubject<any[]>([
    { name: 'Product 1', type: 'lala', catg: 'ssss', subcatg: 'ooo', ref: 'www', password: '123', fees: '121', fessPercent: '2' },
    { name: 'Product 2', type: 'yayay', catg: 'hhh', subcatg: 'ppp', ref: 'xxx', password: '345', fees: '454', fessPercent: '1' },
    { name: 'Product 3', type: 'yayay', catg: 'hhh', subcatg: 'ppp', ref: 'xxx', password: '345', fees: '454', fessPercent: '1' },
  ]);
  constructor() { }


}

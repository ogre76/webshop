import { selectCountProducts } from './../cart-state/cart-selector';
import { addProduct, removeProduct } from './../cart-state/cart-actions';
import { PRODUCTS } from './../data/products.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../data/product.model';
import { ProductGroup, selectGroupedCartEntries } from '../cart-state/cart-selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cartEntries$: Observable<ProductGroup[]>;
  countAllProducts$: Observable<number>;
  constructor(private store:Store) { 
    this.cartEntries$ = store.select(selectGroupedCartEntries);
    this.countAllProducts$ = store.select(selectCountProducts)
  }

  ngOnInit(): void {
  }



  

 
}

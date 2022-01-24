import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct } from '../cart-state/cart.actions';
import { Product } from '../data/product.model';
import { PRODUCTS } from '../data/products.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  public products():Product[]{
    return PRODUCTS;
  }

  public buyProduct(product: Product){
    this.store.dispatch(addProduct(product));
  }
}

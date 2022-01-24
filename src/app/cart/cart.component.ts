import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../data/product.model';
import { selectGroupedCartEntries } from '../cart-state/cart.selector';
import { addProduct, removeProduct } from '../cart-state/cart.actions';
import { ProductGroup } from '../data/productgroup.mode';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartEntries$: Observable<ProductGroup[]>;
  
  constructor(private store: Store) { 
    this.cartEntries$ = store.select(selectGroupedCartEntries);
  }

  ngOnInit(): void {
  }

  public buyProduct(product: Product){
    this.store.dispatch(addProduct(product));
  }
  public deleteProduct(product: Product){
    this.store.dispatch(removeProduct(product));
  }

}

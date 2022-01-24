import { selectCountProducts, selectGroupedCartEntries } from './../cart-state/cart.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductGroup } from '../data/productgroup.mode';

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

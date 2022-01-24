import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCalcTotalPrice, selectGroupedCartEntries } from '../cart-state/cart.selector';
import { ProductGroup } from '../data/productgroup.mode';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  selectCartProducts$: Observable<ProductGroup[]>;
  selectTotalPrice$: Observable<number>;
  constructor(private store:Store) {
    this.selectCartProducts$ = store.select(selectGroupedCartEntries);
    this.selectTotalPrice$ = store.select(selectCalcTotalPrice);
  }

  ngOnInit() {
  }

}

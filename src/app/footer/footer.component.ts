import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectCalcTotalPrice } from '../cart-state/cart.selector';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  selectTotalPrice$ : Observable<number>;
  constructor(private store:Store) { 
    this.selectTotalPrice$ = store.select(selectCalcTotalPrice);
  }

  ngOnInit(): void {
  }

}

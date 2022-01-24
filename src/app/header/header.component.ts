import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountProducts } from '../cart-state/cart-selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public countProducts$: Observable<number>;
  constructor(private store:Store) { 
    this.countProducts$ = store.select(selectCountProducts);
  }

  ngOnInit(): void {
  }

}

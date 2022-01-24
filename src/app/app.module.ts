import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShopComponent } from './shop/shop.component';
import { MainComponent } from './main/main.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer, metaReducerLocalStorage } from './cart-state/cart.reducer';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ShopComponent,
    MainComponent,
    CartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {cartEntries: cartReducer },
      {metaReducers:[metaReducerLocalStorage]}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

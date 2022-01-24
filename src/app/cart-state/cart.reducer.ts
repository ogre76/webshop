import { clearCart, addProduct, removeProduct } from './cart.actions';
import { Product } from '../data/product.model';
import { ActionReducer, createReducer, INIT, on, UPDATE } from '@ngrx/store';

export const intialCartEntries: Product[] = [];

export const cartReducer = createReducer(
    intialCartEntries,
  on(clearCart, (_) => []),
  on(addProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(product);
    return entriesClone;
  }),

  on(removeProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find(p=>p.id == product.id);
    if(found){
        entriesClone.splice(entriesClone.indexOf(found),1)
    } 
    return entriesClone;
  })
);

export const metaReducerLocalStorage = (reducer:ActionReducer<any>): ActionReducer<any>=>{
  return (state, action) => {
    if(action.type === INIT || action.type === UPDATE){
      const storageValue = localStorage.getItem('state');
      if(storageValue){
        try{
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem('state');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  }
}



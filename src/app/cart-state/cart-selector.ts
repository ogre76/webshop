import { MapType } from "@angular/compiler";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { map } from "rxjs";
import { Product } from "../data/product.model";

export interface ProductGroup{
    product: Product;
    count:number;
}


export const selectCountProducts = createSelector(
    createFeatureSelector('cartEntries'), 
    (state:Product[]) =>{
        return state.length;
    }
);

export const selectCalcTotalPrice = createSelector(
  createFeatureSelector('cartEntries'),
  (state:Product[]) => {
    
    var sum= 0;
    state.forEach(p=>{
      sum = sum+p.price;
    })
    
    return sum;
  // const nextState = new Map([...map.entries()].sort());
  // return Array.from(nextState.values());
})
export const selectGroupedCartEntries = createSelector(
    createFeatureSelector('cartEntries'),
    (state: Product[]) => {
      var map: Map<number, ProductGroup> = new Map;
      state.forEach(p => {
        if (map.get(p.id)) {
          (map.get(p.id) as ProductGroup).count++;
        } else {
          map.set(p.id, { product: p, count: 1 });
        }
      })
  
      const sortedMap = new Map([...map.entries()].sort());
      return Array.from(sortedMap.values());
    }
  )
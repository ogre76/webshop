import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../data/product.model";
import { ProductGroup } from "../data/productgroup.mode";


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
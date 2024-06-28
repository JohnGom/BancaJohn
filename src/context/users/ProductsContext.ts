import {createContext} from 'react';
import {Products} from '../../model/product';

export type ProductsContextAction =
  | {type: 'PRODUCTS_FETCH'; products: Products}
  | {type: 'SAVE_PRODUCT'}
  | {type: 'UPDATE_PRODUCT'}
  | {type: 'DELETE_PRODUCT'}

export interface ProductsContextData {
  products: Products;
  finish: boolean;
}
export interface ProductsContextValue extends ProductsContextData {
  dispatch: (action: ProductsContextAction) => void;
}

export const ProductsContext = createContext<ProductsContextValue>({
  products: [],
  finish: false,
  dispatch: () => {},
});

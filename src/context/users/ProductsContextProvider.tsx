import React from 'react';
import {
  ProductsContext,
  ProductsContextAction,
  ProductsContextData,
} from './ProductsContext';

export default function ProductsContextProvider(props: {
  children: React.ReactNode;
}) {
  const [productState, dispatch] = React.useReducer<
    React.Reducer<ProductsContextData, ProductsContextAction>
  >((state, action) => {
    switch (action.type) {
      case 'PRODUCTS_FETCH':
        return {
          ...state,
          saved: false,
          Products: action.products,
        };
      case 'SAVE_PRODUCT':
        return {
          ...state,
          saved: true,
        };
      default:
        return state;
    }
  }, {} as ProductsContextData);

  return (
    <ProductsContext.Provider value={{...productState, dispatch}}>
      {props.children}
    </ProductsContext.Provider>
  );
}

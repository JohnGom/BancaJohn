import {useContext, useMemo} from 'react';
import {ProductsContext} from './ProductsContext';
import {Product, Products} from '../../model/product';
import { getProducts } from '../../api';

export const useProductsState = () => {
  const {products, saved} = useContext(ProductsContext);

  return useMemo(
    () => ({
      products,
      saved,
    }),
    [products, saved],
  );
};

export const useProductsActions = () => {
  const {dispatch} = useContext(ProductsContext);

  return useMemo(() => {
    return {
      async getProducts() {
        try {
          const products = await getProducts();
          if (products) {
            return dispatch({type: 'PRODUCTS_FETCH', products });
          }
        } catch (error) {}
      },

      async saveUser(user: Product) {
        try {
          //await saveUsersFirebase(user);
          return dispatch({type: 'SAVE_PRODUCT'});
        } catch (error) {}
      },
    };
  }, [dispatch]);
};

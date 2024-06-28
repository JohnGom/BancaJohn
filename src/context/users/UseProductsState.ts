import {useContext, useMemo} from 'react';
import {ProductsContext} from './ProductsContext';
import {ProductRequest, Products} from '../../model/product';
import {getProducts, saveProduct, updateProduct, deleteProduct} from '../../api';

export const useProductsState = () => {
  const {products, finish} = useContext(ProductsContext);

  return useMemo(
    () => ({
      products,
      finish,
    }),
    [products, finish],
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
            return dispatch({type: 'PRODUCTS_FETCH', products});
          }
        } catch (error) {}
      },

      async saveProduct(product: ProductRequest) {
        try {
          await saveProduct(product);
          return dispatch({type: 'SAVE_PRODUCT'});
        } catch (error) {}
      },

      async updateProduct(product: ProductRequest) {
        try {
          await updateProduct(product);
          return dispatch({type: 'UPDATE_PRODUCT'});
        } catch (error) {}
      },

      async deleteProduct(id: string) {
        try {
          await deleteProduct(id);
          return dispatch({type: 'DELETE_PRODUCT'});
        } catch (error) {}
      },
    };
  }, [dispatch]);
};

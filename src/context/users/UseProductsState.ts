import {useContext, useMemo} from 'react';
import {ProductsContext} from './ProductsContext';
import {Product, Products} from '../../model/product';

export const useUsersState = () => {
  const {products, saved} = useContext(ProductsContext);

  return useMemo(
    () => ({
      products,
      saved,
    }),
    [products, saved],
  );
};

export const useUsersActions = () => {
  const {dispatch} = useContext(ProductsContext);

  return useMemo(() => {
    return {
      async getUsers() {
        try {
          //const users = await getUsersFirebase();
          //if (users) {
            //return dispatch({type: 'PRODUCTS_FETCH', });
          //}
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

import React, { useContext, useReducer } from 'react';
import ShopContext from './context';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers';

const GlobalState = (props) => {
  const shop = useContext(ShopContext);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProduct = (product) => {
    console.log('Adding ' + product);
    dispatch({
      type: ADD_PRODUCT,
      product: product,
    });
  };

  const removeProduct = (productId) => {
    console.log('removing product with id ' + productId);
    dispatch({
      type: REMOVE_PRODUCT,
      productId: productId,
    });
  };

  return (
    <ShopContext.Provider
      value={{
        metals: shop.metals,
        cart: cartState.cart,
        addProduct: addProduct,
        removeProduct: removeProduct,
        cartItemsCount: cartState.cart.reduce((count, thisItem) => {
          return count + thisItem.qty;
        }, 0),
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;

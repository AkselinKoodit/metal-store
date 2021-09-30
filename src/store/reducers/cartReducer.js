import * as actionTypes from '../actions';

const INITIAL_STATE = {
  cart: [],
};

const cartReducer = (state = [INITIAL_STATE], action) => {
  let updatedCart;
  let updatedItemIndex;

  switch (action.type) {
    case actionTypes.INIT_CART:
      return action.data;
    case actionTypes.ADD_TO_CART:
      console.log('hello from cartReducer! adding a product are we? State is '+state);
      updatedCart = [...state];
      console.log('Updatedcart: '+updatedCart);
      updatedItemIndex = updatedCart.findIndex(
        (cart) => cart.id === action.payload.id
      );
      console.log(action.payload.id);
      console.log('UpdatedItemIndex looks like this: ' + updatedItemIndex);

      if (updatedItemIndex < 0) {
        updatedCart.push({
          ...action.payload,
          inCart: 1,
        });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.inCart++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      console.log(updatedCart);
      return updatedCart;

    case actionTypes.REMOVE_FROM_CART:
      console.log('hello from cartReducer! removing a product are we?');
      // return action.data;

      updatedCart = [...state];
      console.log('Cart: ' + updatedCart);

      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.inCart--;

      if (updatedItem.inCart <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }
      console.log(updatedCart);
      return updatedCart;
    default:
      return state;
  }
};

export default cartReducer;

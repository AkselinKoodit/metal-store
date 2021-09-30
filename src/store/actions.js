import {
  getAll,
  addNewMetal,
  removeOneFromCart,
  addOneToCartPost,
  getAllCarts,
  // toggleMetal,
} from '../services/metals';

export const ADD_METAL = 'ADD_METAL';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const INIT_METAL = 'INIT_METAL';
export const DELETE_METAL = 'DELETE_METAL';

export const INIT_CART = 'INIT_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const initializeMetals = () => {
  return async (dispatch) => {
    const metals = await getAll();
    dispatch({
      type: INIT_METAL,
      data: metals,
    });
  };
};

export const initializeCart = () => {
  return async (dispatch) => {
    const carts = await getAllCarts();
    dispatch({
      type: INIT_CART,
      data: carts,
    });
  };
};

export const addNew = (name, desc, pic, price) => {
  return async (dispatch) => {
    const newMetal = await addNewMetal(name, desc, pic, price);
    dispatch({
      type: ADD_METAL,
      data: newMetal,
    });
  };
};

export const addOneToCart = (id, name, price) => {
  return async (dispatch) => {
    const cartItem = await addOneToCartPost(id, name, price);
    dispatch({
      type: ADD_TO_CART,
      data: cartItem,
    });
  };
};

// export const addToCart = (metal) => {
//   return async (dispatch) => {
//     await addOneToCart(metal.id, metal.name, metal.price);
//     dispatch({
//       type: ADD_TO_CART,
//       data: metal,
//     });
//   };
// };


// export const addToCart = (metal) => {
//   return async (dispatch) => {
//     await addOneToCart(metal);
//     dispatch({
//       type: ADD_TO_CART,
//       payload: metal,
//     });
//   };
// };
// export const addToCart = (id, metal) => {
//   return async (dispatch) => {
//     await addOneToCart(id, metal);
//     dispatch({
//       type: ADD_TO_CART,
//       id: id,
//     });
//   };
// };

export const removeMetal = (cart) => {
  return async (dispatch) => {
    await removeOneFromCart(cart.name, cart.id);
    const carts = await getAllCarts();
    dispatch({
      type: REMOVE_FROM_CART,
      payload: carts,
    });
  };
};

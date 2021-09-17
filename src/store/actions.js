import {
  getAll,
  addNewMetal,
  removeOneMetal,
  addOneToCart,
  // toggleMetal,
} from '../services/metals';

export const ADD_METAL = 'ADD_METAL';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const INIT_METAL = 'INIT_METAL';
export const DELETE_METAL = 'DELETE_METAL';

export const INIT_CART = 'INIT_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
// export const ADJUST_AMOUNT = 'ADJUST_AMOUNT';
// export const LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM';

export const initializeMetals = () => {
  return async (dispatch) => {
    const metals = await getAll();
    dispatch({
      type: INIT_METAL,
      data: metals,
    });
  };
};

export const addNew = (name, desc, pic, inCart) => {
  inCart = 0;
  return async (dispatch) => {
    const newMetal = await addNewMetal(name, desc, pic, inCart);
    dispatch({
      type: ADD_METAL,
      data: newMetal,
    });
  };
};
// export const removeMetal = (id) => {
//   return async (dispatch) => {
//     await removeOneMetal(id);
//     const metals = await getAll();
//     dispatch({
//       type: DELETE_METAL,
//       data: metals,
//     });
//   };
// };

// export const addToCart = (id) => {
//   return async (dispatch) => {
//     await addOneToCart(id);
//     dispatch({
//       type: ADD_TO_CART,
//       data: id,
//     });
//   };
// };
export const addToCart = (metal) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: metal,
    });
  };
};
// export const addToCart = (id, metal) => {
//   return async (dispatch) => {
//     await addOneToCart(id, metal);
//     dispatch({
//       type: ADD_TO_CART,
//       id: id,
//     });
//   };
// };

export const removeMetal = (metal) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: metal,
    });
  };
};
// export const toggleDone = (id, metal) => {
//   return async (dispatch) => {
//     await toggleMetal(id, metal);
//     dispatch({
//       type: TOGGLE_COMPLETE,
//       id: id,
//     });
//   };
// };

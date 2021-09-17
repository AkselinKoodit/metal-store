import * as actionTypes from '../actions';

const INITIAL_STATE = {
  metals: [],
};

const productReducer = (state = [INITIAL_STATE], action) => {
  switch (action.type) {
    case actionTypes.DELETE_METAL:
      return action.data;
    case actionTypes.INIT_METAL:
      return action.data;
    case actionTypes.ADD_METAL:
      return [...state, action.data];
    // case actionTypes.TOGGLE_COMPLETE:
    //   const metalToChange = state.find((n) => n.id === action.id);
    //   const changeDone = {
    //     ...metalToChange,
    //     completed: !metalToChange.completed,
    //   };
    //   return state.map((metal) =>
    //     metal.id !== action.id ? metal : changeDone
    //   );
    // case actionTypes.ADD_TO_CART:
    //   // const metalToChange = state.find((n) => n.id === action.id);
    //   // return { ...metalToChange, inCart: state.inCart + 1 };
    //   return { inCart: state.inCart + 1 };
    // const addOne = {
    //   ...metalToChange,
    //   inCart: +1,
    // };
    // return state.map((metal) => (metal.id !== action.id ? metal : addOne));
    default:
      return state;
  }
};

export default productReducer;

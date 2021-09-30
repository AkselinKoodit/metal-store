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
      return action.data;
    default:
      return state;
  }
};

export default productReducer;

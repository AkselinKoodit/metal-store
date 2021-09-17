import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  metals: productReducer,
  cart: cartReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// const reducer = productReducer;
// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

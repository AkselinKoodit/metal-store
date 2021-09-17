import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';
import Main from './containers/Main';
import MetalsList from './containers/MetalsList';
import About from './components/About';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initializeMetals } from './store/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeMetals());
  }, [dispatch]);

  // const cartItemCount = useSelector((state) =>
  //   state.cart.reduce((count, curItem) => {
  //     return count + curItem.quantity;
  //   }, 0)
  // );

  return (
    <div className="app">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
};

export default App;

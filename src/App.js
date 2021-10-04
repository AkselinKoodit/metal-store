import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';
import Main from './containers/Main';
import React, { useEffect, useContext, createContext, useState } from 'react';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(initializeMetals());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(initializeCart());
  // }, [dispatch]);

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

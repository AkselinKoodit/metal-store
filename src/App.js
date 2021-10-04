import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';
import Main from './containers/Main';
import React, { useEffect, useContext, createContext, useState } from 'react';
import GlobalState from './context/GlobalState';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(initializeMetals());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(initializeCart());
  // }, [dispatch]);

  return (
    <GlobalState>
      <div className="app">
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </div>
    </GlobalState>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes'

import Header from "./components/shared/Header";

import  { StateContext } from './state-context';
import { initStore } from './store';

const store = initStore();

const App = () => {
  return (
    <StateContext.Provider value={store} >
      <Router>
        <Header />
        <Routes />
      </Router>
    </StateContext.Provider>
  );
};

export default App;

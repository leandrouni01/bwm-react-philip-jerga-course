import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes'

import Header from "./components/shared/Header";

import  { StateContext } from './state-context';
import store from './store';


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

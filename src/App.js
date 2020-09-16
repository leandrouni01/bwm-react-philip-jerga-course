import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes'

import Header from "./components/shared/Header";

import  { Provider } from './store/Provider';
import { initStore } from './store';

const store = initStore();

const App = () => {
  return (
    <Provider store={store} >
      <Router>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;

import React, { useState } from "react";
import propTypes from "prop-types";
import "./CounterApp.css";
import CounterView from "./CounterView";

const functions = new Set();

const CounterApp = (props) => {

  const [count, setCount] = useState(0);
  const { title } = props;
  const [anyNumber, setAnyNumber] = useState(99);


  const mutateCount = React.useCallback((step) => ()=> setCount(count + step),[count]);
  const changeAnyNumber = React.useCallback(()=> () => setAnyNumber(anyNumber + 1),[anyNumber]);

  // React.useCallback returns the same function as a callback if the state in the didn´t change
  // so you save memory(use in case of an overly updated function)

  functions.add(mutateCount);
  functions.add(changeAnyNumber);

  return (
    <div>
      <h2>Hello World</h2>
      <div className="counter-app">
        <h1>{title}</h1>
        <CounterView 
        countValue={count}
        handleIncrement={mutateCount}
        />
        <button onClick={changeAnyNumber()}>Click Me</button>
        <h1>Functions: {functions.size} </h1>
      </div>
    </div>
  )
}

CounterApp.propTypes = {
title: propTypes.string.isRequired
};


export default CounterApp;

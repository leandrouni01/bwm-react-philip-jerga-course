import React, { useState } from "react";
import propTypes from "prop-types";
import "./CounterApp.css";
import CounterView from "./CounterView";


const CounterApp = (props) => {

  const [count, setCount] = useState(0);
  const { title } = props;

  const mutateCount = (step) => ()=> setCount(count + step);

  return (
    <div>
      <h2>Hello World</h2>
      <div className="counter-app">
        <h1>{title}</h1>
        <CounterView 
        countValue={count}
        handleIncrement={mutateCount}
        />
      </div>
    </div>
  )
}

CounterApp.propTypes = {
title: propTypes.string.isRequired
};


export default CounterApp;

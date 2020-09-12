
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';

//const h2Element = React.createElement('i', null,' What a nice day');
//const helloWorldElement = React.createElement('h1', {className: 'title'}, 'Hello World', h2Element);
const rootElement = document.getElementById('root');


ReactDOM.render(React.createElement(App,null,null), rootElement);
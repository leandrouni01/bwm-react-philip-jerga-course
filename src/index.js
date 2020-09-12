
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

const h2Element = React.createElement('i', null,' What a nice day');
const helloWorldElement = React.createElement('h1', {className: 'title'}, 'Hello World', h2Element);
const rootElement = document.getElementById('root');

ReactDOM.render(helloWorldElement, rootElement);
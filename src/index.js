
import ReactDOM from 'react-dom';
import React from 'react';

const helloWorldElement = React.createElement('h1', null, 'Hello World');
const rootElement = document.getElementById('root');

ReactDOM.render(helloWorldElement, rootElement);
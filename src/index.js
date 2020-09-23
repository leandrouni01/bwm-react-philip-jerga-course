
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';


import './index.scss';
import 'bootstrap/dist/js/bootstrap.js';

// eslint-disable-next-line
import library from './fontAwesome';

const rootElement = document.getElementById('root');
ReactDOM.render(React.createElement(App,null,null), rootElement);

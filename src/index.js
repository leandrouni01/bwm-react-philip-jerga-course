
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap/dist/js/bootstrap.js'

const rootElement = document.getElementById('root');
ReactDOM.render(React.createElement(App,null,null), rootElement);

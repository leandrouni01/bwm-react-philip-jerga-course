
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

//const h2Element = React.createElement('i', null,' What a nice day');
//const helloWorldElement = React.createElement('h1', {className: 'title'}, 'Hello World', h2Element);
const rootElement = document.getElementById('root');

function App (props) {
    return (
        <h1 className={props.className}>
            Hello World <i>What a nice day</i>
        </h1>
    );
}

ReactDOM.render(React.createElement(App, {className: "title"}), rootElement);
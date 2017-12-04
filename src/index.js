import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { BrowserHistory } from 'react-history';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


ReactDOM.render( <App/>, document.getElementById('root'));
registerServiceWorker();

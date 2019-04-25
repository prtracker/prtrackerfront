import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import Header from './components/Header';

ReactDOM.render(
 <Provider store={configureStore()}>
  <Router>
      <Route path='/' component={App} />
      <Route path='/add-pr' component={Header} />
  </Router>
 </Provider>,
 document.getElementById('root'),
);

serviceWorker.register();
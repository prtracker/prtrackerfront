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
import PRList from './components/PrListing';
import AddPR from './components/AddPR';

ReactDOM.render(
 <Provider store={configureStore()}>
  <Router>
      <Route path='/' component={App} />
      <Route path='/view-pr' component={PRList} />
      <Route path='/add-pr' component={AddPR} />
  </Router>
 </Provider>,
 document.getElementById('root'),
);

serviceWorker.register();
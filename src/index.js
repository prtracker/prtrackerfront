import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from 'react-router-dom';
import './index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import rootReducer from './reducers/rootReducer';
import { fetchAllPRs } from './actions/prListAction';
import PRList from './containers/PrListContainer';
import AddPR from './components/AddPR';

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store, 'store');
store.dispatch(fetchAllPRs());

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <Route path='/' component={App} />
        <Route path='/view-pr' component={PRList} />
        <Route path='/add-pr' component={AddPR} />
        </Router>
    </Provider>, document.getElementById('root'));

serviceWorker.register();
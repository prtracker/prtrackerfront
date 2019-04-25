import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import Test from './components/Header';

const routes = (
    <Route component={App} path="/" />
);

export default routes;
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Registration from '../components/Registration';
import HandleEntry from '../components/HandleEntry';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <HandleEntry />
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/registration" component={Registration} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
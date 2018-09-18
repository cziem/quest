import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Registration from '../components/Registration';
import NotFound from '../components/NotFound';
import Dashboard from "../components/Dashboard";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/registration" component={Registration} exact={true} />
        <Route path="/dashboard/:id" component={Dashboard} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter

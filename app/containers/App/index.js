/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage/Loadable';
import Login from '../Login/Loadable';
import GlobalStyle from '../../global-styles';
import Chat from '../ChatWindow/Loadable';

const checkAuth = () => {
  const token = localStorage.getItem('token');
  return token;
};

const AuthRoute1 = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (  
    !checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/' }} />
      )
  )}
  />
);

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={props => (
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    )}
  />
);

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute1 path="/login" component={Login} />
        <AuthRoute exact path="/home" component={Chat} />
        <AuthRoute component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

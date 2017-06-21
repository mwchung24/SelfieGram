import React from 'react';
import Site from './site/site';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <section className="main-content">
      <ProtectedRoute path="/" component={Site} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
    </section>
  </div>
);

export default App;

import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>

      <ProtectedRoute exact path="/" component={GreetingContainer} />
    </header>
    <section>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
    </section>
  </div>
);

export default App;

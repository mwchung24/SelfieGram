import React from 'react';
import Site from './site/site';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div>
    <ModalContainer />
    <section className="main-content">
      <Switch>
        <ProtectedRoute exact path="/" component={Site} />
        <ProtectedRoute exact path="/users/:id" component={Site} />
        <ProtectedRoute exact path="/users/:id/edit" component={Site} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
      </Switch>
    </section>
    <section className="footer">
      <footer>
        <div className="footer-left">
          <a href="https://github.com/mwchung24">GitHub</a>
          <a href="http://www.martinwchung.com/">Portfolio</a>
          <a href="https://www.linkedin.com/in/martinwchung/">Linkedin</a>
        </div>

        <div className="footer-right">
          Martin Chung © 2017 SelfieGram
        </div>
      </footer>
    </section>
  </div>
);

export default App;

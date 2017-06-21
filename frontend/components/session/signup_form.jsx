import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li key={error}>{error}</li>);
        })
      );
    }
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup({user})
    .then ( () => this.props.history.push('/'));
  }

  handleDemoLogin(e) {
    e.preventDefault();

    const user = {
      username: 'martin123',
      password: 'martin123'
    };

    this.props.login({user})
    .then ( () => this.props.history.push('/'));
  }

  // linkRendered() {
  //   const page = this.props.formType;
  //   if (page === 'login') {
  //     return (
  //       <Link to="/signup">
  //         Sign Up
  //       </Link>
  //     );
  //   } else {
  //     return (
  //       <Link to="/login">
  //         Log In
  //       </Link>
  //     );
  //   }
  // }

  render() {
    // const buttonName = this.props.formType === 'signup' ? 'Sign up' : 'Log in';

    return (
      <section className="main">
        <div className="signup-form">
          <h1 className="selfiegram">SelfieGram</h1>
          <h2 className="signup-message">Sign up to share your selfies with your friends.</h2>

          <div className="or-line">
            <div className="or-line-line"></div>
            <div className="or-line-or">OR</div>
            <div className="or-line-line"></div>
          </div>

          <button className="demo-button" onClick={this.handleDemoLogin}>Demo Log in</button>

          <form onSubmit={this.handleSubmit}>
            <label>
              <input placeholder="Username" onChange={this.update("username")} value={this.state.username}/>
            </label>

            <label>
              <input placeholder="Password" onChange={this.update("password")} value={this.state.password} type="password"/>
            </label>

            <div className="signup-button-wrap">
              <button className="signup-button">Sign up</button>
            </div>
          </form>

          <ul className="signup-errors">
            {this.errors()}
          </ul>
          <div className="terms">
            <nav>By signing up, you agree to our</nav>
            <nav><a className="bolded">Terms</a> & <a className="bolded">Privacy Policy.</a></nav>
          </div>
        </div>

        <div className="redirect-to-login">
          <nav className="signup-login">
            <span>Have an account? </span><Link className="login-link" to="/login">
              Log In
            </Link>
          </nav>
        </div>
      </section>
    );
  }
}

export default withRouter(SignupForm);

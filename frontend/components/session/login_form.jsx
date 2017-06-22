import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentDidMount() {
    this.props.receiveCurrentUser(this.props.user);
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
    this.props.login({user})
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
          <div className="session-photo">
            <img className="photo" src={ window.images.phones} />
          </div>

          <div className="form">
            <div className="login-form">
              <h1 className="selfiegram">SelfieGram</h1>

              <form className="input-form" onSubmit={this.handleSubmit}>
                <label className="for-margin">
                  <input placeholder="Username" onChange={this.update("username")} value={this.state.username}/>
                </label>

                <label className="for-margin">
                  <input placeholder="Password" onChange={this.update("password")} value={this.state.password} type="password"/>
                </label>

                <div className="login-button-wrap">
                  <button className="login-button">Log in</button>
                </div>

                <div className="or-line">
                  <div className="or-line-line"></div>
                  <div className="or-line-or">OR</div>
                  <div className="or-line-line"></div>
                </div>

              </form>
              <button className="demo-button" onClick={this.handleDemoLogin}>Demo Log in</button>
              <ul className="login-error">
                {this.errors()}
              </ul>
            </div>

            <div className="redirect-to-signup">
              <nav className="login-signup">
                <span className="link-to-signup">Don't have an account? </span><Link className="signup-link" to="/signup">
                  Sign Up
                </Link>
              </nav>
            </div>
          </div>

        </section>


    );
  }
}

export default withRouter(LoginForm);

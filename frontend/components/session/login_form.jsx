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
      <section className="login-form">

        <h1 className="selfiegram">SelfieGram</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="for-margin">
            <input placeholder="Username" onChange={this.update("username")} value={this.state.username}/>
          </label>
          <br/>
          <label className="for-margin">
            <input placeholder="Password" onChange={this.update("password")} value={this.state.password} type="password"/>
          </label>
          <br/>
          <button className="login-button">Log in</button>
          <ul>
            {this.errors()}
          </ul>
        </form>


        <nav className="login-signup">
          <span className="link-to-signup">Don't have an account? </span><Link className="signup-link" to="/signup">
            Sign Up
          </Link>
        </nav>
      </section>
    );
  }
}

export default withRouter(LoginForm);

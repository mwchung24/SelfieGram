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
      <section className="session-form">
        <span>Sign up to share your selfies with your friends.</span>
        
        <form onSubmit={this.handleSubmit}>
          <label>
            <input placeholder="Username" onChange={this.update("username")} value={this.state.username}/>
          </label>
          <br/>
          <label>
            <input placeholder="Password" onChange={this.update("password")} value={this.state.password} type="password"/>
          </label>
          <br/>
          <button>Sign up</button>
          <ul>
            {this.errors()}
          </ul>
        </form>

        <nav>By signing up, you agree to our</nav>
        <nav>Terms & Privacy Policy</nav>
        <nav className="login-signup">
          <span>Have an account? </span><Link to="/login">
            Log In
          </Link>
        </nav>
      </section>
    );
  }
}

export default withRouter(SignupForm);

import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordverif: "",
      firstName: "",
      lastName: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // On transmet (on bind) à la fonction le context de l'event à l'aide de bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    let myJson = JSON.stringify(this.state, 1, 1);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{myJson}</h1>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="rox@gmail.com"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            name="password1"
            id="password"
            placeholder="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input
            type="password"
            name="password2"
            id="passwordverif"
            placeholder="password"
            onChange={e => this.setState({ passwordverif: e.target.value })}
          />
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="firstname"
            onChange={e => this.setState({ firstname: e.target.value })}
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="lastname"
            onChange={e => this.setState({ lastname: e.target.value })}
          />
          <input type="submit" value="Soumettre" />
        </form>
      </div>
    );
  }
}

export default SignUp;

import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  submitHandler = async event => {
    event.preventDefault();
    let data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    let response = await fetch("/login", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    let responseBody = await response.text();
    let body = JSON.parse(responseBody);
    if (body.success) {
      alert("Login Success");
      this.props.dispatch({ type: "login-success" });
    }
  };
  render = () => {
    return (
      <form onSubmit={this.submitHandler} className="login-box">
        <div className="textbox">
          <i class="fa fa-user" aria-hidden="true"></i>
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          ></input>
        </div>
        <div className="textbox">
          <i class="fa fa-lock" aria-hidden="true"></i>
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          ></input>
        </div>
        <div>
          <input type="submit" value="LOGIN" className="btn" />
        </div>
      </form>
    );
  };
}
let Login = connect()(UnconnectedLogin);
export default Login;

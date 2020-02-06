import React, { Component } from "react";
import { connect } from "react-redux";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Content from "./Content.jsx";

class UnconnectedApp extends Component {
  render = () => {
    if (this.props.lgin) {
      return (
        <div>
          <Content />
        </div>
      );
    }
    return (
      <div className="background">
        <Signup />
        <Login />
      </div>
    );
  };
}
let mapStateToProps = state => {
  return { lgin: state.loggedIn };
};
let App = connect(mapStateToProps)(UnconnectedApp);
export default App;

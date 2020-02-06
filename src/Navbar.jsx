import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import styled from "styled-components";

class UnconnectedNavbar extends Component {
  logout = () => {
    this.props.dispatch({ type: "logout" });
  };
  render() {
    return (
      <div className="Navbar">
        <div>
          <Link to="/sell" className="navbar-link">
            Sell
          </Link>
        </div>
        <div>
          <Link to="/">
            <img height="80px" src="/static/logoM.png" />
          </Link>
        </div>
        <div>
          <Link to="/cart" className="navbar-link">
            Cart (<span>{this.props.cartSize}</span>)
          </Link>
        </div>
        <div>
          <button onClick={this.logout} className="navbar-link">
            {" "}
            Logout
          </button>
        </div>
      </div>
    );
  }
}
let Navbar = connect()(UnconnectedNavbar);
export default Navbar;

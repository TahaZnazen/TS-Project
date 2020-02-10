import React, { Component } from "react";
import "./navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainAuth from "../Auth/MainAuth";

export default class NavBar extends Component {
  state = {
    auth: false
  };
  changeAuthState() {
    this.setState({
      auth: !this.state.auth
    });
  }
  popUp() {
    document.getElementById("root").style.backgroundColor = "red";
  }
  render() {
    return (
      <nav id="mainNavbar">
        <h1>LogoPlace</h1>
        <div id="mainNav">
          <div>
            <h4>For Employers</h4>
            <h4>For Employee</h4>
          </div>
          <div id="navDiv">
            <h4 onClick={this.changeAuthState.bind(this)}>Sign In</h4>
            <h4 onClick={this.changeAuthState.bind(this)}>Sign Up</h4>
          </div>
        </div>
        {this.state.auth && (
          <MainAuth authControl={this.changeAuthState.bind(this)} />
        )}
      </nav>
    );
  }
}

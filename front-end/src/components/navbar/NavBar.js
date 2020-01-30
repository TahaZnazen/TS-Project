import React, { Component } from "react";
import "./navbar.css";
export default class NavBar extends Component {
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
            <h4>Sign In</h4>
            <h4>Sign Up</h4>
          </div>
        </div>
      </nav>
    );
  }
}

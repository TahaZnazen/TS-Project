import React, { Component } from "react";
import "./navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainAuth from "../Auth/MainAuth";

export default class NavBar extends Component {
  render() {
    return (
      <Router>
        <nav id="mainNavbar">
          <h1>LogoPlace</h1>
          <div id="mainNav">
            <div>
              <h4>For Employers</h4>
              <h4>For Employee</h4>
            </div>
            <div id="navDiv">
              <Link to="Auth">
                <h4>Sign In</h4>
              </Link>

              <Link to="Auth">
                <h4>Sign Up</h4>
              </Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/Auth">
              <MainAuth />
            </Route>
          </Switch>
        </nav>
      </Router>
    );
  }
}

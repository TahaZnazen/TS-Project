import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./User-auth/Login";
import Register from "./User-auth/Register";
import CompanyLogin from "./Company-auth/CompLogin";
import CompanyRegister from "./Company-auth/CompRegister";
import FirstPage from "../FirstPAge/FirstPage";
import "./auth.css";
class MainAuth extends Component {
  render() {
    return (
      <Router>
        <div id="auth">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around"
            }}
          >
            <Link to="/Employers">
              <button className="authBtn">Employers</button>
            </Link>
            <Link to="/Employee">
              <button className="authBtn">Employee</button>
            </Link>
            <Link to="/">
              <button className="authBtn">x</button>
            </Link>
          </div>

          <Switch>
            <Route exact path="/Employers">
              <CompanyLogin />
            </Route>
            <Route exact path="/Employers/Register">
              <CompanyRegister />
            </Route>
            <Route exact path="/Employee">
              <Login />
            </Route>
            <Route exact path="/Employee/Register">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MainAuth;

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./User-auth/Login";
import Register from "./User-auth/Register";
import CompanyLogin from "./Company-auth/CompLogin";
import CompanyRegister from "./Company-auth/CompRegister";
import "./auth.css";
class MainAuth extends Component {
  render() {
    return (
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
            <button onClick={this.props.authControl} className="authBtn">
              x
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainAuth;

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
        <button onClick={this.props.authControl} className="authBtn">
          x
        </button>
        <div className="employee">
          <h1>
            <Link
              to="/Employee"
              style={{ textDecoration: "none", color: "white" }}
            >
              For Employee
            </Link>
          </h1>
        </div>
        <div className="employers">
          <h1>
            <Link
              to="/Employers"
              style={{ textDecoration: "none", color: "white" }}
            >
              For Employers
            </Link>
          </h1>
        </div>
      </div>
    );
  }
}

export default MainAuth;
{
  /*
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
 */
}

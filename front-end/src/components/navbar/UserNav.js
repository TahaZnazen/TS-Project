import React, { Component } from "react";
import "./navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainAuth from "../Auth/MainAuth";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import { withRouter } from "react-router-dom";

class UserNav extends Component {
  state = {
    auth: false
  };
  changeAuthState() {
    this.setState({
      auth: !this.state.auth
    });
  }
  onLogout() {
    this.props.logout(this.props);
  }
  popUp() {
    document.getElementById("root").style.backgroundColor = "red";
  }
  render() {
    console.log(this.props);
    return (
      <nav id="mainNavbar">
        <h1>LogoPlace</h1>
        <div id="mainNav">
          <div>
            <Link to="/profileUser">
              <h4>profile</h4>
            </Link>
            <Link to="/Jobs">
              <h4>jobs</h4>
            </Link>
            <Link to="/cv">
              <h4>edit cv</h4>
            </Link>
          </div>
          {this.props.authInfo.token ? (
            <div id="navDiv">
              <h4 onClick={this.onLogout.bind(this)}> logout</h4>
            </div>
          ) : (
            <div id="navDiv">
              <h4 onClick={this.changeAuthState.bind(this)}>Sign In</h4>
              <h4 onClick={this.changeAuthState.bind(this)}>Sign Up</h4>
            </div>
          )}
        </div>
        {this.state.auth && (
          <MainAuth authControl={this.changeAuthState.bind(this)} />
        )}
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  authInfo: state.auth
});
export default withRouter(connect(mapStateToProps, { logout })(UserNav));

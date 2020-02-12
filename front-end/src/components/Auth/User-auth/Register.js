import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./userAuth.css";
import axios from "axios";
import { registerAuth } from "../../../actions/authActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Alert } from "reactstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      passwordConfirmation: "",
      email: ""
    };

    this.Change = this.Change.bind(this);
    this.Submit = this.Submit.bind(this);
  }

  Submit(e) {
    e.preventDefault();
    if (
      this.state.email !== "" &&
      this.state.password !== "" &&
      this.state.passwordConfirmation === this.state.password &&
      this.state.name
    ) {
      let data = this.state;
      this.props.registerAuth({ data }, this.props);
    }
  }
  Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div className="login">
        <div className="loginInfo ">
          <h1>user register</h1>

          <form className="AuthForm">
            {this.props.authInfo.errMsg && (
              <div
                style={{ height: "40px", width: "90%" }}
                className="alert alert-danger"
                role="alert"
              >
                {this.props.authInfo.errMsg}
              </div>
            )}
            <input
              name="name"
              placeholder="user name ... "
              onChange={this.Change}
              type="text"
            />
            <input
              name="password"
              placeholder="password ..."
              onChange={this.Change}
              type="password"
            />
            <input
              name="passwordConfirmation"
              placeholder="password Confirmation ..."
              onChange={this.Change}
              type="password"
            />
            <input
              name="email"
              placeholder="RBK@gmail.com"
              onChange={this.Change}
              type="email"
            />

            <button type="submit" onClick={this.Submit}>
              Register
            </button>
          </form>
          <Link to="/Employee">
            <h5>Login</h5>
          </Link>
        </div>
        <div className="loginFormPhoto regphoto"></div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  authInfo: state.auth
});
export default withRouter(connect(mapStateToProps, { registerAuth })(Register));

import React, { Component } from "react";
import { Link, Redirect, BrowserRouter } from "react-router-dom";
import "./userAuth.css";
import axios from "axios";
import { loginAuth } from "../../../actions/authActions";
import history from "../../../history";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Alert } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.Change = this.Change.bind(this);
    this.Submit = this.Submit.bind(this);
  }

  Submit(e) {
    e.preventDefault();
    if (this.state.email !== "" && this.state.password !== "") {
      let data = this.state;
      console.log(data);
      this.props.loginAuth({ data }, this.props);
      console.log(this.props.authInfo.isAuthenticated);
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.authInfo.isAuthenticated != null) {
  //     ;
  //     // window.location.reload();
  //   }
  // }
  redirect() {
    return <Redirect to="/target" />;
  }
  Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return !this.props.authInfo.token ? (
      <div className="login">
        <div className="loginInfo">
          <h1 onClick={() => console.log(this.props)}>user login</h1>

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
              name="email"
              placeholder="RBk@gmail.com "
              onChange={this.Change}
              type="email"
            />
            <input
              name="password"
              placeholder="Password ..."
              onChange={this.Change}
              type="passWord"
            />
            <button type="submit" onClick={this.Submit}>
              Login
            </button>
          </form>
          <Link to={"/Employee/Register"}>
            <h5>register</h5>
          </Link>
          <Link to={"/Employee/forgetpassword"}>
            <h5>forget password</h5>
          </Link>
        </div>
        <div className="loginFormPhoto"></div>
      </div>
    ) : (
      <h1>you are already logged ind</h1>
    );
  }
}

const mapStateToProps = state => ({
  authInfo: state.auth
});
export default withRouter(connect(mapStateToProps, { loginAuth })(Login));

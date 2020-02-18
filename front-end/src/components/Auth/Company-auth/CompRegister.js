import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./companyAuth.css";
import axios from "axios";
import { companyRegisterAuth } from "../../../actions/authActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import swal from "sweetalert";

class CompanyRegister extends Component {
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
      this.props.companyRegisterAuth({ data }, this.props);
    }
  }
  Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return !this.props.authInfo.token ? (
      <div>
        <h1 onClick={() => console.log(this.props)}>company register</h1>

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
            placeholder="Password ..."
            onChange={this.Change}
            type="passWord"
          />
          <input
            name="passwordConfirmation"
            placeholder="passWord Verification ..."
            onChange={this.Change}
            type="passWord"
          />
          <input
            name="email"
            placeholder="RBK@gmail.com"
            onChange={this.Change}
            type="email"
          />

          <button type="submit" onClick={this.Submit}>
            register
          </button>
        </form>
        <Link to="/Employers">
          <h5>Sign In</h5>
        </Link>
      </div>
    ) : (
      <h1>you are already logged in</h1>
    );
  }
}
const mapStateToProps = state => ({
  authInfo: state.auth
});
export default withRouter(
  connect(mapStateToProps, { companyRegisterAuth })(CompanyRegister)
);

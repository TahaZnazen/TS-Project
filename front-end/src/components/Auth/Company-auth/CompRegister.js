import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./companyAuth.css";
import axios from "axios";
import { companyRegisterAuth } from "../../../actions/authActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
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
    return (
      <div>
        <h1>company register</h1>

        <form className="AuthForm">
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
            Login
          </button>
        </form>
        <Link to="/Employers">
          <h5>Sign Up</h5>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  authInfo: state.auth
});
export default withRouter(
  connect(mapStateToProps, { companyRegisterAuth })(CompanyRegister)
);

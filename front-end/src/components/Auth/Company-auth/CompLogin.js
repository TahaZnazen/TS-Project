import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./companyAuth.css";
import axios from "axios";
import { companyLoginAuth } from "../../../actions/authActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Alert } from "reactstrap";

class CompanyLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CompanyEmail: "",
      password: ""
    };

    this.Change = this.Change.bind(this);
    this.Submit = this.Submit.bind(this);
  }

  Submit(e) {
    e.preventDefault();
    if (this.state.email !== "" && this.state.password !== "") {
      console.log(this.state);
      let data = this.state;
      this.props.companyLoginAuth(data, this.props);
    }
  }
  Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    {
      return !this.props.authInfo.token ? (
        <div>
          <h1 onClick={() => console.log(this.props)}>company login</h1>
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
              name="CompanyEmail"
              placeholder="CompanyEmail "
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
          <Link to={"/Employers/Register"}>
            <h5>register</h5>
          </Link>
        </div>
      ) : (
        <h1>you are already logged in</h1>
      );
    }
  }
}
const mapStateToProps = state => ({
  authInfo: state.auth
});
export default withRouter(
  connect(mapStateToProps, { companyLoginAuth })(CompanyLogin)
);

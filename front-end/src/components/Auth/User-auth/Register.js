import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./userAuth.css";
import axios from "axios";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
      passWordVerification: "",
      email: ""
    };

    this.Change = this.Change.bind(this);
    this.Submit = this.Submit.bind(this);
  }

  Submit(e) {
    e.preventDefault();
    if (this.state.email !== "" && this.state.passWord !== "") {
      console.log(this.state);
      let data = this.state;
      axios
        .post(`/api/v1/users/signup`, { data })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err));
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
        <h1>user register</h1>

        <form className="AuthForm">
          <input
            name="userName"
            placeholder="user name ... "
            onChange={this.Change}
            type="text"
          />
          <input
            name="passWord"
            placeholder="Password ..."
            onChange={this.Change}
            type="passWord"
          />
          <input
            name="passWordVerification"
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
        <Link to="/Employee">
          <h5>Sign Up</h5>
        </Link>
      </div>
    );
  }
}

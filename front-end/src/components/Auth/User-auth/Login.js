import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./userAuth.css";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passWord: ""
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
        .post(`/api/v1/users/signin`, { data })
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
        <h1>user login</h1>

        <form className="AuthForm">
          <input
            name="email"
            placeholder="RBk@gmail.com "
            onChange={this.Change}
            type="email"
          />
          <input
            name="passWord"
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
      </div>
    );
  }
}

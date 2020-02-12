import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./fogetPass.css";
export default class ForgetConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfrmation: ""
    };
  }

  submit() {
    let data = this.state;
    axios
      .patch("http://localhost:8080/api/users/forgetPassword", { data })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div
        id="allForget"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          id="forgetDivconfirmation"
          className="confirmation"
          style={{
            width: "25vw",
            height: "25vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <input
            type="email"
            name="email"
            onChange={this.Change.bind(this)}
            placeholder="email"
          />
          <input
            name="password"
            type="password"
            onChange={this.Change.bind(this)}
            placeholder="password"
          />
          <input
            name="passwordConfrmation"
            type="password"
            onChange={this.Change.bind(this)}
            placeholder="passwordConfrmation"
          />
          <Link
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center"
            }}
            to="/Employee"
          >
            <button onClick={this.submit.bind(this)}>send</button>
          </Link>
        </div>
      </div>
    );
  }
}

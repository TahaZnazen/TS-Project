import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import "./fogetPass.css";
class ForgetPassword extends Component {
  state = {
    email: ""
  };
  Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submit(e) {
    e.preventDefault();
    let data = this.state;
    axios
      .post("http://localhost:8080/api/users/forgetPassword", { data })
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
          id="forgetDiv"
          style={{
            width: "20vw",
            height: "20vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center"
            }}
          >
            <input
              type="email"
              name="email"
              onChange={this.Change.bind(this)}
              placeholder="please enter your email adress"
              style={{
                width: "90%",
                height: "40px"
              }}
            />
            <Link
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
              to="forgetpasswordConfirmation"
            >
              <button
                style={{
                  marginTop: "2vh",
                  width: "90%",
                  height: "40px"
                }}
                onClick={this.submit.bind(this)}
              >
                {" "}
                send
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
export default ForgetPassword;

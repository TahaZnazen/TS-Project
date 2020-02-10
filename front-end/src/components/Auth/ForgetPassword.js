import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      <form>
        <input type="email" name="email" onChange={this.Change.bind(this)} />
        <Link to="forgetpasswordConfirmation">
          <button onClick={this.submit.bind(this)}> send</button>
        </Link>
      </form>
    );
  }
}
export default ForgetPassword;

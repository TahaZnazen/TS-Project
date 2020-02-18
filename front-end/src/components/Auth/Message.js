import React, { Component } from "react";
import "./message.css";
import { connect } from "react-redux";
import axios from "axios";
class Message extends Component {
  state = {
    description: ""
  };
  onSubmit = () => {
    let token = this.props.authInfo.token;
    let data = this.state.description;
    console.log(data, "/**");
    data &&
      axios
        .post("http://localhost:8080/api/users/generateID", { token: token })
        .then(res => {
          axios
            .patch(
              `http://localhost:8080/api/company/addDescription/${res.data.id}`,
              {
                data
              }
            )
            .then(res => {
              console.log(res.data, "//");
            })
            .catch(err => console.log(err));
        });
  };
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="allDescription">
        <div className="description">
          <h1 id="msg">PLEASE FILL THE DESCRIPTION FIELD</h1>
          <textarea
            onChange={this.onchange}
            name="description"
            className="desMsg"
          ></textarea>
          <button onClick={this.onSubmit}>Save Description</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  authInfo: state.auth
});
export default connect(mapStateToProps, null)(Message);

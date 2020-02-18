import React, { Component } from "react";
import "./offer.css";
import axios from "axios";
import { connect } from "react-redux";

class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.authInfo.token,
      skillRequired: ""
    };
    this.change = this.change.bind(this);
  }
  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  addOffer() {
    if (
      this.state.title &&
      this.state.description &&
      this.state.location &&
      this.state.skillRequired &&
      this.state.jobType
    ) {
      let skills = this.state.skillRequired;
      let newSkillsFormat = [];
      skills = skills.split(" ").map(elm => {
        newSkillsFormat.push({ name: elm });
      });
      this.setState({
        skillRequired: newSkillsFormat
      });
      console.log(newSkillsFormat);
      let data = {
        ...this.state,
        skillRequired: newSkillsFormat
      };
      let token = this.props.authInfo.token;

      console.log(data);
      axios
        .post("http://localhost:8080/api/users/generateID", { token: token })
        .then(res => {
          axios
            .post(`http://localhost:8080/api/post/addPost/${res.data.id}`, {
              data
            })
            .then(res => {
              console.log(res);
              window.location.reload();
            })
            .catch(err => console.log(err));
        });
    }
  }

  render() {
    return (
      <div className="addOfferBody">
        <div className="jobOffer">
          <button
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "40px",
              background: "none",
              border: "none",
              color: "black",
              fontSize: "30px"
            }}
            onClick={this.props.closeOffer}
          >
            x
          </button>
          <label>Job Title</label>
          <input
            className="bigInput"
            onChange={this.change}
            type="text"
            name="title"
          />
          <label>Job Description</label>
          <textarea
            className="bigInput"
            name="description"
            onChange={this.change}
            style={{
              height: "12vh"
            }}
          />
          <label>Location</label>
          <input
            className="bigInput"
            onChange={this.change}
            type="text"
            name="location"
          />
          <label>Skills Required</label>
          <input
            className="bigInput"
            onChange={this.change}
            type="text"
            name="skillRequired"
          />
          <div id="someInput">
            <input
              onChange={this.change}
              type="text"
              name="salaryMin"
              placeholder="Minimun salary"
            />
            <input
              onChange={this.change}
              type="text"
              name="salaryMax"
              placeholder="Maximun salary"
            />
            <input onChange={this.change} type="date" name="expirationDate" />
          </div>
          <label>Job Type</label>
          <input
            className="bigInput"
            onChange={this.change}
            type="text"
            name="jobType"
            placeholder="remote / full time / part time"
          />

          <br />
          <button onClick={this.addOffer.bind(this)}>save</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authInfo: state.auth
});
export default connect(mapStateToProps, null)(Offer);

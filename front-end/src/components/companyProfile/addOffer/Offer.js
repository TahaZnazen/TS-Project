import React, { Component } from "react";
import "./offer.css";
import axios from "axios";
class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "5e317ff8059a3a57a4d3639d"
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
      let data = this.state;
      console.log(data);
      axios
        .post(
          "http://localhost:8080/api/post/addPost/5e317ff8059a3a57a4d3639d",
          { data }
        )
        .then(res => {
          console.log(res);
          window.location.reload();
        })
        .catch(err => console.log(err));
    } else {
      alert("req not sended");
    }
  }

  render() {
    return (
      <div className="jobOffer">
        <button
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "40px",
            background: "none",
            color: "black",
            fontSize: "19px"
          }}
          onClick={this.props.closeOffer}
        >
          x
        </button>
        <label>Job Title</label>
        <input onChange={this.change} type="text" name="title" />
        <label>Description</label>
        <textarea name="description" onChange={this.change} />
        <label>Location</label>
        <input onChange={this.change} type="text" name="location" />
        <label>Skills Required</label>
        <input onChange={this.change} type="text" name="skillRequired" />
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
        <input onChange={this.change} type="text" name="jobType" />

        <br />
        <button onClick={this.addOffer.bind(this)}>save</button>
      </div>
    );
  }
}

export default Offer;

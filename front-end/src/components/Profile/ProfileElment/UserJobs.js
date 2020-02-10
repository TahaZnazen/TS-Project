import React, { Component } from "react";
class UserJobs extends Component {
  state = {
    appliedJobs: []
  };
  componentWilllMount() {
    this.setState({ appliedJobs: this.props.appliedJobs });
  }
  renderJobs = () => {
    return this.props.appliedJob.map(el => {
      return (
        <div>
          <div>{el.status}</div>
          <div>{el._id}</div>
        </div>
      );
    });
  };
  render() {
    console.log("jobs prop ", this.props);
    return (
      <div>
        user Job Component
        {this.renderJobs()}
      </div>
    );
  }
}

export default UserJobs;

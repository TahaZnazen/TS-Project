import React, { Component } from "react";
class UserJobs extends Component {
  state = {};

  renderJobs = () => {
    console.log(this.props.appliedJobs, "///////");
    return this.props.appliedJobs.map(el => {
      return (
        el.job && (
          <div>
            <div>
              <strong>Company name</strong> {el.job.companyName.name}
            </div>
            <div>
              <strong>job title</strong> {el.job.title}
            </div>
            <div>
              <strong>job Type </strong>
              {el.job.jobType}
            </div>
            <div>
              <strong>Location </strong>
              {el.job.location}
            </div>
            <hr />
          </div>
        )
      );
    });
  };
  render() {
    return <div>{this.renderJobs()}</div>;
  }
}

export default UserJobs;

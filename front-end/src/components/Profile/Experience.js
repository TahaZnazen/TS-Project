import React, { Component } from "react";

class Experience extends Component {
  state = {
    nbExperience: this.props.userExperience.length
  };
  renderExperience = () => {
    return (
      <div>
        {this.props.userExperience.map((el, i) => {
          return (
            <div key={i}>
              <div>{el.start}</div>
              <div>{el.end}</div>
              <div>{el.companyName}</div>
              <div>{el.position}</div>
              <div>{el.task}</div>
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <strong>Experience component {this.state.nbExperience}</strong>
        </div>
        {this.renderExperience()}
      </div>
    );
  }
}

export default Experience;

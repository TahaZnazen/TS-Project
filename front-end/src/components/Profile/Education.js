import React, { Component } from "react";

class Education extends Component {
  state = {
    nbEducation: this.props.userEducation.length
  };
  renderEducation = () => {
    return (
      <div>
        {this.props.userEducation.map((el, i) => {
          return (
            <div key={i}>
              <div>{el.start}</div>
              <div>{el.end}</div>
              <div>{el.diploma}</div>
              <div>{el.degree}</div>
              <div>{el.establishment}</div>
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
          <strong>Education component {this.state.nbEducation}</strong>
        </div>
        {this.renderEducation()}
      </div>
    );
  }
}

export default Education;

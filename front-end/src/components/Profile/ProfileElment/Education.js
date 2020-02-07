import React, { Component } from "react";

class Education extends Component {
  state = {
    nbEducation: this.props.userEducation.length,
    educationistDisplay: {}
  };
  deleteEducation = el => {
    document.getElementById(el.target.id).style.display = "none";
    const educationId = el.target.id;
    this.props.deleteEducation(this.props.cvId, educationId);
  };

  componentWillMount() {
    this.state.educationistDisplay = this.renderEducation();
    console.log(this.state.educationistDisplay);
  }
  renderEducation = () => {
    return (
      <div>
        {this.props.userEducation.map((el, i) => {
          return (
            <div id={el._id} key={i}>
              <div>{el.start}</div>
              <div>{el.end}</div>
              <div>{el.diploma}</div>
              <div>{el.degree}</div>
              <div>{el.establishment}</div>
              <button>Edit</button>
              <button id={el._id} onClick={this.deleteEducation}>
                delete
              </button>
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
